/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TaskForm({ tasksData, updateMode, updateModeOff, addTask, changeTask }) {
  const [isFormActive, setIsFormActive] = useState(false);

  function openFormHandler(e) {
    e.preventDefault();
    setIsFormActive((prevState) => !prevState);
  }

  // Обработчик <form> по сабмиту, если статус апдейда true

  function acceptTaskChange({ name, date }) {
    changeTask({ id: updateMode.updatingTask.id, name, date });
    updateModeOff();
  }

  //

  // Обработчик <form> по сабмиту, если просто добавляется новая задача.

  function addNewTask({ name, date }) {
    addTask({ id: Number(tasksData.length + 1), name: name.trim(), date: date.trim() });
    setIsFormActive((prevState) => !prevState);
  }

  //

  // Обработчик сабмита формы.

  function formSubmit(e) {
    e.preventDefault();
    const formatedData = Object.fromEntries(new FormData(e.target).entries());
    if (updateMode.status) {
      acceptTaskChange(formatedData);
    } else {
      addNewTask(formatedData);
    }
  }

  //

  return (
    <section className="task-form">
      {isFormActive || updateMode.status ? (
        <form method="post" className="task-form__form" onSubmit={formSubmit}>
          <fieldset className="task-form__fieldset">
            <ul className="task-form__list">
              <li className="task-form__item">
                <label className="task-form__label" htmlFor="task-name">Название задачи:</label>
                <input id="task-name" type="text" className="task-form__input" name="name" placeholder="Пойти гулять" title="Поле для названия задачи" defaultValue={updateMode.status ? updateMode.updatingTask.name : null} required />
              </li>
              <li className="task-form__item">
                <label className="task-form__label" htmlFor="task-date">Описание задачи:</label>
                <textarea id="task-date" type="text" className="task-form__textarea" name="date" placeholder="Обзвонить друзей и пригласить выйти на прогулку" defaultValue={updateMode.status ? updateMode.updatingTask.date : null} title="Поле для описания задачи" required />
              </li>
            </ul>
          </fieldset>
          <button className="task-form__form-button" type="submit">{updateMode.status ? 'Обновить задачу' : 'Добавить задачу'}</button>
        </form>
      )
        : <button type="button" onClick={openFormHandler} className="task-form__form-button">Новая задача</button>}
    </section>
  );
}

TaskForm.propTypes = {
  tasksData: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateMode: PropTypes.shape({
    status: PropTypes.bool.isRequired,
    updatingTask: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  }).isRequired,
  updateModeOff: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  changeTask: PropTypes.func.isRequired,
};

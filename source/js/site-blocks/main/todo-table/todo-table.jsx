/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import ColumnsType from './columns-type/container';
import ColumnInfo from './columns-info/column-info';

export default function TodoTable({ tasksData, updateMode, updateModeOn, updateModeOff, searchedResult, deleteTaskAction }) {
  // Определяем, какой массив стоит использовать для рендера. Если searchWord !== null, то это означает, что выполняется поиск. Соотвественно, возвращается массив, который нашел все похожие значения.

  function getTasksData() {
    return searchedResult || tasksData;
  }

  //

  // Апдейт таска

  function initUpdateTask(currentTaskID) {
    updateModeOn({ status: true, tasksData, currentTaskID });
  }

  //

  // Удаление таска

  function deleteTask(currentTaskID) {
    deleteTaskAction(currentTaskID);
    closeTaskForm(currentTaskID);
  }

  //

  // Если в момент удаления таск был в состоянии редактирования, то окно с редактированием закрывается.

  function closeTaskForm(currentTaskID) {
    if (updateMode.status && updateMode.updatingTask.id === currentTaskID) {
      updateModeOff();
    }
  }

  //

  // Так как я использовал делегирование и навесил обработчик по клику на <table>, я использую closest для нахождения ID.

  function taskButtonsHandler(e) {
    if (e.target.closest('.todo-table__remove-task') || e.target.closest('.todo-table__edit-task')) {
      const currentTaskID = Number(e.target.closest('.todo-table__task-info').id);
      if (e.target.closest('.todo-table__remove-task')) {
        deleteTask(currentTaskID);
      } else {
        initUpdateTask(currentTaskID);
      }
    }
  }

  //

  return (
    <section className="todo-table">
      {getTasksData().length
        ? (
          <table className="todo-table__table" onClick={taskButtonsHandler}>
            <tbody>
              <ColumnsType />
              {getTasksData().map(({ id, name, date }) => <ColumnInfo key={`${id}-${new Date().getMilliseconds()}`} id={id} name={name} date={date} />)}
            </tbody>
          </table>
        ) : <p className="todo-table__no-tasks">Ничего нет</p>}
    </section>
  );
}

TodoTable.propTypes = {
  tasksData: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateMode: PropTypes.shape({
    status: PropTypes.bool.isRequired,
    updatingTask: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  }).isRequired,
  updateModeOn: PropTypes.func.isRequired,
  updateModeOff: PropTypes.func.isRequired,
  searchedResult: PropTypes.arrayOf(PropTypes.object),
  deleteTaskAction: PropTypes.func.isRequired,
};

TodoTable.defaultProps = {
  searchedResult: null,
};

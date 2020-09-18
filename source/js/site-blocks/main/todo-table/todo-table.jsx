/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../../../custom-hooks/use-previous';

import sortTasks from '../../../utils/sort-tasks';

import ColumnsType from './columns-type/columns-type';
import ColumnInfo from './columns-info/column-info';

export default function TodoTable({ tasksData, setTasks, setUpdateMode, updateMode, foundTasks }) {
  const [sortButton, setSortButton] = useState(null);
  const prevSortButton = usePrevious(sortButton);

  useEffect(() => {
    if (sortButton && sortButton !== prevSortButton) {
      sortButton.style.backgroundColor = 'rgba(109,165,83,.7)';
      if (prevSortButton) {
        prevSortButton.style.backgroundColor = null;
      }
    }
  }, [sortButton]);

  // Если длина не равна 0, то возвращается длина (это для условия в рендере. Если длина = 0, рендерится текст 'Ничего нет').

  function isTasksLengthNotZero() {
    if (foundTasks && foundTasks.length) {
      return foundTasks.length;
    } if (tasksData.length) {
      return tasksData.length;
    }
    return 0;
  }

  //

  // Определение типа сортировки

  function sortTypeHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      setSortButton(e.target);
    }
  }

  //

  // Удаление таска

  function deleteTask(currentTaskID) {
    setTasks((prevState) => prevState.filter((task) => task.id !== currentTaskID));
    if (updateMode.status && updateMode.updatingTask.id === currentTaskID) {
      setUpdateMode(() => ({ status: false, updatingTask: null }));
    }
  }

  //

  // Апдейт таска

  function updateTask(currentTaskID) {
    setUpdateMode(() => ({ status: true, updatingTask: tasksData.filter((task) => task.id === currentTaskID)[0] }));
  }

  //

  // Так как я использовал делегирование и навесил обработчик по клику на <table>, я использую closest для нахождения ID.

  function taskButtonsHandler(e) {
    if (e.target.closest('.todo-table__remove-task') || e.target.closest('.todo-table__edit-task')) {
      const currentTaskID = Number(e.target.closest('.todo-table__task-info').id);
      if (e.target.closest('.todo-table__remove-task')) {
        deleteTask(currentTaskID);
      } else {
        updateTask(currentTaskID);
      }
    }
  }

  //

  return (
    <section className="todo-table">
      {isTasksLengthNotZero()
        ? (
          <table className="todo-table__table" onClick={taskButtonsHandler}>
            <tbody>
              <ColumnsType sortTypeHandler={sortTypeHandler} />
              {sortTasks(sortButton && sortButton.id, foundTasks || tasksData).map(({ id, name, date }) => <ColumnInfo key={`${id}-${new Date().getMilliseconds()}`} id={id} name={name} date={date} />)}
            </tbody>
          </table>
        ) : <p className="todo-table__no-tasks">Ничего нет</p>}
    </section>
  );
}

TodoTable.propTypes = {
  tasksData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTasks: PropTypes.func.isRequired,
  setUpdateMode: PropTypes.func.isRequired,
  updateMode: PropTypes.shape({
    status: PropTypes.bool.isRequired,
    updatingTask: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  }),
  foundTasks: PropTypes.arrayOf(PropTypes.object),
};

TodoTable.defaultProps = {
  updateMode: PropTypes.shape({
    updatingTask: null,
  }),
  foundTasks: null,
};

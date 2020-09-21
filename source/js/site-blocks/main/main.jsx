import React from 'react';
import PropTypes from 'prop-types';

import TaskForm from './task-form/container';
import TodoTable from './todo-table/container';
import Search from './search/container';

export default function Main({ mockTasks, updateMode, updateModeOff }) {
  return (
    <main className="main">
      <TaskForm tasksData={mockTasks} updateMode={updateMode} updateModeOff={updateModeOff} />
      <TodoTable tasksData={mockTasks} updateMode={updateMode} updateModeOff={updateModeOff} />
      <Search />
    </main>
  );
}

Main.propTypes = {
  mockTasks: PropTypes.arrayOf(PropTypes.object),
  updateMode: PropTypes.shape({
    status: PropTypes.bool.isRequired,
    updatingTask: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  }).isRequired,
  updateModeOff: PropTypes.func.isRequired,
};

Main.defaultProps = {
  mockTasks: null,
};

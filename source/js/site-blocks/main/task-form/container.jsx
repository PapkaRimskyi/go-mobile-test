import { connect } from 'react-redux';

import TaskForm from './task-form';

import { addTaskAction, changeTaskAction } from '../../../redux-files/action/tasks-action/tasks-action';

const mapDispatchToProps = {
  addTask: addTaskAction,
  changeTask: changeTaskAction,
};

export default connect(null, mapDispatchToProps)(TaskForm);

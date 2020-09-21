import { connect } from 'react-redux';

import TodoTable from './todo-table';

import { updateModeOnAction } from '../../../redux-files/action/update-mode-action/update-mode-action';
import { deleteTaskAction } from '../../../redux-files/action/tasks-action/tasks-action';

function mapStateToProps(state) {
  return {
    searchedResult: state.searchWord ? [...state.tasks.filter((task) => task.name.toUpperCase() === state.searchWord)] : null,
  };
}

const mapDispatchToProps = {
  updateModeOn: updateModeOnAction,
  deleteTaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);

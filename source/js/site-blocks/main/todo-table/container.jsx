import { connect } from 'react-redux';

import TodoTable from './todo-table';

import { updateModeOnAction } from '../../../redux-files/action/update-mode-action/update-mode-action';
import { deleteTaskAction } from '../../../redux-files/action/tasks-action/tasks-action';

function mapStateToProps(state) {
  return {
    searchedResult: state.searchWord ? [...state.tasks.filter((task) => {
      if (task.name.toUpperCase().indexOf(state.searchWord) >= 0) {
        return task;
      }
      return null;
    })] : null,
  };
}

const mapDispatchToProps = {
  updateModeOn: updateModeOnAction,
  deleteTaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);

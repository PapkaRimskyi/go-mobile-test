import { connect } from 'react-redux';

import Main from './main';

import { updateModeOffAction } from '../../redux-files/action/update-mode-action/update-mode-action';

const ID_FILTER = 'id';
const NAME_FILTER = 'name';
const DATE_FILTER = 'date';

function getFilteredTasks(tasks, filter) {
  switch (filter) {
    case ID_FILTER:
      return tasks.sort((a, b) => a.id - b.id);
    case NAME_FILTER:
    case DATE_FILTER:
      return tasks.sort((a, b) => {
        if (a[filter].length > b[filter].length) {
          return 1;
        } if (a[filter].length < b[filter].length) {
          return -1;
        }
        return 0;
      });
    default:
      return tasks;
  }
}

function mapStateToProps(state) {
  return {
    mockTasks: [...getFilteredTasks(state.tasks, state.filter)],
    updateMode: state.updateMode,
    filter: state.filter,
  };
}

const mapDispatchToProps = {
  updateModeOff: updateModeOffAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

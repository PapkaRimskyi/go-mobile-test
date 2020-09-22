import { UPDATE_MODE_ON, UPDATE_MODE_OFF } from '../../action-names/action-names';

const defaultState = { status: false, updatingTask: null };

export default function updateModeReducer(state = defaultState, { type, status, tasksData, currentTaskID }) {
  switch (type) {
    case UPDATE_MODE_ON:
      return { status, updatingTask: tasksData.find((task) => task.id === currentTaskID) };
    case UPDATE_MODE_OFF:
      return { status: false, updatingTask: null };
    default:
      return state;
  }
}

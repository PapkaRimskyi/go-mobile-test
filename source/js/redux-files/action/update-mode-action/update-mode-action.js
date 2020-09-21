import { UPDATE_MODE_ON, UPDATE_MODE_OFF } from '../../action-names/action-names';

export function updateModeOnAction({ status, tasksData, currentTaskID }) {
  return {
    type: UPDATE_MODE_ON,
    status,
    tasksData,
    currentTaskID,
  };
}

export function updateModeOffAction() {
  return {
    type: UPDATE_MODE_OFF,
  };
}

import { ADD_TASK, DELETE_TASK, CHANGE_TASK } from '../../action-names/action-names';

export function addTaskAction({ id, name, date }) {
  return {
    type: ADD_TASK,
    id,
    name,
    date,
  };
}

export function deleteTaskAction(id) {
  return {
    type: DELETE_TASK,
    id,
  };
}

export function changeTaskAction({ id, name, date }) {
  return {
    type: CHANGE_TASK,
    id,
    name,
    date,
  };
}

import mockTasks from '../../../mock/mock-tasks';
import { ADD_TASK, DELETE_TASK, CHANGE_TASK } from '../../action-names/action-names';

export default function tasksReducer(state = mockTasks, { type, id, name, date }) {
  switch (type) {
    case ADD_TASK:
      return [...state, { id, name, date }];
    case DELETE_TASK:
      return [...state].filter((task) => task.id !== id);
    case CHANGE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          return { id, name: name.trim(), date: date.trim() };
        }
        return task;
      });
    default:
      return state;
  }
}

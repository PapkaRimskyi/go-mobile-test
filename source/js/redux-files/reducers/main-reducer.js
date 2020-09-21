import { combineReducers } from 'redux';

import tasksReducer from './tasks-reducer/tasks-reducer';
import updateModeReducer from './update-mode-reducer/update-mode-reducer';
import searchReducer from './search-reducer/search-reducer';
import filtersReducer from './filters-reducer/filters-reducer';

export default combineReducers(
  {
    tasks: tasksReducer,
    updateMode: updateModeReducer,
    searchWord: searchReducer,
    filter: filtersReducer,
  },
);

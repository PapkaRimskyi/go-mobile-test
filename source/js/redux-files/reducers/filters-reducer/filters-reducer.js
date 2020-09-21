import { SET_FILTER } from '../../action-names/action-names';

export default function filtersReducer(state = null, { type, filterName }) {
  switch (type) {
    case SET_FILTER:
      return filterName;
    default:
      return state;
  }
}

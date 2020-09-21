import { SEARCH } from '../../action-names/action-names';

export default function searchReducer(state = null, { type, searchWord }) {
  switch (type) {
    case SEARCH:
      return searchWord;
    default:
      return state;
  }
}

import { SEARCH } from '../../action-names/action-names';

export default function searchAction(word) {
  return {
    type: SEARCH,
    searchWord: word,
  };
}

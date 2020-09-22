export default function filtersAction(filterName) {
  return {
    type: 'SET_FILTER',
    filterName,
  };
}

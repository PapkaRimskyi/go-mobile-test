import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../../../../custom-hooks/use-previous';

import sortType from './sort-type/sort-type';

import ColumnType from './column-type/column-type';

export default function ColumnsType({ filtersAction }) {
  const [sortButton, setSortButton] = useState(null);
  const prevSortButton = usePrevious(sortButton);

  useEffect(() => {
    if (sortButton && sortButton !== prevSortButton) {
      sortButton.style.backgroundColor = 'rgba(109,165,83,.7)';
      sortButton.disabled = true;
      if (prevSortButton) {
        prevSortButton.style.backgroundColor = null;
        prevSortButton.disabled = false;
      }
    }
  }, [sortButton]);

  // Устанавливает тип сортировки

  function sortTypeHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      filtersAction(e.target.id);
      setSortButton(e.target);
    }
  }

  //

  return (
    <tr className="todo-table__columns-type" onClick={sortTypeHandler}>
      {sortType.map((type) => <ColumnType key={type} type={type} />)}
    </tr>
  );
}

ColumnsType.propTypes = {
  filtersAction: PropTypes.func.isRequired,
};

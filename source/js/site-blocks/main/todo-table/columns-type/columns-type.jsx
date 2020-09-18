import React from 'react';
import PropTypes from 'prop-types';

import sortType from './sort-type/sort-type';

import ColumnType from './column-type/column-type';

export default function ColumnsType({ sortTypeHandler }) {
  return (
    <tr className="todo-table__columns-type" onClick={sortTypeHandler}>
      {sortType.map((type) => <ColumnType key={type} type={type} />)}
    </tr>
  );
}

ColumnsType.propTypes = {
  sortTypeHandler: PropTypes.func.isRequired,
};

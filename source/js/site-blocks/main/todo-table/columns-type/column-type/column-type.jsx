import React from 'react';
import PropTypes from 'prop-types';

export default function ColumnType({ type }) {
  return (
    <th className="todo-table__column-type">
      <button type="button" className="todo-table__sort-button" id={type} aria-label={`Сортировка по ${type}`}>{type}</button>
    </th>
  );
}

ColumnType.propTypes = {
  type: PropTypes.string.isRequired,
};

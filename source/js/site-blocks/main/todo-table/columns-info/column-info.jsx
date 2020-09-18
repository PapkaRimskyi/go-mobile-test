import React from 'react';
import PropTypes from 'prop-types';

import Cross from '../../../../svg/cross/cross';
import Edit from '../../../../svg/edit/edit';

export default function ColumnInfo({ id, name, date }) {
  return (
    <tr className="todo-table__task-info" id={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td className="todo-table__button">
        <button type="button" className="todo-table__remove-task">
          <Cross />
        </button>
      </td>
      <td className="todo-table__button">
        <button type="button" className="todo-table__edit-task">
          <Edit />
        </button>
      </td>
    </tr>
  );
}

ColumnInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

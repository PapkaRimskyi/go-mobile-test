/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ searchAction }) {
  // Обработчик на кнопку Enter. Если у поля есть value, то идет запись в стор и последующий поиск этой задачи. Если value нет, то идет перезапись на null (чтобы сбросить поиск).

  function searchEnter(e) {
    if (e.key === 'Enter') {
      if (e.target.value) {
        searchAction(e.target.value.trim().toUpperCase());
      } else {
        searchAction(null);
      }
    }
  }

  //

  return (
    <section className="search">
      <label className="search__label" htmlFor="search-input">Поиск по имени задачи:</label>
      <input type="text" onKeyDown={searchEnter} className="search__search-input" id="search-input" placeholder="Выключить чайник" title="Поиск задач осуществляется по имени задачи" />
    </section>
  );
}

Search.propTypes = {
  searchAction: PropTypes.func.isRequired,
};

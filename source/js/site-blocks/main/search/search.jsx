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
      <input type="text" onKeyDown={searchEnter} className="search__search-input" placeholder="Выключить чайник" title="Поиск задач осуществляется по имени задачи" />
    </section>
  );
}

Search.propTypes = {
  searchAction: PropTypes.func.isRequired,
};

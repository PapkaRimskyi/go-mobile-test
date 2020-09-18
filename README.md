# Тестовое задание для <b>https://www.gomobile.ru/</b>

## Команды
<b>npm install</b> - для установки всех зависимостей проекта.

Команды всегда начинаются с <b>"npm run <команда>"</b>.

Список команд:
  1. editorconfig
  2. stylelint
  3. eslint
  4. check - запускает все проверки (выше в списке).
  5. build - собирает проект в папку <b>docs</b>.
  6. dev - запускает локальный сервер с проектом.

### Комментарии по заданию

1. Версии для mobile, desktop.
2. На мобильной версии пришлось сделать прокрутку, чтобы помещался весь контент.
3. Реализована возможность добавлять, редактировать, удалять задачи.
4. При клике на кнопку редактирования происходит открытие формы с добавлением задачи, только уже в апдейт режиме.
5. Фильтрация происходит всегда по возрастанию. В случае фильтрации по 'name' и 'date' - происходит фильтрация по длине текста.
6. Если фильтр активен и в этот момент происходит изменение содержимого одного из тасков, то при отправке изменений будет фильтрация.
7. Если начать изменять таск, а потом удалить его, то окно с изменениями закроется.
8. Поиск. Когда в фокусе находится поле и нажимается клавиша Enter, происходит инициализация поиска. Если в поле ничего не было - ничего не происходит. Если value было, то
  происходит поиск среди всех тасков по их имени в строгом сравнении. Если поле поиска очистить и нажать Enter, то возвращается обычный массив тасков.

### Стэк технологий.
  HTML/CSS(SASS).
  JS, React, React + Hooks, PropTypes (для типизации пропсов).
  Webpack.


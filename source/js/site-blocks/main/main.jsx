import React, { useState } from 'react';

import mockTasks from '../../mock/mock-tasks';

import searchTask from '../../utils/search-task';

import TaskForm from './task-form/task-form';
import TodoTable from './todo-table/todo-table';
import Search from './search/search';

export default function Main() {
  const [tasks, setTasks] = useState(mockTasks);
  const [updateMode, setUpdateMode] = useState({ status: false, updatingTask: null });
  const [searchWord, setSearchWord] = useState(null);

  return (
    <main className="main">
      <TaskForm setTasks={setTasks} updateMode={updateMode} setUpdateMode={setUpdateMode} />
      <TodoTable setTasks={setTasks} tasksData={tasks} updateMode={updateMode} setUpdateMode={setUpdateMode} foundTasks={searchTask(searchWord, tasks)} searchWord={searchWord} />
      <Search setSearchWord={setSearchWord} />
    </main>
  );
}

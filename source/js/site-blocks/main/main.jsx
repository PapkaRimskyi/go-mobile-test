import React, { useState } from 'react';

import mockTasks from '../../mock/mock-tasks';

import TaskForm from './task-form/task-form';
import TodoTable from './todo-table/todo-table';

export default function Main() {
  const [tasks, setTasks] = useState(mockTasks);
  const [updateMode, setUpdateMode] = useState({ status: false, updatingTask: null });

  return (
    <main className="main">
      <TaskForm setTasks={setTasks} updateMode={updateMode} setUpdateMode={setUpdateMode} />
      <TodoTable setTasks={setTasks} tasksData={tasks} updateMode={updateMode} setUpdateMode={setUpdateMode} />
    </main>
  );
}

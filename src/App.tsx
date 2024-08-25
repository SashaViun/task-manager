// src/App.tsx

import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './contexts/TaskContext';

const TaskManager = () => {
  return (
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default TaskManager;

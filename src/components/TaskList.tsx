// src/components/TaskList.tsx

import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../contexts/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext)!;

  return (
    <div className="p-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

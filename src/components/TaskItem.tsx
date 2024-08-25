// src/components/TaskItem.tsx

import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskForm from './TaskForm';

interface TaskItemProps {
  task: { id: number; title: string; description: string; status: boolean; file?: File };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskContext)!;
  const [isEditing, setIsEditing] = useState(false);

  const toggleStatus = () => {
    updateTask({ ...task, status: !task.status });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.status ? 'completed' : ''}`}>
      {isEditing ? (
        <TaskForm task={task} onSave={handleSave} />
      ) : (
        <div className="task-item-content">
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {task.file && <p className="text-sm">{task.file.name}</p>}
          </div>
          <div className="task-actions">
            <button onClick={toggleStatus} className="btn btn-secondary">
              {task.status ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={handleEdit} className="btn btn-info">
              Edit
            </button>
            <button onClick={() => deleteTask(task.id)} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;

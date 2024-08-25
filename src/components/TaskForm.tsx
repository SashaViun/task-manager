// src/components/TaskForm.tsx

import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskForm = ({ task, onSave }: { task?: any; onSave?: () => void }) => {
  const { addTask, updateTask } = useContext(TaskContext)!;
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [file, setFile] = useState<File | undefined>(task?.file);

  const handleSubmit = () => {
    if (task) {
      updateTask({ ...task, title, description, file });
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        status: false,
        file,
      };
      addTask(newTask);
    }
    setTitle('');
    setDescription('');
    setFile(undefined);
    if (onSave) onSave();
  };

  return (
    <div className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : undefined)}
      />
      <button onClick={handleSubmit}>
        {task ? 'Save Changes' : 'Add Task'}
      </button>
    </div>
  );
};

export default TaskForm;


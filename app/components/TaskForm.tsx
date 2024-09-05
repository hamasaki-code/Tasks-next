// app/components/TaskForm.tsx
import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (taskName: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="タスクを入力"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        追加
      </button>
    </form>
  );
};

export default TaskForm;

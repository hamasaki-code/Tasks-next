// app/components/TaskItem.tsx
import React from 'react';

interface TaskItemProps {
  task: { id: number; name: string; completed: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex justify-between items-center mb-2">
      <span 
        className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.name}
      </span>
      <button onClick={() => onDelete(task.id)} className="text-red-500">
        削除
      </button>
    </li>
  );
};

export default TaskItem;

// app/components/TaskItem.tsx
import React from 'react';

interface TaskItemProps {
  task: { id: number; name: string; completed: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    //カードデザイン: p-4 mb-4 rounded-lg shadow-md を使用してタスクをカードの
    //ように表示しています。余白やシャドウを使うことで、各タスクが他の要素から
    //浮き上がるように見えます。
    <div 
      className={`flex justify-between items-center p-4 mb-4 rounded-lg shadow-md 
        ${task.completed ? 'bg-gray-200 text-gray-500 line-through' : 'bg-white'} 
        hover:bg-gray-100 transition-all duration-300 ease-in-out`}
    >
      <span 
        className={`cursor-pointer text-lg font-medium`}
        onClick={() => onToggle(task.id)}
      >
        {task.name}
      </span>
      <button 
        onClick={() => onDelete(task.id)} 
        className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition-colors duration-200"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;

import React from 'react';

interface TaskItemProps {
  task: { id: number; name: string; completed: boolean };
  onToggle: (id: number) => void; // 完了状態の切り替え
  onDelete: (id: number) => void; // タスク削除
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div 
      className={`flex justify-between items-center p-4 mb-4 rounded-lg shadow-md 
        ${task.completed ? 'bg-gray-200 text-gray-500 line-through' : 'bg-white'} 
        hover:bg-gray-100 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center">
        <button
          onClick={() => onToggle(task.id)}
          className={`mr-3 px-3 py-1 rounded-lg ${task.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}
        >
          {task.completed ? 'Completed' : 'Complete'}
        </button>
        <span className="text-lg font-medium">{task.name}</span>
      </div>
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

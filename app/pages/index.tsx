// /pages/index.tsx
import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskName: string) => {
    const newTask: Task = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">タスク管理アプリ</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div>
        {tasks.map(task => (
          <TaskItem 
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

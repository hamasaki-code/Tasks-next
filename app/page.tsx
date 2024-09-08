"use client";
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-animated min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
        
        <TaskForm onAddTask={addTask} />

        <ul className="list-disc pl-5">
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

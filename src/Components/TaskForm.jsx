import React, { useContext, useState } from 'react';
import { TaskContext } from '../Contexts/TaskContext';

const TaskForm = () => {
  const [value, setValue] = useState('');
  const { tasks, setTasks } = useContext(TaskContext);
  // Handle Add New Task
  function handleAddTask(name) {
    const newTask = {};
    const dateNow = new Date();
    if (name.trim() === '') {
      alert('Enter a task name');
      return;
    }
    newTask.id = dateNow.getTime();
    newTask.name = name;
    newTask.isDone = false;
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
    setValue('');
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }
  return (
    <form className="taskForm mt-8 flex flex-col gap-2.5 md:flex-row">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Add a new task..."
        className="border border-(--border) p-2 rounded-lg flex-1 text-(--foreground) outline-none focus:border-2 focus:border-(--accent)"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddTask(value);
        }}
        className="cursor-pointer px-2 md:px-4 bg-(--primary) text-white font-bold outline-none border transition-all hover:opacity-85 justify-center py-2 md:py-2 items-center rounded-lg flex gap-2.5">
        <span>+</span>
        <span>Add Task</span>
      </button>
    </form>
  );
};

export default TaskForm;

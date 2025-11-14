import { useState } from 'react';
import { TaskContext } from './TaskContext';

export const TaskContextProvider = ({ children }) => {
  // useState to Set Tasks
  const [tasksInit, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  // useState to filter Tasks
  const [filter, setFilter] = useState('all');
  // Filter Tasks
  const tasks = tasksInit.filter((task) => {
    if (filter === 'completed') {
      return task.isDone;
    } else if (filter === 'active') {
      return !task.isDone;
    } else {
      return true;
    }
  });
  return (
    <TaskContext.Provider value={{ tasks, setTasks, setFilter, tasksInit }}>
      {children}
    </TaskContext.Provider>
  );
};

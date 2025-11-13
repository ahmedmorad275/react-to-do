import React, { useState, useRef } from 'react';
import Header from './Components/Header';
import Stats from './Components/Stats';
import TaskForm from './Components/TaskForm';
import TasksContainer from './Components/TasksContainer';

const App = () => {
  // useState to Set Tasks
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [filter, setFilter] = useState('all');
  // useRef To get New Task Name
  const taskNameRef = useRef();
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
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.isDone;
    } else if (filter === 'active') {
      return !task.isDone;
    } else {
      return true;
    }
  });
  // Show All Tasks
  function handleAllTaskClick() {
    setFilter('all');
  }
  // Show only Active Task
  function handleActiveTaskClick() {
    setFilter('active');
  }
  // Show only Completed Task
  function handleCompletedTaskClick() {
    setFilter('completed');
  }
  // Control Task Status
  // Mark as Done
  function handleDoneClick(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }
  // Deleta a Task
  function handleDeleteClick(id) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }
  return (
    <>
      <div className="container min-h-screen mx-auto p-4 pt-10 md:p-10">
        <Header />
        <Stats tasks={tasks} />
        <TaskForm
          taskNameRef={taskNameRef}
          onAdd={() => handleAddTask(taskNameRef.current.value)}
        />
        <TasksContainer
          onDelete={handleDeleteClick}
          onDone={handleDoneClick}
          allTasks={handleAllTaskClick}
          activeTasks={handleActiveTaskClick}
          completedTasks={handleCompletedTaskClick}
          tasks={filteredTasks}
        />
      </div>
    </>
  );
};

export default App;

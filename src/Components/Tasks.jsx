import React, { useContext } from 'react';
import { MdEdit, MdDone, MdDelete, MdClose } from 'react-icons/md';
import { TaskContext } from '../Contexts/TaskContext';
const Tasks = () => {
  const { tasks, tasksInit, setTasks } = useContext(TaskContext);

  // Control Task Status
  // Mark as Done
  function handleDoneClick(id) {
    const newTasks = tasksInit.map((task) => {
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
    const newTasks = tasksInit.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }
  return (
    <div className="tasks flex flex-col gap-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task border border-(--border) py-2.5 px-3.5 text-(--foreground) flex ${
            task.isDone ? 'bg-emerald-200 line-through' : ''
          } justify-between items-center rounded-lg bg-(--card)`}>
          <h3 className="taskName py-1 text-xl">{task.name}</h3>
          <div className="taskControl flex gap-2.5">
            <button
              onClick={() => handleDoneClick(task.id)}
              className="bg-(--success) text-white font-bold text-lg py-1 px-1.5 rounded-lg cursor-pointer md:px-6 md:py-2 hover:opacity-85 transition-all">
              {task.isDone ? <MdClose /> : <MdDone />}
            </button>
            <button className="font-bold text-white text-lg bg-(--edit) py-1 px-1.5 rounded-lg cursor-pointer md:px-6 md:py-2 hover:opacity-85 transition-all">
              <MdEdit />
            </button>
            <button
              onClick={() => handleDeleteClick(task.id)}
              className="font-bold text-white text-lg bg-(--destructive) py-1 px-1.5 rounded-lg cursor-pointer md:px-6 md:py-2 hover:opacity-85 transition-all">
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;

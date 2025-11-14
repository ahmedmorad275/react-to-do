import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, setDone, setDelete }) => {
  return (
    <div className="tasks flex flex-col gap-3">
      {tasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          stat={task.isDone ? 'bg-emerald-200 line-through' : ''}
          markDone={() => setDone(task.id)}
          markDelete={() => setDelete(task.id)}
          icon={task.isDone}
        />
      ))}
    </div>
  );
};

export default Tasks;

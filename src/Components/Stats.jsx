import React, { useContext } from 'react';
import StatCard from './StatCard';
import { TaskContext } from '../Contexts/TaskContext';

const Stats = () => {
  const { tasksInit } = useContext(TaskContext);
  const activeTasks = tasksInit.filter((task) => !task.isDone);
  const completedTasks = tasksInit.filter((task) => task.isDone);
  return (
    <div className="stats-box flex gap-3 justify-between mt-8">
      <StatCard
        color={'text-(--foreground)'}
        number={tasksInit.length}
        desc={'Total'}
      />
      <StatCard
        color={'text-(--accent)'}
        number={activeTasks.length}
        desc={'Active'}
      />
      <StatCard
        color={'text-green-600'}
        number={completedTasks.length}
        desc={'Completed'}
      />
    </div>
  );
};

export default Stats;

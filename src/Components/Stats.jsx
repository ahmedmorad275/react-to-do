import React from 'react';
import StatCard from './StatCard';

const Stats = ({ tasks }) => {
  const activeTasks = tasks.filter((task) => !task.isDone);
  const completedTasks = tasks.filter((task) => task.isDone);
  return (
    <div className="stats-box flex gap-3 justify-between mt-8">
      <StatCard
        color={'text-(--foreground)'}
        number={tasks.length}
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

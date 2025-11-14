import React, { useContext } from 'react';
import FilterButton from './FilterButton';
import Tasks from './Tasks';
import { TaskContext } from '../Contexts/TaskContext';

const TasksContainer = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="tasksBox mt-8">
      <FilterButton />
      {tasks.length < 1 ? (
        <p className="pt-8 text-(--muted-foreground) text-center">
          No Tasks yet. Add one to get started!
        </p>
      ) : (
        <Tasks tasks={tasks} />
      )}
    </div>
  );
};

export default TasksContainer;

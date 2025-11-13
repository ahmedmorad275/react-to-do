import React from 'react';
import FilterButton from './FilterButton';
import Tasks from './Tasks';

const TasksContainer = ({
  tasks,
  allTasks,
  activeTasks,
  completedTasks,
  onDone,
  onDelete,
}) => {
  const incomeTasks = tasks;
  return (
    <div className="tasksBox mt-8">
      <FilterButton
        tasks={incomeTasks}
        all={allTasks}
        active={activeTasks}
        completed={completedTasks}
      />
      {incomeTasks.length < 1 ? (
        <p className="pt-8 text-(--muted-foreground) text-center">
          No Tasks yes. Add one to get started!
        </p>
      ) : (
        <Tasks setDone={onDone} setDelete={onDelete} tasks={incomeTasks} />
      )}
    </div>
  );
};

export default TasksContainer;

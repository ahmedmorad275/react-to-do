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
  return (
    <div className="tasksBox mt-8">
      <FilterButton
        tasks={tasks}
        all={allTasks}
        active={activeTasks}
        completed={completedTasks}
      />
      {tasks.length < 1 ? (
        <p className="pt-8 text-(--muted-foreground) text-center">
          No Tasks yet. Add one to get started!
        </p>
      ) : (
        <Tasks setDone={onDone} setDelete={onDelete} tasks={tasks} />
      )}
    </div>
  );
};

export default TasksContainer;

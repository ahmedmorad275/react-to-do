import React, { useRef } from "react";

const TaskForm = ({ onAdd, taskNameRef }) => {
  return (
    <div className="taskForm mt-8 flex flex-col gap-2.5 md:flex-row">
      <input
        ref={taskNameRef}
        type="text"
        placeholder="Add a new task..."
        className="border border-(--border) p-2 rounded-lg flex-1 text-(--foreground) outline-none focus:border-2 focus:border-(--accent)"
      />
      <button
        onClick={() => {
          onAdd();
          taskNameRef.current.value = "";
        }}
        className="cursor-pointer px-2 md:px-4 bg-(--primary) text-white font-bold outline-none border transition-all hover:opacity-85 justify-center py-2 md:py-2 items-center rounded-lg flex gap-2.5"
      >
        <span>+</span>
        <span>Add Task</span>
      </button>
    </div>
  );
};

export default TaskForm;

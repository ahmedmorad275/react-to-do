import React, { useContext } from 'react';
import { TaskContext } from '../Contexts/TaskContext';

const FilterButton = () => {
  const { setFilter } = useContext(TaskContext);
  const changeActiveClass = (e) => {
    const btns = document.getElementById('filterButtons').children;
    for (let btn of btns) {
      btn.classList.remove('active');
    }
    e.target.classList.add('active');
  };

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
  return (
    <div
      id="filterButtons"
      className="filterButtons my-6 flex gap-2.5 justify-center
    ">
      <button
        onClick={(e) => {
          handleAllTaskClick();
          changeActiveClass(e);
        }}
        className="bg-(--border)/60 active filterBtn  hover:bg-(--border) transition-all py-1 px-3 rounded-lg cursor-pointer w-26 md:w-28">
        All
      </button>
      <button
        onClick={(e) => {
          handleActiveTaskClick();
          changeActiveClass(e);
        }}
        className="bg-(--border)/60 filterBtn hover:bg-(--border)  transition-all py-1 px-3 rounded-lg cursor-pointer w-26 md:w-28">
        Active
      </button>
      <button
        onClick={(e) => {
          handleCompletedTaskClick();
          changeActiveClass(e);
        }}
        className="bg-(--border)/60 filterBtn  hover:bg-(--border) transition-all py-1 px-3 rounded-lg cursor-pointer w-26 md:w-28">
        Completed
      </button>
    </div>
  );
};

export default FilterButton;

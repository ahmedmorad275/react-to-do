import React from "react";

const FilterButton = ({ all, active, completed }) => {
  const changeActiveClass = (e) => {
    const btns = document.getElementById("filterButtons").children;
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    e.target.classList.add("active");
  };

  return (
    <div
      id="filterButtons"
      className="filterButtons my-6 flex gap-2.5 justify-center
    "
    >
      <button
        onClick={(e) => {
          all();
          changeActiveClass(e);
        }}
        className="bg-(--border)/60 active filterBtn  hover:bg-(--border) transition-all py-1 px-3 rounded-lg cursor-pointer w-26 md:w-28"
      >
        All
      </button>
      <button
        onClick={(e) => {
          active();
          changeActiveClass(e);
        }}
        className="bg-(--border)/60 filterBtn hover:bg-(--border)  transition-all py-1 px-3 rounded-lg cursor-pointer w-26 md:w-28"
      >
        Active
      </button>
      <button
        onClick={(e) => {
          completed();
          changeActiveClass(e);
        }}
        className="bg-(--border)/60 filterBtn  hover:bg-(--border) transition-all py-1 px-3 rounded-lg cursor-pointer w-26 md:w-28"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButton;

import React from 'react';
import { MdEdit, MdDone, MdDelete, MdClose } from 'react-icons/md';

const Task = ({ name, markDone, stat, markDelete, icon }) => {
  return (
    <div
      className={`task border border-(--border) py-2.5 px-3.5 text-(--foreground) flex ${stat} justify-between items-center rounded-lg bg-(--card)`}>
      <h3 className="taskName py-1 text-xl">{name}</h3>
      <div className="taskControl flex gap-2.5">
        <button
          onClick={() => markDone()}
          className="bg-(--success) text-white font-bold text-lg py-1 px-1.5 rounded-lg cursor-pointer md:px-6 md:py-2 hover:opacity-85 transition-all">
          {icon ? <MdClose /> : <MdDone />}
        </button>
        <button className="font-bold text-white text-lg bg-(--edit) py-1 px-1.5 rounded-lg cursor-pointer md:px-6 md:py-2 hover:opacity-85 transition-all">
          <MdEdit />
        </button>
        <button
          onClick={() => markDelete()}
          className="font-bold text-white text-lg bg-(--destructive) py-1 px-1.5 rounded-lg cursor-pointer md:px-6 md:py-2 hover:opacity-85 transition-all">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Task;

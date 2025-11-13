import React from "react";
import { MdTaskAlt } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="header text-center">
        <div className="title flex items-center gap-1 md:text-5xl font-bold text-3xl mx-auto justify-center">
          <MdTaskAlt />
          <h1>TaskFlow</h1>
        </div>
        <p className="text-sm mt-2 md:text-lg">
          Your Professional task management solution
        </p>
      </div>
    </>
  );
};

export default Header;

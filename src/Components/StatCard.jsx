import React from "react";

const StatCard = ({ number, desc, color }) => {
  return (
    <div className="card text-center w-full rounded-lg p-2.5 border">
      <h3 className={`${color} font-bold text-lg`}>{number}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default StatCard;

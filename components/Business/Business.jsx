import React from "react";

const Business = ({ business }) => {
  return (
    <div>
      <div className="flex w-full bg-red-400 p-8 h-full">{business?.title}</div>
    </div>
  );
};

export default Business;

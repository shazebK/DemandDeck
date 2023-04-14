import React from "react";

export default function Plans() {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl  h-[500px] my-4 hover:scale-105 duration-500"></div>
        <div className="shadow-xl h-[500px] my-4 hover:scale-105 duration-500 bg-gray-100"></div>
        <div className="shadow-xl h-[500px] my-4  hover:scale-105 duration-500"></div>
      </div>
    </div>
  );
}

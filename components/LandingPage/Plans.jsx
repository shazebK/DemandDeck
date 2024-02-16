import React from "react";
import { usePolls } from "../../hooks/queries"
import DemandCard from "../DemandCard";

export default function Plans() {
  const { demands, isError, isLoading, error } = usePolls();

  return (
    <div className="py-[100px] px-2 flex flex-wrap">
        {demands?.slice(0,3)?.map((el) => (
          <DemandCard
            location={el.location}
            title={el.title}
            tags={el.tags}
            key={el._id}
            numresp={el.proposals.length}
            id={el._id}
            numsup={el.responses.length}
          />
        ))}

      {/* <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl  h-[500px] my-4 hover:scale-105 duration-500"></div>
        <div className="shadow-xl h-[500px] my-4 hover:scale-105 duration-500 bg-gray-100"></div>
        <div className="shadow-xl h-[500px] my-4  hover:scale-105 duration-500"></div>
      </div> */}
    </div>
  );
}

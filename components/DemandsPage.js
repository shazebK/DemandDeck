import React, { useState } from "react";
import DemandCard from "./DemandCard";

export default function DemandsPageComponent({ demands }) {
  const [searchText, setSearchText] = useState("");

  function searchHandler(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <div className="px-4 flex justify-between items-center shadow-lg">
        <h2 className="text-2xl font-bold"> Demands</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {demands?.map((el) => (
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
      </div>
    </>
  );
}

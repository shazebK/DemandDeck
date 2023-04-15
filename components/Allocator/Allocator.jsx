import React from "react";
import Avatar from "../UI/Avatar";
import AvailableResource from "./AvailableResource";

const Allocator = ({ allocator }) => {
  return (
    <div>
      {/* {JSON.stringify(allocator)} */}
      <div className="flex items-center p-4">
        <Avatar src={allocator?.name} />
        <div className="flex flex-col ml-4">
          <h1 className="">{allocator?.name}</h1>
          <h1 className="">{allocator?.email}</h1>
        </div>
      </div>
      {allocator?.resourcesClassified.available.map((el) => (
        <AvailableResource res={el} />
      ))}
      {allocator?.resourcesClassified.allocated.map((el) => (
        <AvailableResource res={el} allocated={true} />
      ))}
      {allocator?.resourcesClassified.requests.map((el) => (
        <AvailableResource res={el} requested={true} />
      ))}
    </div>
  );
};

export default Allocator;

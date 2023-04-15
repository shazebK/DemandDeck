import axios from "axios";
import React, { useState } from "react";
import { useUser } from "../../hooks/queries";
import { useQueryClient } from "@tanstack/react-query";

const AvailableResource = ({ res, requested, allocated }) => {
  const [show, setShow] = useState(false);
  const { user } = useUser();
  const queryClient = useQueryClient();

  const allocateHandler = async () => {
    await axios.post("/api/resource/allocate", {
      allId: user?._id,
      id: res.business._id.toString(),
      itemId: res.resource._id.toString(),
      quantity: res.quantity,
    });

    queryClient.invalidateQueries(["user"]);
  };

  return (
    <div className="">
      {/* {JSON.stringify(res)} */}
      <div className="m-2 bg-slate-700 text-white rounded-lg p-4">
        <div>{requested && <p className="text-white">Requested</p>}</div>
        <div>{allocated && <p className="text-white">Allocated</p>}</div>
        <div className="flex justify-between items-center">
          <div>{res.resource.title}</div>
          <div
            className="btn btn-circle btn-ghost"
            onClick={() => setShow((prev) => !prev)}
          >
            {"=>"}
          </div>
        </div>
        {show && (
          <div>
            <div>{res.resource.service}</div>
            <div>{res.quantity}</div>

            {requested && (
              <div className="btn btn-ghost" onClick={allocateHandler}>
                Allocate
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableResource;

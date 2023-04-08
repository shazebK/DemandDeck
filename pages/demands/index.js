import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePolls } from "../../hooks/queries";
import { usePollMutations } from "../../hooks/mutations";

const PollsPage = () => {
  const { demands, isError, error, isLoading } = usePolls();
  const { castVoteMutation } = usePollMutations();
  console.log(demands);

  const voteHandler = async (id) => {
    castVoteMutation.mutate({
      response: false,
      id,
    });
  };

  return (
    <div>
      {demands?.map((el) => (
        <div key={el._id} className="my-4">
          <div>{el.title}</div>
          <div>{el.description}</div>
          <div>{el.location}</div>
          <div>{JSON.stringify(el.creator)}</div>
          <div>{JSON.stringify(el.proposals)}</div>
          <div className="my-6 bg-blue-700 text-white">
            {JSON.stringify(el.active)}
          </div>
          <div className="m2-6 bg-blue-700 text-white">
            votes: {el.responses.length}
          </div>
          <div className="m2-6 bg-blue-700 text-white">
            votes: {JSON.stringify(el.responses)}
          </div>
          <div onClick={() => voteHandler(el._id)} className="btn btn-ghost ">
            Vote
          </div>
        </div>
      ))}
    </div>
  );
};

export default PollsPage;

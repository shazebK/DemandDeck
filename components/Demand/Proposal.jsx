import React, { useState } from "react";
import { usePollMutations } from "../../hooks/mutations";

const Proposal = ({ proposal, proposalAcceptHandler }) => {
  const [isLtd, setIsLtd] = useState(true);

  return (
    <div className="card bg-slate-800 text-white my-2 mx-4">
      <div className="card-body">
        <div className="card-title">Proposed-By - {proposal.creator.name}</div>
        <p>{isLtd ? "" : proposal.description}</p>
        <div className="card-actions flex">
          <button
            className="btn btn-ghost"
            onClick={() => proposalAcceptHandler(proposal.creator._id)}
          >
            Approve
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => setIsLtd((prev) => !prev)}
          >
            Description
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposal;

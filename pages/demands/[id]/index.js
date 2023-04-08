import { useRouter } from "next/router";
import React from "react";
import { usePoll } from "../../../hooks/queries";
import { usePollMutations } from "../../../hooks/mutations";

const DemandPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { demand, isError, isLoading, error } = usePoll(id);
  console.log(demand);

  const { acceptProposal } = usePollMutations(id);

  const proposalAcceptHandler = () => {
    acceptProposal.mutate({ id });
  };

  return (
    <div>
      {JSON.stringify(demand)}
      {demand?.proposals.map((demand) => (
        <div className="my-6">
          <div>{JSON.stringify(demand)}</div>
          <button className="btn btn-primary" onClick={proposalAcceptHandler}>
            Approve
          </button>
        </div>
      ))}
      <div
        className="btn btn-primary"
        onClick={() => {
          router.push(`/demands/${id}/proposal`);
        }}
      >
        Propose?
      </div>
    </div>
  );
};

export default DemandPage;

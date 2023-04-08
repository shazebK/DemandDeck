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

  const proposalAcceptHandler = (ownerId) => {
    acceptProposal.mutate({ id, owner: JSON.parse(JSON.stringify(ownerId)) });
  };

  return (
    <div>
      {JSON.stringify(demand)}
      {demand?.proposals.map((prop) => (
        <div className="my-6">
          <div>{JSON.stringify(prop)}</div>
          <button
            className="btn btn-primary"
            onClick={() => proposalAcceptHandler(prop.creator)}
          >
            Approve
          </button>
        </div>
      ))}
      {demand?.active && (
        <div
          className="btn btn-primary"
          onClick={() =>
            router.push(
              `/business/${JSON.parse(JSON.stringify(demand.active._id))}`
            )
          }
        >
          Go to Business
        </div>
      )}
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

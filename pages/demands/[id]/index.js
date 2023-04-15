import { useRouter } from "next/router";
import React from "react";
import { usePoll } from "../../../hooks/queries";
import { usePollMutations } from "../../../hooks/mutations";

import Proposal from "../../../components/Demand/Proposal";
import { DemandPageComponent } from "../../../components/Demand/DemandPage";

const DemandPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { demand, isError, isLoading, error } = usePoll(id);
  const { acceptProposal } = usePollMutations(id);

  const proposalAcceptHandler = (ownerId) => {
    acceptProposal.mutate({ id, owner: JSON.parse(JSON.stringify(ownerId)) });
  };

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <DemandPageComponent
        description={demand.description}
        location={demand.location}
        title={demand.title}
        id={demand._id}
        numprop={demand.proposals.length}
        numresp={demand.responses.length}
        key={demand._id}
        tags={[]}
        proposals={demand.proposals}
        active={demand.active}
      />

      {demand?.proposals?.map(
        (prop) =>
          prop.status === "req" && (
            <Proposal
              proposal={prop}
              demandId={id}
              proposalAcceptHandler={proposalAcceptHandler}
            />
          )
      )}

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
    </div>
  );
};

export default DemandPage;

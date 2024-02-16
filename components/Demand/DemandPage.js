import React from "react";
import { useRouter } from "next/router";
import { usePollMutations } from "../../hooks/mutations";
import { useSession } from "next-auth/react";

export const DemandPageComponent = ({
  numresp,
  id,
  title,
  description,
  numprop,
  location,
  tags,
  proposals,
  active,
}) => {
  const { castVoteMutation } = usePollMutations();

  const voteHandler = () => {
    castVoteMutation.mutate({
      response: false,
      id,
    });
  };

  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div className="w-full p-4">
      <div id="service" className="w-full md:w-2/5 mx-auto mt-20">
        <div className="w-full h-60 bg-sec text-white rounded-2xl flex flex-col justify-center items-center">
          <h2 className="text-[48px] font-semibold"> {numresp} </h2>
          <h4>Asked For This Service</h4>
          <div className="w-20 relative"></div>
        </div>
        {session && session.user && session.user.role === "basic" && (
          <div className="w-full mt-8 flex justify-between items-center">
            <h2 className="text-[32px] font-medium">Upvote Here</h2>
            <div
              className="h-20 w-20 flex items-center justify-center rounded-full bg-[#38EA35] text-white text-[32px] hover:cursor-pointer"
              onClick={voteHandler}
            >
              {"+"}
            </div>
          </div>
        )}

        {session && session.user && session.user.role === "vendor" && (
          <div className="w-full mt-8 flex justify-between items-center transition-all hover:scale-105 cursor-pointer">
            {!active &&
              (!proposals.find((el) => {
                return el.creator._id === session.user.id;
              }) ? (
                <h2
                  className="font-medium bg-prim mx-auto p-4 rounded-lg text-white"
                  onClick={() => {
                    router.push(`/demand/${id}/proposal`);
                  }}
                >
                  Submit a proposal
                </h2>
              ) : (
                "Proposal submitted, sit tight"
              ))}
          </div>
        )}
      </div>
      <div className="w-full flex flex-col items-center">
        <div id="title" className="mt-8 mb-4 text-xl font-bold">
          <h1 className="text-center text-[48px] my-8">{title}</h1>
          <div className="flex my-2">
            <h4 className="text-center">
              6A/155 I.T Crossing Faizabad Road,Lucknow
            </h4>
          </div>
          <hr className="mt-1" />
        </div>
        <div className="w-full md:w-3/5 description my-4 flex flex-col items-center">
          <h2 className="text-[20px] font-semibold my-2">Description</h2>
          <p>{description}</p>
          <div className="w-full md:w-3/5 grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-2">
            {tags?.map((el) => (
              <p className="text-gray-500" key={Math.random.toString()}>
                {el}
              </p>
            ))}
          </div>
        </div>
        <div id="applications" className="my-8">
          <h2 className="text-[20px] font-semibold">
            {" "}
            {numprop} Applications {active ? "Closed" : "Requested"}
          </h2>
        </div>

        <div id="location" className="my-8">
          <h2 className="text-[20px] font-semibold my-2"> {location} </h2>
        </div>
      </div>
    </div>
  );
};

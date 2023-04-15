import React from "react";

import { LocationOn, ThumbUp } from "@mui/icons-material";

import { useRouter } from "next/router";
import { usePollMutations } from "../../hooks/mutations";
import Avatar from "../UI/Avatar";

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

  return (
    <div className="w-full p-4">
      <div id="service" className="w-full md:w-2/5 mx-auto mt-20">
        <div className="w-full h-60 bg-sec text-white rounded-2xl flex flex-col justify-center items-center">
          <h2 className="text-[48px] font-semibold"> {numresp} </h2>
          <h4>Asked For This Service</h4>
          <div className="w-20 relative">
            <Avatar
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              className="absolute left-0"
            />
            <Avatar
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              className="absolute left-4"
            />
            <Avatar
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              className="absolute left-8"
            />
          </div>
        </div>
        <div className="w-full mt-8 flex justify-between items-center">
          <h2 className="text-[32px] font-medium">Upvote Here</h2>
          <div
            className="h-20 w-20 flex items-center justify-center rounded-full bg-[#38EA35] text-white"
            onClick={voteHandler}
          >
            <ThumbUp className="text-[48px] cursor-pointer" />
          </div>
        </div>
        <div className="w-full mt-8 flex justify-between items-center transition-all hover:scale-105 cursor-pointer">
          <h2
            className="text-[32px] font-medium bg-sec p-4 rounded-lg text-white"
            onClick={() => {
              router.push(`/demands/${id}/proposal`);
            }}
          >
            Submit a proposal
          </h2>
        </div>
      </div>
      <div id="title" className="mt-8 mb-4">
        <h1 className="text-[24px] md:text-[32px] font-bold">{title}</h1>
        <h6 className="text-[12px] text-gray-500">
          <LocationOn />
          6A/155 I.T Crossing Faizabad Road,Lucknow
        </h6>
        <hr className="mt-1" />
      </div>
      <div id="description my-4">
        <h2 className="text-[20px] font-semibold my-2">Description</h2>
        <div className="w-full md:w-3/5 my-4">
          <p>{description}</p>
        </div>
        <div className="w-full md:w-3/5 grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-2">
          {tags?.map((el) => (
            <p className="text-gray-500">{el}</p>
          ))}
        </div>
      </div>
      <div id="applications" className="my-8">
        <h2 className="text-[20px] font-semibold">
          {" "}
          {numprop} Applications {active ? "Closed" : "Requested"}
        </h2>
      </div>
      <div id="resources" className="my-8">
        <h2 className="text-[20px] font-semibold my-2">Resources Offered</h2>
        <ul className="list-disc px-8">
          <li>Approval of Hostel Warden</li>
          <li>Land</li>
          <li>Water</li>
        </ul>
      </div>
      <div id="location" className="my-8">
        <h2 className="text-[20px] font-semibold my-2"> {location} </h2>
        <div className="w-full md:w-3/5 h-72">
          <img
            src="https://k8q3f6p8.rocketcdn.me/wp-content/uploads/2019/05/Google-Maps-Tips.png"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

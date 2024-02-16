import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from "next/router";
import React from "react";

export default function DemandCard({
  numsup,
  title,
  numresp,
  tags,
  location,
  id,
}) {
  const router = useRouter();
  return (
    <div
      className="m-4 flex md:flex-col items-center border-2 rounded-2xl w-full md:w-[400px] h-[225px] md:h-[450px] shadow-lg hover:shadow-2xl relative hover:cursor-pointer"
      onClick={() => router.push(`/demand/${id}`)}
    >
      <div className="w-2/5 md:w-full h-full md:h-1/2 rounded-ss-2xl rounded-es-2xl md:rounded-t-2xl md:rounded-es-none flex justify-center items-center bg-sec">
        <div className="absolute top-0 left-0 md:right-0 p-1 md:p-4 cursor-pointer">
          <FaHeart className="text-[20px] md:text-[40px] text-white" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-[32px] md:text-[64px]"> {numsup} </h1>
          <h2 className="text-white md:text-[18px]">Supporters</h2>
        </div>
      </div>
      <div className="h-full md:h-1/2 w-3/5 md:w-full md:py-6 flex flex-col justify-around md:justify-between items-center">
        <h2 className="font-bold text-[20px] md:text-[24px]"> {title} </h2>
        <div className="flex justify-between items-center">
          <h3 className="text-[18px] md:text-[30px] text-prim mr-4">
            {" "}
            {numresp}{" "}
          </h3>
          <h3 className="md:text-[20px]">Responses</h3>
        </div>
        <h2 className="text-[12px] md:text-[16px] text-center"> {tags.join(", ")} </h2>
        <div className="flex justify-center items-center">
          <FaLocationDot/>
          <h2 className="text-gray-500 text-center text-[10px] md:text-[14px]">
            {" "}
            {location}{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

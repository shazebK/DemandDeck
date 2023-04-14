import React from "react";
import Typed from "react-typed";

export default function Banner() {
  return (
    <div className="bg-black w-full py-[50px] z-40">
      <div className="max-w-[1240px] py-[100px] mx-auto text-center font-bold ">
        <div className="text-xl md:text-3xl md:p-[24px] text-white">
          Learn with us
        </div>
        <h2 className="text-white  text-5xl md:text-[80px] md:p-[24px] ">
          Grow with us
        </h2>
        <div className="text-[20px] md:text-[50px] text-white  md:p-[24px]">
          Learn
          <Typed
            className="pl-3"
            strings={["Entrepreneurship", "Digital Marketting", "Enterprise"]}
            typeSpeed={100}
            backSpeed={120}
            loop={true}
          />
        </div>
        <button className="bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
}

import React from "react";
import auth from "../assets/images/auth.png";

export default function Experts() {
  return (
    <div className="max-w-[1240px]  p-2 mx-auto my-10 md:grid grid-cols-2">
      <div className=" col-span-1 md:w-[80%] text-center">
        <img src={auth} alt=" " className="inline"/>
      </div>
      <div className=" col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold my-2">Start your journey!</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          tenetur, quod culpa architecto reprehenderit harum id delectus
          blanditiis recusandae, omnis obcaecati voluptate quis, neque nesciunt
          explicabo natus laboriosam? Porro, ex.
        </p>
        <button className="w-[30%] bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
}

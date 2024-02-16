import React from "react";
import { useRouter } from 'next/router';

export default function Experts() {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/demand");
  }

  return (
    <div className="max-w-[1240px]  p-2 mx-auto my-10 md:grid grid-cols-2">
      <div className=" col-span-1 md:w-[80%] text-center">
        <img src={"/images/auth.png"} alt=" " className="inline" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center">
        <h1 className="text-prim font-bold my-2">Start your journey!</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          tenetur, quod culpa architecto reprehenderit harum id delectus
          blanditiis recusandae, omnis obcaecati voluptate quis, neque nesciunt
          explicabo natus laboriosam? Porro, ex.
        </p>
        <button type = "button" className="w-[100%] bg-black text-white p-3 rounded my-4" onClick={clickHandler}>
          Get Started
        </button>
      </div>
    </div>
  );
}

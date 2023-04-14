import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[hsl(309,90%,60%)] p-4">
      <div className="max-w-[1240px] py-[12px]  items-center flex justify-between ">
        <div className="text-3xl font-bold text-white">DemandDeck</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-8">
          <li>Home</li>
          <li>Demands</li>
          <li>Create</li>
          <li>
          <button className="bg-white hover:bg-magenta-700 text-black font-bold py-0.2 px-10 rounded-full ">Login</button>
          </li>
        </ul>
        {/* Responsive Menu */}
        <ul
          className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
         ${toggle ? "left-[0]" : "left-[-100%]"}  `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resource</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}

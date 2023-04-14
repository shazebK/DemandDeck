// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { getUserData } from "../../utils/api";
import { useUser } from "../../hooks/queries";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { data: session } = useSession();

  const logoutHandler = () => {
    signOut();
  };

  const { user, isLoading, isError, error } = useUser();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar justify-between bg-prim sticky top-0 z-10">
      <Link href = "/" className="text-xl font-bold text-white">DemandDeck</Link>
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
      <div className="w-1/3 hidden md:flex justify-between text-white">
        <Link href = "/">Home</Link>
        <Link href = "/demands">Demands</Link>
        <Link href = "/create">Create</Link>
      </div>

        <Link href = "/authentication" className="hidden md:block">
        <button className="btn w-40 rounded-full border-none bg-white text-black transition duration-300 ease-in-out hover:bg-black hover:text-white">Login</button>
        </Link>

      {/* Responsive Menu */}
      <div
        className={`duration-300 flex flex-col items-start justify-around md:hidden w-full h-[200px] text-white fixed bg-black top-16 
       ${toggle ? "left-[0]" : "left-[-100%]"}  `}
      >
        <Link href = "/">Home</Link>
        <Link href = "/demands">Demands</Link>
        <Link href = "/create">Create</Link>
        <Link href = "/authentication">Login</Link>
        </div>
    </div>
  );
};

export default Navbar;

    // <div className="navbar bg-blue-600 text-white font-bold text-xl px-4 sticky top-0 z-10">
    //   <Link className="flex-1" href={"/"}>
    //     DemandDeck
    //   </Link>
    //   <div>
    //     <Link href={"/poll"}>New Poll</Link>
    //     {!!session && (
    //       <Link className="btn btn-ghost rounded-full" href={"/auth/profile"}>
    //         {isLoading ? "Loading" : user?.name}
    //       </Link>
    //     )}
    //     {!session && (
    //       <Link className="btn btn-ghost" href={"/auth"}>
    //         Login
    //       </Link>
    //     )}
    //     {session && (
    //       <div className="btn btn-ghost rounded-full" onClick={logoutHandler}>
    //         Logout
    //       </div>
    //     )}
    //     <Link className="btn btn-ghost" href={"/demands"}>
    //       Polls
    //     </Link>
    //   </div>
    // </div>

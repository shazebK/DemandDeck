// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { getUserData } from "../../utils/api";
import { useUser } from "../../hooks/queries";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const TestNav = () => {
  const { data: session } = useSession();

  const logoutHandler = () => {
    signOut();
  };

  const { user, isLoading, isError, error } = useUser();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar bg-blue-600 text-white font-bold text-xl px-4 sticky top-0 z-10">
      <Link className="flex-1" href={"/"}>
        DemandDeck
      </Link>
      <div>
        <Link href={"/poll"}>New Poll</Link>
        {!!session && (
          <Link className="btn btn-ghost rounded-full" href={"/auth/profile"}>
            {isLoading ? "Loading" : user?.name}
          </Link>
        )}
        {!session && (
          <Link className="btn btn-ghost" href={"/auth"}>
            Login
          </Link>
        )}
        {session && (
          <div className="btn btn-ghost rounded-full" onClick={logoutHandler}>
            Logout
          </div>
        )}
        <Link className="btn btn-ghost" href={"/demands"}>
          Polls
        </Link>
      </div>
    </div>
  );
};

export default TestNav;

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
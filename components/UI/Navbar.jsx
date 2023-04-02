import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const { data: session } = useSession();

  const logoutHandler = () => {
    signOut();
  };

  useEffect(() => {
    const helper = async () => {
      const { data } = await axios.get("/api/auth/profile");
      setUser(data);
    };

    helper();
  }, []);

  return (
    <div className="navbar bg-blue-600 text-white font-bold text-xl px-4">
      <Link className="flex-1" href={"/"}>
        DemandDeck
      </Link>
      <div>
        <Link href={"/poll"}>New Poll</Link>
        {!!session && (
          <div className="btn btn-ghost rounded-full">{user?.name}</div>
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
      </div>
    </div>
  );
};

export default Navbar;

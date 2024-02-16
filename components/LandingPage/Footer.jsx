import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { data: session } = useSession();

  return (
    <div className="py-16 px-24 flex w-full text-[hsl(198,94%,53%)] border-t-4 flex-col md:flex-row items-center justify-around">
      <div className="md:w-2/5 flex flex-col">
        <h1 className="w-full text-3xl font-bold text-black">
          DemandDeck Tech.
        </h1>
        <p className="py-4">
          DemandDeck is a website to simplify each stage of Demand and Supply
          chain, such that even a local vendor can reach a wider audience to get
          the maximum output out of his service and consumer can get the best
          service according to his needs.
        </p>
      </div>
      <div className="flex w-full md:w-3/5 pl-12 items-center justify-around">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-black font-sans text-xl mb-4">
            Links
          </h1>
          <Link href={"/"}>Home</Link>
          <Link href={"/demand"}>Demands</Link>
          <Link href={"/auth"}>Log In</Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-black font-sans text-xl mb-4">
            Demands
          </h1>
          <Link href={"/demand/new"}>New Demand</Link>
          <Link href={"/demand"}>All Demands</Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-black font-sans text-xl mb-4">
            Specific Links
          </h1>
          <Link href={`/auth/user/${session?.user?.id}`}>Profile</Link>
          <Link href={"/resource/new"}>New Resource</Link>
          <Link href={"/allocator"}>Allocate</Link>
          <Link href={"/about"}>About us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

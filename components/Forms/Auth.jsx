import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { signIn } from "next-auth/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Auth({ signup, setSignup }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [role, setRole] = useState("select role");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!signup) {
      signIn("credentials", { email, password });
    } else {
      setIsLoading(true);
      await axios.post("/api/auth/signup", {
        email,
        password,
        name: username,
        role,
      });

      signIn("credentials", {
        email,
        password,
      });
    }
    router.push("/");
  };
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div
          className="radial-progress text-primary"
          style={{ "--value": 70, "--size": "12rem" }}
        >
          Loading...
        </div>
      </div>
    );
  else
    return (
      <div className="flex flex-col md:flex-row justify-around items-center px-10 py-4">
        <div className="w-full md:w-2/5">
          <Image
            src="/images/signup.jpg"
            className="w-full object-cover"
            alt="authImage"
            width={200}
            height={100}
          />
        </div>
        <div className="w-full md:w-2/5"></div>
        <div className="w-full md:text-left text-center md:w-2/5">
          <h1 className="text-[32px] md:text-[48px] font-bold leading-tight">
            {signup
              ? "Become Part of DemandDeck"
              : "Welcome back to Demand Deck"}
          </h1>

          <h3 className="text-[20px] md:text-[24px]">
            {signup ? "Sign Up to continue" : "Log in to continue"}
          </h3>
          {signup ? (
            <SignUp
              email={email}
              password={password}
              username={username}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              role={role}
              setRole={setRole}
            />
          ) : (
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          )}
          <div className="w-full h-24 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 cursor-pointer">Forget Password?</p>
            <button
              className="btn w-40 rounded-full border-none bg-sec hover:bg-sec-dark"
              onClick={() => setSignup()}
            >
              {signup ? "Log in" : "Sign Up"}
            </button>
            <button
              className="btn w-40 rounded-full border-none bg-sec hover:bg-sec-dark"
              onClick={submitHandler}
            >
              {"Submit"}
            </button>
          </div>
        </div>
      </div>
    );
}

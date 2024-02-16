import React from "react";
import AuthInput from "../UI/AuthInput";

export default function SignUp({
  email,
  password,
  username,
  setEmail,
  setUsername,
  setPassword,
  role,
  setRole,
}) {
  return (
    <div className="w-full my-6">
      <AuthInput
        placeholder="UserName"
        onChange={setUsername}
        value={username}
      ></AuthInput>
      <AuthInput
        placeholder="user@gmail.com"
        onChange={setEmail}
        value={email}
      ></AuthInput>

      <AuthInput
        type="password"
        placeholder="Password"
        onChange={setPassword}
        value={password}
      ></AuthInput>
      {/* <div className="w-full flex justify-between">
        <label className="label cursor-pointer">
          <span className="label-text text-[18px] mx-2">Individual</span>
          <input
            type="radio"
            id="individual"
            name="radio-2"
            className="radio radio-primary"
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text text-[18px] mx-2">Vendor</span>
          <input
            type="radio"
            id="individual"
            name="radio-2"
            className="radio radio-primary"
          />
        </label>
      </div> */}
      <div className="dropdown w-full">
        <label tabIndex={0} className="btn m-1 w-full">
          {role}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <a className="hover:bg-purple-600" onClick={() => setRole("basic")}>
            Basic
          </a>
          <a className="hover:bg-purple-600" onClick={() => setRole("vendor")}>
            Vendor
          </a>
          <a
            className="hover:bg-purple-600"
            onClick={() => setRole("allocator")}
          >
            Allocator
          </a>
        </ul>
      </div>
    </div>
  );
}

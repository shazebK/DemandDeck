import React from "react";
import AuthInput from "../UI/AuthInput";

export default function Login({ email, password, setEmail, setPassword }) {
  return (
    <div className="w-full my-6">
      <AuthInput
        placeholder="user@gmail.com"
        value={email}
        onChange={setEmail}
      ></AuthInput>
      <AuthInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      ></AuthInput>
    </div>
  );
}

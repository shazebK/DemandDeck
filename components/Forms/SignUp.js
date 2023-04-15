import React from "react";
import AuthInput from "../UI/AuthInput";
import { Person, Mail, Visibility } from "@mui/icons-material";

export default function SignUp({
  email,
  password,
  username,
  setEmail,
  setUsername,
  setPassword,
}) {
  return (
    <div className="w-full my-6">
      <AuthInput placeholder="UserName" onChange={setUsername} value={username}>
        <Person />
      </AuthInput>
      <AuthInput placeholder="user@gmail.com" onChange={setEmail} value={email}>
        <Mail />
      </AuthInput>
      <AuthInput
        type="password"
        placeholder="Password"
        onChange={setPassword}
        value={password}
      >
        <Visibility />
      </AuthInput>
      <div className="w-full flex justify-between">
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
      </div>
    </div>
  );
}

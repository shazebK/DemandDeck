import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { OutlinedInput } from "@mui/material";

export default function AuthInput({
  type,
  value,
  onChange,
  placeholder,
  children,
}) {
  return (
    <>
      <OutlinedInput
        type={type == null ? "text" : type}
        placeholder={placeholder}
        className="rounded-3xl w-full my-2"
        startAdornment={
          <InputAdornment position="start">{children}</InputAdornment>
        }
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
}

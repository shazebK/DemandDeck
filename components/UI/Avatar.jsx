import React from "react";

export default function Avatar({ size, src = "User", className }) {
  return (
    <div
      className={`${size ? size : "h-12"} ${
        size ? size : "w-12"
      } rounded-full ${className}`}
    >
      <div className="h-full w-full rounded-full object-cover bg-prim flex items-center justify-center text-white font-bold">
        {src[0]}
      </div>
    </div>
  );
}

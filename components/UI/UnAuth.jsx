import React from "react";

const UnAuth = ({ text }) => {
  return (
    <div className="py-20">
      <h1 className="text-2xl font-semibold font-sans text-red-600 text-center">
        Unauthorised!
      </h1>
      <h1 className="text-2xl font-semibold font-sans text-red-600 text-center pt-7 pb-20">
        {text}
      </h1>
    </div>
  );
};

export default UnAuth;

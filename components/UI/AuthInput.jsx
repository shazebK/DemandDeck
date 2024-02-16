import React from "react";

export default function AuthInput({
  type,
  value,
  onChange,
  placeholder,
  position,
  children,
}) {
  return (
    <>
  {position===undefined || position === "start"?
  <div className="input-group my-2">
    <button className= "btn btn-square bg-white border-2">
     {children}
    </button>
    <input type={type == null ? "text" : type} placeholder={placeholder} className="input input-bordered rounded-3xl w-full p-4 focus:outline-none" 
      onChange={(e) => onChange(e.target.value)}
      value = {value}
    />
  </div>
  :
  <div className="input-group my-2">
    <input type={type == null ? "text" : type} placeholder={placeholder} className="input input-bordered rounded-3xl w-full p-4" 
      onChange={onChange}
      value = {value}
    />
    <button className= "btn btn-square">
    {children}
    </button>
  </div>
  }
    </>
  );
}

import React from 'react'
import { IoClose } from "react-icons/io5";

export default function DropDownCard({text,onClick}) {
  return (
    <div className='p-4 m-4 ml-0 rounded-md bg-prim shadow-lg text-white flex justify-between'>
        <p className='mr-12'>{text}</p>
        <button onClick={onClick}>
            <IoClose/>
        </button>
    </div>
  )
}

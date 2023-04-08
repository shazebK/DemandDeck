import React from 'react'
import { Close } from "@mui/icons-material"

export default function EACard({fileName,description}) {
  return (
    <div className = "w-full h-36 md:h-20 flex justify-between border-2 shadow-lg my-8 ">
    <div className='px-4 h-full flex items-center bg-prim text-white'><p>{fileName}</p></div>
    <div className='px-2 flex items-center text-[12px] md:text-[16px]'><p>{description}</p></div>
    <div className='h-full px-4 w-16 flex justify-center items-center cursor-pointer'><Close/></div>
  </div>
  )
}

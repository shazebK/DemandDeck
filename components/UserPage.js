import { Edit } from '@mui/icons-material';
import React, { useState } from 'react'
import DemandCard from './DemandCard'

export default function UserPage() {
  const [imgHover,setImgHover] = useState(false);
  function hoverHandler(){
    setImgHover(prevState => !prevState);
  }
  return (
    <div className='w-full px-4'>
        <div className='w-full flex flex-col justify-center items-center'>

            <div className='h-40 w-40 rounded-full cursor-pointer relative' onMouseEnter={hoverHandler} onMouseLeave = {hoverHandler}>
            {imgHover && <Edit className='text-white absolute top-1/2 left-1/2 text-[32px] -translate-x-1/2 -translate-y-1/2 z-10'/>}
                <img src = "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt = "userProfile" className='h-full w-full object-cover hover:opacity-50'/>
            </div>

            <h1 className = "text-[48px] font-bold">Shazeb Khan</h1>
            <h5 className = "text-[20px] text-gray-500">shazeb8055@gmail.com</h5>
        </div>

        <div className='w-full my-8'>
          <h1 className='text-[32px] text-semibold my-4'>5 Active Demands</h1>
          <div className='w-full md:w-4/5 px-4 grid grid-cols-1 md:grid-cols-2 justify-items-center rounded-xl border-2 mx-auto'>
            <DemandCard/>
            <DemandCard/>
          </div>
        </div>

        <div className='w-full my-8'>
          <h1 className='text-[32px] text-semibold my-4'>Current Sessions</h1>
          <div className="carousel w-11/12 md:w-4/5 h-96 mx-auto border-2 rounded-xl relative">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
              <button className='btn btn-circle'>❮</button>
              <button className='btn btn-circle'>❯</button>
            </div>
          </div>
        </div>

    </div>
  )
}

import React from 'react'

export default function RequestBox({title,description,status}) {
  return (
    <div className='my-8 p-4 w-4/5 border-2 shadow-md rounded-md'>
    <h2 className='text-[24px] font-semibold'>{title}</h2>
    <p className=''>{description}</p>
    <div className = 'w-40 h-12 flex justify-between items-center'>
    <h3 className = "font-medium">Status</h3>
    <p className='text-green-500'>{status}</p>
    </div>
    </div>
  )
}

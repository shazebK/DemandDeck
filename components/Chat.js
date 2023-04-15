import { Send } from '@mui/icons-material'
import { InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'

export default function Chat() {
  return (
    <div className='flex flex-col'>
    <div id = "messageArea" className='w-full flex-1 bg-red-500'>

    </div>
        <div className = "flex">
        <input type="text" placeholder="Message" className="input input-bordered w-full focus:outline-none"/>
        <button className="btn btn-square">
          <Send/>
        </button>
        </div>
  </div>
  )
}

import { Send } from '@mui/icons-material'
import { InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'

export default function Chat() {
  return (
    <div className='w-full h-full flex flex-col justify-between'>
    <div id = "messageArea" className='h-full'></div>

    <div className="form-control">
      <div className="input-group">
        <input type="text" placeholder="Message" className="input input-bordered w-full focus:outline-none"/>
        <button className="btn btn-square p-0">
          <Send/>
        </button>
      </div>
    </div>
  </div>
  )
}

import React from 'react'
import { Close } from '@mui/icons-material'

export default function DropDownCard({text}) {
  return (
    <div className='p-4 m-4 ml-0 rounded-md bg-prim shadow-lg text-white flex justify-between'>
        <p className='mr-12'>{text}</p>
        <button>
            <Close/>
        </button>
    </div>
  )
}

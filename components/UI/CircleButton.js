import React from 'react'
import { Add } from '@mui/icons-material'

export default function CircleButton({onClick}) {
  return (
    <button className='w-12 h-12 rounded-full border-dashed border-2'><Add/></button>
  )
}

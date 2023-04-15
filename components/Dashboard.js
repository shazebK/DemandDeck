import { LocationOn } from '@mui/icons-material'
import React from 'react'
import Avatar from './UI/Avatar'

export default function Dashboard() {
  return (
      <div className = "w-full flex flex-col items-center">
        <h1 className='text-[48px] font-bold mt-8'>Laundary Services Required</h1>
        <p className='text-gray-500'>
        <LocationOn />
        6A/155 I.T Crossing Faizabad Road, Lucknow
        </p>
        <div className="w-20 relative">
            <Avatar
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              className="absolute left-0"
            />
            <Avatar
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              className="absolute left-4"
            />
            <Avatar
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              className="absolute left-8"
            />
          </div>
      </div>
  )
}


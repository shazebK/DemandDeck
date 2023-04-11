import React from 'react'

export default function Avatar({size,src,className}) {
  return (
    <div className={`${size?size:"h-12"} ${size?size:"w-12"} rounded-full ${className}`}>
        <img src = {src} className = 'h-full w-full rounded-full object-cover'/>
    </div>
  )
}

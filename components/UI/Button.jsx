import React from 'react'

export default function Button({color,hoverColor,children}) {
  return (
    <button className={`btn w-40 rounded-full border-none ${color} hover:${hoverColor}`}>{children}</button>
  )
}

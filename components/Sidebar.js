import React from 'react'
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className='w-60 bg-black flex flex-col justify-around items-center text-white font-semibold h-screen fixed left-0'>
                <button className='p-4 w-4/5 bg-sec'><Link href = "/session/dashboard">Dashboard</Link></button>
                <Link href = "/session">Requests</Link>
                <Link href = "/session/dashboard">Chat</Link>
                <Link href = "/session/dashboard">Review</Link>
    </div>
  )
}

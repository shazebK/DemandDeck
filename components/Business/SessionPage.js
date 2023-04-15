import Chat from "../Chat";
import React from 'react'
import Dashboard from '../Dashboard'
import Request from "../Request";
import Sidebar from '../Sidebar'
import Review from "../Review";

export default function SessionPage() {
  return (
    <div className="flex">
        <Sidebar />
        <div className = "w-3/4">
          <Chat/>
        </div>
    </div>
  )
}


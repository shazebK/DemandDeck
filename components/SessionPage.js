import Chat from "./Chat";
import React from 'react'
import Dashboard from './Dashboard'
import Request from "./Request";
import Sidebar from './Sidebar'

export default function SessionPage() {
  return (
    <>
        <Sidebar/>
        <div className="ml-60 w-4/5">
          <Dashboard/>
        </div>
    </>
  )
}

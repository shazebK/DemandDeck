import React from 'react'
import RequestBox from './RequestBox'

export default function Request() {
  return (
    <div className='w-full flex flex-col items-center'>
        <RequestBox title = "Title" description="This is the simple description" status = "Resolved"/>
    </div>
  )
}

import React from 'react';
import SignUp from './SignUp';
import Button  from '../UI/Button';
import Login from './Login';

export default function Auth() {
  return (
    <div className = "w-screen flex justify-around px-10">
        <div className = "w-2/5">
        <img src = "/images/auth.png" className='object-cover' alt = "authImage"/>
        </div>
        <div className='w-2/5'>
          <h1 className='text-[48px] font-bold leading-tight'>Become Part of DemandDeck</h1>
          <h3 className='text-[24px]'>Sign Up to continue</h3>
          <Login/>
          <Button color = "bg-sec" hoverColor="bg-sec-dark">SignUp</Button>
        </div>
    </div>
  )
}

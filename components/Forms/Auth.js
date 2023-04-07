import React from 'react';
import SignUp from './SignUp';
import Login from './Login';

export default function Auth() {
  return (
    <div className = "w-screen flex flex-col md:flex-row justify-around items-center px-10 py-4">
        <div className = "w-full md:w-2/5">
        <img src = "/images/auth.png" className='object-cover' alt = "authImage"/>
        </div>
        <div className='w-full md:text-left text-center md:w-2/5'>
          <h1 className='text-[32px] md:text-[48px] font-bold leading-tight'>Become Part of DemandDeck</h1>
          <h3 className='text-[20px] md:text-[24px]'>Sign Up to continue</h3>
          <SignUp/>
          <div className='w-full h-24 flex flex-col md:flex-row justify-between items-center'>
          <button className="btn w-40 rounded-full border-none bg-sec hover:bg-sec-dark">SignUp</button>
          <p className='text-gray-500 cursor-pointer'>Forget Password?</p>
          </div>
        </div>
    </div>
  )
}

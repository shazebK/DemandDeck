import React from 'react'

export default function NewsLetter() {
  return (
    <div className=' bg-[hsl(309,90%,60%)] p-4'>
        <div className='max-w-[1240px] mx:auto md:flex justify-between py-[40px]'>
          <div className='m-2'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'>For getting new updates</h1>
            <span className='text-white'>Sign up to our newsletter and stay up to date.</span>
          </div>
          <div className='m-2'>
            <input type="text" className='p-3  rounded mb-2 mr-2 text-slate-600 'placeholder='Email'/>
            <button className="bg-black text-white p-3 rounded">Get Started</button>
            <br></br>
            <p className='text-white'>
              We care about the protection of your data.Read our<br/> <a href ="" className ='text-black'>Privacy Policy</a>
            </p>
          </div>
        </div>
    </div>
  )
}

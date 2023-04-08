import { Cloud, Upload } from '@mui/icons-material'
import React from 'react'
import CircleButton from '../UI/CircleButton'
import DropDownCard from './vendor_signup_components/DropDownCard'
import EACard from './vendor_signup_components/EACard'

export default function VendorSignUp() {
  return (
    <div className='w-full'>
       
        <div className='flex flex-col md:flex-row justify-around items-center'>
            <div className = "w-full md:w-2/5">
                <img src = "/images/vendorSignUp.png" className='object-cover' alt = "vendorSignUp"/>
            </div>
            <h1 className='text-[32px] md:text-[48px] text-center md:text-left font-bold'>JUST ONE MORE<br></br>STEP TO GO</h1>
        </div>

        <p className='text-center mt-4 md:text-[20px]'>This data will be visible to user</p>

        <div id = "services" className='px-8 w-full md:w-3/5 my-16 my'>
            <h3 className='text-[24px] font-semibold my-4'>Services</h3>
            <div className='w-full flex justify-between'>
            <select className="select select-bordered w-4/5 focus:outline-none">
            <option>Homer</option>
            <option>Homer</option>
            <option>Homer</option>
            </select>
            <CircleButton/>
            </div>
            <div className='w-full flex flex-wrap'>
            <DropDownCard text = "Milk Provider"/>
            <DropDownCard text = "Laundary Services"/>
            <DropDownCard text = "House"/> 
            <DropDownCard text = "Milk Provider"/> 
            </div>
        </div>

        <div id = "Bio" className='px-8 w-full my-16 flex flex-col-reverse md:flex-row items-center justify-between'>
        <div className='w-full md:w-3/5'>
        <h3 className='text-[24px] font-semibold my-4'>Bio</h3>
        <textarea 
        className="textarea textarea-bordered w-full h-60 resize-none" 
        placeholder="Tell us about yourself and your bussiness">
        </textarea>
        </div>
        <div className='w-full flex justify-center md:w-2/5'>
          <img src = "/images/about.jpg" className = "w-60 object-cover" alt = "about" />
        </div>
        </div>

        <div id = "Experiences" className='px-8 w-full my-16 flex flex-col-reverse md:flex-row justify-between'>
        <div className='w-full md:w-3/5'>
        <h3 className='text-[24px] font-semibold my-4'>Experiences</h3>
        <textarea 
        className="textarea textarea-bordered w-full h-60 resize-none" 
        placeholder="Please Mention your past experiences or services (if any)with your clients and upload supporting document for same.">
        </textarea>
        <div className='w-full md:w-2/5 flex justify-between items-center'>
          <button className='bg-sec border-none outline-none rounded-xl text-white p-4'>Documents <Upload/></button>
          <CircleButton/>
        </div>

        <EACard fileName = "Milk.pdf" description = "I have a very good experiences in milk delivery and other things"/>
        <EACard fileName = "Milk.pdf" description = "I have a very good experiences in milk delivery and other things"/>
        <EACard fileName = "Milk.pdf" description = "I have a very good experiences in milk delivery and other things"/>
        

        </div>
        <div className='w-full md:w-2/5'>
          <img src = "/images/experience.png" className = "object-cover" alt = "Experiences" />
        </div>
        </div>

        <div id = "Achievements" className='px-8 w-full my-16 flex flex-col-reverse md:flex-row justify-between'>
        <div className='w-full md:w-3/5'>
        <h3 className='text-[24px] font-semibold my-4'>Achievements</h3>
        <textarea 
        className="textarea textarea-bordered w-full h-60 resize-none" 
        placeholder="Please mention your achievements (if any), and upload the supporting documents for same.  ">
        </textarea>
        <div className='w-full md:w-2/5 flex justify-between items-center'>
          <button className='bg-sec border-none outline-none rounded-xl text-white p-4'>Documents <Upload/></button>
          <CircleButton/>
        </div>

        <EACard fileName = "Milk.pdf" description = "I have a very good experiences in milk delivery and other things"/>
        <EACard fileName = "Milk.pdf" description = "I have a very good experiences in milk delivery and other things"/>
        <EACard fileName = "Milk.pdf" description = "I have a very good experiences in milk delivery and other things"/>
        

        </div>
        <div className='w-full md:w-2/5'>
          <img src = "/images/achievement.png" className = "object-cover" alt = "Experiences" />
        </div>
        </div>


        <div className='p-4 flex justify-center'>
        <button className="btn w-40 rounded-full border-none bg-sec hover:bg-sec-dark">Create</button>
        </div>
    </div>

  )
}

import React from 'react'
import Avatar from './UI/Avatar'
import { LocationOn, ThumbUp } from '@mui/icons-material'

export default function DemandPage() {
  return (
    <div className = "w-full p-4">
    <div id="service" className='w-full md:w-2/5 mx-auto mt-20'>

    <div className = "w-full h-60 bg-sec text-white rounded-2xl flex flex-col justify-center items-center">
        <h2 className='text-[48px] font-semibold'>1564</h2>
        <h4>Asked For This Service</h4>
    <div className = "w-20 relative">
    <Avatar src = "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" className = "absolute left-0"/>
    <Avatar src = "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" className= "absolute left-4"/>
    <Avatar src = "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" className= "absolute left-8"/>
    </div>
    </div>
    <div className='w-full mt-8 flex justify-between items-center'>
        <h2 className='text-[32px] font-medium'>Upvote Here</h2>
        <div className='h-20 w-20 flex items-center justify-center rounded-full bg-[#38EA35] text-white'>
            <ThumbUp className = "text-[48px] cursor-pointer"/>
        </div>
    </div>
    </div>
    <div id = "title" className='mt-8 mb-4'>
        <h1 className='text-[24px] md:text-[32px] font-bold'>Laundary Services Required</h1>
        <h6 className='text-[12px] text-gray-500'>
        <LocationOn/> 
        6A/155 I.T Crossing Faizabad Road,Lucknow
        </h6>
        <hr className='mt-1'/>
    </div>
    <div id = "description my-4">
        <h2 className='text-[20px] font-semibold my-2'>Description</h2>
        <div className='w-full md:w-3/5 my-4'>
        <p>We are getting very tired by washing our clothes ourself, 
        We are very lazy group of people and dont want to wash clothes, 
        So we want a Laundary Service on regular basis. 
        Various Resources would be provided with if joined.</p>
        </div>
        <div className='w-full md:w-3/5 grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-2'>
          <p className='text-gray-500'>Laundary</p>
          <p className='text-gray-500'>Clothes</p>
          <p className='text-gray-500'>Hostel</p>
          <p className='text-gray-500'>Dhobi</p>
        </div>
    </div>
    <div id = "applications" className='my-8'>
        <h2 className='text-[20px] font-semibold'>21 Applications Requested</h2>
        {/* <div className="carousel w-4/5 h-72mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
        <div className='bg-gray-500 w-4/5 h-4/5'></div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  </div> */}
</div>
<div id = "resources" className='my-8'>
<h2 className='text-[20px] font-semibold my-2'>Resources Offered</h2>
    <ul className='list-disc px-8'>
        <li>Approval of Hostel Warden</li>
        <li>Land</li>
        <li>Water</li>
    </ul>
</div>
<div id = "location" className='my-8'>
<h2 className='text-[20px] font-semibold my-2'>Location</h2>
<div className='w-full md:w-3/5 h-72'>
    <img src = "https://k8q3f6p8.rocketcdn.me/wp-content/uploads/2019/05/Google-Maps-Tips.png" className='h-full w-full object-cover'/>
</div>
</div>
</div>
  )
}

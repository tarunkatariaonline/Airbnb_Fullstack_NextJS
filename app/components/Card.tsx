import React from 'react'
import { FaStar } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Card = () => {
  return (
    <div className='  max-md:w-80  w-72 h-96   p-2  rounded-lg cursor-pointer hover:border-2 border-slate-400      '>
        <div className=' w-full  h-72  bg-yellow-400 rounded-lg'>
        <Carousel showStatus={false} showThumbs={false} >
           <img className=' h-72 w-full rounded-lg' src="https://a0.muscache.com/im/pictures/miso/Hosting-53371625/original/b230521e-d33c-4c5e-a2ba-d1d5277ade92.jpeg?im_w=720" alt="" />
           <img className=' h-72 w-full rounded-lg' src="https://a0.muscache.com/im/pictures/74ebe5c4-037f-4624-b544-195384e15981.jpg?im_w=720" alt="" />
           </Carousel>
        </div>

        <div className=' w-full h-6  mt-3 flex' >
        
        <div className=' w-3/4 h-6  flex justify-center items-center   '>
        <p className='overflow-hidden whitespace-nowrap  text-ellipsis font-medium p-1'>new zealand new tour hotel is here</p>
        </div>
        <div className=' w-1/4 h-6   flex items-center justify-center'>
        <FaStar  />
        <div className=' mx-2'>
            5.0
        </div>
       
</div>
        </div>

        <div className='  my-2 w-full'>
            <p className=' font-medium '>$23000 night</p>
        </div>

    </div>
  )
}

export default Card
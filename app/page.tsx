import Image from 'next/image'
import { CiGlobe } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
export default function Home() {
  return (
    <div className='w-full h-screen   bg-cyan-300'>
       <div className=' h-16 w-full bg-gray-200 flex justify-center items-center  '>
         <p  className=' content-center border-b-2 border-black'>Learn about Guest Favourites, the most loved homes on Airbnb</p>
       </div>
       <div className=' w-full h-16  bg-white flex  justify-between items-center ' >

         <div className='ml-4'>
        <img className=' w-28' src='https://www.edigitalagency.com.au/wp-content/uploads/airbnb-logo-png-transparent-background.png'/>
        </div>
        
        <div className=' mr-4 flex  items-center' >
          <button className= ' p-2 rounded-full text-sm px-4 hover:bg-gray-100  '>Airbnb your home</button>
          <CiGlobe className=" text-4xl cursor-pointer  rounded-full p-2 hover:bg-gray-100  mx-2 " />
          <div className=' w-20 h-10 px-2 cursor-pointer  rounded-3xl border-gray-400  border-1 hover:shadow-lg hover:bg-slate-50  justify-around  flex items-center mx-4 '>
          <MdMenu className=" text-2xl     " />
          <FaUser  />
          </div>
        </div>
       </div>
    </div>
  )
}

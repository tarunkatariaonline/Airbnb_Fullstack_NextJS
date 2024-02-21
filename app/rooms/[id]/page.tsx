'use client'
import React, { useState } from 'react'
import { CiHeart, CiStar } from "react-icons/ci";
import { FaDoorClosed, FaStar } from 'react-icons/fa';
import { MdRoomService } from 'react-icons/md';
import { TbGridDots } from "react-icons/tb";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const page = ({ params }: { params: { id: string } }) => {
  const today = new Date();

// Clone the date to avoid modifying the original
const nextDay = new Date(today);
const maxDateOfCalendar = new Date(today);
maxDateOfCalendar.setDate(today.getDate()+700)

nextDay.setDate(today.getDate() + 2);
   const [date,setDate] = useState([
    {
      startDate: new Date(),
      endDate:nextDay,
      key: 'selection'
    }
  ])
  const [photoTourBox,setPhotoTourBox] = useState(false);


  const handlerShowPhotoTourBox = ()=>{
    if(photoTourBox){
      setPhotoTourBox(false)
    }else{
      setPhotoTourBox(true);
    }
  }

  const [showCalendar,setShowCalendar] = useState(false);

  const handlerShowCalendar = ()=>{
  
    setShowCalendar(!showCalendar)

  }
  return (
   <div className=' min-h-screen w-full'>
     <div className= ' h-screen w-full '>
       <div className=' h-16  w-full'>

       </div>
       <hr />
       <div className='  min-h-screen   w-full p-10  max-md:p-0 bg-red-300'>
        

     {/* mobile carousel */}
       <Carousel  className=' md:hidden' showStatus={false} showThumbs={false}>
       <div className=' w-full    h-60 bg bg-green-300'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/fdba3a5f-da62-4b50-83ea-517639ba1385.jpeg?im_w=960" alt="" />
</div>
<div className=' w-full    h-60 bg bg-green-300'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/fdba3a5f-da62-4b50-83ea-517639ba1385.jpeg?im_w=960" alt="" />
</div>

            </Carousel>
       

        <div className=' w-full flex   justify-between max-md:p-4'>
        <p className=' max-md:text-xl text-2xl  font-semibold'>Shangrila Rénao - A Luxury Cabin</p>
        <div  className=' flex justify-center items-center max-md:hidden'>
        <CiHeart  className = "text-xl" />
        <p className= "border-b-2 border-black ml-1">Like</p>
        </div>
        </div>
        
        <div className=' max-md:hidden w-full relative   h-80 flex  '>
        <button className=' hover:bg-gray-200 absolute bottom-4 right-4 border-2  border-gray-600 bg-slate-100  rounded-md p-1 text-sm flex items-center font-semibold' onClick={handlerShowPhotoTourBox}>
       
        <p> <TbGridDots className="m-1"  /></p>  Show all photos
        </button>
         
         <div className=' w-1/2 h-full  p-2' >
           <img className=' w-full   h-full rounded-l-xl' src="https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/fdba3a5f-da62-4b50-83ea-517639ba1385.jpeg?im_w=960" alt="" />
         </div>
         <div className=' w-1/2 h-full ' >
          <div className=' w-full h-40 flex' >
            <div className=' w-1/2  h-40 p-2'>
            <img className=' w-full   h-full ' src="https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/ea291b96-a445-4f87-aa56-46b546302f1e.jpeg?im_w=720" alt="" />
            </div>
            <div className=' w-1/2  h-full p-2'>
            <img className=' w-full   h-full   rounded-tr-xl' src="https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/ef8d9be0-90bf-43ac-af9b-6bb98db01f23.jpeg?im_w=720" alt="" />
            </div>
           
          </div>
          <div className=' w-full h-40  flex'>
             <div className='  w-1/2 h-full p-2 '>
             <img className=' w-full   h-full   ' src="https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/d9eecf06-681d-48ce-86f1-e0044aac1e63.jpeg?im_w=720" alt="" />
             </div>
             <div className='  w-1/2 h-full  p-2'>
             <img className=' w-full   h-full   rounded-br-xl' src="https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/d5fd884f-a991-4835-a4c0-e5c764a1e1bc.jpeg?im_w=720" alt="" />
             </div>
          </div>
         </div>
        </div>

        <div className=' w-full  min-h-screen bg-green-400 flex'>
          <div className=' w-4/6  max-md:w-full bg-yellow-300 h-full'>
                <div className=' p-5'>
                  <p className=' text-2xl font-semibold '>Entire Cabin in Jibhi, india</p>
                   <p   >4 Guest .  2 Bedroom . 1 Bathroom</p>
                   <div className=' flex items-center '>
                    <FaStar/>  <p className=' ml-2'>4.78 . </p>
                    <p className=' border-b-2 border-black ml-2 '>27 Reviews</p> 
                   </div>
                  </div> 
                  <hr />
                  <div className=' w-full h-20  flex items-center p-5'>
                   <img className=' w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />

                   <p className=' ml-4 font-semibold'>Hosted By Tarun Kataria</p>

                  </div>

                  <hr />

                  <div className=' w-full  p-5'>
                  
                    <div className=' mt-2 w-full h-16 bg-green-300 flex items-center'>
                     <FaDoorClosed className=" text-3xl"/>
                     <div className='ml-4'>
                     <p className='  font-medium '>Dedicated Workspace</p>
                     <p  className=' font-light text-sm text-gray-500'>free wifi is available</p>
                     </div>

                     
                    </div>

                    <div className=' mt-2 w-full h-16 bg-green-300 flex items-center'>
                     <FaDoorClosed className=" text-3xl"/>
                     <div className='ml-4'>
                     <p className='  font-medium '>Dedicated Workspace</p>
                     <p  className=' font-light text-sm text-gray-500'>free wifi is available</p>
                     </div>

                     
                    </div>

                    <div className=' mt-2 w-full h-16 bg-green-300 flex items-center'>
                     <FaDoorClosed className=" text-3xl"/>
                     <div className='ml-4'>
                     <p className='  font-medium '>Dedicated Workspace</p>
                     <p  className=' font-light text-sm text-gray-500'>free wifi is available</p>
                     </div>

                     
                    </div>
                    
                  </div>

                  <hr />

                  <div className='  w-full   min-h-0  bg-pink-500 flex justify-center p-2'>
                    <div className='  max-md:w-full   w-10/12  bg-white rounded-2xl p-4 shadow-2xl'>
                    <p className=' flex justify-center  text-xl font-semibold uppercase  p-2'>About Host </p>
                    <div className=' flex  justify-center w-full'>
                 <img className=' w-32 h-32 p-2  rounded-full' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                  </div>
                  <p className=' w-full flex justify-center items-center text-2xl font-semibold'>Tarun Kataria</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum numquam sapiente molestias deserunt beatae exercitationem asperiores assumenda nulla impedit dolorum dolore, consectetur dolores iste at aut itaque tempora voluptates dicta?</p>
                  </div>
                  </div>
             <hr />
                  <div className=' w-full   min-h-0  bg-pink-500 flex justify-center p-2'>
                    <div className='  max-md:w-full   w-10/12 bg-white rounded-2xl p-4 shadow-2xl'>
                    <p className=' flex justify-center  text-xl font-semibold uppercase  p-2'>about hotel </p>
                    <div className=' flex  justify-center w-full'>
                 <img className=' w-32 h-32 p-2  rounded-full' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                  </div>
                  <p className=' w-full flex justify-center items-center text-2xl font-semibold'>Hotel Name</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum numquam sapiente molestias deserunt beatae exercitationem asperiores assumenda nulla impedit dolorum dolore, consectetur dolores iste at aut itaque tempora voluptates dicta?</p>
                  </div>
                  </div>

                 <hr />
                 
       
           <div className=' max-md:hidden bg-fuchsia-500 w-full  min-h-0 flex justify-center p-2 '>
           <DateRange  className=' rounded-2xl p-4 w-[90%]  shadow-2xl '
       
       onChange={item => setDate([item.selection] as any)}
      
     rangeColors={["black"]}
       ranges={date as any}
       months={2}
       direction="horizontal"
       minDate={new Date() as any}
       maxDate={  maxDateOfCalendar }
     />

           </div>


           {/* mobile Calender 
           ---------------- */}

<div className=' md:hidden bg-fuchsia-500 w-full  min-h-0 flex justify-center p-2 '>
           <DateRange  className='  rounded-2xl  w-[90%]  shadow-2xl '
       
       onChange={item => setDate([item.selection] as any)}
      
     rangeColors={["black"]}
       ranges={date as any}
       months={1}
       direction="horizontal"
       minDate={new Date() as any}
       maxDate={  maxDateOfCalendar }
     />

           </div>

          </div>

          <div className=' max-md:hidden  w-2/6 p-4 relative bg-cyan-400    mix-h-full'>
             <div className='   sticky top-4 bottom-0 right-0 left-0   bg-white   min-h-0 rounded-xl shadow-2xl p-6'>
             <p className=' text-lg font-semibold '>$ 9,250 night</p>
             <div className='  h-24  mt-2 rounded-xl '>
               <div className=' h-12 w-full rounded-t-xl flex focus:border-2 border-black cursor-pointer ' tabIndex={0}>
                 <div className=' h-full  w-full  items-center p-2  rounded-tl-xl border-1  focus:border-black focus:border-2 ' tabIndex={0} onClick={handlerShowCalendar}>
                   <p className=' uppercase text-xs font-semibold'>check-in</p>
                   <p className=' uppercase text-xs font-semibold'>1/13/2021</p>
                 </div>

                 <div  className=' h-full   w-full   items-center p-2 border-1 rounded-tr-xl focus:border-2 focus:border-black' tabIndex={0}  onClick={handlerShowCalendar}>
                 <p className=' uppercase text-xs font-semibold'>checkOut</p>
                   <p className=' uppercase text-xs font-semibold'>1/13/2021</p>
                 </div>
               </div>

               <div  className=' border-1  rounded-b-xl focus:border-2  focus:border-black cursor-pointer w-full h-12  flex justify-between  items-center p-2' tabIndex={0}>
                <div>
               <p className=' uppercase text-xs font-semibold'>guest</p>
                   <p className=' uppercase text-xs font-semibold'>1 guest</p>
                   </div>
                   <div>
                    &darr;
                   </div>
               </div>
             </div>
             <button className=' w-full mt-4 h-12 text-md text-white font-bold bg-red-500 rounded-xl'>Reserve</button>
              <div className=' flex   justify-between p-2'>
                <p className=' underline'>13,200 * 3 nights </p>
                <p >$41000</p>
              </div>

              <div className=' flex   justify-between p-2'>
                <p className=' underline'>Airbnb Fees(3%) </p>
                <p >12000</p>
              </div>
                
                <hr />
              <div className=' flex justify-between p-2  mt-4'>
                <p className=' font-semibold '>Total Before Tax</p>
                <p className=' font-semibold'>$41500</p>
              </div>
             

          
             </div>
           
             
            </div>
        </div>


        <div className=' w-full  min-h-0  bg-white'>
           
           <div className=' h-16  flex items-center p-10  max-md:p-4 '>
             <p className=' underline flex items-center text-xl font-medium '> <FaStar className="  mr-3"/> 4.88 • 17 Reviews</p>
           </div>


           <div className=' flex w-full flex-wrap p-10 max-md:p-4 '>
   
<div className='  max-md:w-full w-1/2    '>


<div className=' flex '>
  <img className=' p-2 w-16 h-16 rounded-full content-center  object-cover ' src="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg" alt="" />

  <div className='p-2'>
    <p>A Lady</p>
    <p className=' text-sm  font-light text-gray-500'>Pune,India</p>
  </div>
</div>

<div className=' flex items-center'>
<div className=' flex'>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
</div>
 <p className=' ml-2  text-xs font-bold'> • 3 Weeks Ago</p>
</div>

<div className=' w-full  min-h-0 py-2'>
 <p>Our stay at the house was lovely and relaxing. Delicious food, and lovely staff. We will be back.</p>
</div>
</div>
<div className='  max-md:w-full w-1/2    '>


<div className=' flex '>
  <img className=' p-2 w-16 h-16 rounded-full content-center  object-cover ' src="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg" alt="" />

  <div className='p-2'>
    <p>A Lady</p>
    <p className=' text-sm  font-light text-gray-500'>Pune,India</p>
  </div>
</div>

<div className=' flex items-center'>
<div className=' flex'>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
</div>
 <p className=' ml-2  text-xs font-bold'> • 3 Weeks Ago</p>
</div>

<div className=' w-full  min-h-0 py-2'>
 <p>Our stay at the house was lovely and relaxing. Delicious food, and lovely staff. We will be back.</p>
</div>
</div>


<div className='  max-md:w-full w-1/2    '>


<div className=' flex '>
  <img className=' p-2 w-16 h-16 rounded-full content-center  object-cover ' src="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg" alt="" />

  <div className='p-2'>
    <p>A Lady</p>
    <p className=' text-sm  font-light text-gray-500'>Pune,India</p>
  </div>
</div>

<div className=' flex items-center'>
<div className=' flex'>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
</div>
 <p className=' ml-2  text-xs font-bold'> • 3 Weeks Ago</p>
</div>

<div className=' w-full  min-h-0 py-2'>
 <p>Our stay at the house was lovely and relaxing. Delicious food, and lovely staff. We will be back.</p>
</div>
</div>


<div className='  max-md:w-full w-1/2    '>


<div className=' flex '>
  <img className=' p-2 w-16 h-16 rounded-full content-center  object-cover ' src="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg" alt="" />

  <div className='p-2'>
    <p>A Lady</p>
    <p className=' text-sm  font-light text-gray-500'>Pune,India</p>
  </div>
</div>

<div className=' flex items-center'>
<div className=' flex'>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
</div>
 <p className=' ml-2  text-xs font-bold'> • 3 Weeks Ago</p>
</div>

<div className=' w-full  min-h-0 py-2'>
 <p>Our stay at the house was lovely and relaxing. Delicious food, and lovely staff. We will be back.</p>
</div>
</div>


<div className='  max-md:w-full w-1/2    '>


<div className=' flex '>
  <img className=' p-2 w-16 h-16 rounded-full content-center  object-cover ' src="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg" alt="" />

  <div className='p-2'>
    <p>A Lady</p>
    <p className=' text-sm  font-light text-gray-500'>Pune,India</p>
  </div>
</div>

<div className=' flex items-center'>
<div className=' flex'>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
</div>
 <p className=' ml-2  text-xs font-bold'> • 3 Weeks Ago</p>
</div>

<div className=' w-full  min-h-0 py-2'>
 <p>Our stay at the house was lovely and relaxing. Delicious food, and lovely staff. We will be back.</p>
</div>
</div>

<div className='  max-md:w-full w-1/2    '>


<div className=' flex '>
  <img className=' p-2 w-16 h-16 rounded-full content-center  object-cover ' src="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg" alt="" />

  <div className='p-2'>
    <p>A Lady</p>
    <p className=' text-sm  font-light text-gray-500'>Pune,India</p>
  </div>
</div>

<div className=' flex items-center'>
<div className=' flex'>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
  <FaStar className="  h-3 w-3"/>
</div>
 <p className=' ml-2  text-xs font-bold'> • 3 Weeks Ago</p>
</div>

<div className=' w-full  min-h-0 py-2'>
 <p>Our stay at the house was lovely and relaxing. Delicious food, and lovely staff. We will be back.</p>
</div>
</div>
           


         
        </div>


        
        <div className=' w-full p-10 max-md:p-4'>

       
          <button className=' p-2 max-md:w-full  bg-white border-2 border-black rounded-lg'>Show All Reviews</button>
        
        </div>
        </div>
       </div>
      
     </div>


{/* 
   show Calender Desktop */}
   {showCalendar&&<div className=' fixed left-0 top-0 right-0 bottom-0 bg-black/75 flex justify-center items-center'>
      <div className='   bg-white shadow-2xl p-2 rounded-2xl'>
        <div className='  mb-2'>
          <button className='  h-8 w-8 rounded-full hover:bg-gray-200  flex justify-center items-center  ' onClick={handlerShowCalendar}>X</button>
        </div>
    <DateRange 
       
       onChange={item => setDate([item.selection] as any)}
      
     rangeColors={["black"]}
       ranges={date as any}
       months={1}
       direction="horizontal"
       minDate={new Date() as any}
       maxDate={  maxDateOfCalendar }
     />
     </div>
    </div>
} 
   {photoTourBox&&<div className=' fixed top-0 left-0 right-0 bottom-0 bg-white items-center  flex flex-col  overflow-y-auto '>

<div className=' flex  w-full justify-end    p-4' > <button className='  bg-gray-100 hover:bg-gray-300  w-10 h-10 rounded-lg' onClick={handlerShowPhotoTourBox}>X</button> </div>
 
 <p className=' flex justify-center w-full text-2xl font-semibold pt-2 '>Photo Tour</p>


 
   <img className='  w-2/5 h-80  mt-4  rounded-2xl' src="https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/ff39dfa3-a7e7-401d-b4bb-98644c7aa23e.jpeg?im_w=720"  alt="" />

  
   

</div>}




   </div>
  )
}

export default page;
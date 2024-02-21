'use client'
import Image from 'next/image'
import { CiGlobe } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaBars, FaCross, FaFilter, FaSearch, FaUser } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {typesofhotel} from '@/app/utils/type'
import { Switch } from '@chakra-ui/react'

import { RxCross1 } from "react-icons/rx";

import { CiSearch } from "react-icons/ci";

import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// theme css file

import { CiLocationOn } from "react-icons/ci";

// console.log(typesofhotel);
 import { useEffect, useState } from 'react';


 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 6
  }
};



import {
  Popover,
  Button,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import Card from './components/Card';
import { Typography } from '@mui/material';
import fetchhotels from './utils/fetchhotels';
import Searchbox from './components/Searchbox';




export default   function Home() {







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
  const [showFilterBox,setShowFilterBox] = useState(false);

  const [showLanguageBox,setShowLanguageBox] = useState(false);

  

  const [category,setCategory] = useState('Tiny')
  
  const handlerShowFilterBox = ()=>{
    console.log("I am in filter Box handler")
    if(showFilterBox){
      setShowFilterBox(false);
    }else{
      setShowFilterBox(true);
    }
  }

  const handlerFocus = ()=>{
    console.log("I am focusable")
    setShowFilterBox(false)
  }




 const handlerShowLanguageBox = ()=>{
  if(showLanguageBox){
    setShowLanguageBox(false);
  }else{
  setShowLanguageBox(true)}
 }


 



 



  return (
    <div className='w-full  min-h-screen   bg-cyan-300    '>
       <div className=' max-md:hidden h-16 w-full bg-gray-200 flex justify-center items-center  '>
         <p  className=' content-center border-b-2 border-black'>Learn about Guest Favourites, the most loved homes on Airbnb</p>
       </div>
       <div className=' max-md:hidden w-full h-16   bg-white flex  justify-between items-center ' >

         <div className='ml-4'>
        <img className=' w-28' src='https://www.edigitalagency.com.au/wp-content/uploads/airbnb-logo-png-transparent-background.png'/>
        </div>
        
        <div className=' mr-4 flex  items-center' >
          <button className= ' p-2 rounded-full text-sm px-4 hover:bg-gray-100  '>Airbnb your home</button>
          <CiGlobe onClick = {handlerShowLanguageBox} className=" text-4xl cursor-pointer  rounded-full p-2 hover:bg-gray-100  mx-2 " />
         
          <Popover>
  <PopoverTrigger>
  <div className=' w-20 h-10 px-2 cursor-pointer  rounded-3xl border-gray-400  border-1 hover:shadow-lg hover:bg-slate-50  justify-around  flex items-center mx-4 '>
          <MdMenu className=" text-2xl     " />
          <FaUser  />
         
          </div>
  </PopoverTrigger>
  <PopoverContent mr={"30px"}>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
        
        </div>
       </div>

  


  {/* mobile search bar header */}

<Searchbox/>


   <div className=' h-20 w-full bg-white flex items-center'>
       
      <div className=' max-md:w-full  w-3/4 h-14    '>
      
      <Carousel responsive={responsive} className=' absolute z-0'   >
      {typesofhotel.map((hoteltype,index)=>{
      return <div key={hoteltype.id} onClick={()=>{setCategory(hoteltype.title)}} className={` ${hoteltype.title===category?" border-b-2":"border-0"}  border-black h-14 w-14   p-1 mx-3  text-xs flex flex-col justify-center  items-center  cursor-pointer`}>
      <img className={` h-6 w-6  ${hoteltype.title===category?"opacity-100":"  opacity-30"} text-red-500 `} src={hoteltype.url}/>
       {hoteltype.title} 
      </div>
      })} 
      


       </Carousel>
       
       
      </div>
       
      <div className=' max-md:hidden w-1/3 h-14  flex items-center justify-center'>
         <button className='  h-10  mx-1 p-2 font-medium  rounded-md border-1 flex items-center justify-center  text-xs ' onClick={handlerShowFilterBox}> <CiFilter className="  font-extrabold  text-lg"   />Filters</button>
       
         <div className='  max-md:hidden h-10  px-2 mx-1  rounded-md border-1 flex items-center  text-xs  font-medium  '> <p  className=' mx-0'> Display total before taxes </p> 
         <Switch size='sm'  colorScheme='red' mx={"4px"}  />
         
         </div>
       </div>

    
   </div>

   <div className=' w-full h-20  bg-white p-3 md:hidden  '>
        <div className=' border-1 w-full  h-14 rounded-xl flex items-center  justify-between p-4'>

          <p  className='  font-medium text-lg'>Display Before Tax </p>
          <Switch colorScheme='red' size={'lg'}/>

        </div>
</div>
   <div className=' w-full    py-4 h-full bg-white flex  justify-center flex-wrap'>
   <Card/>

     <Card/>

     <Card/>

     <Card/>

     <Card/>
     <Card/>
     <Card/>
     <Card/>
     
   </div>
   


   {/* guest box adult child infants */}



   {/* show search suggestions */}



{/* filter box  */}
{showFilterBox&&<div className=' fixed  z-50   flex justify-center items-center  bg-black/70   top-0 left-0 right-0 bottom-0 max-md:items-end'  onFocus={handlerFocus} tabIndex={0}   >
            
            <div className=' w-3/5 h-96 max-md:w-full  max-md:h-[94%] border-2 max-md:rounded-b-none max-md:rounded-xl  rounded-lg bg-white cursor-pointer' tabIndex={0} onFocus={(e: React.FocusEvent<HTMLDivElement>)=>{
             e.stopPropagation();
            }}  >
              
              <div className=' w-full     m-0   items-center font-medium border-b-2 border-black  flex  justify-between p-2   '>
              Filters
               
             
              <button className=' h-10 w-10  justify-self-start     hover:bg-slate-200   rounded-md' onClick={handlerShowFilterBox}>X</button>
                
              </div>
            </div>
  
           </div>} 




 





  

 
    </div>
  )
}

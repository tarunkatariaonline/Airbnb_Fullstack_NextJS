'use client'

import React, { useEffect } from 'react'
import { FaBars, FaCross, FaFilter, FaSearch, FaUser } from "react-icons/fa";
import { CiSearch ,CiLocationOn} from "react-icons/ci";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import {typesofhotel} from '@/app/utils/type'
import { Switch } from '@chakra-ui/react'

import { RxCross1 } from "react-icons/rx";



import { DateRange } from 'react-date-range';


interface LocationSuggestionInterface {
  _id:string,
  locationSg:string
}
const Searchbox = () => {

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
  const [showGuestBox,setShowGuestBox] = useState(false);
  const [showLanguageBox,setShowLanguageBox] = useState(false);
  const [showSuggestionBox,setShowSuggestionBox] = useState(false);
  const [showSearchBoxMobile,setShowSearchBoxMobile]= useState(false);
  const [searchText,setSearchText] = useState<string>("");
  const [showCalender,setShowCalender] = useState(false);
  const [locationSuggestion,setLocationSuggestion] = useState<LocationSuggestionInterface[]|null>(null)
  
  const [category,setCategory] = useState('Tiny')

  console.log(locationSuggestion)
  
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

 const  handlerShowGuestFocus = ()=>{
  setShowGuestBox(true);
 }

 const handlerHideGuest = ()=>{
  
 setShowGuestBox(false)
 }

 const handlerShowLanguageBox = ()=>{
  if(showLanguageBox){
    setShowLanguageBox(false);
  }else{
  setShowLanguageBox(true)}
 }

 const handlerShowSuggestionBox = ()=>{

  setShowSuggestionBox(true)
 }

 const handlerHideSuggestionBox = ()=>{
    setTimeout(()=>{
        setShowSuggestionBox(false)
    },300)
   
   }
 
 const handlerShowSearchBoxMoble = ()=>{
   
 
   setShowSearchBoxMobile(!showSearchBoxMobile)

 }


 const handlerShowCalender = ()=>{
 
    setShowCalender(!showCalender);

 }

 const handlerSetSearchText = (text:string)=>{
    setSearchText(text)
 }

 const handlerControlInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
 
  setSearchText(e.target.value)
  
 }


 const fetchSearchSuggestion = async()=>{
  const res = await fetch('http://localhost:3000/api/location/getlocation?search='+searchText);
  const json = await res.json();
  setLocationSuggestion(json.locationSuggestions);
 }

 useEffect(()=>{
   fetchSearchSuggestion();
 },[searchText])
  return (
    <>
    
    <div className=' md:hidden w-full h-20 bg-white flex p-2 items-center  ' >
     <div onClick={handlerShowSearchBoxMoble} className=' w-full  ml-2  h-14 bg-white shadow-2xl rounded-full border-1 flex' > 
      <div className='  w-16 rounded-full   h-full flex items-center justify-center'>
        <CiSearch className=" text-3xl font-bold"/>
      </div>
      <div className=' w-full   h-14   flex  flex-col justify-center pl-4 '>
       <p  className=' font-semibold'>Anywhere</p>
       <p className=' text-sm '>Any week . Add guest</p>
      </div>
     </div>
     <div className=' w-24 h-14   flex justify-center items-center'>
         <div className=' bg-white  h-10  w-10 flex  justify-center items-center rounded-full border-1 ' onClick={handlerShowFilterBox}>
         <FaBars className="  text-xl " />
         </div>
       
     </div>
  </div>
  <div className=' w-full max-md:hidden  h-24  bg-white flex justify-center items-center'>
   
    <div className=' max-md:hidden w-3/4  max-lg:w-[98%] max-lg:h-14 flex items-center bg-white border-1   border-gray-300   h-16  rounded-full  drop-shadow-2xl  ' > 

    <div className=' group   w-2/6  hover:border-2 hover:border-black  focus:border-black   h-16  rounded-full flex  justify-end   items-center  ' tabIndex={0} >
     
 
     <div className=' w-4/5 h-10  border-r-2  group-hover:border-r-0    '>
      <div className='  h-5 w-full  font-medium text-sm'>
        Where

      </div>
      <div  className=' w-full h-5  bg-transparent'>
       <input type="text" onFocus={handlerShowSuggestionBox} onBlur={handlerHideSuggestionBox} className=' w-full text-sm font-semibold  outline-none bg-transparent  pr-4 ' value={searchText} onChange={handlerControlInput} placeholder='Search Destination'  />
      </div>

     </div>

    </div>
    <div className=' group  mx-1  w-1/5  hover:border-2  hover:border-black focus:border-black   h-16  rounded-full flex  justify-end   items-center  ' onClick={handlerShowCalender}  >
     
 
     <div className=' w-4/5 h-10       '>
      <div className='  h-5 w-full  font-medium text-sm'>
        Check in

      </div>
      <div  className=' w-full h-5  bg-transparent'>
      <p> {date[0].startDate.getDate()} - {date[0].startDate.getMonth()+1} - {date[0].startDate.getFullYear()}  </p>
      </div>

     </div>

  

    </div>
    <div className=' h-16   flex items-center justify-center '>
      <div className=' h-10 border-r-2 '>

      </div>

    </div>

    <div className=' group  mx-1  w-1/5  hover:border-2  hover:border-black focus:border-black   h-16  rounded-full flex  justify-end   items-center  '  onClick={handlerShowCalender}>
     
 
     <div className=' w-4/5 h-10       '>
      <div className='  h-5 w-full  font-medium text-sm'>
        Check Out

      </div>
      <div  className=' w-full h-5  bg-transparent'>
      <p> {  date[0].endDate.getDate()} - {date[0].endDate.getMonth()+1} - {date[0].endDate.getFullYear()}  </p>
      </div>

     </div>

  

    </div>
    <div className=' h-16   flex items-center justify-center '>
      <div className=' h-10 border-r-2 '>

      </div>

    </div>
  
  
    <div className=' group  mx-1   w-2/6    cursor-pointer  focus:border-black  focus:border-2  h-16  rounded-full flex   justify-center   items-center  ' tabIndex={0}   >
     
 
     <div className='   w-4/5 h-10        ' onFocus={handlerShowGuestFocus} tabIndex={0}>
      <div className='  h-5 w-full  font-medium text-sm ml-5'>
        Who

      </div>
      <div  className=' w-full h-5  bg-transparent  ml-5'>
       Add Guest
      </div>

     

     </div>

     <button  className='  mx-3 flex justify-center items-center w-10 h-10 bg-red-500  rounded-full '><CiSearch className={"text-white text-2xl  font-extrabold"} /></button>

    

    </div>
   
    </div>


   {/* show suggestion box */}


    {(showSuggestionBox && (locationSuggestion)?locationSuggestion.length!==0:"") ?<div className={` w-96   max-h-96 absolute     top-52  z-50 mt-1    py-6 left-40 rounded-3xl  bg-white   shadow-2xl   shadow-black  overflow-y-auto`}>
 

 {locationSuggestion&&locationSuggestion.map((suggestion)=>{
  return  <div key={suggestion._id} className='  min-h-0 mt-2 bg-white w-full flex  items-center  cursor-pointer hover:bg-gray-100 ' onClick={() => handlerSetSearchText(suggestion.locationSg)}>
  <CiLocationOn className="text-2xl font-extrabold  w-12 m-3 h-11 rounded-lg   bg-gray-200" />
   <p className=' w-full    min-h-0  '> {suggestion.locationSg}  </p>
  </div>
  
 })}
  
    
     
     
   </div>


  
 :""}


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




           {/* searchBoxMobile */}





  

 


         {showGuestBox&&<div className='  max-md:hidden fixed top-0 left-0 right-0 bottom-0 z-50    bg-black/50 flex justify-center  items-center' tabIndex={0} onFocus={handlerHideGuest}>
    <div className='   w-96  h-80 bg-white shadow-2xl rounded-xl p-4' onFocus={(e: React.FocusEvent<HTMLDivElement>)=>{
           e.stopPropagation();
          }}>

      <button className='  rounded-full hover:bg-gray-200 h-8 flex items-center justify-center w-8  p-2   bg-white text-lg  font-medium ' onClick={handlerHideGuest}>X</button>
       
        <div className=' flex justify-between h-14  my-4 p-2'>
      <div >
       <p className=' text-lg font-semibold'>Adult</p>
       <p className='  text-sm text-gray-400'>Age 13 or above</p>
      </div>
      <div className=' flex items-center justify-between '>
        <button className=' h-8 w-8 border-1 rounded-full '>-</button>
        <p className=' h-8 w-8  flex items-center justify-center'>3</p>
        <button className=' h-8 w-8 border-1 rounded-full '>+</button>
      </div>
      </div>
   <hr />
      <div className=' flex justify-between h-14  my-4 p-2'>
      <div >
       <p className=' text-lg font-semibold'>
        Children
       </p>
       <p className='  text-sm text-gray-400'>Age 2-12</p>
      </div>
      <div className=' flex items-center justify-between '>
        <button className=' h-8 w-8 border-1 rounded-full '>-</button>
        <p className=' h-8 w-8  flex items-center justify-center'>3</p>
        <button className=' h-8 w-8 border-1 rounded-full '>+</button>
      </div>
      </div>

  <hr />
      <div className=' flex justify-between h-14   my-4 p-2'>
      <div >


       <p className=' text-lg font-semibold'>
     Infents
       </p>
       <p className='  text-sm text-gray-400'>Under 2</p>
      </div>
      <div className=' flex items-center justify-between '>
        <button className=' h-8 w-8 border-1 rounded-full '>-</button>
        <p className=' h-8 w-8  flex items-center justify-center'>3</p>
        <button className=' h-8 w-8 border-1 rounded-full '>+</button>
      </div>
      </div>
    </div>
  </div>} 
  </div>

  {showSearchBoxMobile&&<div className='  md:hidden fixed top-0 left-0 right-0 bottom-0  bg-gray-100 z-50 flex  flex-col  p-4 overflow-auto  '>
   
   <div>
   <RxCross1 onClick={handlerShowSearchBoxMoble}  className=" h-8  p-2  w-8 ml-4   bg-white border-1 rounded-full " />
   </div>

   <div className=' flex justify-center w-full mt-2'>

   
  <div className='  p-4  w-11/12 bg-white   min-h-0  rounded-3xl shadow-2xl  '> 
  <p className=' text-xl font-semibold'>Where to ?</p>

  <div className=' border-1 w-full h-14  flex items-center p-2 rounded-xl'>
    <FaSearch className="  w-8 h-8 p-2 "/>
    <input onFocus={handlerShowSuggestionBox} onBlur={handlerHideSuggestionBox} type="text" value={searchText} onChange={handlerControlInput} placeholder='Search destinations ' className=' h-full w-full   outline-none' />
  </div>

  {
   (showSuggestionBox&&locationSuggestion)&&locationSuggestion.map((suggestion)=>{
    return  <div key={suggestion._id}  onClick={() => handlerSetSearchText(suggestion.locationSg)}  className='  min-h-0  flex items-center p-2'>
    <CiLocationOn className=" h-12 w-12 p-2  bg-gray-100  rounded-lg"/>
    <p className=' min-h-0 w-full  p-4 '>{suggestion.locationSg} </p>
   </div>
   })
  }
  
  

  </div>
  </div>


  <div className=' flex justify-center w-full mt-2'>

   
<div className='  p-4  w-11/12 bg-white   min-h-0  rounded-3xl shadow-2xl  '> 
<p className=' text-xl font-semibold'>Who is Coming?</p>



 <div className=' h-14   mt-4 flex justify-between'>
   
   <div>
        <p  className=' text-lg font-semibold'>Adults</p>
        <p className=' text-gray-400'>Ages 13 or above</p>
   </div>

   <div className=' bg-yellow- flex h-14 items-center justify-center p-2'>
    
    <button className=' h-8 w-8 rounded-full text-2xl border-1 flex justify-center '>-</button>
    <p className='h-8 w-8 rounded-full text-lg  flex justify-center mx-2 ' >1</p> 
    <button className=' h-8 w-8 rounded-full text-2xl border-1 flex justify-center '>+</button>

   </div>

 </div>

 <div className=' h-14   mt-4 flex justify-between'>
   
   <div>
        <p  className=' text-lg font-semibold'>Children</p>
        <p className=' text-gray-400'>Ages 2-12</p>
   </div>

   <div className=' bg-yellow- flex h-14 items-center justify-center p-2'>
    
    <button className=' h-8 w-8 rounded-full text-2xl border-1 flex justify-center '>-</button>
    <p className='h-8 w-8 rounded-full text-lg  flex justify-center mx-2 ' >1</p> 
    <button className=' h-8 w-8 rounded-full text-2xl border-1 flex justify-center items-center '>+</button>

   </div>


 </div>


 <div className=' h-14   mt-4 flex justify-between'>
   
   <div>
        <p  className=' text-lg font-semibold'>Infants</p>
        <p className=' text-gray-400'>Under 2</p>
   </div>

   <div className=' bg-yellow- flex h-14 items-center justify-center p-2'>
    
    <button className=' h-8 w-8 rounded-full text-2xl border-1 flex justify-center '>-</button>
    <p className='h-8 w-8 rounded-full text-lg  flex justify-center mx-2 ' >1</p> 
    <button className=' h-8 w-8 rounded-full text-2xl border-1 flex justify-center items-center '>+</button>

   </div>


 </div>



</div>



</div>




<div className=' flex justify-center w-full mt-2'>

   
<div className='  p-4  w-11/12 bg-white   min-h-0  rounded-3xl shadow-2xl   '> 

<div className=' flex  justify-between'>
  <p>When</p>
  <p className=' font-semibold'>Add dates</p>
</div>


      
      <DateRange   className='   w-full  mb-14'
       
       onChange={item => setDate([item.selection] as any)}
    
     rangeColors={["black"]}
       ranges={date as any}
       months={1}
       direction="horizontal"
       minDate={new Date() as any}
       maxDate={maxDateOfCalendar}
     />
        

</div>



</div>

<div className='  fixed bottom-0 left-0 right-0  w-full h-16   flex justify-between items-center p-4 bg-white'>
  <p className=' underline'>Clear all </p>
  <button className=' flex h-11   w-32 p-4   bg-red-500 rounded-lg  items-center '> <CiSearch className=" h-6 w-6  mr-1 text-white font-bold  "/>  <p className=' text-lg text-white'>Search</p>   </button>
</div>




 </div>}


  {/* calender desktop */}
  
  {showCalender&&<div className=' max-md:hidden absolute  left-0 right-0   top-0  bottom-0  rounded-2xl z-50  flex justify-center  pt-0 items-center ' tabIndex={0} onFocus={handlerShowCalender}   >
      
      <div className=' absolute top-52 ' tabIndex={0} onFocus={(e: React.FocusEvent<HTMLDivElement>)=>{
             e.stopPropagation();
            }}>
      <DateRange  className=' rounded-2xl p-4  shadow-2xl'
       
       onChange={item => setDate([item.selection] as any)}
      
     rangeColors={["black"]}
       ranges={date as any}
       months={1}
       direction="horizontal"
       minDate={new Date() as any}
       maxDate={  maxDateOfCalendar }
     />
         </div></div>}
    </>
  )
}

export default Searchbox;
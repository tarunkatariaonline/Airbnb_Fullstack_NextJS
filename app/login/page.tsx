import React from 'react'

const page = () => {
  return ( 
    <div className='bg-gradient-to-r from-cyan-200 to-blue-400 ... h-screen ' >
        
        <div className='flex w-full h-96  pt-10 '>
          
          <div className="box1 h-96 w-1/2 ">

          </div>
          <div className="box1 h-96 w-1/2 ">
               
               <div className='  rounded-sm h-80  w-3/4  bg-slate-50 m-10 block  '>
 
                
                       <select value="Login As" className='w-4/5 p-2 m-2 bg-cyan-200' name=" Login As" id="">
                       <option value="student">Login As</option>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="institute">Institute</option>
                       </select>
                    <input className=' w-4/5 p-2 m-2 bg-cyan-200' type="text" placeholder='Enter Your Email' />
                    <input className=' w-4/5 p-2 m-2 bg-cyan-200 ' type="text w-4/5 p-2 m-2 bg-cyan-200" placeholder='Enter Your password' />
                    
                    <button className='bg-gradient-to-r from-cyan-200 to-blue-400 ... w-20 h-10 rounded-md  text-white'>Login</button>
                    
                

               </div>
          </div>

        </div>

    </div>
  )
}

export default page
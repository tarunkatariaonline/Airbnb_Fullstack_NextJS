
import React from 'react'
const apiFetch = async(destination:string|null|undefined)=>{
    const res = await fetch('http://localhost:3000/api/hotel/gethotels?destination='+destination);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
const page = async() => {
  
    const data  = await apiFetch("");
   

  return (
    <>
    {data?.map((item:any)=>{
      return <div key={item._id}>{item.title}</div>
    })}
    </>
  )
}

export default page
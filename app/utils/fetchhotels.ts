const fetchhotels = async()=>{
   const res = await fetch('http://localhost:3000/api/hotel/gethotels');
   if(!res.ok){
    throw new Error('Failed to fetch data')
   }

   return res.json();
}

export default fetchhotels;
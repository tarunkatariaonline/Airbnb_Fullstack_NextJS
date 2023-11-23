
import { cookies } from 'next/headers'


export async function GET(req:Request) {
    
    
    cookies().delete('authToken');

 
    return Response.json({
      message:"Logout Successfully",
      success:true
  
    })
  }
  
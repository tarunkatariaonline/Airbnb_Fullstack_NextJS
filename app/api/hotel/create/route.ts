import { errorHandler } from "@/app/middleware/errorhandler"
import {Hotel} from '../../../../schema/hotelSchema'
import { connectMongoDB } from "@/database/connection";
export const POST = async(req: Request)=>{
    



    await connectMongoDB();
    const data = await req.json();
  
    
    const {name,desc,category,price,owner,location,city} = data;
    const hotel = await Hotel.create({
        name,
        desc,
        category,
        price,
        owner,
        location,
        city
    });
    

    return Response.json({
       hotel
    })



}
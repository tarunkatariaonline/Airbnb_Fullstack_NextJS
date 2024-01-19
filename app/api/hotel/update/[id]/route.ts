import { connectMongoDB } from "@/database/connection"
import { errorHandler } from "@/app/middleware/errorhandler";
import { Hotel } from "@/schema/hotelSchema";
import { reportWebVitals } from "next/dist/build/templates/pages";
export const PUT = async(req: Request,
    { params }: { params: { id: string } })=>{
    await connectMongoDB();
    const data = await req.json();
    const id = params.id ;
    console.log(id);
      
    if(!id){
        return errorHandler("Plese Enter Your Id ",403,false)
    }
     let hotel;
    try{
     hotel = await Hotel.findByIdAndUpdate(id,data)
     hotel = await Hotel.findOne({_id:id});
    }catch{
        return errorHandler("Something went Wrong With Id",403,false);
    }
    console.log(hotel);

    if(!hotel){
        return errorHandler("Hotel Not Found !",403,false)
    }

  return   Response.json({
       hotel
    });

}
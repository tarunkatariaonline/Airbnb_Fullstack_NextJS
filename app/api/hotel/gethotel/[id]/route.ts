import { errorHandler } from "@/app/middleware/errorhandler";
import { connectMongoDB } from "@/database/connection"
import { Hotel } from "@/schema/hotelSchema";

export const GET = async(req: Request,
    { params }: { params: { id: string } })=>{


    await connectMongoDB();
    const id = params.id ;
    console.log(id);
      const _id = id;
    if(!_id){
        return errorHandler("Plese Enter Your Id ",403,false)
    }
     let hotel;
    try{
     hotel = await Hotel.findById(id);
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
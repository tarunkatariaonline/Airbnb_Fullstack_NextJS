import { errorHandler } from "@/app/middleware/errorhandler";
import { connectMongoDB } from "@/database/connection"
import { Hotel } from "@/schema/hotelSchema";

export const DELETE = async(req: Request,
    { params }: { params: { id: string } })=>{
await connectMongoDB();
const {id } = params;
if(!id){
    return errorHandler("Plese Enter Id ",403,false);
}
let hotel;
try{
 hotel = await Hotel.findByIdAndDelete(id);

}catch{
    errorHandler("Id have Some Issue.",403,false);
}

if(!hotel){
    return errorHandler("Hotel Not Found",403,false);
}

return Response.json({
    hotel,
    message:"Hotel Deleted Successfully."
});

}
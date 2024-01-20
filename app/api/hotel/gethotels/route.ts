import { connectMongoDB } from "@/database/connection";
import { Hotel } from "@/schema/hotelSchema"
interface QueryObject  {
    destination?:string,

} 
export const GET = async(req:Request)=>{
    await connectMongoDB();
    const { searchParams } = new URL(req.url)
    const destination = searchParams.get('destination')
    console.log(destination);
    const queryObject:QueryObject = {};
    if(destination){
        queryObject.destination = destination;
    }
const hotels = await Hotel.find();

return Response.json(hotels);

}
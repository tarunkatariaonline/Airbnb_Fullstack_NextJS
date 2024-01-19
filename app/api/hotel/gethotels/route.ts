import { connectMongoDB } from "@/database/connection";
import { Hotel } from "@/schema/hotelSchema"

export const GET = async()=>{
    await connectMongoDB();
const hotels = await Hotel.find();
return Response.json(hotels);

}
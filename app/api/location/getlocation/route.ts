import { connectMongoDB } from "@/database/connection"
import { LocationSuggestion } from "@/schema/locationSuggestionSchema"

export const GET = async(req:Request)=>{
 await connectMongoDB();
const locationSuggestions =  await LocationSuggestion.find();      
return Response.json({
  locationSuggestions
})

}
import { connectMongoDB } from "@/database/connection"
import { LocationSuggestion } from "@/schema/locationSuggestionSchema"
interface QueryObjectInferface{
  locationSg?:{
    $regex:string|null,
    $options:string
  },
}
export const GET = async(req:Request)=>{
  await connectMongoDB();
  const { searchParams } = new URL(req.url)
  const locationSg = searchParams.get('search');

  const queryObject:QueryObjectInferface = {};

  if(locationSg){
   queryObject.locationSg = {$regex:locationSg,$options:'i'}
  }


  
  

   let locationSuggestions =  await LocationSuggestion.find(queryObject).limit(4).sort("length");  


   if(!locationSg){
   locationSuggestions = [];
    }

return Response.json({
  locationSuggestions
})

}
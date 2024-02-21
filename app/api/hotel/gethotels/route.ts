import { connectMongoDB } from "@/database/connection";
import { Hotel } from "@/schema/hotelSchema"

interface DestinationInterface{
    $regex:string|null,
    $options:string
}

interface priceInterface{
    $gte:number,
    $lte:number
}

interface GreaterthanInterface{
    $gte:number;
}
interface QueryObject  {
    destination?:DestinationInterface,
    category?:string,
    price?:priceInterface,
    hoteltype?:string,
    propertytype?:string,
    selfcheckin?:boolean|null,
    bedrooms?:GreaterthanInterface,
    bathrooms?:GreaterthanInterface,
    beds?:GreaterthanInterface,
    adults?:GreaterthanInterface,
    children?:GreaterthanInterface,
    infents?:GreaterthanInterface,

} 
export const GET = async(req:Request)=>{
    await connectMongoDB();
    const { searchParams } = new URL(req.url)
    const destination = searchParams.get('destination')
    const category = searchParams.get('category')
    const hoteltype = searchParams.get('hoteltype')
    const propertytype = searchParams.get('propertytype');
    const selfcheckinString = searchParams.get('selfcheckin');
    const maxPrice = Number(searchParams.get('maxprice')) || 10000000;
   
    const minPrice = Number(searchParams.get("minprice")) || 0;
    const adults = Number(searchParams.get('adults')) || 1;
    const children = Number(searchParams.get('children'))||1;
    const bedrooms = Number(searchParams.get('bedrooms')) ||1 ;
    const beds = Number(searchParams.get('beds')) || 0;
    const bathrooms = Number(searchParams.get('bathrooms'))|| 1;
    const infents = Number(searchParams.get('infents'))|| 1;
    
    let selfcheckin:boolean|null=null;
    if(selfcheckinString=='true'){
        selfcheckin = true;
    }
    if(selfcheckinString=='false'){
        selfcheckin= false;
    }
  
    

    console.log("adult : " + adults);
  
    // console.log(maxPrice)
    // console.log(minPrice)
    // console.log(destination);
    const queryObject:QueryObject = {};
    if(destination){
        queryObject.destination = {$regex:destination,$options:'i'};
    }

    if(category){
        queryObject.category = category;
    }

    if(hoteltype){
        queryObject.hoteltype = hoteltype
    }

    if(propertytype){
        queryObject.propertytype= propertytype
    }

    if(selfcheckinString){
        queryObject.selfcheckin=selfcheckin
    }


    queryObject.price = { $gte: minPrice, $lte: maxPrice }
    queryObject.adults = {$gte:adults};
    queryObject.children = {$gte:children};
    queryObject.infents =   {$gte:infents};
    queryObject.bathrooms = {$gte:bathrooms};
    queryObject.bedrooms =   {$gte:bedrooms};
    queryObject.beds  = {$gte:beds};


    queryObject.bathrooms  = {$gte:bathrooms};

    
const hotels = await Hotel.find(queryObject);

return Response.json(hotels);

}
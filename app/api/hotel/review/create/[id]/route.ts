import { errorHandler } from "@/app/middleware/errorhandler";
import { Hotel } from "@/schema/hotelSchema";

export const POST = async(req:Request,{params}:{params:{
    id:string
}})=>{

    const {id } = params;
    console.log(id);
const {user,name,cleanliness,
accuracy,
checkin,
communication,
location,
value, 
comment} = await req.json();

if(!user || !name || !cleanliness || !accuracy || !checkin || !communication || !location ||!value || !comment){
    return errorHandler("Please Fill All Fields",403,false);
}

let hotel;
try{
 hotel = await Hotel.findById(id)
 if(!hotel){
    return errorHandler("hotel not found",403,false);
 }

 hotel.reviews.push({user,name,cleanliness,
    accuracy,
    checkin,
    communication,
    location,
    value, 
    comment})


    let cleanlinessrating  = 0;
    let accuracyrating = 0;
    let locationrating = 0;
    let checkinrating =0;
    let communicationrating =0;
    let valuerating =0; 

    for(let i =0;i<hotel.reviews.length;i++){
    
      
       cleanlinessrating = cleanlinessrating + (hotel.reviews[i].cleanliness/hotel.reviews.length);
       
       accuracyrating = accuracyrating + (hotel.reviews[i].accuracy/hotel.reviews.length)
       locationrating = locationrating + (hotel.reviews[i].location/hotel.reviews.length)
       checkinrating = checkinrating + (hotel.reviews[i].checkin/hotel.reviews.length)
       communicationrating = communicationrating + (hotel.reviews[i].communication/hotel.reviews.length)
       valuerating = valuerating = (hotel.reviews[i].value/hotel.reviews.length)
       
    }
    
  
    hotel.cleanlinessrating = cleanlinessrating;
    hotel.accuracyrating = accuracyrating;
    hotel.locationrating = locationrating;
    hotel.checkinrating =checkinrating;
    hotel.valuerating =valuerating;
    hotel.communicationrating= communicationrating;
    
    hotel.overallrating = (cleanlinessrating+accuracyrating+locationrating+checkinrating+valuerating+communicationrating)/6;

   





    const updatedHotel = await Hotel.findByIdAndUpdate(id,hotel,{
        new:true
    })

     return Response.json({
        updatedHotel
     })

}catch{
    return errorHandler("Id is wrong ",403,false);
}

}
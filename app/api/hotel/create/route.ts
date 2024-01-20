import { errorHandler } from "@/app/middleware/errorhandler"
import {Hotel} from '../../../../schema/hotelSchema'
import { connectMongoDB } from "@/database/connection";
import { LocationSuggestion } from "@/schema/locationSuggestionSchema"
export const POST = async(req: Request)=>{
    



    await connectMongoDB();
    const data = await req.json();
  
    
    const {title,desc,category,hoteltype,price,hostid,location,selfcheckin,adults,children,infents,bedrooms,beds,bathrooms,hostlanguange,state,country,
        city,propertytype,amenities} = data;

    const totalguest=adults+infents+children;
    const destination = [location,city,state,country].join(', ');
    
    const image = [
        {
            public_id:1,
            url:"https://a0.muscache.com/im/pictures/1a284fe1-9332-412d-9635-4fefb3ca124d.jpg?im_w=720",

        },
        {
            public_id:2,
            url:"https://a0.muscache.com/im/pictures/7b204348-7b19-4228-981a-1ce7dabcad00.jpg?im_w=720",

        },
        {
            public_id:3,
            url:"https://a0.muscache.com/im/pictures/1a6400e1-2a7f-4e34-a4ed-f685d88b6ed1.jpg?im_w=720",

        }
        ,
        {
            public_id:4,
            url:"https://a0.muscache.com/im/pictures/7c997227-590e-4a2d-ad5f-8061437e6171.jpg?im_w=720",

        },
        {
            public_id:5,
            url:"https://a0.muscache.com/im/pictures/dfa5472f-d464-4767-b449-c695af5438ae.jpg?im_w=720",

        },
        ,
        {
            public_id:6,
            url:"https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=1200",

        },
        {
            public_id:7,
            url:"https://a0.muscache.com/im/pictures/876d422d-5537-4ea8-8b10-026e5d7bcfd5.jpg?im_w=1200",

        },
        
        {
            public_id:8,
            url:"https://a0.muscache.com/im/pictures/b329e6cf-632b-48e9-a8ce-b6b02b42b987.jpg?im_w=720",

        },
        

        
    ]



    const hotel = await Hotel.create({
        image,
        title,
        desc,
        category,
        hoteltype,selfcheckin,adults,children,infents,bedrooms,beds,bathrooms,hostlanguange,state,country,
        price,
        hostid,
        location,
        city,
        totalguest,
        propertytype,
        destination,
        amenities
    

     
    });
    

    //function for adding in location 
     
    const allCombo = [location,city,state,country].join(', ');
    const cityAndStateAndCountryCombo = [city,state,country].join(', ');
    const cityAndStateCombo = [city,state].join(', ');
    const stateAndCountryCombo = [state,country].join(', ');
    const locationAndCountryCombo = [location,category].join(', ');

    console.log(allCombo);
    const allComboFound =  await LocationSuggestion.find({locationSg:allCombo });
    if(allComboFound.length==0){
        console.log("location is newly added")
    const createLocation = await LocationSuggestion.create({
        locationSg:allCombo
    })
   
}

const cityAndStateComboFound =  await LocationSuggestion.find({locationSg:cityAndStateCombo });
if(cityAndStateComboFound.length==0){
    console.log("location is newly added")
const createLocation = await LocationSuggestion.create({
    locationSg:cityAndStateCombo
})

}


const stateAndCountryComboFound =  await LocationSuggestion.find({locationSg:stateAndCountryCombo });
if(stateAndCountryComboFound.length==0){
    console.log("location is newly added")
const createLocation = await LocationSuggestion.create({
    locationSg:stateAndCountryCombo
})

}
const cityAndStateAndCountryComboFound =  await LocationSuggestion.find({locationSg:cityAndStateAndCountryCombo });
if(cityAndStateAndCountryComboFound.length==0){
    console.log("location is newly added")
const createLocation = await LocationSuggestion.create({
    locationSg:cityAndStateAndCountryCombo
})

}
 

const countryFound =  await LocationSuggestion.find({locationSg:country });
if(countryFound.length==0){
    console.log("location is newly added")
const createLocation = await LocationSuggestion.create({
    locationSg:country
})

}

const locationAndCountryComboFound =  await LocationSuggestion.find({locationSg:locationAndCountryCombo });
if(locationAndCountryComboFound.length==0){
    console.log("location is newly added")
const createLocation = await LocationSuggestion.create({
    locationSg:locationAndCountryCombo
})

}
 



    return Response.json({
       hotel
    })



}
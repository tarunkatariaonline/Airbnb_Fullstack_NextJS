import mongoose from "mongoose";
const { Schema } = mongoose;
const hotelSchema = new Schema({
   
    image:[
        {
            public_id:{
                type:String,
                // required:true
            },
            url:{
                type:String,
                // required:true
            }
        }
    ]
,
    name: {
        type:String,
        required:true
    },

    
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    price:{
        type:String,
        required:true
    },
    unavaiableDates:{
        type:[Date]
    },
    owner:{
        type:String
    },
    reviews:[
        {
            user:{
                type:String
            },
            name:{
                type:String,
                
            },
            rating:{
                type:Number,
                
            },
            comment:{
                type:String,
               
            }
        }
    ],
    numofreview:{
        type:Number,
        default:0
    },
    ratings:{
        type:Number,
        default:0
    },
    location:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    distance:{
        type:Number
    }
    

})

mongoose.models={};

export const Hotel = mongoose.model('Hotel', hotelSchema);
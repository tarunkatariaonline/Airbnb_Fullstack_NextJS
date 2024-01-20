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
    title: {
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
    hoteltype:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    unavaiableDates:{
        type:[Date]
    },
    hostid:{
        type:String
    },
    propertytype:{
        type:String
    },

    selfcheckin:{
        type:Boolean
    },
    destination:{
        type:String
    },

    adults:{
        type:Number
    },
    children:{
        type:Number
    },
    infents:{
        type:Number
    },

    totalguest:{
        type:Number
    },
    bedrooms:{
        type:Number
    },
    beds:{
        type:Number
    } ,
    bathrooms:{
        type:Number
    },
    checkintime:{
        type:Date
    },
    checkouttime:{
        type:Date
    },
    hostlanguage:{
        type:Date
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
    state:{
        type:String
    },
    country:{
        type:String
    }
    ,
    amenities:{
        wifi:{
            type:Boolean,
            default:false
        },
        kitchen:{
            type:Boolean,
            default:false
        },
        washingmachine:{
            type:Boolean,
            default:false
        },
        dryer:{
            type:Boolean,
            default:false
        },
        heating:{
            type:Boolean,
            default:false
        },
        dadicatedspace:{
            type:Boolean,
            default:false
        },
        tv:{
            type:Boolean,
            default:false
        },
        hairdryer:{
            type:Boolean,
            default:false
        },
        iron:{
            type:Boolean,
            default:false
        },
        pool:{
            type:Boolean,
            default:false
        },
        hottub:{
            type:Boolean,
            default:false
        },
        freeparking:{
            type:Boolean,
            default:false
        },
        cot:{
            type:Boolean,
            default:false
        },
        kingbed:{
            type:Boolean,
            default:false
        },
        gym:{
            type:Boolean,
            default:false
        }, 
         bbqgrill:{
            type:Boolean,
            default:false
        },
        breakfast:{
            type:Boolean,
            default:false
        },
        indoorfirepace:{
            type:Boolean,
            default:false
        },
        smokealarm:{
            type:Boolean,
            default:false
        },
        carbonmonooxidealarm:{
            type:Boolean,
            default:false
        },
    }

})

mongoose.models={};

export const Hotel = mongoose.model('Hotel', hotelSchema);
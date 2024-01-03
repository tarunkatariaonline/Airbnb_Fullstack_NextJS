import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    profilePic: String,

    username: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true
    },

    password: {
        type:String,
        required:true
    },

    cpassword: {
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },

    isAdmin: {
        type: Boolean,
        default: false,
      
    }
    ,
    isHost: {
    type:Boolean,
    default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isBanned:{
        type:Boolean,
        default:false
    }

})

mongoose.models={};

export const User = mongoose.model('User', userSchema);
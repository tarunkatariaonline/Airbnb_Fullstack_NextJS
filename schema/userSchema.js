import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    profilePic: String,

    username: String,

    email: String,

    password: String,

    cpassword: String,
    phoneno:Number,

    isAdmin: {
        type: Boolean,
        default: false
    }
    ,
    isHost: {
    type:Boolean,
    default:false
    }

})

mongoose.models={};

export const User = mongoose.model('User', userSchema);
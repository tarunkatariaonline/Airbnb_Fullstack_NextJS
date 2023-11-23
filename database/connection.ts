import mongoose from "mongoose"

export const connectMongoDB = async()=>{
    try{
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
  console.log("Connected To MongoDB.")
    }catch(err){
        console.log("Mongo DB Connection Error.")
    }
}
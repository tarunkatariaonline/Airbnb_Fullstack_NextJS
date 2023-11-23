'use server'
import { errorHandler } from "@/app/middleware/errorhandler";
import { connectMongoDB } from "@/database/connection";
import { User } from "@/schema/userSchema";
import {cookies} from 'next/headers'
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

export async function GET(request: Request) {
  return Response.json({
    message: "GET Request is not available on this API .",


  }, {
    status: 403
  })
}



export async function POST(req: Request) {
  await connectMongoDB();
  let { username, email, password, cpassword,phoneno } = await req.json()

  if (!username || !email || !password || !cpassword  || !phoneno) {
    return errorHandler("Please Fill All the Details", 403, false);
  }

  if (password !== cpassword) {
    return errorHandler("Your Password and Confirm Password Is Not Same.", 403, false);
  }

  const isEmailRegisterd = await User.findOne({ email: email });


  if (isEmailRegisterd) {
    // console.log(isEmailRegisterd.length);
    return errorHandler("Email is Already Registered .", 403, false);
  }





  password = await bcrypt.hash(password, 12);
  cpassword = await bcrypt.hash(cpassword, 12);
  //  console.log(password)
  const profilePic = "https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw"
  const user = await User.create({
    profilePic,
    username,
    email,
    password,
    cpassword,
    phoneno
  })
  const secretKey = process.env.JWT_SECRET_KEY;
  // console.log(secretKey);
  const Day = 24 * 60 * 60 * 1000*15
  var authToken = jwt.sign({ _id: user._id }, 'fsfsfasfsafsfsafsafasfsf');
  // console.log(authToken)
  cookies().set('authToken',authToken,{
   
  httpOnly:true,
  secure:true,
  expires:Date.now()+Day
 
  })

 

  return Response.json({
    message: "Sign Up Successfully ! ",
    user

  }, {
    status: 201
  });
}
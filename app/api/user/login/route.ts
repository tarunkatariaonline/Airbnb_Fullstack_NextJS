import { errorHandler } from "@/app/middleware/errorhandler"
import { User } from "@/schema/userSchema";
import { cookies } from "next/headers";
import  jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
export async function GET(request: Request) {
    return errorHandler("GET Request is not Allowed on API",403,false)
  }
  
 
  

  export async function POST(req: Request) {

    let {email,password} = await req.json();
    
    if(!email || !password){
      return errorHandler("Please Fill All The Details.",403,false);
    }

    const user = await User.findOne({email});
    if(!user){
        return errorHandler("User Not Found",403,false);
    }
    if(user?.password){
    const passwordMatch = await bcrypt.compare(password,user.password)
     if(!passwordMatch){
       return errorHandler("Password doesn't match",403,false);
      }
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    // console.log(secretKey);
    var authToken = jwt.sign({ _id: user._id }, 'fsfsfasfsafsfsafsafasfsf');
    // console.log(authToken)
    const Day = 24 * 60 * 60 * 1000*15
    cookies().set('authToken',authToken,{
      
        httpOnly:true,
        secure:true,
         expires: Date.now() + Day 
    })

  
  
    return Response.json({
      message:"Login Successfully !",
      user
      
      
      
    },{
      status:200
    })
  }
import { errorHandler } from "@/app/middleware/errorhandler";
import { userAuth } from "@/app/middleware/userauth";
import { connectMongoDB } from "@/database/connection";
import { User } from "@/schema/userSchema";


export const PUT = async(req:Request)=>{
  
    try{
const data = await req.json();
if(!data){
    return errorHandler("Please Fill The Details.",403,false);
}


if(data.email){
    return errorHandler("You can't Update Email ",403,false);
}

if(data.password||data.cpassword){
  return errorHandler("You can't Update Password Here",403,false);
}


if(data.isAdmin || data.isHost || data.isBanned||data.isVerified){
  return errorHandler("You Can't Update Role Of Yourself.",403,false);
}
 
await connectMongoDB();
const authedUser = await userAuth();
if(!authedUser){
    return errorHandler("Pleae Login First",403,false);
}


const user = await User.findByIdAndUpdate(authedUser.id,data,{
    new:true,
    runValidators:false,

    
});



    return Response.json({
        message:"Profile Updated Successfully.",
        success:true,
        user
    })

}catch{
    return errorHandler("Fill All The details",403,false);
}
}
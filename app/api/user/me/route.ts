import { errorHandler } from "@/app/middleware/errorhandler";
import { userAuth } from "@/app/middleware/userauth"

export const GET = async(req:Request)=>{

 const user  =  await userAuth();

 if(!user){
    console.log(user)
    return errorHandler("Please Login",403,false)
 }

   return  Response.json({
        message:"Varified",
        user
    },{
        status:200
    })
    

}
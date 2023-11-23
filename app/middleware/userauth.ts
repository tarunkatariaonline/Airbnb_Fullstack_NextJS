import  jwt  from "jsonwebtoken"
import { cookies } from "next/headers"
import { errorHandler } from "./errorhandler";
import { User } from "@/schema/userSchema";
import { stringify } from "querystring";
export const userAuth = async()=>{
 
 try{

    const cookieStore = cookies()
  const token = cookieStore.get('authToken');
//   console.log(token)
  if(!token){
   return null;
  }

   
      const verify = jwt.verify(token.value,'fsfsfasfsafsfsafsafasfsf');
    //   console.log("verify :",verify);
      

    
      if(!verify){
        return null;
      }

     
      if(verify){
      const user = User.findById(verify);
      return user;
      }
      
      

  
 }  catch(err){
    
 } 

}
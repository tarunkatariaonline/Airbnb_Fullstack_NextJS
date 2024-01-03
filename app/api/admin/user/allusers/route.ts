import { errorHandler } from "@/app/middleware/errorhandler"
import { userAuth } from "@/app/middleware/userauth";
import { connectMongoDB } from "@/database/connection";
import { User } from "@/schema/userSchema";

export const GET = async () => {

    try {

        await connectMongoDB();
        let authedUser = await userAuth();
        if(!authedUser){
          return  errorHandler("Please Login !",403,false);
        }
        
        const isAdmin:boolean= authedUser.isAdmin;

        if(!isAdmin){
            return errorHandler("You Are Not An Admin.",403,false);

        }

        const allUsers = await User.find();

    
        return Response.json({
            message: "All Users Get Successfully.",
            allUsers,
            success:true
        })

    } catch {
        return errorHandler("Something Went Wrong", 403, false);
    }
}
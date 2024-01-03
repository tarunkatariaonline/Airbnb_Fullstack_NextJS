import { errorHandler } from "@/app/middleware/errorhandler";
import { userAuth } from "@/app/middleware/userauth";
import { connectMongoDB } from "@/database/connection";
import { User } from "@/schema/userSchema";
import bcrypt from "bcrypt";
export async function PUT(req: Request) {


  try {




    let { oldpassword, password, cpassword } = await req.json();

    if (!oldpassword || !password || !cpassword) {
      return errorHandler("Fill All The Details", 403, false);
    }
    if (password !== cpassword) {
      return errorHandler("Password and Confirm Password Doesn't Match", 403, false);
    }

    if (oldpassword === password) {
      return errorHandler("Your New Password Is As Same As Old Password", 403, false);
    }


    await connectMongoDB();

    const authedUser = await userAuth();
    if (!authedUser) {
      return errorHandler("Please Login ", 403, false);
    }
    let user = await User.findById(authedUser.id);

    if (!user) {
      return errorHandler("User Not Found", 403, false);
    }

    const oldPasswordMatch = await bcrypt.compare(oldpassword, user.password);

    if (!oldPasswordMatch) {
      return errorHandler("Enter Your Old Password Correctly", 403, false);
    }

    password = await bcrypt.hash(password, 12);
    cpassword = await bcrypt.hash(cpassword, 12);

    user.password = password;
    user.cpassword = cpassword;

    await user.save({ validateBeforeSave: false })



    return Response.json({
      message: "Password Updated Successfully.",


    })
  } catch {
    return errorHandler("Please Fill All The Details", 403, false);
  }

}

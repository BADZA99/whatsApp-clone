import { UserModel } from "../models/index.js"
export const findUser=async (userId)=>{
    const user = await UserModel.findById(userId);
    if(!user){
        throw new Error("User not found");
    }
    return user;

}


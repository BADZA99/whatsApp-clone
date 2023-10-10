import { UserModel } from "../models/index.js"
export const findUser=async (userId)=>{
    const user = await UserModel.findById(userId);
    if(!user){
        throw new Error("User not found");
    }
    return user;

}

export const searchUsers = async (keywords,userId)=>{
    const users=await UserModel.find({
        $or:[
            // i to allow uppercase/lowaercase
            {name:{$regex:keywords,$options:'i'}},
            {email:{$regex:keywords,$options:'i'}},
        ]

    }).find({
        _id:{
            $ne:userId,
        }
    })
    return users;
}


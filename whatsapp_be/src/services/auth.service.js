import createHttpError from "http-errors";
import validator from "validator";
import {UserModel} from "../models/index.js";


// ENV VARIBLES
const { DEFAULT_PICTURE, DEFAULT_STATUS } = process.env;
export const createUser=async(userData)=>{
    const { name, email, picture, status, password } = userData;

    // check if fields are empty
    if (!name || !email  || !password) {
        throw createHttpError.BadRequest("Please provide all the  fields");
    }

    // check name length using validator
    if (!validator.isLength(name,{min:2,max:16,})) 
    {
        throw createHttpError.BadRequest("Name must be between 2 and 16 characters");  
    }

    // check status length
    if (status && status.length > 64) {
     
        throw createHttpError.BadRequest(
          "Status must be less than 64 characters"
        );
      
    }

    // check is email adress is valid 
    if (!validator.isEmail(email)) {
        throw createHttpError.BadRequest("Please provide a valid email");
    }

    // check if user already exist
    const checkDb=await UserModel.findOne({email});
    if (checkDb) {
        throw createHttpError.Conflict(`${email} is already registered`);
    }

    // check password length
    if (!validator.isLength(password,{min:6,max:128})) {
        throw createHttpError.BadRequest(" Your Password must be between 6 and 128 characters");
    }

    // hash password --->to be done in th user model
    

    // add new user
    const user= await new UserModel({
        name,
        email,
        picture:picture || DEFAULT_PICTURE,
        status: status || DEFAULT_STATUS,
        password,
    }).save();

    return user;
    



};
import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import { searchUsers as searchUsersService } from "../services/user.service.js";

export const searchUsers =async (req,res,next)=>{
    try {
        const keyword =req.query.search;
        if(!keyword){
            logger.error("please add a search query first");
            throw createHttpError.BadRequest("oops .. something gone wrong");
        }
        const users=await searchUsersService(keyword,req.user.userId);
        res.status(200).json(users);
        
    } catch (error) {
        next(error)
        
    }
}
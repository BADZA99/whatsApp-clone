import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import { findUser } from "../services/user.service.js";
import { createConversation, doesConversationExist, getUserConversations, populateConversation } from "../services/conversation.service.js";

export const create_open_conversation=async (req,res,next)=>{
    try {
       const sender_id=req.user.userId;
       const {receiver_id}=req.body;
      //  console.log("hello form convo")
    //    check is receiver_id is provided
         if(!receiver_id){
              logger.error(
                `user ${sender_id} is trying to open conversation without receiver_id`
              );
              throw createHttpError.BadGateway(' oops ...something went wrong');
         }
        //  check if chats exist
        const existed_conversation=await doesConversationExist(
            sender_id,
            receiver_id
        );

        if(existed_conversation){
           res.json(existed_conversation);
        }else{
            let receiver_user=await findUser(receiver_id)
           let convoData = {
             name: receiver_user.name,
             isGroup:false,
             users: [sender_id, receiver_id],
           };
           const newConvo=await createConversation(convoData);
           const populatedConvo=await populateConversation(newConvo._id,"users","-password")
              res.status(200).json(populatedConvo);
        }


    } catch (error) {
       next(error) 
    }
}

export const getConversations=async(req,res,next)=>{
   try {
      const user_id=req.user.userId;
      const conversations=await  getUserConversations(user_id);
      res.status(200).json(conversations);
   } catch (error) {
      
   }
}
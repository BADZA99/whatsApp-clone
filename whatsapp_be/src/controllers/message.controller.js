import logger from "../configs/logger.config.js";
import { createMessage, populateMessage } from "../routes/message.service.js";
import { updateLatestMessage } from "../services/conversation.service.js";


export const sendMessage=async (req,res,next)=>{
    try{
       
        const user_id=req.user.user_id;
        const {message,convo_id,files}=req.body;
        if (!convo_id || (!message && !files)) {
            logger.error("please provider a conversation id and a message body"); 
            return res.sendStatus(400);
        }
        const msgData={
            sender:user_id,
            message,
            conversation:convo_id,
            files:files || [],
        }
        let newMessage=await createMessage(msgData);
        let populatedMessage=await populateMessage(newMessage._id);
        await updateLatestMessage(convo_id,newMessage);
        res.json(populatedMessage);
        // res.status(201).json({message});
    } catch (error){
        next (error);
    }
}

export const getMessages=async (req,res,next)=>{
    try{
        res.send("get messages")
        // const {conversationId}=req.params;
        // const messages=await getConversationMessages(conversationId);
        // res.status(200).json({messages});
    } catch (error){
        next (error);
    }
}
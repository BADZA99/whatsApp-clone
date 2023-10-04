export const sendMessage=async (req,res,next)=>{
    try{
        res.send("send message")
        // const {conversationId}=req.params;
        // const {text,attachments}=req.body;
        // const message=await createMessage({
        //     conversationId,
        //     senderId:req.user.userId,
        //     text,
        //     attachments,
        // });
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
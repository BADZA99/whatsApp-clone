import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types;

const conversationSchema=mongoose.Schema({
    sender:{
        type:ObjectId,
        ref:"UserModel",
    },
    message:{
        type:String,
        trim:true,
    },
    conversation:{
        type:ObjectId,
        ref:"ConversationModel",
    },
    file:[],   
    
},{
    collection:"messages",
    timestamps:true,
});

const MessageModel =
  mongoose.models.MessageModel ||
  mongoose.model("MessageModel", conversationSchema);
  export default  MessageModel ;

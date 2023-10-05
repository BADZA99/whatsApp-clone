import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types;

const conversationSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"conversation name is required"],
        trim:true,
    },
    picture:{
        type:String,
        required:true,
        // default:"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    },
    isGroup:{
        type:Boolean,
        required:true,
        default:false,
    },

    users:[
        {
            type:ObjectId,
            ref:"UserModel",
        }
    ],

    latestMessage:{
        type:ObjectId,
        ref:"MessageModel",
    
    },

    admin:{
        type:ObjectId,
        ref:"UserModel",
    },
    
},{
    collection:"conversations",
    timestamps:true,
});

const ConversationModel =
  mongoose.models.ConversationModel ||
  mongoose.model("ConversationModel", conversationSchema);


  export default ConversationModel;

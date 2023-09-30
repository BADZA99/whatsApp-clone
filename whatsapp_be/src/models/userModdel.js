import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: [true, "This email is already registered"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],

    },
    picture: {
      type: String,
      default:
        "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    },
    status:{
        type:String,
        default:"Hey there I am using whatsapp"
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
        minlength:[6,'Please make sure your password is at least 6 characters long'],
        maxlength:[128,'Please make sure your password is less than 128 characters long'],
    },
},{
    collection:"users",
    timestamps:true,

});

// just before saving hash password
userSchema.pre('save',async function(next){
  try {
    if (this.isNew) {
      const salt=await bcrypt.genSalt(12);
      const hashedPassword=await bcrypt.hash(this.password,salt);
      this.password=hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
})

const UserModel=mongoose.models.UserModel || mongoose.model('UserModel',userSchema);
export default UserModel;

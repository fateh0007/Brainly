import mongoose,{isValidObjectId, model, Schema} from "mongoose";
import { ObjectId } from "mongodb";
mongoose.connect("Your mongodb URI")

const UserSchema = new Schema({
    username: {type:String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref:'Tag'}],
    type: String,
    userId : {type: mongoose.Types.ObjectId, ref: 'User', required:true},
})

export const ContentModel = model("Content",ContentSchema);

const LinkSchema = new Schema({
    hash : String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required:true,unique:true},
})

export const LinkModel = model("Links",LinkSchema);

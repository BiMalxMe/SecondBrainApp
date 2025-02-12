import mongoose, { model, Model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://BiMalxMw:papa9814479922@cluster0.8t0ty.mongodb.net/brainly")
const userSchema=new Schema({
    username:{type:String,unique:true},
    password: String
})

const contentSchema = new Schema({
    title : String,
    link : String,
    tags : [{type:mongoose.Types.ObjectId ,ref:"Tag"}],
    userId : {type : mongoose.Types.ObjectId,ref : "User",required : true}
})
const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const userModel=model("User",userSchema)
export const contentModel =  model("Content", contentSchema)
export const LinkModel = model("Links", LinkSchema)
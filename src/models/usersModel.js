import { Schema, model } from "mongoose"

let userSchema = new Schema({
    username : {type:String,unique:true},
    password: String,
    role:{type:String,default:"user"}
},{strict:true})

let userModel = model("User",userSchema)

export default userModel 
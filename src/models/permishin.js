import { Schema, model } from "mongoose"
import { type } from "os"

let  pessschema = new Schema({
    user_id:{type:Schema.Types.ObjectId,ref:"user"},
    actios:[String],
    pessModle:String
},{strict:true})

let userModel = model("pessschema", pessschema)

export default userModel 
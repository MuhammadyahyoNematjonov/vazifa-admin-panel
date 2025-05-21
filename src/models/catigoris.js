import { Schema, model } from "mongoose"
import { type } from "os"

let  catigorisschema = new Schema({
    name:String
},{strict:true})

let userModel = model("catigoris", catigorisschema)

export default userModel 
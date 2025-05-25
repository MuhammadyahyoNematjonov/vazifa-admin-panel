import { Schema, model } from "mongoose";

export const permissionModel = model("Permission", new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  branch_id: { type: Schema.Types.ObjectId, ref: "Branch" },
  createdAt: { type: Date, default: new Date() },
  action:[String]
}));

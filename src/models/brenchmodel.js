import { Schema, model } from "mongoose";

const branchSchema = new Schema({
  name: String,
  address: String,
  createdAt: { type: Date, default: new Date() }
});

const branchModel = model("Branch", branchSchema);
export default branchModel;

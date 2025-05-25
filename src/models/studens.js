import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  username:String,
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
});

export const studentModel = model("Student", studentSchema);

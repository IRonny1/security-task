import { model, Schema } from "mongoose";

const User = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  activationLink: { type: String },
  isActive: { type: Boolean, required: true, default: false },
});

export default model("User", User);

import { model, Schema } from "mongoose";

const UserConfig = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "User",
  },
  accessToken: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true, unique: true },
  ip: { type: String, required: true, unique: true },
});

export default model("UserConfig", UserConfig);

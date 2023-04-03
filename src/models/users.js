import { Model, Schema } from "../db";

const userSchema = new Schema(
  {
    picture: { type: String },
    name: { type: String, required: true },
    role: { type: String, default: "user" },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default Model("User", userSchema);

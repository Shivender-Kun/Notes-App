import { Model, Schema } from "../db";

const labelSchema = new Schema(
  {
    name: { type: String, required: true },
    userRef: { type: String, required: true },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default Model("Label", labelSchema);

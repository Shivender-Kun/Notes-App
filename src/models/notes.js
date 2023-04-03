import { Model, Schema } from "../db";

const notesSchema = new Schema(
  {
    labels: [String],
    title: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    userRef: { type: String, required: true },
    description: { type: String, required: true },
    backgroundColor: { type: String, default: "#efefef" },
  },
  { timestamps: true }
);

export default Model("Notes", notesSchema);

import { Schema, Model } from "../db";

const userLabels = new Schema(
  {
    labelRef: { type: String, required: true },
    userRef: { type: String, required: true },
  },
  { timestamps: true }
);

export default Model("userLabels", userLabels);

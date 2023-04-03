import mongoose from "mongoose";
import { db_url } from "../config";

export const Schema = mongoose.Schema;
export const Model = mongoose.model;

const DB = {
  connect() {
    mongoose.connect(db_url);
    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error"));
    db.on("open", () => console.log("Database connected successfully..."));
  },
};

export default DB;

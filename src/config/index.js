import dotenv from "dotenv";

dotenv.config();

export const {
  PORT,
  DEBUG_MODE,
  ATLAS_USER,
  ATLAS_PASSWORD,
  ATLAS_CLUSTER,
  MONGO_DB,
  JWT_SECRET,
} = process.env;

export const db_url = `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@${ATLAS_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`;

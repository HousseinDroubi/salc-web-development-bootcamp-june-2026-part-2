import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL || "";

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

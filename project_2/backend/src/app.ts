import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import userRoutes from "./routes/user_routes.js";
import todoRoutes from "./routes/todo_routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || [];
app.use(cookieParser());

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200,
    maxAge: 600,
    credentials: true, // We need this in order to send token as cookies
  }),
);

app.use(express.json());

app.use("/auth", userRoutes);
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

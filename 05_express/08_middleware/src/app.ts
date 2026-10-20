import dotenv from "dotenv";
dotenv.config();
import express from "express";
import todoRoutes from "./routes/todo_routes.js";

const app = express();
app.use("/todos", todoRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

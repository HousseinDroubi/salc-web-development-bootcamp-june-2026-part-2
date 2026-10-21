import dotenv from "dotenv";
dotenv.config();

import express from "express";
import todoRoutes from "./routes/todo_routes.js";

const app = express();
app.use(express.json());
app.use("/todos", todoRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

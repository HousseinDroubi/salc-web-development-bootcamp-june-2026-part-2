import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo_routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/todos",todoRoutes);

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});
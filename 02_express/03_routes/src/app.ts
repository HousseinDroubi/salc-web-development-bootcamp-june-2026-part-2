import express from "express";
import dotenv from "dotenv";
import user_routes from "./routes/user_routes.js";
import product_routes from "./routes/product_routes.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users",user_routes);
app.use("/products",product_routes);


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})
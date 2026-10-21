import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    credentials: true, // We need this in order to send token as cookies
  }),
);
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

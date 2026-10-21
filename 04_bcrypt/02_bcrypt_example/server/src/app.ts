import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import type { user } from "./types/user.js";
import JWT from "./utils/jwt.js";

import express, { type Request, type Response } from "express";
import { type product } from "./types/products.js";
import Bcrypt from "./utils/bcrypt.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // allow cookies to be sent in cross-origin requests
    maxAge: 600, // 10 minutes
    optionsSuccessStatus: 204,
  }),
);
const PORT = process.env.PORT || 4000;

const users_from_db: user[] = [];
const products_from_db: product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    description: "This is product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "This is product 2",
  },
];

app.get("/products", (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const decoded = JWT.verifyToken(token);
  if (!decoded) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  return res.status(200).json({
    products: products_from_db,
  });
});

app.post("/create_account", async (req: Request, res: Response) => {
  const body: user = req.body;
  body.password = await Bcrypt.hashPassword(body.password);
  users_from_db.push(body);
  console.log(users_from_db);
  return res.status(201).json({
    message: "Account created successfully",
  });
});

app.post("/login", async (req: Request, res: Response) => {
  const body: user = req.body;
  const index = users_from_db.findIndex(
    async (u) => u.username === body.username,
  );

  if (index === -1) {
    return res.status(401).json({
      message: "wrong credentials",
    });
  }
  const result = await Bcrypt.comparePasswords(
    body.password,
    users_from_db[index]!.password,
  );

  if (!result) {
    return res.status(401).json({
      message: "wrong credentials",
    });
  }

  // send the jwt token to the client in cookis (httpOnly cookie)
  return res
    .cookie("token", JWT.signToken(users_from_db[index]!), {
      httpOnly: true, // prevents client-side JavaScript from accessing the cookie (helps mitigate XSS attacks)
      sameSite: "strict", // prevents the browser from sending this cookie along with cross-site requests (helps mitigate CSRF attacks)
      secure: process.env.NODE_ENV === "production", // ensures the cookie is only sent over HTTPS in production
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
    .status(200)
    .json({
      message: "Logged in",
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

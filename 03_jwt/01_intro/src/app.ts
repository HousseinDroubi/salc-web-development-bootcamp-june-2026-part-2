import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || "secret-key";

interface user_payload {
  id: number;
}

const user_data: user_payload = {
  id: 123,
};

const signToken = (data: user_payload) => {
  return jwt.sign(data, SECRET_KEY, {
    expiresIn: "2h",
  });
};

const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};

const token: string = signToken(user_data);
console.log(token);
const result_back = verifyToken(token);
console.log(result_back);

import jwt from "jsonwebtoken";
import { type jwt_payload } from "../types/user.js";

const SECRET_KEY = process.env.SECRET_KEY || "secret-key";
class Jwt {
  public static signToken(data: jwt_payload) {
    return jwt.sign(data, SECRET_KEY, {
      expiresIn: "1d", // 1 day
    });
  }

  public static verifyToken(token: string) {
    return jwt.verify(token, SECRET_KEY);
  }
}

export default Jwt;

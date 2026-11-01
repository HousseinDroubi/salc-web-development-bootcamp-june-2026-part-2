import jwt from "jsonwebtoken";
import type { UserJwtPayloadType } from "../types/user_types.js";

const SECRET_KEY = process.env.SECRET_KEY || "secret-key";

class JwtUtils {
  public static signToken(data: UserJwtPayloadType) {
    return jwt.sign(data, SECRET_KEY, {
      expiresIn: "1d", // 1 day
    });
  }

  public static verifyToken(token: string) {
    return jwt.verify(token, SECRET_KEY);
  }
}
export default JwtUtils;

import type { NextFunction, Request, Response } from "express";
import JwtUtils from "../../utils/token_utils.js";
import type { JwtPayload } from "jsonwebtoken";

const tokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.cookies?.token;
  if (!token) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }

  const decoded: JwtPayload = JwtUtils.verifyToken(token) as JwtPayload;
  if (!decoded) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }
  req.body = { ...req.body, id: decoded.id as number };
  next();
};

export default tokenMiddleware;

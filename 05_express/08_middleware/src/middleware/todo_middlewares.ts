import { type NextFunction, type Request, type Response } from "express";

const checkSomeConditions = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (1 > 0)
    //always true
    return res.status(400).json({
      message: "Bad request",
    });
  next();
};

export default checkSomeConditions;

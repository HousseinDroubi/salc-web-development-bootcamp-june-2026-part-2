import type { NextFunction, Request, Response } from "express";
import createAccountValidator, {
  type loginAndCreateAccountDto,
} from "../../validations/requests/auth/validate_create_accout.js";

const loginAndCreateAccountMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const data: loginAndCreateAccountDto = req.body;
  const result = createAccountValidator.safeParse(data);

  if (!result.success) {
    res.status(400).json({
      message: result.error.issues[0]?.message,
    });
    return;
  }

  next();
};

export default loginAndCreateAccountMiddleware;

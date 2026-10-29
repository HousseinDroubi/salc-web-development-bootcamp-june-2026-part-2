import type { NextFunction, Request, Response } from "express";
import type { updatePasswordDto } from "../../validations/requests/auth/validate_update_password.js";
import updatePasswordValidator from "../../validations/requests/auth/validate_update_password.js";

const updatePasswordMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const data: updatePasswordDto = req.body;
  const result = updatePasswordValidator.safeParse(data);

  if (!result.success) {
    res.status(400).json({
      message: result.error.issues[0]?.message,
    });
    return;
  }

  next();
};

export default updatePasswordMiddleware;

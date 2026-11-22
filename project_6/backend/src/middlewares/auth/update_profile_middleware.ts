import type { NextFunction, Request, Response } from "express";
import type { updateProfileDto } from "../../validations/requests/auth/validate_update_profile.js";
import updateProfileValidator from "../../validations/requests/auth/validate_update_profile.js";

const updateProfileMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const data: updateProfileDto = req.body;
  const result = updateProfileValidator.safeParse(data);

  if (!result.success) {
    res.status(400).json({
      message: result.error.issues[0]?.message,
    });
    return;
  }

  next();
};

export default updateProfileMiddleware;

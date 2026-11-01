import type { NextFunction, Request, Response } from "express";
import todoParamsValidator, {
  type todoIdDto,
} from "../../validations/requests/todo/validate_todo_id.js";

const checkTodoIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const data = req.params;
  const result = todoParamsValidator.safeParse(data);

  if (!result.success) {
    res.status(400).json({
      message: result.error.issues[0]?.message,
    });
    return;
  }

  next();
};

export default checkTodoIdMiddleware;

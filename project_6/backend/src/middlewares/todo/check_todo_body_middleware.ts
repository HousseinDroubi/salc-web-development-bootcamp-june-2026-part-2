import type { NextFunction, Request, Response } from "express";
import todoBodyValidator, {
  type todoBodyDto,
} from "../../validations/requests/todo/validate_todo_body.js";

const checkTodoBodyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const data: todoBodyDto = req.body;
  const result = todoBodyValidator.safeParse(data);

  if (!result.success) {
    res.status(400).json({
      message: result.error.issues[0]?.message,
    });
    return;
  }

  next();
};

export default checkTodoBodyMiddleware;

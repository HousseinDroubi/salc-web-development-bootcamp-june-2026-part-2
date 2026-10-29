import { type Request, type Response } from "express";
import UserService from "../services/user_service.js";
import type { loginAndCreateAccountDto } from "../validations/requests/auth/validate_create_accout.js";
import type { todoBodyDto } from "../validations/requests/todo/validate_todo_body.js";
import TodoService from "../services/todo_service.js";
import type { UserJwtPayloadType } from "../types/user_types.js";
import type { TodoType } from "../types/todo_types.js";

class TodoController {
  public static addodo = async (req: Request, res: Response): Promise<void> => {
    const body: todoBodyDto = req.body;
    const result = await TodoService.createTodo(body.title, body.id);
    if (result == 500) {
      res.status(result).json({
        message: "Interal Server Error",
      });
      return;
    }

    res.status(result).json({
      message: "Todo Created",
    });
  };

  public static getAllTodos = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const { id }: UserJwtPayloadType = req.body;
    const todos: TodoType[] = await TodoService.getAllTodos(id);

    res.status(200).json({
      message: "All Todos Returned Successfully",
      todos,
    });
  };

  public static getTodoById = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    // Todo
  };

  public static updateTodo = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    // Todo
  };

  public static deleteTodoById = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const { id }: UserJwtPayloadType = req.body;
    const todo_id = Number.parseInt(req.params.todo_id as string);
    const result = await TodoService.deleteTodoById(todo_id, id);
    if (result == 403) {
      res.status(result).json({
        message: "Action not allowed",
      });
      return;
    }

    if (result == 500) {
      res.status(result).json({
        message: "Internal Server Error",
      });
      return;
    }

    res.status(result).send();
  };
}

export default TodoController;

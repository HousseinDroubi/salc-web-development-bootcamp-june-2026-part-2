import { type Request, type Response } from "express";
import type { Todo } from "../interfaces/todo_interfaces.js";

class TodoController {
  private static todos: Todo[] = [];
  public static getAllTodos(req: Request, res: Response) {
    return res.json({
      todos: TodoController.todos,
    });
  }
}

export default TodoController;

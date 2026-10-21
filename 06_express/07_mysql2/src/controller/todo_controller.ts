import { type Request, type Response } from "express";
import type { Todo } from "../interfaces/todo_interfaces.js";
import TodoService from "../services/todo_service.js";

class TodoController {
  public static async getAllTodos(
    request: Request,
    response: Response,
  ): Promise<void> {
    try {
      const todos: Todo[] = await TodoService.getAllTodos();
      response.status(200).json({
        todos,
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({
        message: "Server error",
      });
    }
  }

  public static async getTodoById(
    request: Request,
    response: Response,
  ): Promise<void> {
    try {
      const id = parseInt(request.params.id as string);
      const todo: Todo | undefined = await TodoService.getTodoById(id);

      if (todo == undefined) {
        response.status(404).json({
          message: "Todo not found",
        });
        return;
      }

      response.status(200).json({
        todo,
      });
    } catch (error) {
      response.status(500).json({
        message: "Server error",
      });
    }
  }

  public static async addTodo(
    request: Request,
    response: Response,
  ): Promise<void> {
    try {
      const todo = await TodoService.addTodo(request.body);
      response.status(201).json({
        todo: todo,
      });
    } catch (error) {
      response.status(500).json({
        message: "Server error",
      });
    }
  }

  public static async updateTodo(
    request: Request,
    response: Response,
  ): Promise<void> {
    try {
      const id = parseInt(request.params.id as string);
      const result: Todo | 404 | 405 = await TodoService.updateTodo(
        id,
        request.body,
      );

      if (result == 404) {
        response.status(404).json({
          message: "Todo not found",
        });
        return;
      } else if (result == 405) {
        response.status(405).json({
          message: "Please send at least one parameter to update",
        });
        return;
      }

      response.status(200).json({
        todo: result,
      });
    } catch (error) {
      response.status(500).json({
        message: "Server error",
      });
    }
  }

  public static async deleteTodo(
    request: Request,
    response: Response,
  ): Promise<void> {
    try {
      const id = parseInt(request.params.id as string);
      const deleted_todo: boolean = await TodoService.deleteTodo(id);

      if (!deleted_todo) {
        response.status(404).json({
          message: "Todo not found",
        });
        return;
      }

      response.status(204).send();
    } catch (error) {
      response.status(500).json({
        message: "Server error",
      });
    }
  }
}

export default TodoController;

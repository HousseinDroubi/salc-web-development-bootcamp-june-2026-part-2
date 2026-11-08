import TodoModel from "../models/todo_model.js";
import type { TodoType } from "../types/todo_types.js";

class TodoService {
  public static async createTodo(
    title: string,
    user_id: string,
  ): Promise<201 | 500> {
    const result = await TodoModel.createTodo(title, user_id);
    if (!result) {
      return 500;
    }

    return 201;
  }

  public static async getAllTodos(user_id: string): Promise<TodoType[]> {
    return await TodoModel.getAllTodos(user_id);
  }

  public static async getTodoById(
    user_id: string,
    todo_id: string,
  ): Promise<TodoType | 403 | 404> {
    const todo: TodoType | undefined = await TodoModel.getTodoById(todo_id);

    if (!todo) {
      return 404;
    }

    if (String(todo.user_id) != user_id) {
      return 403;
    }

    return todo;
  }

  public static async updateTodo(
    todo_title: string,
    todo_id: string,
    user_id: string,
  ): Promise<204 | 403 | 404 | 500> {
    const todo = await TodoModel.getTodoById(todo_id);
    if (!todo) {
      return 404;
    }

    if (String(todo.user_id) != user_id) {
      return 403;
    }

    const result = await TodoModel.updateTodo(todo_id, todo_title);
    return result ? 204 : 500;
  }

  public static async deleteTodoById(
    todo_id: string,
    user_id: string,
  ): Promise<204 | 403 | 500> {
    const todo = await TodoModel.getTodoById(todo_id);
    if (!todo) {
      return 403;
    }

    if (String(todo.user_id) != user_id) {
      return 403;
    }

    const result = await TodoModel.deleteTodoById(todo_id);
    return result ? 204 : 500;
  }
}

export default TodoService;

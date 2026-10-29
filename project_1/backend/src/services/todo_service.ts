import TodoModel from "../models/todo_model.js";
import type { TodoType } from "../types/todo_types.js";

class TodoService {
  public static async createTodo(
    title: string,
    user_id: number,
  ): Promise<201 | 500> {
    const result = await TodoModel.createTodo(title, user_id);
    if (!result) {
      return 500;
    }

    return 201;
  }

  public static async getAllTodos(user_id: number): Promise<TodoType[]> {
    return await TodoModel.getAllTodos(user_id);
  }

  public static async deleteTodoById(
    todo_id: number,
    user_id: number,
  ): Promise<204 | 403 | 500> {
    const todo = await TodoModel.getTodoById(todo_id);
    if (!todo) {
      return 403;
    }

    if (todo.user_id != user_id) {
      return 403;
    }

    const result = await TodoModel.deleteTodoById(todo_id);
    return result ? 204 : 500;
  }

  // public static async updateProfile(
  //   id: number,
  //   username: string,
  // ): Promise<403 | 500 | string> {
  //   const user = await UserModel.getUser(undefined, username);

  //   if (user) {
  //     return 403;
  //   }

  //   const result = await UserModel.updateProfile(username, id);
  //   if (!result) {
  //     return 500;
  //   }

  //   return username;
  // }

  // public static async updatePassword(
  //   id: number,
  //   old_password: string,
  //   new_password: string,
  // ): Promise<200 | 401 | 404 | 500> {
  //   const user = await UserModel.getUser(id);

  //   if (!user) {
  //     return 404;
  //   }

  //   const result = await BcryptUtils.comparePasswords(
  //     old_password,
  //     user.password,
  //   );
  //   if (!result) {
  //     return 401;
  //   }

  //   const is_user_added = await UserModel.updatePassword(new_password, id);
  //   return is_user_added ? 200 : 500;
  // }
}

export default TodoService;

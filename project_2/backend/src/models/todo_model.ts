import pool from "../database/database.config.js";
import type { TodoType } from "../types/todo_types.js";

class TodoModel {
  public static async createTodo(
    title: string,
    user_id: number,
  ): Promise<boolean> {
    const result = await pool.query(
      "INSERT INTO todos(title,user_id) VALUES($1,$2)",
      [title, user_id],
    );

    return (result.rowCount ?? 0) > 0;
  }

  public static async getAllTodos(user_id: number): Promise<TodoType[]> {
    const { rows } = await pool.query<TodoType>(
      "SELECT id, title, added_at FROM todos WHERE user_id = $1",
      [user_id],
    );

    return rows;
  }

  public static async updateTodo(
    todo_id: number,
    todo_title: string,
  ): Promise<boolean> {
    const result = await pool.query(
      "UPDATE todos SET title = $1 WHERE id = $2",
      [todo_title, todo_id],
    );

    return (result.rowCount ?? 0) > 0;
  }

  public static async deleteTodoById(todo_id: number): Promise<boolean> {
    const result = await pool.query("DELETE FROM todos WHERE id = $1", [
      todo_id,
    ]);

    return (result.rowCount ?? 0) > 0;
  }

  public static async getTodoById(
    todo_id: number,
  ): Promise<TodoType | undefined> {
    const { rows } = await pool.query<TodoType>(
      "SELECT * FROM todos WHERE id = $1 LIMIT 1",
      [todo_id],
    );

    return rows[0];
  }
}

export default TodoModel;

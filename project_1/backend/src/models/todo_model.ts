import type { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../database/database.config.js";
import type { TodoType } from "../types/todo_types.js";

class TodoModel {
  public static async createTodo(
    title: string,
    user_id: number,
  ): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO todos(title,user_id) VALUES(?,?)",
      [title, user_id],
    );

    return result.affectedRows > 0;
  }

  public static async getAllTodos(user_id: number): Promise<TodoType[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT id, title, added_at FROM todos WHERE user_id = ?",
      [user_id],
    );

    return rows as TodoType[];
  }

  public static async updateTodo(
    todo_id: number,
    todo_title: string,
  ): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      "UPDATE todos SET title = ? WHERE id = ?",
      [todo_title, todo_id],
    );

    return result.affectedRows > 0;
  }

  public static async deleteTodoById(todo_id: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      "DELETE FROM todos WHERE id = ?",
      [todo_id],
    );

    return result.affectedRows > 0;
  }

  public static async getTodoById(
    todo_id: number,
  ): Promise<TodoType | undefined> {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM todos WHERE id = ? LIMIT 1",
      [todo_id],
    );

    return rows[0] as TodoType;
  }
}

export default TodoModel;

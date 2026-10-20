import { type ResultSetHeader, type RowDataPacket } from "mysql2";
import pool from "../database/config.js";
import { type Todo } from "../interfaces/todo_interfaces.js";

class TodoModel {
  public static async getAllTodos(): Promise<Todo[]> {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM todos");
    return rows as Todo[];
  }

  public static async getTodoById(id: number): Promise<Todo | undefined> {
    // SELECT * FROM todos where id = id LIMIT 1
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM todos where id = ? LIMIT 1`,
      [id],
    );

    return rows[0] as Todo;
  }

  public static async addTodo(new_todo: Todo): Promise<Todo> {
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO todos(title, description, completed) VALUES (?, ?, ?)",
      [new_todo.title, new_todo.description, new_todo.completed],
    );

    return { ...new_todo, id: result.insertId };
  }

  public static async updateTodo(
    id: number,
    updated_todo: Todo,
  ): Promise<void> {
    await pool.query(
      "UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?",
      [
        updated_todo.title,
        updated_todo.description,
        updated_todo.completed,
        id,
      ],
    );
  }

  public static async deleteTodo(id: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      "DELETE FROM todos WHERE id = ?",
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default TodoModel;

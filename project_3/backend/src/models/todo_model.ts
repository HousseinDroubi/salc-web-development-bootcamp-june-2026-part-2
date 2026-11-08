import type { TodoType } from "../types/todo_types.js";
import TodoSchemaModel from "../schemas/todo_schema.js";

class TodoModel {
  public static async createTodo(
    title: string,
    user_id: string,
  ): Promise<boolean> {
    const result = await TodoSchemaModel.create({
      title,
      user_id,
    });

    return Boolean(result?._id);
  }

  public static async getAllTodos(user_id: string): Promise<TodoType[]> {
    const todos = await TodoSchemaModel.find(
      { user_id },
      "title added_at",
    ).lean<TodoType[]>();

    return todos;
  }

  public static async updateTodo(
    todo_id: string,
    todo_title: string,
  ): Promise<boolean> {
    const result = await TodoSchemaModel.updateOne(
      { _id: todo_id },
      { $set: { title: todo_title } },
      { runValidators: true },
    );

    return result.matchedCount > 0;
  }

  public static async deleteTodoById(todo_id: string): Promise<boolean> {
    const result = await TodoSchemaModel.deleteOne({ _id: todo_id });

    return result.deletedCount > 0;
  }

  public static async getTodoById(
    todo_id: string,
  ): Promise<TodoType | undefined> {
    const todo = await TodoSchemaModel.findById(todo_id).lean<TodoType>();

    return todo ?? undefined;
  }
}

export default TodoModel;

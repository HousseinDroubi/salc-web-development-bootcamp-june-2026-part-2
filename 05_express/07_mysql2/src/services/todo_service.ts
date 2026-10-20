import TodoModel from "../models/todo_model.js";
import { type Todo } from "../interfaces/todo_interfaces.js";

class TodoService {
  public static async getAllTodos(): Promise<Todo[]> {
    return await TodoModel.getAllTodos();
  }

  public static async getTodoById(id: number): Promise<Todo | undefined> {
    return await TodoModel.getTodoById(id);
  }

  public static async addTodo(todo: Omit<Todo, "completed">): Promise<Todo> {
    const new_todo: Todo = {
      ...todo,
      completed: false,
    };
    return await TodoModel.addTodo(new_todo);
  }

  public static async updateTodo(
    id: number,
    todo: Partial<Todo>,
  ): Promise<Todo | 404 | 405> {
    const todo_db: Todo | undefined = await TodoModel.getTodoById(id);

    if (!todo_db) {
      return 404;
    }

    if (
      todo.title == undefined &&
      todo.description == undefined &&
      todo.completed == undefined
    ) {
      return 405;
    }

    if (todo.title !== undefined) {
      todo_db.title = todo.title;
    }

    if (todo.description !== undefined) {
      todo_db.description = todo.description;
    }

    if (todo.completed !== undefined) {
      todo_db.completed = todo.completed;
    }

    await TodoModel.updateTodo(id, todo_db);

    return todo_db;
  }

  public static async deleteTodo(id: number): Promise<boolean> {
    return await TodoModel.deleteTodo(id);
  }
}

export default TodoService;

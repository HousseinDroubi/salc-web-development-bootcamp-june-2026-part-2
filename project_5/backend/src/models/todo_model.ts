import type { TodoType } from "../types/todo_types.js";
import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../prisma/prisma.js";

class TodoModel {
  public static async createTodo(
    title: string,
    user_id: string,
  ): Promise<boolean> {
    const result = await prisma.todo.create({
      data: {
        title,
        user_id,
      },
    });

    return Boolean(result?.id);
  }

  public static async getAllTodos(user_id: string): Promise<TodoType[]> {
    const todos = await prisma.todo.findMany({
      where: {
        user_id,
      },
    });

    return todos;
  }

  public static async updateTodo(
    todo_id: string,
    todo_title: string,
  ): Promise<boolean> {
    try {
      const updated_todo = await prisma.todo.update({
        where: {
          id: todo_id,
        },
        data: {
          title: todo_title,
        },
      });

      return !!updated_todo;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        return false;
      }
      throw error;
    }
  }

  public static async deleteTodoById(todo_id: string): Promise<boolean> {
    try {
      const result = await prisma.todo.delete({ where: { id: todo_id } });
      return !!result;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        return false;
      }
      throw error;
    }
  }

  public static async getTodoById(todo_id: string): Promise<TodoType | null> {
    const todo = await prisma.todo.findUnique({
      where: {
        id: todo_id,
      },
    });

    return todo;
  }
}

export default TodoModel;

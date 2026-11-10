import * as z from "zod";

// Auth
const usernameValidator = z.string().min(3).max(10);
const passwordValidator = z.string().min(5).max(10);

// Todos
const todoTitleValidator = z.string().min(10).max(50);
const todo_idValidator = z.coerce.string().min(1);

export {
  usernameValidator,
  passwordValidator,
  todoTitleValidator,
  todo_idValidator,
};

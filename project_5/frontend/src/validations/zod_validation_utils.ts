import * as z from "zod";

// Auth
const usernameValidator = z
  .string()
  .min(3, "Username too short")
  .max(10, "Username too long");
const passwordValidator = z
  .string()
  .min(5, "Password too short")
  .max(10, "Password too long");

const confirmationPasswordValidator = z
  .string()
  .min(5, "Confirmation password too short")
  .max(10, "Confirmation password too long");

// Todos
const todoTitleValidator = z
  .string()
  .min(10, "Todo text too short")
  .max(50, "Todo text too long");
const todo_idValidator = z.coerce.string().min(1);

export {
  usernameValidator,
  passwordValidator,
  confirmationPasswordValidator,
  todoTitleValidator,
  todo_idValidator,
};

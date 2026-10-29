import { Router } from "express";
import TodoController from "../controllers/todo_controller.js";
import tokenMiddleware from "../middlewares/auth/token_middleware.js";
import checkTodoBodyMiddleware from "../middlewares/todo/check_todo_body_middleware.js";
import checkTodoIdMiddleware from "../middlewares/todo/check_todo_id_middleware.js";

const router = Router();

router.post(
  "/",
  tokenMiddleware,
  checkTodoBodyMiddleware,
  TodoController.addodo,
);

router.get("/", tokenMiddleware, TodoController.getAllTodos);

router.get(
  "/:todo_id",
  tokenMiddleware,
  checkTodoIdMiddleware,
  TodoController.getTodoById,
);

router.put(
  "/:todo_id",
  tokenMiddleware,
  checkTodoIdMiddleware,
  checkTodoBodyMiddleware,
  TodoController.updateTodo,
);

router.delete(
  "/:todo_id",
  tokenMiddleware,
  checkTodoIdMiddleware,
  TodoController.deleteTodoById,
);

export default router;

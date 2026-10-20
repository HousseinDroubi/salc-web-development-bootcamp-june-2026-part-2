import { Router } from "express";
import TodoController from "../controller/todo_controller.js";
import checkSomeConditions from "../middleware/todo_middlewares.js";

const router = Router();

router.get("/", checkSomeConditions, TodoController.getAllTodos);

export default router;

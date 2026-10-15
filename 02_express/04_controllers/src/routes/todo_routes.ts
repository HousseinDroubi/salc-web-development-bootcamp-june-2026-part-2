import { Router } from "express";
import TodoController from "../controllers/todo_controller.js";

const router = Router();

router.get("/",TodoController.getAllTodos);
router.get("/:id",TodoController.getTodoById);
router.post("/",TodoController.addNewTodo);
router.put("/:id",TodoController.updateTodo);
router.delete("/:id",TodoController.deleteTodo);

export default router;
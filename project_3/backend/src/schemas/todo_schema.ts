import mongoose from "mongoose";
import { TodoType } from "../types/todo_types";

const todo_schema = new mongoose.Schema<TodoType>({
  title: {
    type: String,
    minLength: 10,
    maxLength: 50,
  },
  added_at: {
    type: Date,
    immutable: true,
    default: () => new Date(),
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const TodoSchemaModel = mongoose.model<TodoType>("todos", todo_schema);

export default TodoSchemaModel;

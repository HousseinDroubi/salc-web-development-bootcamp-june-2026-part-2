import type { todo } from "../../redux/todos";

type addTodoRequestType = {
  title: string;
};

type addTodoResponseType = {
  status: "error" | "success";
  text?: string;
  todo?: todo;
};

export type { addTodoRequestType, addTodoResponseType };

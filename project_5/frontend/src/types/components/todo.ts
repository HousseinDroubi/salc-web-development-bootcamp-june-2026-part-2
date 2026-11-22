import type { todo } from "../redux/todos";

type todoProps = Omit<todo, "id"> & {
  viewTodo: () => void;
  deleteTodo: () => void;
};

export type { todoProps };

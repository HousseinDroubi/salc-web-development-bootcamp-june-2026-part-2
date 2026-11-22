type updateTodoRequestType = {
  todo_id: string;
  title: string;
};

type updateTodoResponseType = {
  status: "error" | "success";
  text?: string;
};

export type { updateTodoRequestType, updateTodoResponseType };

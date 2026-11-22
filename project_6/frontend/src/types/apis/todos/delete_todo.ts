type deleteTodoRequestType = {
  todo_id: string;
};

type deleteTodoResponseType = {
  status: "error" | "success";
  text?: string;
};

export type { deleteTodoRequestType, deleteTodoResponseType };

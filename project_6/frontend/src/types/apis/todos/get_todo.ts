type getTodoRequestType = {
  todo_id: string;
};

type getTodoResponseType = {
  status: "error" | "success";
  text?: string;
};

export type { getTodoRequestType, getTodoResponseType };

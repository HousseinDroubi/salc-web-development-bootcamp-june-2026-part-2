export type todo = {
  id: string;
  title: string;
  added_at: string;
};

type todosInitialState = {
  todos: todo[];
  loading: boolean;
  error: string | null;
};

type updateTodoInStatePayloadType = {
  id: string;
  title: string;
};

export type { todosInitialState, updateTodoInStatePayloadType };

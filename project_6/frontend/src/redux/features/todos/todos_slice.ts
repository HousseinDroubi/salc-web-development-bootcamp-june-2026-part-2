import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type {
  todo,
  todosInitialState,
  updateTodoInStatePayloadType,
} from "../../../types/redux/todos";
import { getTodosApi } from "../../../types/apis/todos/get_todos";

const initialState: todosInitialState = {
  loading: false,
  error: null,
  todos: [],
};

const getTodos = createAsyncThunk("todos/getTodos", getTodosApi);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoToState: (state, action: PayloadAction<todo>) => {
      state.todos.push(action.payload);
    },
    updateTodoInState: (
      state,
      action: PayloadAction<updateTodoInStatePayloadType>,
    ) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id != action.payload.id) return todo;
        return { ...todo, title: action.payload.title };
      });
    },
    deleteTodoFromState: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Something went wrong";
    });

    builder.addCase(
      getTodos.fulfilled,
      (state, action: PayloadAction<todo[]>) => {
        state.loading = false;
        state.todos = action.payload;
      },
    );
  },
});

export default todosSlice.reducer;
export { getTodos };
export const { addTodoToState, deleteTodoFromState, updateTodoInState } =
  todosSlice.actions;

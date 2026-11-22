import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todos_slice";
import currentPageReducer from "../features/current_page/current_page_slice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    currentPage: currentPageReducer,
  },
});

export default store;

// useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

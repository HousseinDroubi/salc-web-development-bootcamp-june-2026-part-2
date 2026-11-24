import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/user_slice.js";
import pkg from "redux-logger";

const { createLogger } = pkg;
const logger = createLogger();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

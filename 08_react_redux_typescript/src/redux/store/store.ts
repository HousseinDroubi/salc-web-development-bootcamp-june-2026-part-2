import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart_slice";
import themeReducer from "../features/theme/theme_slice";
import userReducer from "../features/user/user_slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    user: userReducer,
  },
});

export default store;

// Infer the full state tree type from `store.getState` (e.g., { cart, theme, user })
export type RootState = ReturnType<typeof store.getState>;
// Infer the dispatch type including middleware support (such as `createAsyncThunk`)
export type AppDispatch = typeof store.dispatch;

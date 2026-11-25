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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

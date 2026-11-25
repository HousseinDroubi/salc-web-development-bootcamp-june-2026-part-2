import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart_slice.js";
import themeReducer from "../features/theme/theme_slice.js";
import userReducer from "../features/user/user_slice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    user: userReducer,
  },
});

export default store;

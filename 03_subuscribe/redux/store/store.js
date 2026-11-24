import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart_slice.js";
import themeReducer from "../features/theme/theme_slice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default store;

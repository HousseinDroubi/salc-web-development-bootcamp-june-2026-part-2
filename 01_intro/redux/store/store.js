import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart_slice.js";

// Create the centralized Redux store and register feature reducers
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

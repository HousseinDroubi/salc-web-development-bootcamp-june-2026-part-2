import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart_slice.js";
import themeReducer from "../features/theme/theme_slice.js";
import lastOrderReducer from "../features/last_order/last_order.js";
import pkg from "redux-logger";

const { createLogger } = pkg;
const logger = createLogger();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    lastOrder: lastOrderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

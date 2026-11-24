import { increment, reset } from "./redux/features/cart/cart_slice.js";
import { toggle } from "./redux/features/theme/theme_slice.js";
import store from "./redux/store/store.js";

console.log(`Initial state - ${JSON.stringify(store.getState())}`);

store.dispatch(increment());
store.dispatch(toggle());

import { increment, reset } from "./redux/features/cart/cart_slice.js";
import { toggle } from "./redux/features/theme/theme_slice.js";
import store from "./redux/store/store.js";

console.log(`Initial state - ${JSON.stringify(store.getState())}`);
// Register a listener callback that runs every time an action updates the store.
// `store.subscribe()` returns a cleanup function used to stop listening later.
const unsubscribe = store.subscribe(() => {
  console.log(`Updated state state - ${JSON.stringify(store.getState())}`);
});

store.dispatch(increment());
store.dispatch(toggle());

// Remove the listener so future dispatches no longer trigger the callback
unsubscribe();

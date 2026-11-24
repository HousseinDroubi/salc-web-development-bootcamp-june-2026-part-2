import { increment, reset } from "./redux/features/cart/cart_slice.js";
import store from "./redux/store/store.js";

console.log(store.getState());
store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(increment(5));
console.log(store.getState());
store.dispatch(reset());
console.log(store.getState());

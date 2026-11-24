import { removeFromOrder } from "./redux/features/last_order/last_order.js";
import store from "./redux/store/store.js";

console.log(`Initial state - ${JSON.stringify(store.getState())}`);

store.dispatch(removeFromOrder(3));

import { fetchUsers } from "./redux/features/user/user_slice.js";
import store from "./redux/store/store.js";

console.log(`Initial state - ${JSON.stringify(store.getState())}`);

store.dispatch(fetchUsers());

import { User } from "./dependencies.js";

const user_1 = new User("Houssein",400);
const user_2 = new User("hady",200);

console.log(User.counter);
User.counter = 5;
console.log(User.counter);
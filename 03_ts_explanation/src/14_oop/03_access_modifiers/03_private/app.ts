import { User, Admin } from "./dependencies.js";

const user = new User("Houssein",400);
const admin = new Admin("Houssein",400,2);

// console.log(user.name); // Will throw an error if uncommented
// console.log(user.salary); // Will throw an error if uncommented
user.sayHi();

console.log("----------------------------");

// console.log(admin.name); // Will throw an error if uncommented
// console.log(admin.salary); // Will throw an error if uncommented
console.log(admin.role);
admin.sayHi();
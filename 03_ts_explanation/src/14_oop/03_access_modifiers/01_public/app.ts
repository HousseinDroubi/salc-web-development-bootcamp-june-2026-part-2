import { User, Admin } from "./dependencies.js";

const user = new User("Houssein",400);
const admin = new Admin("Houssein",400,2);

console.log(user.name);
console.log(user.salary);
user.sayHi();

console.log("----------------------------");

console.log(admin.name);
console.log(admin.salary);
console.log(admin.role);
admin.sayHi();
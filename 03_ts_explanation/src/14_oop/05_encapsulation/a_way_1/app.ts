import { User, Admin } from "./dependencies.js";

const user = new User("Houssein",400);
const admin = new Admin("Houssein",400,2);


console.log(user.getName());
console.log(user.getSalary());
user.setName("Hady");
user.setSalary(500);
console.log(user.getName());
console.log(user.getSalary());

console.log("-----------------");

console.log(admin.getName());
console.log(admin.getSalary());
console.log(admin.getRole());
console.log("-----------------");
admin.setName("Hady");
admin.setSalary(500);
admin.setRole(3);
console.log(admin.getName());
console.log(admin.getSalary());
console.log(admin.getRole());
admin.sayHi();
import { User, Admin } from "./dependencies.js";

const user = new User("Houssein",400);
const admin = new Admin("Houssein",400,2);


console.log(user.name);
console.log(user.salary);
user.name = "Hady";
user.salary = 500;
console.log(user.name);
console.log(user.salary);

console.log("-----------------");

console.log(admin.name);
console.log(admin.salary);
console.log(admin.role);
console.log("-----------------");
admin.name= "Hady";
admin.salary= 500;
admin.role= 3;
console.log(admin.name);
console.log(admin.salary);
console.log(admin.role);
admin.sayHi();
import { Admin, User, Worker } from "./dependencies.js";

const user_1:Admin = new Admin("Houssein",29,1);
user_1.printMyJobName();

const user_2:Worker = new Worker("Houssein", 29);
user_2.printMyJobName();
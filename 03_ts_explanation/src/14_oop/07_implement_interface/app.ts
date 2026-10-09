import MySystem from "./dependencies.js";

const system_1 = new MySystem(true,"24px");
console.log(system_1.font);
console.log(system_1.theme);

system_1.font = "16px";
system_1.theme = false;

console.log(system_1.font);
console.log(system_1.theme);

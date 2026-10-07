type st = string;
const my_name:st = "Houssein"; // now, my_name type is string

console.log(my_name);

type stringOrNumber = string | number; 

let value_1:stringOrNumber = "Hi there"; // now, value_1 type is string | number (stringOrNumber)

value_1 = 4;

console.log(value_1);

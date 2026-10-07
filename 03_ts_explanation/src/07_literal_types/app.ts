type nums = 1 | 2 | 3;

let number:nums = 1; // This will throw an error if uncommented
number = 2;
number = 3;

// number = 4; // This will throw an error if uncommented

console.log(number);
console.log("-------------------------------");

type directions = "north" | "south" | "east" | "west";
let direction:directions = "north";
console.log(direction);
console.log("-------------------------------");

type type_1 = {};
type type_2 = {
    name:string
}
type type_3 = {    
    name:string,
    age:number
};

const value_1:type_1 = {}; // value_1 is an object with no keys and values
console.log(value_1);

console.log("----------------------------");

// value_2 is an object with only one key/value pair
const value_2:type_2 = {
    name:"Houssein"
}

console.log(value_2);
console.log(value_2.name);

console.log("----------------------------");

// value_3 is an object with only two key/value pairs
const value_3:type_3= {
    name:"Houssein",
    age:29
};

console.log(value_3);
console.log(value_3.name);
console.log(value_3.age);

console.log("----------------------------");

const fun1 = (parameter_1:type_1)=>{
    console.log(parameter_1);
}

fun1({});

console.log("----------------------------");

const fun2 = (parameter_1:type_2)=>{
    console.log(parameter_1);
}

fun2({name:"Houssein"});

console.log("----------------------------");

const fun3 = (parameter_1:type_3)=>{
    console.log(parameter_1);
}

fun3({name:"Houssein", age:29});

console.log("----------------------------");

const fun4 = ({}:type_1)=>{
    // We have nothing to do
}

fun4({});

console.log("----------------------------");

const fun5 = ({name}:type_2)=>{
    console.log(name);
}

fun5({name:"Houssein"});

console.log("----------------------------");

const fun6 = ({name,age}:type_3)=>{
    console.log(name, age);
}

fun6({name:"Houssein", age:29});

console.log("----------------------------");

// Example of type with many keys/values
type obj = {
  readonly username: string; // readonly makes sure that username cannot be updated
  age: number;
  graduate: boolean;
  skills: {
    one: string;
    two: string;
  };
  hire?: boolean;
  sayHi(): void;
  sayHello: () => void;
  sum: (num1: number, num2: number) => number;
};

const obj: obj = {
  username: "Houssein",
  age: 29,
  graduate: false,
  skills: {
    one: "HTML",
    two: "CSS",
  },
  sayHi() {
    console.log(`Hi ${this.username}`);
  },
  sayHello: () => {
    console.log(`Hello ${obj.username}`);
  },
  sum: (num1: number, num2: number) => {
    return num1 + num2;
  },
};

// obj.username = "Ali"; // ! Will throw an error since username is readonly

obj.age = 24;
obj.hire = true;
obj.sayHi();
obj.sayHello();
console.log(obj.sum(1, 2));

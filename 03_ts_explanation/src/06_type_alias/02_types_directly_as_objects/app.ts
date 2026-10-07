const value_1:{} = {};
console.log(value_1);

console.log("----------------------------");

const value_2: { // value_2 is an object with only one key/value pair
    name:string
} = {
    name:"Houssein"
}

console.log(value_2);
console.log(value_2.name);

console.log("----------------------------");

const value_3:{ // value_3 is an object with only two key/value pairs
    name:string,
    age:number
} = {
    name:"Houssein",
    age:29
};

console.log(value_3);
console.log(value_3.name);
console.log(value_3.age);

console.log("----------------------------");

const fun1 = (parameter_1:{})=>{
    console.log(parameter_1);
}

fun1({});

console.log("----------------------------");

const fun2 = (parameter_1:{name:string})=>{
    console.log(parameter_1);
}

fun2({name:"Houssein"});

console.log("----------------------------");

const fun3 = (parameter_1:{name:string, age:number})=>{
    console.log(parameter_1);
}

fun3({name:"Houssein", age:29});

console.log("----------------------------");

const fun4 = ({}:{})=>{
    // We have nothing to do
}

fun4({});

console.log("----------------------------");

const fun5 = ({name}:{name:string})=>{
    console.log(name);
}

fun5({name:"Houssein"});

console.log("----------------------------");

const fun6 = ({name,age}:{name:string, age:number})=>{
    console.log(name, age);
}

fun6({name:"Houssein", age:29});

console.log("----------------------------");
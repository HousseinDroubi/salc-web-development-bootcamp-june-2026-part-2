const full_name:string = "Houssein";
const age:number = 27;
const graudate:boolean = true;

let all: any = "1"; // string
all = 2; // number
all = true; // boolean

let nums; // This will be considered as any, since we didn't neither assign a value nor specify the type annotation

// The following function means that it accepts n1 as number, n2 as number and the data type returned is number as well
const sum = (n1:number, n2:number):number => {
    return n1+n2;
}

// The following means that value is either boolean, number or string
let value: boolean | number | string; 
value = true;
value = 2;
value = "Hi";

// The following means that arr1 is array of type string
const arr1:string[] =  ["a", "b","c"];

// The following means that arr2 is array of type string or number
const arr2: (string|number)[] = ["a", "b", 10];


const arr3: ( number | string | boolean[] | (string|number)[] )[] = [
    1,
    2,
    3,
    "A",
    "B",
    ["C","D",1],
    [true]
];

// The following means that printNameAndAge accepts a parameter as string and another parameter as number and returns string
const printNameAndAge = (name:string, age:number):string=>{
    return `The name is ${name} and the age is ${age}`;
}
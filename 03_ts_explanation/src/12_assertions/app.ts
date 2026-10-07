// Sometimes the compiler doesn't know what the variable type is, so we need to explicitly define it.

let data:any = "Hi";
console.log((data as string).length);
data = 14;
console.log((data as number).toString());
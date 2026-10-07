const fun1 = (): void => {
  console.log("Hi");
};

console.log(fun1());
console.log("--------------");

const fun2 = (): void => {
  console.log("Hi");
  return;
};

console.log(fun2());

console.log("--------------");

const fun3 = (): void => {
  console.log("Hi");
  return undefined;
};

console.log(fun3());

console.log("--------------");

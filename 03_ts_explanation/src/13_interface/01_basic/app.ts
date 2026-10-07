interface obj1 {
  readonly username: string;
  age: number;
  graduate?: boolean;
  sayHi(): void;
  sayHello: () => void;
  sum: (num1: number, num2: number) => number;
}

const obj1: obj1 = {
  username: "Houssein",
  age: 27,
  sayHi() {
    console.log(`Hi ${this.username}`);
  },
  sayHello: () => {
    console.log(`Hello ${obj1.username}`);
  },
  sum: (num1: number, num2: number) => {
    return num1 + num2;
  },
};

// obj.username = "Ali"; // ! Will throw an error since username is readonly
obj1.graduate = true;
obj1.sayHi();
obj1.sayHello();
console.log(obj1.sum(1, 2));

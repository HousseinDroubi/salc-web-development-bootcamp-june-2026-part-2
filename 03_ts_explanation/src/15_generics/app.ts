function returnNumber(val: number): number {
  return val;
}

function returnBoolean(val: boolean): boolean {
  return val;
}

function returnString(val: string): string {
  return val;
}

console.log(returnNumber(10));
console.log(returnBoolean(true));
console.log(returnString("10"));

// ! I can implement the following, but whenever new type I need it to be returned, I have
// ! to come back to the function and that's not the dynamic principle

function returnData(val: number | boolean | string): number | boolean | string {
  return val;
}

// ! Using generics

function returnDataWithGeneric<T>(val: T): T {
  return val;
}

// ! How to use it

console.log(returnDataWithGeneric<number>(100));
console.log(returnDataWithGeneric<boolean>(true));
console.log(returnDataWithGeneric<string>("Hi"));
console.log(returnDataWithGeneric<number[]>([1, 2, 3]));

type data = {
  username: string;
  age: number;
};

console.log(
  returnDataWithGeneric<data>({
    username: "Houssein",
    age: 27,
  })
);

// ! Generics in arrow functions
const arrowFun = <T>(val: T): T => {
  return val;
};

console.log(arrowFun<number>(14));


// ! Generics with multiple types
const genericMultipleTypes = <K, V>(val1: K, val2: V): string => {
  return `${val1} ${val2}`;
};

console.log(genericMultipleTypes<number, boolean>(10, true));

// ! Generics with classes

class GenericClass<T> {
  constructor(private _value: T) {
    this._value = _value;
  }

  public get value() {
    return this._value;
  }
}

const obj_1 = new GenericClass<string>("Hi");
console.log(obj_1.value);


const obj_2 = new GenericClass<number>(100);
console.log(obj_2.value);


// ! Generics with default types with classes

class GenericClassWithDefaultType<T = number> {
  constructor(private _value: T) {
    this._value = _value;
  }

  public get value(){
    return this._value;
  }
}

const obj_3 = new GenericClassWithDefaultType<boolean>(true); // ! The default type is number, but I can use any type
console.log(obj_3.value);


interface book {
  title: string;
  price: number;
}

interface website {
  url: string;
  hostring_price: number;
}
class GenericClassWithInterface<T> {
  data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
}

const item1 = new GenericClassWithInterface<book>();
item1.add({
  title: "title1",
  price: 50,
});

item1.add({
  title: "title2",
  price: 40,
});

const item2 = new GenericClassWithInterface<website>();
item2.add({
  url: "http://example1.com",
  hostring_price: 150,
});

item2.add({
  url: "http://example1.com",
  hostring_price: 140,
});

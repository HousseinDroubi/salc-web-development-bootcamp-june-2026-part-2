// Interface doesn't support the '|' character like intercace, so we have to use type

interface interface1 {
  id: number;
  username: string;
}

interface interface2 {
  age: number;
}

// now  interface1OrInterface2 is interface1, interface2 or both together
type interface1OrInterface2 = interface1 | interface2;

const obj:interface1OrInterface2 = {
  age:23,
  id:2
};

console.log(obj);
// Intersection in interface happens using extends keyword (from another interface)
interface interface1 {
  id: number;
  username: string;
}

interface interface2 extends interface1 {
  age: number;
}

interface interface3 extends interface2 {
  age: number;
  hire: boolean;
}

const user1: interface1 = {
  id: 1,
  username: "Houssein",
};

const user2: interface2 = {
  id: 1,
  username: "Houssein",
  age: 27,
};

const user3: interface3 = {
  id: 1,
  username: "Houssein",
  age: 27,
  hire: true,
};

// ----------------------------------------

interface interface4 {
  age: number;
}

interface interface5 {
  name: string;
}

interface interface6 extends interface4, interface5 {
  hire: boolean;
}

const user4: interface6 = {
  age: 27,
  name: "Houssein",
  hire: true,
};

class User {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  sayHi(): string {
    return `Hello ${this.name}, your salary is ${this.salary}`;
  }
}

const user = new User("Houssein", 400);

console.log(user.name);
console.log(user.salary);
console.log(user.sayHi());

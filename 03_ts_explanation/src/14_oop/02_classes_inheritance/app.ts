// if the child has no variables, it has the ability to use the parent's constructor
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

class Admin extends User {
  role: number;
  constructor(name: string, salary: number, role: number) {
    super(name, salary);
    this.role = role;
  }
  
  override sayHi(): string {
    return `${super.sayHi()} and your role is ${this.role}`;
  }
}

const user = new User("Houssein", 400);
const admin = new Admin("Houssein", 400, 1);

console.log(user);
console.log(user.sayHi());
console.log(admin);
console.log(admin.sayHi());
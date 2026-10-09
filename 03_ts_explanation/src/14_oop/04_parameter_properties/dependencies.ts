class User {
  public constructor(protected readonly name: string,private salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public sayHi(): string {
    return `Hello ${this.name}, your salary is ${this.salary}`;
  }
}

class Admin extends User {
  public constructor(name: string, salary: number,public role: number) {
    super(name, salary);
    this.role = role;
  }
  
  public override sayHi(): string {
    return `${super.sayHi()} and your role is ${this.role}`;
  }
}

export {User, Admin};
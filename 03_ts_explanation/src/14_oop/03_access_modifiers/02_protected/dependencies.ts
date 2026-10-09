class User {
  protected name: string;
  protected salary: number;
  public constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public sayHi(): string {
    return `Hello ${this.name}, your salary is ${this.salary}`;
  }
}

class Admin extends User {
  public role: number;
  public constructor(name: string, salary: number, role: number) {
    super(name, salary);
    this.role = role;
  }
  
  public override sayHi(): string {
    return `${super.sayHi()} and your role is ${this.role}`;
  }
}

export {User, Admin};
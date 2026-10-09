class User {
  public constructor(private name: string,private salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public getName():string{
    return this.name;
  }

  public getSalary():number{
    return this.salary;
  }

  public setName(name:string):void{
    this.name = name;
  }

  public setSalary(salary:number):void{
    this.salary = salary;
  }

  public sayHi(): string {
    return `Hello ${this.name}, your salary is ${this.salary}`;
  }
}

class Admin extends User {
  public constructor(name: string, salary: number,private role: number) {
    super(name, salary);
    this.role = role;
  }

  public getRole():number{
    return this.role;
  }

  public setRole(role:number):void{
    this.role = role;
  }

  
  public override sayHi(): string {
    return `${super.sayHi()} and your role is ${this.role}`;
  }
}

export {User, Admin};
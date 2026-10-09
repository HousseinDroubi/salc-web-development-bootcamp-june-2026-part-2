class User {
  public constructor(private _name: string,private _salary: number) {
    this._name = _name;
    this._salary = _salary;
  }

  public get name():string{
    return this._name;
  }

  public get salary():number{
    return this._salary;
  }

  public set name(name:string){
    this._name = name;
  }

  public set salary(salary:number){
    this._salary = salary;
  }

  public sayHi(): string {
    return `Hello ${this.name}, your salary is ${this.salary}`;
  }
}

class Admin extends User {
  public constructor(name: string, salary: number,private _role: number) {
    super(name, salary);
    this._role = _role;
  }

  public get role():number{
    return this._role;
  }

  public set role(role:number){
    this._role = role;
  }

  
  public override sayHi(): string {
    return `${super.sayHi()} and your role is ${this.role}`;
  }
}

export {User, Admin};
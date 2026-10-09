abstract class User {
  abstract reference_id: number;

  constructor(private _name: string, private _age: number) {
    this._name = _name;
    this._age = _age;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  abstract printMyJobName(): void;
}

class Admin extends User {
  reference_id: number = 1;
  constructor(_name: string, _age: number, private _role: number) {
    super(_name, _age);
  }
  public get role(): number {
    return this._role;
  }
  public set role(value: number) {
    this._role = value;
  }

  override printMyJobName(): void {
    console.log("I'm an admin");
  }
}

class Worker extends User {
  reference_id: number = 2;

  // ! Without constructor
  override printMyJobName(): void {
    console.log("I'm an Worker");
  }
}

export { User, Admin, Worker };

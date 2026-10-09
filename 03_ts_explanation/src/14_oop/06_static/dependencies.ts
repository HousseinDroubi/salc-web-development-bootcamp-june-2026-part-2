class User {
  private static _counter:number = 0;
  public constructor(private _name: string,private _salary: number) {
    User._counter++;
    this._name = _name;
    this._salary = _salary;
  }

  public get name():string{
    return this._name;
  }

  public get salary():number{
    return this._salary;
  }

  public static get counter(){
    return User._counter;
  }

  public set name(name:string){
    this._name = name;
  }

  public set salary(salary:number){
    this._salary = salary;
  }

  public static set counter(counter:number){
    User._counter = counter;
  }

  public sayHi(): string {
    return `Hello ${this.name}, your salary is ${this.salary}`;
  }
}

export {User};
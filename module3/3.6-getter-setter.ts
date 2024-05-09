{
  //Getter and Setter

  class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balace: number) {
      this.id = id;
      this.name = name;
      this._balance = balace;
    }

    //----------setter------------
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    //  public addDeposit(amount:number){
    //      this._balance=this._balance+amount;
    //  }

    //-------------getter-----------
    get balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribAcc1 = new BankAccount(123, "Abul", 10300);

  goribAcc1.deposit = 2000; //setter example
  const myBalance = goribAcc1.balance; //getter example as property
  console.log(myBalance);

  //
}

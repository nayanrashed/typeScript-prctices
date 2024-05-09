{
    //
    class BankAccount{
       readonly id:number;
        public name:string;
        private _balance:number;
        // protected _balance:number;
        constructor(id:number,name:string,balace:number){
            this.id=id;
            this.name=name;
            this._balance=balace;
        }
        addDeposit(amount:number){
            this._balance=this._balance+amount;
        }
        private getBalance(){
            return this._balance;
        }
        getHiddenMethod(){
            return this.getBalance()
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.getHiddenMethod()
            
        }
    }



    const goribAcc1 = new BankAccount(123,"Abul",10300)
    // goribAcc1.balance=0;
    goribAcc1.addDeposit(200)
    const goribBalance = goribAcc1.getBalance()
    console.log(goribAcc1);
    console.log(goribBalance);






    //
}
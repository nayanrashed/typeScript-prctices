//Learning Function
//Normal Function
//Arrow Function

//Normal Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);
//Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;


//Object--> function-->method
const poorUser={
    name: 'Mezba',
    balance: 0,
    addBalance(balance:number):string{
        return `My new balance is : ${this.balance+balance}`;
    }
}

//call back function

const arr:number[]=[1,4,10];
const newArr:number[]=arr.map((elem:number):number=>elem*elem);
{
  //Type Alias
  type student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: student = {
    name: "Rashed",
    age: 50,
    gender: "male",
    contactNo: "01723261602",
    address: "Dattapara",
  };
  const student2: student = {
    name: "Robi",
    age: 50,
    gender: "male",
    address: "Dattapara",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const UserName: UserName = "Rashed";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}

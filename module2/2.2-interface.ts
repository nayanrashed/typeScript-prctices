{
  // Interface:
  type User1 = {
    name: string;
    age: number;
  };

  type rollNumber = number;

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User1 = {
    name: "nayan",
    age: 300,
  };

  //extends of interface
  type UserWithRole = User1 & { role: string };
  const user2: UserWithRole = {
    name: "nayan",
    age: 300,
    role: "manager",
  };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user3: UserWithRole2 = {
    name: "nayan",
    age: 300,
    role: "manager",
  };

  // js--> object, array->object function->object
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber: Roll2 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}

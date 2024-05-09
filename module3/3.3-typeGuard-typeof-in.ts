{
  //Type Guard
  //typeof-->type guard

  type Alphaneumeric = string | number;
  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  //in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name} and i am a guest`);
    }
  };
  const normalUser: NormalUser = {
    name: "Bhola",
  };
  const adminUser: AdminUser = {
    name: "kola",
    role: "admin",
  };
  getUser(adminUser);
  //User defined type guard
  type Shape = Square | Circle;

  type Square = {
    type: "square";
    size: number;
  }

  type Circle = {
    type: "circle";
    radius: number;
  }
  function calculateArea(shape: Shape): number {
    if (isSquare(shape)) {
      return shape.size ** 2;
    } else {
      return Math.PI * shape.radius ** 2;
    }
  }

  function isSquare(shape: Shape): shape is Square {
    return shape.type === "square";
  }
  const square:Square={
    type:"square",
    size:10
  }
  const result = calculateArea(square)
  console.log(result);
}

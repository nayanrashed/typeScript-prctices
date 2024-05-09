type Shape = Square | Circle;

type Square = {
  type: "square";
  size: number;
};

type Circle = {
  type: "circle";
  radius: number;
};
function isSquare(shape: Shape): shape is Square {
  return shape.type === "square";
}
function calculateArea(shape: Shape): number {
  if (isSquare(shape)) {
    return shape.size ** 2;
  } else {
    return Math.PI * shape.radius ** 2;
  }
}

const square: Square = {
  type: "square",
  size: 10,
};
const circle: Circle = {
  type: "circle",
  radius: 10,
};
const result = calculateArea(circle);
console.log(result);

{
  //polymorphism
  class Person {
    getSleep() {
      console.log("i am sleeping for 8 hours per day");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("i am sleeping for 7 hours per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("i am sleeping for 6 hours per day");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person = new Person();
  const person1 = new Student();
  const person2 = new Developer();
  // console.log(person1);
  getSleepingHours(person1);

  //-------------eaxample 2--------------

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea=(param:Shape)=>{
    console.log(param.getArea());
  }

  const shape = new Shape();
  const shape1 = new Circle(10);
  const shape2 = new Rectangle(10,10);
  getShapeArea(shape)
  getShapeArea(shape1)
  getShapeArea(shape2)

  //
}

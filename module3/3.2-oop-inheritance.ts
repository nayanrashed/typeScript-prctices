{
  //OOP- Inheritence\cls
  class Parents {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Parents {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  

  class Teacher extends Parents {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string,
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes daily`);
    }
  }

  const student1 = new Student("Rasel", 20, "china");
  const teacher1 = new Teacher("Pascel", 40, "Japan", "Proff");
  teacher1.takeClass(4)
console.log(student1);
console.log(teacher1);
  //
}

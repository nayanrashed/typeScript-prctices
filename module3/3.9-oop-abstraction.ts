{
  //Abstraction:1.interface 2.abstract
  //----------Interface----------
  //Idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    moove(): void;
  }
  //Real Implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("i am starting the engine");
    }
    stopEngine(): void {
      console.log("i am stopping th engine");
    }
    moove(): void {
      console.log("vrommm vroom gooooo");
    }
    test() {
      console.log("I am just testing ");
    }
  }
  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //------------------Abstract class-----------------

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am just testing ");
    }
  }
  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log("i am starting the engine");
    }
    stopEngine(): void {
      console.log("i am stopping th engine");
    }
    move(): void {
      console.log("vrommm vroom gooooo");
    }
  }

  const hondaCar = new Car2();
  hondaCar.move();

  //
}

{
  //Instance of type guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(`i am making Sounddddd`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("i am Barkingggg");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("i am meawinggggggg");
    }
  }

  // const getAnimal = (animal: Animal) => {
  //   if (animal instanceof Dog) {
  //     animal.makeBark();
  //   } else if (animal instanceof Cat) {
  //     animal.makeMeaw();
  //   } else {
  //     animal.makeSound();
  //   }
  // };

  //smart way te handle korar jonno chaile amra function bebohar korte pari
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Kallu", "dog");
  const cat = new Cat("Mini", "cat");
  getAnimal(cat);

  //
}

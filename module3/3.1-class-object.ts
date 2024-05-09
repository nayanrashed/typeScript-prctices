{
  //OOP-Class
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  const dog = new Animal("Husky", "dog", "Ghew Ghew Gheeewwww");
  dog.makeSound();
  console.log(dog);

  //
  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog2 = new Animal2("Huskyee", "doggr", "Ghew Ghew Gheeewwww yy");
  dog2.makeSound();

  //
}

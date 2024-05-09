{
  //Genetic with Interface
  interface Developer<T, X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type ImilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<ImilabWatch> = {
    name: "rashed",
    computer: {
      brand: "hp",
      model: "n-14",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Imilab",
      model: "kw66",
      display: "Oled",
    },
  };

  interface appleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface YamahaBike {
    model:string;
    engineCapacity:string
  }
 
  const richDeveloper: Developer<appleWatch,YamahaBike> = {
    name: "nayan",
    computer: {
      brand: "apple",
      model: "macBook Pro M3",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "kdd6",
      heartTrack: true,
      sleepTrack: true,
    },
    bike:{
        model:"Yamaha XSR",
        engineCapacity:"155 cc"

    }
  };

  //
}

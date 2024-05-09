{
  //Union Types: (|=OR)

  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";

  //   type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup?: "O+" | "B+" | "A+";
  };

  const user1: User = {
    name: "nayan",
    gender: "male",
  };

  //Intersection Type: (&-)
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}

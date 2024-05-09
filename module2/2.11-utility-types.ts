{
  //Utility Types
  //Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type NameAge = Pick<Person, "name" | "age">;

  //Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //Require
  type PersonRequired = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //Read Only
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr X",
    age: 200,
    contactNo:"013223"
  };

  //Record
//   type MyObj={
//     a:string;
//     b:string;
//   }
type MyObj=Record<string,string>
  const obj1 = {
    a:"aa",
    b:"bb",
    c:"cc"
  }

  const EmptyObject:Record<string,unknown> = {};


  //
}

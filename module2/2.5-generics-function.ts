{
  //Function with Generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  // const resGeneric = createArrayWithGeneric<boolean>(true)
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = {
    id: number;
    name: string;
  };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 123,
    name: "Nayan",
  });

  //

  const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res3 = createTupleWithGeneric<string, number>("Bangladesh", 222);

  const resGenericTuple = createTupleWithGeneric<string, { name: string }>(
    "Bangladesh",
    { name: "asia" }
  );

  //
  const addCourseToStudent = <T>(student: T) => {
    const course = "Nxt Lvl Web Developer";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "mr rahim",
    email: "r@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "mr kahim",
    email: "k@gmail.com",
    devType: "NLWD",
    hasWatch: "Apple Watch",
  });
  //
}

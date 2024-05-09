{
  //
  //constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Nxt Lvl Web Developer";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 123,
    name: "mr rahim",
    email: "r@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 124,
    name: "mr kahim",
    email: "k@gmail.com",
    hasWatch: "Apple Watch",
  });
  const student3 = addCourseToStudent({
    id: 14,
    name: "mr brahim",
    email: "b@gmail.com",
    emni: "hudai",
  });

  //
}

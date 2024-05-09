{
  //generic type

  type GenericArray<T> = Array<T>;

  // const rollNumber:number[]=[1,2,3,4]
  //   const rollNumber: Array<number> = [1, 2, 3, 4];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4];

  //   const mentors: string[] = ["mr x", "mr Y", "mr Z"];
  const mentors: GenericArray<string> = ["mr x", "mr Y", "mr Z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "rashed",
      age: 280,
    },
    {
      name: "nayan",
      age: 280,
    },
  ];

  //generic tuple
  type GenericTuple<X,Y>=[X,Y]
  const beingHuman:GenericTuple<string,string> = ['Mr. X','Mrs. Y']

  const userWithId: GenericTuple<number,{name:string,email:string}> =[123,{name:'persian', email: 'p@gmail.com'}]

  //
}

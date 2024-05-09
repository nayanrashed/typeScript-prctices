{
  //mapped types
  const arrOfNumbers: number[] = [1, 4, 8, 9];
  // const arrOfStrings: string[]=['1','4','8','9'];
  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };
  // type AreaString = {
  //     height:string;
  //     width:string;
  // }
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  //look up type
  type Height = AreaNumber["height"];

  type AreaString1<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaString1<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}

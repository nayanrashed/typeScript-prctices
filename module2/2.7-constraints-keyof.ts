{
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle;
  
  const getPropertyValue=<X,Y extends keyof X >(obj:X, key:Y)=>{
    return obj[key]
  }
  const user={
    name: 'Mr Persian',
    age:26,
    address:'ctg',
  }
const result1 = getPropertyValue(user,'age')
const car = {
    model: "Audi",
    year:2019,
}
// const result2 =getPropertyValue(car, 'engine')
  //
}

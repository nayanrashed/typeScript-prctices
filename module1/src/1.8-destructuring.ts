{
  //Destructuring

  const user = {
    id: 234,
    name: {
      firstName: "Rashed",
      middleName: "Mahamud",
      lastName: "Nayan",
    },
    contactNo: '01723261602',
    address:'Dattapara'
  };

  const {contactNo:phoneNumber,name:{middleName:midName}}=user;

  //array destructuring
  const myFriends=['chandler','joey','ross','monica','rachael'];
  const [a,,bestFriend,...rest]=myFriends







}


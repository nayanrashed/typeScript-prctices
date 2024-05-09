{
  //Spread Operator
  //Rest Operator
  //Destructuring

  //Spread Operator:
  const bro1: string[] = ["mir", "firoz", "mizan"];
  const bro2: string[] = ["shorif", "sabbir", "mishu"];

  // bro1.push(bro2)
  bro1.push(...bro2);

  const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
  };
  const mentors2 = {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid'  
  }
  const mentors = {
    ...mentors1,...mentors2
  }
  //Rest Operator
  const greetFriends=(...friends:string[])=>{
    friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
  }
  greetFriends('Abul','Kabu','Mokbul','Sabul')







}


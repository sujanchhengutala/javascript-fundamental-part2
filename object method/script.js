const sujan = {
  firstName: 'sujan',
  lastName : 'chhengutala',
  birthYear : 1999,
  job      : 'student',
  friends  :['pradip', 'density', 'kamal'],
  haseDriverLincens :false,

  
  // calcAge: function (birthYear) {
  //  return 2021 - birthYear;
  // }

   // we can't use
  // function calcAge(birthYear) {
  //   return 2021 - birthYear;
  // }

  
   ///calcAge: function () {
  // console.log(this);
  //   // Why not console.log(ayush);
  //   // DRY principle
  //  return 2021 - this.birthYear;
 //  }
//}

// change sujan= ayush

calcAge: function() {
  this.age = 2021 - this.birthYear;
  return this.age;
},

getSummary: function() {
  return `${this.firstName} is a ${this.age} years old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's License`;
}

};
// console.log(ayush.calcAge(1992));
// console.log(ayush['calcAge'](1992));

console.log(sujan.calcAge());
// what if above code is commented?
// console.log(ayush);
// console.log(ayush.age);

// console.log(`${ayush.firstName} is a ${ayush.age} years old ${ayush.job}`);

console.log(sujan.getSummary());

// arrays are special kinds of object because they have functions or methods to manipulate array

'use strict';
function calAge(birthYear){
    return 2021 - birthYear;
}
const age = calAge(1999);
console.log(`I am ${age} years old`);

// function expression

const calAge2 = function(birthYear){
    return 2021 - birthYear;
}
const age2 = calAge2(1999);
console.log(`i'm ${age2} years old `)
  

// finding area of rectangle using function expression

let areaReactangle = function(length, breadth){
   
    return length * breadth; 
}
let area = areaReactangle(5, 5);
console.log(area);


//finding factorial

let factorial = function fact(n){
 if(n <= 1)  { 
 //console.log(n);
 return 1*n;
}
return n * factorial(n-1)
}
let facto = factorial(6)
console.log(`the factorial of 6 is ${facto}`);
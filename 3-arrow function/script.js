'use strict';
//----------This example shows the syntax of a function, without the use of arrow function syntax.--------------
let hellow = function(){
    return `hellow world`;
}
console.log(hellow());

//This example shows the syntax of an Arrow Function, and how to use it.

let hellow1=() => `hellow world`;
console.log(hellow1())


//example
const calAge = function (birthYear){
 return 2021 - birthYear;
}
console.log(calAge(1999));

const birth = (birthYear)=>
     2021 - birthYear;
console.log(birth(1999));




const marrigeCalculator = birthYear=>{
    const age = 2021 - birthYear;
    const marrigeAge = 30 - age; 
    return marrigeAge ;
} 
console.log(marrigeCalculator(1999));

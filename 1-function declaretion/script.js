'use strict';

//function myClass() {
//   console.log("This is javascript fundamental part II");
//}

// calling the function
//running the function
//invoking the  function
//myClass();

// we can pass data to function
// we can also recive data from function by returning the value

function career (internship, job){
// console.log(internship, job);
const myCareer =  `i have done internship at ${internship} and job at ${job}`;
 return myCareer;
}
console.log(career('facebook' ,'apple'));



function areaRectangle (l, b){
    //let area = l*b;
return l*b; 
}
console.log(areaRectangle(5, 5)); 
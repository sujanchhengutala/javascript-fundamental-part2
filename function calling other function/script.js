'use strict'
function ageCalculator(birthYear){
    return 2021- birthYear;
}

function career(myBirthYear , yourBirthYear){
const myAge = ageCalculator(myBirthYear);
const yourAge = ageCalculator(yourBirthYear);
const marrigeAge = `I will be married at ${myAge + 5} years old and you will be marrige at ${yourAge + 4} years old`;
return marrigeAge; 
}
console.log(career(1999 , 1998));
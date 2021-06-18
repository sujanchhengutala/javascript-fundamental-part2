'use strict'
//const friends = ['kamal','rojan','manoj'];
//console.log(friends[2]);

// another way of declaring array is using array syntax
// const friends = new Array('Anjila', 'Riya', 'Sital');
// bracket is literal syntax in array
//console.log(friends.length);
//console.log(friends[friends.length - 1]);

//friends[1] = 'Pujan';
//console.log(friends);

const calAge = function(birthYear){
    return 2021 - birthYear;
}
const year = [1999, 2000, 2001, 2002];
const age1 = calAge(year[0]);
const age2 = calAge(year[year.length-1]);
const ages = [calAge(year[0]), calAge(year[1]),calAge(year[2]), calAge(year[3])];
console.log(ages);
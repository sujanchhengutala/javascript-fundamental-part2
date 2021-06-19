'use strict'
let friends = ['ram','shyam',1999,'23','24',['anita','binita'],true]
const type = [];

for(let i=0; i<friends.length; i++){

 console.log(friends[i]);

 type.push(typeof friends[i]);

};

console.log(type);


const years = [1999,1998,1997,1996,1995,1994];
let age = [];
for( let i =0; i<years.length; i++){
   age[i] = 2021 - years[i];
}
console.log(age);


// continue and break

console.log('----continue----')
for (let i =0; i < friends.length; i++) {
  
  if(typeof friends[i] != 'string') continue;
  console.log(friends[i]);
  
}
console.log('----Break----')
for (let i =0; i < friends.length; i++) {
  
  if(typeof friends[i] === 'number') break;
  console.log(friends[i]);
  
}

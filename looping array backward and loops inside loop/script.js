'use strict'
let friends = ['ram','shyam',1999,'23','24',['anita','binita'],true]


//looping Backward

for(let i = friends.length -1; i >= 0; i--){
  console.log(i, friends[i])
}


// Loop inside loop
for (let i = 1; i < 4; i++) {
  console.log(`----Starting main exercise ${i} 🏋️`)
  for(let j = 1; j < 6; j++) {
    console.log(`Lifting weight exercise ${j}`)
  };
}
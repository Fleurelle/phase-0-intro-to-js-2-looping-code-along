// Code your solutions in this file

/*STARTING WITH SOME PRACTIVE
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  } 

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 
*/
const names = ['name1', 'name2','name3'];
const newNames = [];
function writeCards(names, eventType){
    for (let i=0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${eventType} gift!`);
        debugger;
    }
  return newNames; 
}

function countDown(integer){
while (integer >= 0) {
  console.log(integer--);
  
} 
}
countDown(4);
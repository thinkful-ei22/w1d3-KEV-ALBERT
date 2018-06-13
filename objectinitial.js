'use strict';

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function (){
//     return (this.water / this.flour) * 100;
//   }
// }
// console.log(loaf.hydration());

// const threemusk ={
//   foo: 'bee',
//   bar: 'splat',
//   fum: ' xlkuoiy',
//   quux: 'bobby',
//   spam: 'luyoiu',
// };

// for(const key in threemusk){
//   console.log(key, threemusk[key]);
// }

// const mealTime = {
//   meals: [
//     'breakfast',
//     'second breakfast',
//     'elevenses',
//     'lunch',
//     'afternoon tea',
//     'dinner',
//     'supper'
//   ],
// };

// console.log(mealTime.meals[3]);


// let myArray = [
//   {
//     name: 'Rick',
//     jobTitle: 'scientist',
//   },
//   {
//     name: 'Morty',
//     jobTitle: 'lackey',
//   },
//   {
//     name: 'Homer',
//     jobTitle: 'slacker',
//   }
// ];

// for (let i = 0; i < myArray.length; i++){
//   console.log(`${myArray[i].name} ${myArray[i].jobTitle}`);
// for (const key in myArray[i]){
//   console.log(myArray[i][key]);
//}
//}

// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.".
// For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

// let myArray = [
//   {
//     name: 'Rick',
//     jobTitle: 'scientist',
//   },
//   {
//     name: 'Morty',
//     jobTitle: 'lackey',
//     boss: 'Rick',
//   },
//   {
//     name: 'Homer',
//     jobTitle: 'slacker',
//     boss: 'Rick',
//   },
//   {
//     name: 'Marge',
//     jobTitle: 'wifey',
//     boss: 'Homer',
//   },
//   {
//     name: 'Bart',
//     jobTitle: 'brat',
//     boss: 'Homer',
//   }
// ];


// for (let i = 0; i < myArray.length; i++){
//   if(myArray[i].boss !== undefined ){
//     console.log(`${myArray[i].jobTitle} ${myArray[i].name} reports to ${myArray[i].boss}`);
//   } else {
//   console.log(`${myArray[i].jobTitle} ${myArray[i].name} doesn't report to anybody`);
//  }
// }

// const decodeString = function(str){

//   return str
//     .split(' ')
//     .map(word => decode(word))
//     .join('');

// };

const decode = function(word){
  const charCode= word[0].charCodeAt();
  if(charCode < 97 || charCode >100){
	  return ' ';
  }
  return word [charCode - 96];
};

const decodeWords = function(obj){
  let tempString = Object.values(obj).toString();
  console.log(tempString);
  return tempString
    .split(',')
    .map(word => decode(word))
    .join('');
};

console.log(decodeWords(
  {
    one: 'craft',
    two: 'block', 
    three: 'argon', 
    four: 'meter', 
    five: 'bells', 
    six: 'brown', 
    seven: 'croon', 
    eight: 'droop',
  }
));
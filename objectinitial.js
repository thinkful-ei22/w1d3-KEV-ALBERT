'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function (){
    return (this.water / this.flour) * 100;
  }
}
console.log(loaf.hydration());

const threemusk ={
  foo: 'bee',
  bar: 'splat',
  fum: ' xlkuoiy',
  quux: 'bobby',
  spam: 'luyoiu',
};

for(const key in threemusk){
  console.log(key, threemusk[key]);
}

const mealTime = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ],
};

console.log(mealTime.meals[3]);


let myArray = [
  {
    name: 'Rick',
    jobTitle: 'scientist',
  },
  {
    name: 'Morty',
    jobTitle: 'lackey',
  },
  {
    name: 'Homer',
    jobTitle: 'slacker',
  }
];

for (let i = 0; i < myArray.length; i++){
  console.log(`${myArray[i].name} ${myArray[i].jobTitle}`);
for (const key in myArray[i]){
  console.log(myArray[i][key]);
}
}


let myArray = [
  {
    name: 'Rick',
    jobTitle: 'scientist',
  },
  {
    name: 'Morty',
    jobTitle: 'lackey',
    boss: 'Rick',
  },
  {
    name: 'Homer',
    jobTitle: 'slacker',
    boss: 'Rick',
  },
  {
    name: 'Marge',
    jobTitle: 'wifey',
    boss: 'Homer',
  },
  {
    name: 'Bart',
    jobTitle: 'brat',
    boss: 'Homer',
  }
];


for (let i = 0; i < myArray.length; i++){
  if(myArray[i].boss !== undefined ){
    console.log(`${myArray[i].jobTitle} ${myArray[i].name} reports to ${myArray[i].boss}`);
  } else {
  console.log(`${myArray[i].jobTitle} ${myArray[i].name} doesn't report to anybody`);
 }
}

const decodeString = function(str){

  return str
    .split(' ')
    .map(word => decode(word))
    .join('');

};

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

const createCharacter = function(name, nickname, race, origin, attack, defense){

  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function(){

      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(name){
      let damageTakes = 0;
      let damageRcvd = 0;
      if (this.attack > name.defense){
        damageTakes = this.attack - name.defense;
      } else if(this.attack < name.defense){
        damageRcvd = this.defense - name.attack;
      }
      console.log(`Your opponent takes ${damageTakes} damage and you receive ${damageRcvd} damage`);
    }

  };
}


const characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins','bilbo' ,'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins' , 'frodo' , 'Hobbit' , 'The Shire' ,3 , 2 ),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6 , 8),
    createCharacter( 'Legolas', 'legolas' , 'Elf', 'Woodland Realm', 8 , 5),

]

characters.push(createCharacter('Arwen Undomiel','arwen', 'Half-Elf', 'Rivendell', 7, 6));

characters.find(input => input.nickname === 'aragorn').describe();

const charHobbit = characters.filter( val => val.race === 'Hobbit' );
console.log(charHobbit);

const attackAboveFive = characters.filter( val => val.attack > 5);
console.log(attackAboveFive);

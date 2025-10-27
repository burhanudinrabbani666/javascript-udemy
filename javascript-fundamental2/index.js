// stric mode
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`i can drive :D`);


// function

function logger() {
  // name of function
  console.log(`my name is bani`); // action
}

// callin/ runing/ invoking the function
logger(); // my name is bani
logger();
logger();

function fruitProccesor(apples, oranges) {
  // name function(parameter)
  const juice = `juice with ${apples} apples and ${oranges} orange.`;
  return juice;
}

// return
const appleJuice = fruitProccesor(5, 0); // function (arguments)
console.log(appleJuice); // capture value into variable
console.log(fruitProccesor(5, 0)); // not capture value into variable or directly

const appleOrangeJuice = fruitProccesor(3, 3);
console.log(appleOrangeJuice);

// Function Declaration vs Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcAge1(2002);

// Function Expressions, store in variable
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcAge2(2002);
console.log(age1, age2);


// arrow function

const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearUntiRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retire in ${retirement}`;
};

console.log(yearUntiRetirement(2002, `burhanudin`));
console.log(yearUntiRetirement(1999, `Aziz`));


// function calling other function

function cutFruitPiece(fruit) {
  return fruit * 4;
}

function fruitProccesor(apples, oranges) {
  const applePieces = cutFruitPiece(apples);
  const orangesPieces = cutFruitPiece(oranges);

  const juice = `juice with ${applePieces} piece of apples and ${orangesPieces} piece of orange.`;

  return juice;
}
console.log(fruitProccesor(2, 3));


// review

const calcAge3 = (year) => {
  return 2025 - year;
}; // callback function

const yearUntiRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear); // function inside function
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retire in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} is already retired`);
    return -1;
  }
};
console.log(yearUntiRetirement(2002, "burhanudin rabbani"));
console.log(yearUntiRetirement(1950, "soeharto"));


const friends = [`micheal`, `steven`, `peter`]; // literal syntax
console.log(friends);

// const years = new Array(2002, 2003, 2004, 2021);

console.log(friends[0]); // array is zero based
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `bani`; // can mutate array even

console.log(friends);
const firstName = `burhanudin`;
const bani = [firstName, `Rabbani`, 2025 - 2002, `unemployed`, friends];

console.log(bani);

//exercise
const calcAge3 = (year) => {
  return 2025 - year;
};

const years = [2002, 2003, 2004, 2021];

const age1 = calcAge3(years[0]);
const age2 = calcAge3(years[1]);
const age3 = calcAge3(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge3(years[0]),
  calcAge3(years[1]),
  calcAge3(years[years.length - 1]),
];

console.log(ages);


const friends = [`micheal`, `steven`, `peter`]; // literal syntax

const newLength = friends.push(`udin`); // add to the end of array
console.log(friends);
console.log(newLength);

friends.unshift(`wahyu`);
console.log(friends); // add to the beginning of array

// remove element

friends.pop();
const popped = friends.pop(); // remove last elemenet
console.log(popped);
console.log(friends);

friends.shift(); // remove first element
console.log(friends);

console.log(friends.indexOf(`steven`));
console.log(friends.indexOf(`wahyu`));
*/

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
*/

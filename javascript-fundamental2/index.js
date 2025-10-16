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
console.log(appleOrangeJuice);*/

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

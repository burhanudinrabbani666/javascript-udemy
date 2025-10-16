// stric mode
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`i can drive :D`);
*/

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

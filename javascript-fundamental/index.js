/* first lecture : variable, string camelCase
// variable name country
let firstName = `burhanudin rabbani`; //let is variable or this call declaring variable
let country = "🇮🇩 Indonesia";
let continent = "Asia";
let population = " 200 million";
// console.log(firstName);
// console.log(country);
// console.log(continent);
// console.log(population);


let javascriptIsFun = true; //boolean value
console.log(javascriptIsFun); // insialisasi dulu

// console.log(typeof "Hello World!"); //string
// console.log(typeof 14); // number
// console.log(typeof true); // boolean
// console.log(typeof 11e25); //number
console.log(typeof javascriptIsFun); //boolean

//dynamic typing
javascriptIsFun = "Hello World!"; //ngga perlu tulis variable lagi
console.log(typeof javascriptIsFun); // ganti dari true ke yes "string"

let year;
console.log(year);
console.log(typeof year);

year = 2002;
console.log(typeof year);

console.log(typeof null); 


let age = 22; //gunakan let untuk
age = 23;

// const birthYear = 2002;
// birthYear = 2001; //Assignment to constant variable.//

// const job; // declaration must be initializer

// Math operator
const now = 2025;
const ageBani = now - 2002;
const ageAisa = now - 2000;
console.log(ageBani, ageAisa);

console.log((ageBani * 2) / 4, ageAisa / 10, 2 ** 3);
//2**3 = 2 pangkat 3

const firstName = "burhanudin";
const lastName = "Rabbani";

console.log(firstName + ` ` + lastName); // cara jadul
console.log(`${firstName} ${lastName}`); // cara asik

// assigment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// comparasion operator
console.log(ageBani > ageAisa); // false
console.log(ageAisa > ageBani); // true
console.log(ageBani >= 48); //true
console.log(ageAisa <= 50); //true
console.log(ageAisa < 50); //false


const now = 2025;
const ageBani = now - 2002;
const ageAisa = now - 2000;

console.log(now - 2002 > now - 2000); // false

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageBani + ageAisa) / 2; // () akan dilakukan pertama lalu di bagi.
console.log(ageBani, ageAisa, averageAge);

const firstName = "burhanudin";
const job = "unemployed";
const birthYear = 2002;
const year = 2025;

const burhanudin = `I'm ${firstName}
a ${year - birthYear}  years old 
${job} `;

console.log(burhanudin); 

const age = 15;

if (age >= 18) {
  console.log(`bani can start driving lincense 🚗`);
} else {
  console.log(
    `bani is ${age} years old. cannot start driving license 🚗. wait another ${
      18 - age
    } years.`
  );
}

const birthYear = 2002;
let century; // outside the box

if (birthYear <= 2000) {
  century = 20; // inside the box
} else {
  century = 21; // inside the box
}

console.log(`Burhanudin birth in ${century}th`); // should declare variable outside box first


// type conversion
const inputYear = `2002`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`bani`)); // NaN
console.log(typeof NaN);

console.log(String(23), 23); // becoming string

// type coerction
console.log("i'm" + 23 + "years old");
console.log(`i'm 23 years old`);
console.log("23" - "10" - 3); // 10 number

let n = "1" + 1; // 11 dtring becaus + operator
n = n - 1; // 11 - 1  = 10 Number
console.log(n); // 10 Number


console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("bani")); // true
console.log(Boolean({})); // true

const money = 0; // 0 = falsy value other that true
if (money) {
  // true
  console.log(`don't spend it all`);
} else {
  // false
  console.log(`you should get a job!`);
}


const age = "23";
if (age === 23) console.log(`you just becoming adult 😄(strict)`); // not executed
if (age == 23) console.log(`you just becoming adult 😄 (loose)`); // executed

const favorite = Number(prompt(`what your favorite number?`));
console.log(favorite); // string
console.log(typeof favorite);

if (favorite === 23) {
  // loose
  console.log(`amazing number`);
} else if (favorite === 7) {
  console.log(`Suiiiiii`);
} else {
  console.log(`Your gay. number not 23 or 7`);
}

if (favorite !== 23) {
  // !== tidak sama dengan 23
  console.log(`why not 23?`);
}
// AND &&, OR || and NOT !

const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
// console.log(` sarah is able to drive`);
// } else {
// console.log(`someone else should drive`);
// }
const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired); // true

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log(`sarah should be driver`);
} else {
  console.log(`soemeone else should drive`);
}*/

const day = "monday";
//
switch (day) {
  case "monday": // day ===monday
    console.log(`Eat Bakso`);
    console.log(`coding`);
    break;
  case `tuesday`:
    console.log(`eat batagor`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`eat siomay`);
    break;
  case `friday`:
    console.log(`fishing`);
    break;
  case `satuurday`:
  case ` sunday`:
    console.log(`enjoy weekend`);
    break;
  default:
    console.log(`not valid day`);
    break;
}

if (day === "monday") {
  console.log(`Eat Bakso`);
  console.log(`coding`);
} else if (day === "tuesday") {
  console.log(`eat batagor`);
} else if (day === `wednesday` || day === `thursday`) {
  console.log(`eat siomay`);
} else if (day === `friday`) {
  console.log(`fishing`);
} else if (day === `saturday` || day === `sunday`) {
  console.log(`enjoy weekend`);
} else {
  log(`not valid day`);
}

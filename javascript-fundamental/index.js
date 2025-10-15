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
console.log(ageBani, ageAisa, averageAge);*/

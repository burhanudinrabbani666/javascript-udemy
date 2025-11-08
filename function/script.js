`use strict`;
/*

const bookings = [];
// ES6
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // can use another parametes
) {
  // ES5
  // numPassengers = numPassengers || 1; // if operand 1 false next to operand 2
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking(`LM123`);
createBooking(`LM123`, 2); // { flightNum: "LM123", numPassengers: 2, price: 398 }
createBooking(`LM123`, undefined, 1000); // { flightNum: "LM123", numPassengers: 1, price: 1000 }


// value and reference

const flight = `LM123`;
const bani = {
  name: `Bani`,
  passport: 12345678,
};

const checkin = function (flightNum, passengers) {
  flightNum = `LH666`; // not change because the flight variable is primitive
  passengers.name = `Mr.` + passengers.name;

  if (bani.passport === 12345678) {
    console.log(`Check In`);
  } else {
    console.log(`Wrong Passport`);
  }
};

// checkin(flight, bani);
// console.log(flight); // primitie cannot change
// console.log(bani); // name change after use function

const newPaspport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000000);
};

newPaspport(bani); // bani.passport change in here
checkin(flight, bani); // result is `wrong passport` here

// high order function
const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(` `);
  return [first.toUpperCase(), ...other].join(` `);
};

// High Order function
const trasformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

trasformer(`Hello World! My name is Bani`, upperFirstWord);
trasformer(`Hello World! My name is Bani`, oneWord);

// callback all the time
const high5 = function () {
  console.log(`🖐️`);
};

document.body.addEventListener(`click`, high5);
[`bani`, `ryan`, `heri`].forEach(high5);

// FUNCTION RETURNING FUNCTION

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet(`Hey`);
greeterHey(`Bani`); // Hey Bani
greeterHey(`Aisa`); // Hey Aisa

greet(`Hello`)(`Bani`); // Hello Bani

//challenge

// const x = (greeting) => {
// return (name) => {
// console.log(`${greeting} ${name}`);
// };
// };

const x = (greeting) => (name) => console.log(`${greeting} ${name}`); // more shorter but more confusing

x(`Hello MTFK`)(`jokowi`);


// THE CALL AND APPLY METHODS

const garuda = {
  airline: `Garuda`,
  iataCode: `GA`,
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const airAsia = {
  airline: `Air Asia`,
  iataCode: `AA`,
  bookings: [],
};

const batik = {
  airline: `Batik Airline`,
  iataCode: `BA`,
  bookings: [],
};
const book = garuda.book;

garuda.book(123, `burhanudin rabbani`); // burhanudin rabbani booked a seat on Garuda flight GA123
garuda.book(456, `nuraisa`); // nuraisa booked a seat on Garuda flight GA456
console.log(garuda);

// call methods
book.call(airAsia, 69, `jokowi`); // this keyword pointed to airAsia object
book.call(garuda, 123, `irfan`); // tis keyword pointed to garuda object
book.call(batik, 697, `Agus`); // tis keyword pointed to Batik object
console.log(garuda);
console.log(airAsia);
console.log(batik);

// APPLY METHODS

const flightData = [583, `Pa ikin`];
book.apply(batik, flightData); // not use anymore in modern JavaScript

// more modern
book.call(batik, ...flightData);

// BIND METHODS

const bookAG = book.bind(garuda);
const bookAA = book.bind(airAsia);
const bookBT = book.bind(batik);

bookAA(696, `Ryan Hidayat`);
console.log(airAsia);

const bookAA77 = book.bind(airAsia, 99); // preset. only need name
bookAA77(`Burhaudin Rabbani`);
bookAA77(`Nuraisa`);

// With EventListeners

garuda.planes = 300;
garuda.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener(`click`, garuda.buyPlane.bind(garuda));
// need bind methods or this point to .but not to garuda object

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.12); // preset rate tp 0.12

console.log(addVAT(100));

//challenge make with function retunr function way

function addTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const addVAT2 = addTaxRate(0.14);
console.log(addVAT2(200));


// CHALLENGE

const poll = {
  question: `what is your favorite progmraming language?`,
  options: [`0: JavaScript`, `1: Python`, `2:Rust`, `3:C++`],
  // this generates [0,0,0,0]. more in the next section
  answer: new Array(4).fill(0),

  registerNewAnswer: function () {
    let answerInput = Number(
      prompt(
        ` ${this.question} \n ${this.options.join(
          `\n`
        )} (ite the option Number)`
      )
    );

    typeof answerInput === `number` &&
      answerInput < this.answer.length &&
      this.answer[answerInput]++;

    this.displayResult();
    this.displayResult(`string`);
  },

  displayResult: function (type = 'array') {
    if (type === `array`) {
      console.log(`${this.answer}`);
    } else if (type === `string`) {
      console.log(`Pool result are ${this.answer.join(`, `)}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answer: [5, 2, 3] }, `string`);

// [5, 2, 3]
// [1, 5, 3, 9, 6, 11]
*/

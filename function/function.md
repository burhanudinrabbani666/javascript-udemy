# FUNCTION

```js
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
createBooking(`LM123`, 2);
createBooking(`LM123`, undefined, 1000); // { flightNum: "LM123", numPassengers: 1, price: 1000 }
```

> can pass parameters ⚠️

## Value and reference

```js
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
```

## High order Function

```js
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

document.body.addEventListener(`click`, high5); // callback
[`bani`, `ryan`, `heri`].forEach(high5);
```

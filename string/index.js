// string

const airline = `TAP Air Garuda`;
const plane = `A320`;

/*

//basic string method

console.log(plane[0]); // A
console.log(plane[1]); // `3`
console.log(plane[2]); // `2`
console.log(`3214`[0]); //3

console.log(airline.length);
console.log(`3214`.length);

console.log(airline.indexOf(`r`)); // 6
console.log(airline.lastIndexOf(`r`)); //10
console.log(airline.indexOf(`Garuda`)); // 8

console.log(airline.slice(4)); // Air Garuda
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(` `))); // TAP
console.log(airline.slice(airline.lastIndexOf(` `) + 1)); // Garuda

console.log(airline.slice(-2)); // da
console.log(airline.slice(1, -1)); //AP Air Garud

function checkMidlleSeat(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) {
    console.log(`You got the middle seat `);
  } else {
    console.log(`You got lucky`);
  }
}

checkMidlleSeat(`11B`);
checkMidlleSeat(`23C`);
checkMidlleSeat(`3E`); */

// basic string method 2

console.log(airline.toLowerCase()); // make all string to lower case
console.log(airline.toUpperCase()); // make all string to upper case

// Fix Name
const passenger = `bAnI`; // Bani
const passengerLower = passenger.toLowerCase();
const correctPassengerName =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(correctPassengerName);

function correctName(name) {
  const nameLowerCase = name.toLowerCase();
  return nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
}
console.log(correctName(`aNaNG`));

// Comparing Email

const email = `hello@exm.io`;
const loginEmail = `   Hello@exm.io \n`;

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email === normalizedEmail);

function checkEmail(loginEmail) {
  const email = `bani@exm.io`;
  const normalizedEmail = loginEmail.toLowerCase().trim();
  return email === normalizedEmail;
}

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
checkMidlleSeat(`3E`); 

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

//replacing
const priceGB = `288,977$`;
const priceRp = priceGB.replace(`$`, `Rp`).replace(`,`, `.`);

console.log(priceRp);

// Replace All
const announcement = `All Passengers come to bording door 23. bording door 23`;
console.log(announcement.replaceAll(`door`, `gate`));

//boolean
const newPlane = `Airbus A320neo`;

console.log(newPlane.includes(`A320`)); //true
console.log(newPlane.includes(`boeing`)); //false
console.log(newPlane.startsWith(`Air`)); //true

if (newPlane.startsWith(`Airbus`) && newPlane.endsWith(`neo`)) {
  console.log(`part of new Aribus Family `);
}

// Practice
function checkbaggage(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`your NOT allowed to board`);
  } else {
    console.log(`Welcome to board`);
  }
}

checkbaggage(` I have Laptop, some food and a pocket Knife`);
checkbaggage(`sock and camera`);
checkbaggage(`got some snacks and gun for protection`);
*/

// String 3

//split
console.log(`a+very+easy+death`.split(`+`)); // [ "a", "very", "easy", "death" ]
console.log(`burhanudin Rabbani`.split(` `));

// join
const [firstName, lastName] = `Burhanudin Rabbani`.split(` `);
const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);

console.log(newName); // Mr. Burhanudin RABBANI

function capitalizeName(name) {
  const names = name.split(` `);
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
}

capitalizeName(`burhanudin rabbani`);

// padding
const message = `Go to gate 14`;

console.log(message.padStart(25, `+`).padEnd(35, `+`)); // ++++++++++++Go to gate 14++++++++++
console.log(`bani`.padStart(25, `+`));

//real case
function maskCreditCard(number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
}

console.log(maskCreditCard(1223343));

//repeat

const message2 = `bad wheater... all departues delayed...`;
console.log(message2.repeat(5));

function planesInLine(n) {
  console.log(`there are ${n} planes in Line ${`🛩️`.repeat(n)}`);
}

planesInLine(5);
planesInLine(2);
planesInLine(13);

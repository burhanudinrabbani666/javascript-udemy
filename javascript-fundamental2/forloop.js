/*
// for loop
const rep = 10;
for (let index = 1; index <= rep; index++) {
  console.log(`lifting weight repitition ${index} 🏋️`);
}


// looping array, breaking and continuing

const bani = [
  `Burhanudin`,
  `Rabbani`,
  2025 - 2002,
  `unemployed`,
  [`Angga`, `Risal`, `Aziz`],
  true,
];
const types = [];

for (let index = 0; index < bani.length; index++) {
  //reading from bani array
  console.log(bani[index], typeof bani[index]);

  // filling type of array
  types[index] = typeof bani[index];

  //filling types array
  // types[index]= typefo bani[index]
  types.push(typeof bani[index]);
}
console.log(types);

const years = [2001, 2002, 2003, 2004];
const age = [];

for (let index = 0; index < years.length; index++) {
  age.push(2025 - years[index]);
}

console.log(age);

// continue and break

// only string
console.log(`--- only string ----`);
for (let index = 0; index < bani.length; index++) {
  //reading from bani array

  if (typeof bani[index] !== "string") continue;
  console.log(bani[index], typeof bani[index]);
}

console.log(`--- Only Number ---`);

// Break when the number
for (let index = 0; index < bani.length; index++) {
  //reading from bani array
  if (typeof bani[index] === `number`) break;

  console.log(bani[index], typeof bani[index]);
}

console.log(`---only print number--- ` );
for (let index = 0; index < bani.length; index++) {
  //reading from bani array
  if (typeof bani[index] !== "number") continue;

  console.log(bani[index], typeof bani[index]);
} 


// Looping Backwards and loops in loops

const bani = [
  `Burhanudin`,
  `Rabbani`,
  2025 - 2002,
  `unemployed`,
  [`Angga`, `Risal`, `Aziz`],
  true,
];

// bani is array [0, 1, .., 4] start from 0
// bani.length is index [1, ... 5] star from 1
// bani. length - 1 = 5 - 1 = 4 = bani array

for (let index = bani.length - 1; index >= 0; index--) {
  console.log(index, bani[index]);
}

// loop inside loop

for (let index = 1; index <= 3; index++) {
  console.log(`--------staring exercise ${index}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weigth repetition ${rep} 🏋️`);
  }
}


// While loop
// const rep = 10;
// for (let index = 1; index <= rep; index++) {
//   console.log(`lifting weight repitition ${index} 🏋️`);
// }

let index = 1;
while (index <= 10) {
  // console.log(`WHILE : lifting weight repitition ${index} 🏋️`);
  index++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice == 6) console.log(`Loop is about to end...`);
}
*/

const bani = [
  `Burhanudin`,
  `Rabbani`,
  2025 - 2002,
  `unemployed`,
  [`Angga`, `Risal`, `Aziz`],
  true,
];
const types = [];

for (let index = 0; index < bani.length; index++) {
  //reading from bani array
  console.log(bani[index], typeof bani[index]);

  // filling type of array
  types[index] = typeof bani[index];

  //filling types array
  // types[index]= typefo bani[index]
  types.push(typeof bani[index]);
}
console.log(types);

const years = [2001, 2002, 2003, 2004];
const age = [];

for (let index = 0; index < years.length; index++) {
  age.push(2025 - years[index]);
}

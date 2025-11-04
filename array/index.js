`use strict`;

const bettaShop = {
  name: 'Betta Wava',
  location: 'Jl ki brajanata no 11',
  categories: ['Aquarium', 'Fish Food', 'Accessories', 'Fish Medicine'],
  originalBetta: ['Plakat', 'Halfmoon', 'Crowntail', 'Veiltail'],
  mainBetta: ['Giant Betta', 'Fancy Betta', 'Koi Betta'],
  openingHours: {
    thu: {
      open: 10,
      close: 20,
    },
    fri: {
      open: 11,
      close: 21,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (satrterIndex, mainIndex) {
    return [this.originalBetta[satrterIndex], this.mainBetta[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `order received! ${this.originalBetta[starterIndex]} and ${this.categories[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPlakat: function (clr1, clr2, clr3) {
    console.log(
      `here is your beautiful Plakat Betta fish with colors ${clr1}, ${clr2}, and ${clr3}`
    );
  },
};

/**ude
//
// destructuring object
bettaShop.orderDelivery({
  address: 'Jl. Merpati no 23',
  time: '14:00',
  mainIndex: 2,
  starterIndex: 2,
});

bettaShop.orderDelivery({
  address: `Jl ki brajanata no 45`,
  satrterIndex: 0,
});


const { name, openingHours, mainBetta } = bettaShop;
console.log(name, openingHours, mainBetta);

const { name: farmName, openingHours: hours, mainBetta: bettaMenu } = bettaShop; // change the variable name
console.log(farmName, hours, bettaMenu);

// default values
const { menu = [], originalBetta: starterMenu = [] } = bettaShop;
console.log(menu, starterMenu);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 14, b: 10, c: 7 }; // dong forget put ;
({ a, b } = obj); // use parenthesis to wrap the code
console.log(a, b);

// nested object

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = bettaShop.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return value from a function
const [satrter, mainBetta] = bettaShop.order(2, 0);
console.log(satrter, mainBetta);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);


// spread operator

const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr];
console.log(newArr);

const newOriginalBetta = [...bettaShop.originalBetta, `wild Betta`];
console.log(newOriginalBetta);

// copy array
const originalBettaCopy = [...bettaShop.originalBetta];

//join 2 array
const allBetaMenu = [...bettaShop.originalBetta, ...bettaShop.mainBetta];
console.log(allBetaMenu);

const name = `Wava`;
const nameLetters = [...name, ` `, `S.`];
console.log(nameLetters);

// oreder Betta
// const color = [
//   prompt(`lets order your favorite Plakat Betta color 1?`),
//   prompt(`color 2?`),
//   prompt(`color 3?`),
// ];
// console.log(color);

// bettaShop.orderPlakat(...color);

// object

const newBettaShop = { ...bettaShop, ig: `@bettawava` };
console.log(newBettaShop);

const bettaShopCopy = { ...bettaShop };
bettaShopCopy.name = `Betta Wava galaxy`;
console.log(bettaShopCopy.name);
console.log(bettaShop.name);


// 1. destructuring
// spread, because on right side of =
const arr = [1, 2, ...[3, 4]];

// rest, because on left side of =
const [a, b, ...other] = [1, 2, 3, 4];
console.log(a, b, other);

const [Plakat, , , veiltail, ...otherBetta] = [
  ...bettaShop.originalBetta,
  ...bettaShop.mainBetta,
];

console.log(Plakat, veiltail, otherBetta);

//object

const { sat, ...weekdays } = bettaShop.openingHours;
console.log(weekdays);

// 2. function
function add(...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log(sum);
}

add(2, 3);
add(4, 5, 6, 7);
add(6, 5, 4, 3, 2, 1);

const x = [23, 5, 7];
add(...x);


console.log(`--------- OR --------`);
//
console.log(3 || `bani`); // 3
console.log(`` || `jonas`); // jonas
console.log(true || 0); // true
console.log(undefined || null); // null

bettaShop.numGuests = 22; // can number 0 because 0 = false

const guest1 = bettaShop.numGuests ? bettaShop.numGuests : 10;
console.log(guest1);


console.log(`--------- AND --------`);

console.log(0 && `bani`); // 0
console.log(7 && `jonas`); // jonas
console.log(`hello` && 23 && null && `bani`); // null

// practical example
if (bettaShop.orderPlakat) {
  bettaShop.orderPlakat(`blue`, `red`, `galaxy`);
}

bettaShop.orderPlakat && bettaShop.orderPlakat(`Bluerim`, `Galaxy`, `Fancy`);


bettaShop.numGuests = null;

const guest2 = bettaShop.numGuests || 10;
console.log(guest2);

const guestCorrect = bettaShop.numGuests ?? 10;
console.log(guestCorrect); // 10 because bettaShop.numGuests is null
*/

// modern assignment operator

const rest1 = {
  name: `capri`,
  numGuests: 0,
};

const rest2 = {
  name: `budur`,
  owner: `bani`,
};

// OR Assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator
rest1.numGuests ??= 10; // assign a value if value is null / undefined / nulish
rest2.numGuests ??= 10;

// &&
// rest1.owner = rest1.owner && `<ANNONYMUS>`; //owner : undefined
// rest2.owner = rest2.owner && `<ANNONYMUS>`;
rest1.owner &&= `<ANNONYMUS>`;
rest2.owner &&= `<ANNONYMUS>`;

console.log(rest1);
console.log(rest2); // add numbGuest as object

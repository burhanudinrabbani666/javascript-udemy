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
};

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

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = bettaShop.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return value from a function
// const [satrter, mainBetta] = bettaShop.order(2, 0);
// console.log(satrter, mainBetta);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

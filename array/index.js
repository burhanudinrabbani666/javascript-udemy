`use strict`;

const bettaShop = {
  name: 'Betta Wava',
  location: 'Jl ki brajanata no 11',
  categories: ['Aquarium', 'Fish Food', 'Accessories', 'Fish Medicine'],
  originalBetta: ['Plakat', 'Halfmoon', 'Crowntail', 'Veiltail'],
  mainBetta: ['Giant Betta', 'Fancy Betta', 'Koi Betta'],

  order: function (satrterIndex, mainIndex) {
    return [this.originalBetta[satrterIndex], this.mainBetta[mainIndex]];
  },
};

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

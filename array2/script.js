const restaurant = {
  name: 'Classico Italiano',
  locatoin: 'Via angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risoto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

/*

const arr = [1, 2, 3];

// Old way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3
console.log(arr); // [1, 2, 3]

// take the first and third value with pace valu
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian vegetarian

// switch data in object

// Old Way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // vegatarian Italian

// desctructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // vegtarian Italian

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Brad Pizza

// nested Array
const nested = [1, 2, [5, 6]];
// const [first, , arrNested] = nested;
// console.log(first, arrNested); // 1 [5, 6]

// using destructuring inside destructuring
const [first, , [arrNested1, arrNested2]] = nested;
console.log(first, arrNested1, arrNested2); // 1 5 6 separateed varibale

// set default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8, 9, 1  r still use default value
*/

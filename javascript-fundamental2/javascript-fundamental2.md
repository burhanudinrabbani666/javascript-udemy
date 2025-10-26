## strict mode

is special mode that we can active in JavaScript, which makes it easier for us to write a secure JavaScript code. strict mode make developers to avoid accidental errors.

1. forbds us to do certain things.
2. create visible error of us incertain situations.

> should be in first line

## function

is simply a piece of code that we can **reuse** over and over again.function can hold one or more complete lines of code.

```js
function fruitProccesor(apples, oranges) {
  // name function(parameter)
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} orange.`;
  return juice;
}

// return
const appleJuice = fruitProccesor(5, 0); // function (arguments)
console.log(appleJuice); // capture value into variable
console.log(fruitProccesor(5, 0)); // not capture value into variable
```

> not all function need parameter and return.

### Function Declaration vs Expressions

```js
// Function declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcAge1(2002);
```

```js
// Function Expressions
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcAge2(2002);
console.log(age1, age2);
```

### arrow function

> arrow function is faster and shorter to write

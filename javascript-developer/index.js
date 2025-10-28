'use strict';

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function c(input) {
  const sumsP = [0];
  let sumsN = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      sumsP.push(input[i]);
    }
    if (input[i] < 0) {
      sumsN += input[i];
    }
  }
  const sumPO = sumsP.length - 1;
  return [sumPO, sumsN];
}

console.log(c(x));

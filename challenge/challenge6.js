function calcTip(value) {
  if (value >= 50 && value <= 300) {
    const tip = value * 0.15;
    return tip;
  } else {
    return value * 0.2;
  }
}
// console.log(calcTip(400));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);

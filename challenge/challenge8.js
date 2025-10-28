function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    return tip;
  } else {
    return bill * 0.2;
  }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let index = 0; index < bills.length; index++) {
  const tip = calcTip(bills[index]);

  tips.push(tip);
  totals.push(tip + bills[index]);
}

console.log(tips);
console.log(totals);

// bonus
const calcAvarege = function (arr) {
  // write calcAvarage with arr params
  let sum = 0; //sum stars with 0
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]; // add current value
    // loop keep going and
  }
  return sum / arr.length; // devide for avarage
};

console.log(calcAvarege(totals));

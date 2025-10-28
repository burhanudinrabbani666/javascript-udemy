const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    return tip;
  } else {
    return bill * 0.2;
  }
}

for (let index = 0; index < bills.length; index++) {
  const bill = calcTip(bills[index]);

  tips.push(bill);
  totals.push(bill + bills[index]);
}

console.log(tips);
console.log(totals);

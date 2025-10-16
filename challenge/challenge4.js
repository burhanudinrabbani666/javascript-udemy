const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalValue = bill + tip;

console.log(
  `the bill was ${bill}, the tip was ${tip}, and total value ${totalValue}`
);

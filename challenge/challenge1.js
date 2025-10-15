const massMark = 78;
const heightMark = 1.69;

const massJhon = 92;
const heightJhon = 1.95;

const BMImark = massMark / (heightMark * heightMark); // = 27
const BMIjhon = massJhon / (heightJhon * heightJhon); // = 24
const markHigherBMI = BMImark > BMIjhon;

console.log(BMImark);
console.log(BMIjhon);

console.log(markHigherBMI);

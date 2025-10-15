const massMark = 78;
const heightMark = 1.69;

const massJhon = 92;
const heightJhon = 1.95;

const BMImark = massMark / (heightMark * heightMark);
const BMIjhon = massJhon / (heightJhon * heightJhon);

if (BMImark > BMIjhon) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`john's BMI is higher than Mark's!`);
}

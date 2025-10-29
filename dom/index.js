`use strict`;
/*
console.log(document.querySelector('.message').textContent);

document.querySelector(`.message`).textContent = `correct number! 😄`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 69;

document.querySelector(`.guess`).value = 66;
console.log(document.querySelector(`.guess`).value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number ❗`;
  } else if (guess == secretNumber) {
    document.querySelector(`.message`).textContent = `Your Correct 🥳`;
  }
});

//TODO generate secret number

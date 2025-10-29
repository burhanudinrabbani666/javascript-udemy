`use strict`;
/*
console.log(document.querySelector('.message').textContent);

document.querySelector(`.message`).textContent = `correct number! 😄`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 69;

document.querySelector(`.guess`).value = 66;
console.log(document.querySelector(`.guess`).value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}
function displayScore(score) {
  document.querySelector(`.score`).textContent = score;
}
function displayNumber(number) {
  document.querySelector(`.number`).textContent = number;
}
function displayNumberStyle(value) {
  document.querySelector(`.number`).style.width = value;
}
function bodyColor(color) {
  document.querySelector(`body`).style.backgroundColor = color;
}

document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // no input
  if (!guess) {
    displayMessage(`No Number ❗`);
  }
  // if Win
  else if (guess === secretNumber) {
    displayMessage(`Your Correct 🥳`);
    displayNumber(secretNumber);
    bodyColor(`#60b347`);
    displayNumberStyle(`30rem`);
    if (score > highScore) {
      highScore = score;

      document.querySelector(`.highscore`).textContent = highScore;
    }
  }

  // if wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too High 📈` : `Too low 📈`);

      score--;
      displayScore(score);
    } else {
      displayMessage(`Loser !!! `);
      displayScore(0);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  // initial data again
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayNumber(`?`);
  displayMessage(`Start guessing...`);
  bodyColor(`#222`);
  displayNumberStyle(`15rem`);

  document.querySelector(`.guess`).value = ` `;
});

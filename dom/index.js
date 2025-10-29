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

document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number ❗`;
  }
  // if Win
  else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Your Correct 🥳`;
    document.querySelector(`.number`).textContent = secretNumber;
    score++;

    document.querySelector(`.score`).textContent = score--;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;
  }

  // to high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message `).textContent = `Too High 📈`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message `).textContent = `Loser !!! `;
      document.querySelector(`.score`).textContent = 0;
    }
  }

  // to low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message `).textContent = `Too low 📈`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message `).textContent = `Loser !!! `;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  // initial data again
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.guess`).value = ` `;

  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
//TODO generate secret number

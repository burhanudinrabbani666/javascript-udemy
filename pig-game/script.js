'use strict';

//Variables to selecting elements
const score0Element = document.getElementById(`score--0`);
const score1Elment = document.getElementById(`score--1`);
const current0Element = document.getElementById(`current--0`);
const current1Element = document.getElementById(`current--1`);

const diceElement = document.querySelector(`.dice`);
const btnNewGame = document.querySelector(`.btn--new`);
const btnRollDice = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//staring conditions
score0Element.textContent = 0;
score1Elment.textContent = 0;
diceElement.classList.add(`hidden`);

let currentScore = 0;

//addEvent listener

//roll
btnRollDice.addEventListener(`click`, function () {
  // 1.generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.display dice
  diceElement.classList.remove(`hidden`);
  diceElement.src = `dice-${dice}.png`;
  // 3.check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    current0Element.textContent = currentScore; //TODO chage later
  } else {
    //switch to next player
  }
});

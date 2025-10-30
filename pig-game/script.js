'use strict';

//Variables to selecting elements
const score0Element = document.getElementById(`score--0`);
const score1Elment = document.getElementById(`score--1`);
const diceElement = document.querySelector(`.dice`);

//staring conditions
score0Element.textContent = 0;
score1Elment.textContent = 0;
diceElement.classList.add(`hidden`);

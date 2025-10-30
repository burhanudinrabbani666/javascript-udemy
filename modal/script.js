'use strict';

const btnsOpenModalElement = document.querySelectorAll(`.show-modal`);
const btnCloseModalElement = document.querySelector(`.close-modal`);
const modalElement = document.querySelector(`.modal`);
const overlayElement = document.querySelector(`.overlay`);

// function
function closeModal() {
  modalElement.classList.add(`hidden`);
  overlayElement.classList.add(`hidden`);
}

function openModal() {
  modalElement.classList.remove(`hidden`);
  overlayElement.classList.remove(`hidden`);
}

//event listeners

for (let index = 0; index < btnsOpenModalElement.length; index++) {
  btnsOpenModalElement[index].addEventListener(`click`, openModal);
}

btnCloseModalElement.addEventListener(`click`, closeModal);
overlayElement.addEventListener(`click`, closeModal);

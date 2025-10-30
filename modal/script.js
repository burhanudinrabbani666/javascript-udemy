'use strict';

const btnsOpenModalElement = document.querySelectorAll(`.show-modal`);
const closeModalElement = document.querySelector(`.close-modal`);
const modalElement = document.querySelector(`.modal`);
const overlayElement = document.querySelector(`.overlay`);

for (let index = 0; index < btnsOpenModalElement.length; index++) {
  console.log(btnsOpenModalElement[index].textContent);
}

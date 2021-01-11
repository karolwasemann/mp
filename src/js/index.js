import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const mail = document.querySelector(".social__item--mail");
const form = document.querySelector(".formular");
const cancel = document.querySelector(".formular__cancel");

mail.addEventListener("click", () => {
  form.style.display = "flex";
});

cancel.addEventListener("click", () => {
  form.style.display = "none";
});

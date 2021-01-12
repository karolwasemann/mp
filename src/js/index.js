import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const mail = document.querySelector(".social__item--mail");
const form = document.querySelector(".formular");
const cancel = document.querySelector(".formular__cancel");
const wrap = document.querySelector(".wf");

mail.addEventListener("click", () => {
  form.style.display = "flex";
  wrap.style.display = "block";
});

cancel.addEventListener("click", () => {
  form.style.display = "none";
  wrap.style.display = "none";
});

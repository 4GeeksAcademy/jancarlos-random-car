/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let card = numero[Math.floor(Math.random() * numero.length)];
  document.querySelector(".numero").innerHTML = card;
  let palos = [
    { simbolo: "♦", color: "red" },
    { simbolo: "♥", color: "red" },
    { simbolo: "♠", color: "black" },
    { simbolo: "♣", color: "black" }
  ];
  let simbolo = palos[Math.floor(Math.random() * palos.length)];
  document.querySelectorAll(".palo").forEach((element, index) => {
    element.innerHTML = simbolo.simbolo;
    element.style.color = simbolo.color;
  });
  console.log("Hello Rigo from the console!");
};

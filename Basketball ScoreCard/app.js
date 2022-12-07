"use strict";

// Counters
let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let newGame = document.querySelector(".reset");
let Hscore = 0;
let Gscore = 0;

// Buttons

let btnPlusOne = document.querySelector(".btn-plus-one");
let btnPlusTwo = document.querySelector(".btn-plus-two");
let btnPlusThree = document.querySelector(".btn-plus-three");

// Reset Button

newGame.addEventListener("click", function () {
  Hscore = 0;
  Gscore = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
});

// HomeScore Increments

btnPlusOne.addEventListener("click", function () {
  Hscore += 1;
  homeScore.textContent = Hscore;
});
btnPlusTwo.addEventListener("click", function () {
  Hscore += 2;
  homeScore.textContent = Hscore;
});
btnPlusThree.addEventListener("click", function () {
  Hscore += 3;
  homeScore.textContent = Hscore;
});

// Guest Buttons

let btnPlusOneG = document.querySelector(".btn-plus-one-g");
let btnPlusTwoG = document.querySelector(".btn-plus-two-g");
let btnPlusThreeG = document.querySelector(".btn-plus-three-g");

// GuestScore Increments

btnPlusOneG.addEventListener("click", function () {
  Gscore += 1;
  guestScore.textContent = Gscore;
});
btnPlusTwoG.addEventListener("click", function () {
  Gscore += 2;
  guestScore.textContent = Gscore;
});
btnPlusThreeG.addEventListener("click", function () {
  Gscore += 3;
  guestScore.textContent = Gscore;
});

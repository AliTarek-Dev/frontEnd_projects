"use strict";
let score = 15;
let highestScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess <= 0 || guess > 20) {
    displayMessage("⛔ Out of the range!");
    score--;
    document.querySelector(".score-value").textContent = score;

    if (score <= 1) {
      displayMessage("💥 You lost the game!");
      score = 0;
      highestScore = score;
      document.querySelector(".score-value").textContent = score;
      highestScore = score;
      document.querySelector(".heighest-value").textContent = highestScore;
    }
  } else if (guess === secretNumber) {
    displayMessage("🎉🎉 Correct number!");
    document.querySelector(".the-box").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".the-box").style.transform =
      "translate(-50%, -100%)";
    document.querySelector(".the-box").style.backgroundColor = "#f50000b7";
    document.querySelector(".guess").disabled = true;
    document.querySelector(".check").disabled = true;

    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".heighest-value").textContent = highestScore;
    }
  } else if (score <= 1) {
    displayMessage("💥 You lost the game!");
    score = 0;
    highestScore = 0;
    document.querySelector(".score-value").textContent = score;
    document.querySelector(".heighest-value").textContent = highestScore;
  } else {
    if (guess > secretNumber && guess - secretNumber >= 17) {
      displayMessage("😱 Extremely High!");
    } else if (guess < secretNumber && secretNumber - guess >= 17) {
      displayMessage("😱 Extremely Low!");
    } else if (guess > secretNumber) {
      displayMessage("↖️ HIGH!");
    } else {
      displayMessage("↙️ LOW!");
    }

    score--;
    document.querySelector(".score-value").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score-value").textContent = score;
  document.querySelector(".the-box").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = " rgb(34, 34, 34)";
  document.querySelector(".the-box").style.transform = "translate(-50%, -50%)";
  document.querySelector(".the-box").style.backgroundColor = "#eee";
  document.querySelector(".guess").disabled = false;
});

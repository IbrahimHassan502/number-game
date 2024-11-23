"use strict";
const mainNum = document.querySelector(".main-num");
const button = document.querySelector("button");
const questionNum = 164;
const chosenNums = [0];
function generateRandomAndCheck() {
  const randomNum = Math.round(Math.random() * questionNum);
  if (chosenNums.indexOf(randomNum) < 0) {
    chosenNums.push(randomNum);
    mainNum.textContent = randomNum;
  } else if (chosenNums.length <= questionNum) {
    generateRandomAndCheck();
  }
}
button.addEventListener("click", () => generateRandomAndCheck());

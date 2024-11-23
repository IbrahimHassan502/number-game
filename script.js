"use strict";
const mainNum = document.querySelector(".main-num");
const form = document.querySelector("form");
const message = document.querySelector("p");

// const questionNum = 164;
const chosenNums = [0];
function generateRandomAndCheck(range) {
  console.log(chosenNums);
  const randomNum = Math.round(Math.random() * range);
  if (chosenNums.indexOf(randomNum) < 0) {
    chosenNums.push(randomNum);
    mainNum.textContent = randomNum;
  } else if (chosenNums.length <= range) {
    generateRandomAndCheck(range);
  }
}
// button.addEventListener("click", () => generateRandomAndCheck());
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const range = document.querySelector("input").value;
  if (Number(range)) {
    message.textContent = "";
    generateRandomAndCheck(range);
  } else {
    message.textContent = "please enter a range to start";
  }
});

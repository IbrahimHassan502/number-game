"use strict";
const mainNum = document.querySelector(".main-num");
const form = document.querySelector("form");
const useList = document.querySelector("#internal-q-list");
const message = document.querySelector("p");
useList.addEventListener("checked", () => console.log("hii"));
// internal question list
const qArr = [
  "Age",
  "Gender",
  "Height",
  "Weight",
  "Where are you from",
  "First Name",
  "Last Name",
  "Middle Name",
  "Birthday",
  "Main Language(s)",
  "Favorite Color",
  "Favorite Food",
  "Favorite Activity",
  "Favorite Music genre",
  "Favorite Artist",
  "Favorite Song",
  "Favorite Movie",
  "Favorite Video Game (if any)",
  "Favorite TV show",
  "Do you play any sports",
  "Last thing you did",
  "Life/Experience",
  "Do you currently have a job",
  "Future Job/Career/Ambitions",
  "Have you done drugs",
  "Do you have any pets",
  "Most Favorable Memory",
  "Most embarrassing moment",
  "Dream Vacation",
  "How many Family members",
  "How many friends",
  "Do you plan on going to college/university",
  "Do you use any other social media then Reddit",
  "Who do you follow",
  "Have you ever had an internet argument",
  "Most used Social Media app",
  "Have you met any friends online",
  "Last Person you DM'd/followed",
  "What was the last message you sent",
  "How many followers/friends on social media",
  "Amount of time you use social media",
  "Most expensive thing you own  Do you own anything above $1000",
  "Most prized possession",
  "Do you own anything embarrasing",
  "Weirdest thing you own",
  "Do you own anything popular",
  "Do you own anything considered rich",
  "Do you own anything futuristic",
  "Coolest thing you own",
  "Oldest thing you own",
  "What did you buy/get recently",
  "Hair Style",
  "Hair Length",
  "Hair Color",
  "Body Style",
  "Ethnicity",
  "Eye Color",
  "Are you wearing makeup",
  "Favorite outfit",
  "Facial Hair",
  "Sexuality",
  " Relationship Status",
  "Celebrity Crush",
  "Have you ever cheated on someone",
  "Ideal Girlfriend/Boyfriend",
  "Idea of Perfect Date",
  "Have you asked someone out",
  "What do you hope in a relationship",
  "Are you interested in anyone",
  "Do you real life/online date",
  "Do you have piercing/tattoos",
  "Most embarrassing story",
  "Where do you go to school",
  "What classes do you take",
  "What grade are you in",
  "Most favorite teacher",
  "Least favorite teachers",
  "Highest Grade/Lowest Grade in classes",
  "How long is your school day",
  "Did you do your homework",
  "Do you have any test, quizzes, or exams coming up",
  "Last bad grade",
  "Last good grade",
  "Are you rich/poor",
  " Where do you stand in the wealth class (lower class, middle class, upper class)",
  "How big is your house",
  "Take a picture of your house",
  "How much do your parents make",
  "Do your parents struggle with debt",
  "Do you own a pool (above-ground/below-ground)",
  "Do you live in a gated neighborhood",
  "Do you have expensive stuff",
  "How big is your room",
  "What kind of school do you go to",
  "Send a selfie",
  " Ask whatever you want (I can't say no)",
];
// set fontsize based on user perference
useList.addEventListener("change", (e) => {
  mainNum.style.fontSize = e.target.checked ? "3.5em" : "6em";
});
// function that generates a random number, check if it's repeated then return it
const chosenNums = [0];
function generateRandomAndCheck(range = qArr.length) {
  const randomNum = Math.round(Math.random() * range);
  if (chosenNums.indexOf(randomNum) < 0) {
    chosenNums.push(randomNum);
    return randomNum;
  } else if (chosenNums.length <= range) {
    return generateRandomAndCheck(range);
  }
}
// button.addEventListener("click", () => generateRandomAndCheck());
form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "";
  const range = document.querySelector("input[type='number']").value;
  if (Number(range) && useList.checked) {
    mainNum.textContent = qArr[generateRandomAndCheck(range)] || "game over";
  } else if (Number(range)) {
    mainNum.textContent = generateRandomAndCheck(range) || "game over";
  } else if (useList.checked) {
    mainNum.textContent = qArr[generateRandomAndCheck()] || "game over";
  } else {
    message.textContent = "please enter a range to start";
  }
});

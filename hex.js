const hexCodeSpan = document.querySelector("#hexCode");
const clickMeBtn = document.querySelector(".clickMe");

const hexCodeCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

clickMeBtn.addEventListener("click", function () {
  let newCode = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * hexCodeCharacters.length);
    newCode += hexCodeCharacters[randomNumber];
  }

  document.body.style.backgroundColor = newCode;
  hexCodeSpan.innerHTML = newCode;
});

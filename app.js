const hexCodeSpan = document.querySelector("#hexCode");
const clickMeBtn = document.querySelector(".clickMe");

const colorList = ["red", "green", "blue", "yellow"];

clickMeBtn.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * colorList.length);
  document.body.style.backgroundColor = colorList[randomNumber];
  hexCodeSpan.innerHTML = colorList[randomNumber];
});

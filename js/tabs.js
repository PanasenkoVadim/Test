let buttonFirst = document.querySelector(".step1");
let buttonSecond = document.querySelector(".step2");
let buttonThird = document.querySelector(".step3");
let buttonFourth = document.querySelector(".step4");

let slideFirst = document.querySelector(".first");
let slideSecond = document.querySelector(".second");
let slideThird = document.querySelector(".third");
let slideFourth = document.querySelector(".fourth");

buttonFirst.addEventListener("click", function () {
  buttonFirst.style.color = "#E1670E";
  buttonSecond.style.color = "#000";
  buttonThird.style.color = "#000";
  buttonFourth.style.color = "#000";

  slideFirst.style.display = "flex";
  slideSecond.style.display = "none";
  slideThird.style.display = "none";
  slideFourth.style.display = "none";
});
buttonSecond.addEventListener("click", function () {
  buttonFirst.style.color = "#000";
  buttonSecond.style.color = "#E1670E";
  buttonThird.style.color = "#000";
  buttonFourth.style.color = "#000";

  slideSecond.style.display = "flex";
  slideFirst.style.display = "none";
  slideThird.style.display = "none";
  slideFourth.style.display = "none";
});
buttonThird.addEventListener("click", function () {
  buttonFirst.style.color = "#000";
  buttonSecond.style.color = "#000";
  buttonThird.style.color = "#E1670E";
  buttonFourth.style.color = "#000";

  slideSecond.style.display = "none";
  slideFirst.style.display = "none";
  slideThird.style.display = "flex";
  slideFourth.style.display = "none";
});
buttonFourth.addEventListener("click", function () {
  buttonFirst.style.color = "#000";
  buttonSecond.style.color = "#000";
  buttonThird.style.color = "#000";
  buttonFourth.style.color = "#E1670E";

  slideSecond.style.display = "none";
  slideFirst.style.display = "none";
  slideThird.style.display = "none";
  slideFourth.style.display = "flex";
});

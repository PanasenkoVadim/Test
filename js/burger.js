let burgerBtn = document.querySelector(".burger-btn");
burgerBtn.addEventListener("click", function (e) {
  document.querySelector(".burger-nav-list").classList.toggle("transform");
  burgerBtn.classList.toggle("opened");
});
document
  .querySelector(".burger-nav-list")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

let search = document.querySelector(".search");
let searchBtn = document.querySelector(".header-search-img ");
let closing = document.querySelector(".search-form-close-img");
searchBtn.addEventListener("click", function () {
  search.classList.toggle("search-hidden");
});
closing.addEventListener("click", function () {
  search.classList.add("search-hidden");
});

let trigger = document.querySelectorAll(".accordeon-item-trigger");
let item = document.querySelectorAll(".accordeon-item");

trigger.forEach((triggerItem) => {
  triggerItem.addEventListener("click", () => {
    const parent = triggerItem.parentNode;
    if (parent.classList.contains("accordeon-item-active")) {
      parent.classList.remove("accordeon-item-active");
    } else {
      item.forEach((element) =>
        element.classList.remove("accordeon-item-active")
      );
      parent.classList.toggle("accordeon-item-active");
    }
  });
});

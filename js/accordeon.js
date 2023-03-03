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

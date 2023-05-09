const parent_original = document.querySelector(".content");
const parent = document.querySelector(".interface");
const item = document.querySelector(".content__description");

window.addEventListener("resize", function (event) {
  const viewport_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (viewport_width <= 1200) {
    if (!item.classList.contains("done")) {
      parent.insertBefore(item, parent.children[1]);
      item.classList.add("done");
    }
  } else {
    if (item.classList.contains("done")) {
      parent_original.insertBefore(item, parent_original.children[2]);
      item.classList.remove("done");
    }
  }
});

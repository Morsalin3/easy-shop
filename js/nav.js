
const hamburger = document.querySelector(".nav-burger");
const remove = document.querySelector(".remove");
const navContainer = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
  // hamburger.classList.toggle("active");
  navContainer.classList.add("active");

});
remove.addEventListener("click", () => {
  navContainer.classList.remove("active");
});

// const navMenus = document.querySelector(".submenu").children.map(i);
// console.log(navMenus);

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
  // hamburger.classList.remove("active");
  navContainer.classList.toggle("active");
}));


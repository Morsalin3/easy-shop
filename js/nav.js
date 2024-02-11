const hamburger = document.querySelector(".nav-burger");
const remove = document.querySelector(".remove");
const navMenu = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
  // hamburger.classList.toggle("active");
  navMenu.classList.add("active");
})
remove.addEventListener("click", () => {
  navMenu.classList.remove("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
  // hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
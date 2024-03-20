
const hamburger = document.querySelector(".nav-burger");
const remove = document.querySelector(".remove");
const navContainer = document.querySelector(".mob-nav-container");

hamburger.addEventListener("click", () => {
  // hamburger.classList.toggle("active");
  navContainer.classList.add("active");

});
remove.addEventListener("click", () => {
  navContainer.classList.remove("active");
});

// const dropdowns = document.querySelectorAll(".dropdown-menus");
// const subMenus = document.querySelectorAll(".submenu");

// dropdowns.forEach(dropdown => {
//   dropdown.addEventListener("click", () => {
//     const submenu = dropdown.nextElementSibling;
    
//     submenu.classList.toggle("active");
//   });
// });


// document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
//   navContainer.classList.toggle("active");
// }));
// hamburger.classList.remove("active");

const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".test-submenu .menu-title");
// sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});
subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});



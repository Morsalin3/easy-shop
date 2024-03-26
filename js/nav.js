
// navbar start here 
const hamburger = document.querySelector(".nav-burger");
const remove = document.querySelector(".remove");
const navContainer = document.querySelector(".mob-nav-container");

document.querySelectorAll(".nav-burger").forEach(n =>n.addEventListener("click", ()=>{
  navContainer.classList.add("active");
}));

remove.addEventListener("click", () => {
  navContainer.classList.remove("active");
});

document.querySelectorAll(".item").forEach(n => n.addEventListener("click", () => {
  navContainer.classList.toggle("active");
}));

// for categories button 
const cateBtn =  document.querySelector(".cate-btn");
const cateMenu = document.querySelector(".categories-menu");

cateBtn.addEventListener("click", ()=>{
  cateMenu.classList.toggle("active");
});
document.querySelectorAll(".cate-item").forEach(n => n.addEventListener("click", () => {
  cateMenu.classList.toggle("active");
}));

//  for top scroll navbar 
window.addEventListener("scroll", ()=>{
  if (document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-nav").style.top = "0";
  } else {
    document.querySelector(".scroll-nav").style.top = "-70px";
  }
});


//  mobile menu start here
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
//  mobile menu end here

// navbar end here 


// for bottom to top scroll button 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

toTop.addEventListener("click", ()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

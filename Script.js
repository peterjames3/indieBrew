const hamburgerEl = document.querySelector(".hamburger");
const navMenu = document.querySelector(".right-menu");
const navItems = document.querySelectorAll(".nav-link");
const backBtn = document.querySelector(".back_btn");

function btnClicked() {
  hamburgerEl.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    hamburgerEl.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
hamburgerEl.addEventListener("click", btnClicked);
backBtn.addEventListener("click", () => {
  alert("button clicked");
});
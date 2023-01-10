/**
 * Main index.js file
 * 1. imports Filter,
 * 2. creates Filter instance
 * 3. Adds nav monile functionality
 */

import "../css/style.scss";

import Filter from "./Filter";
import "animate.css";

const mainFilter = new Filter();

// Mobile nav
document
  .querySelector(".mobile-nav-btn")
  .addEventListener("click", openCloseMobileNav);
document
  .querySelector(".mobile-home-btn")
  .addEventListener("click", openCloseMobileNav);
document
  .querySelector(".mobile-products-btn")
  .addEventListener("click", openCloseMobileNav);
document
  .querySelector(".overlay")
  .addEventListener("click", openCloseMobileNav);

document.querySelectorAll(".logo-btn").forEach((element) => {
  element.addEventListener("click", closeMobileNav);
});

function openCloseMobileNav() {
  document.querySelector(".nav-container-mobile").classList.toggle("open");
  if (
    document.querySelector(".nav-container-mobile").classList.contains("open")
  ) {
    document.body.style.overflow = "hidden";
    document.querySelector(".overlay").style.opacity = 1;
    document.querySelector(".overlay").style.pointerEvents = "all";
    document.querySelector(".mobile-nav-btn").classList.remove("fa-bars");
    document
      .querySelector(".mobile-nav-btn")
      .classList.add("fa-bars-staggered");
  } else {
    document.body.style.overflow = "auto";
    document.querySelector(".overlay").style.opacity = 0;
    document.querySelector(".overlay").style.pointerEvents = "none";
    document.querySelector(".mobile-nav-btn").classList.add("fa-bars");
    document
      .querySelector(".mobile-nav-btn")
      .classList.remove("fa-bars-staggered");
  }
}

function closeMobileNav() {
  if (
    document.querySelector(".nav-container-mobile").classList.contains("open")
  ) {
    document.querySelector(".nav-container-mobile").classList.remove("open");
    document.body.style.overflow = "auto";
    document.querySelector(".overlay").style.opacity = 0;
    document.querySelector(".overlay").style.pointerEvents = "none";
    document.querySelector(".mobile-nav-btn").classList.add("fa-bars");
    document
      .querySelector(".mobile-nav-btn")
      .classList.remove("fa-bars-staggered");
  }
}

// ---------- MODAL -------->
// Get the modal
document.querySelectorAll(".card-front").forEach((element) => {
  element.addEventListener("click", (e) => {
    document
      .elementsFromPoint(e.clientX, e.clientY)
      .filter((x) => x.classList.contains("product-card"))[0]
      .querySelector(".product-modal")
      .showModal();
  });
});

document.querySelectorAll(".close").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.closest(".product-modal").close();
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-modal")) {
    e.target.close();
  }
});

// ---------- BACK TO PRODUCTS -------->
// only showing button when scrolling up
let lastScrollTop = 0;
window.addEventListener("scroll", function (e) {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop < lastScrollTop) {
    back2prod.style.display = "block";
  } else {
    back2prod.style.display = "none";
  }
  lastScrollTop = scrollTop;
});

// only showing button when scrolling past 1000px
const back2prod = document.querySelector(".grid-container > a");
window.addEventListener("scroll", function (e) {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    back2prod.style.display = "block";
  } else {
    back2prod.style.display = "none";
  }
});

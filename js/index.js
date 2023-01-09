/**
 * Main index.js file
 * 1. imports Filter,
 * 2. creates Filter instance
 * 3. Adds nav monile functionality
 */

import "../css/style.scss";
import "../css/admin.scss";

import Filter from "./Filter";
import "animate.css";

const mainFilter = new Filter();

// var flkty = new Flickity(elem, {
//   // options
//   cellAlign: "left",
//   contain: true,
//   pageDots: false,
//   dragThreshold: 10,
//   imagesLoaded: true,
//   setGallerySize: false,
//   arrowShape: {
//     x0: 15,
//     x1: 60,
//     y1: 40,
//     x2: 70,
//     y2: 40,
//     x3: 40,
//   },
// });

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

/* Test environment for product card carousel ---------
-------------------------------------------------------*/
// const rightBtn = document.querySelector(".right-btn");

// rightBtn.addEventListener("click", slide);

// function slide() {
//   document.querySelector(".carousel").style.transform = `translateX(-100%)`;
// }

// document.querySelector(".theme-btn").addEventListener("click", themeSwitch);

// WELCOME;
// const welcomeContainer = document.querySelector(".welcome-container");
// const left = document.querySelector(".welcome__left");
// const moveEvent = (e) => {
//   const welcomeWidth = welcomeContainer.clientWidth;
//   const x = ((e.pageX - welcomeContainer.offsetLeft) / welcomeWidth) * 100;
//   console.log(x);
//   left.style.width = `${x}%`;
// };

// document.onmousemove = (e) => moveEvent(e);

// ---------- MODAL -------->
// Get the modal
const modals = document.querySelector(".product-modal");
// Get productCard that opens the modal
const productCards = document.querySelector(".card-front");
// Get element that closes the modal
const closers = document.querySelector(".close");

productCards.addEventListener("click", () => {
  modals.showModal();
});
closers.addEventListener("click", () => {
  modals.close();
  console.dir(modals);
});

// ISSUE: ZET IF STATEMENT ERBIJ IF MODALS.OPEN == TRUE
// document.body.addEventListener("click", closeOnClick);
// function closeOnClick(e) {
//   if (
//     e.clientX < modals.getBoundingClientRect().x ||
//     e.clientY < modals.getBoundingClientRect().y ||
//     e.clientX >
//       modals.getBoundingClientRect().x + modals.getBoundingClientRect().width ||
//     e.clientY >
//       modals.getBoundingClientRect().y + modals.getBoundingClientRect().height
//   ) {
//     modals.close();
//   }
// }

// document.querySelectorAll(".product-card").forEach((element) => {
//   element.addEventListener("click", openModel);
// });
// function openModel(e) {
//   console.log(
//     document.elementsFromPoint(e.clientX, e.clientY).map((x) => x.classList)
//   );
// }

// back2prods

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

/**
 * Main index.js file
 * 1. imports Filter,
 * 2. creates Filter instance
 * 3. Adds nav monile functionality
 */
import Filter from "./Filter";
// import Flickity from "flickity";

// const spotlight = new Carousel2(document.querySelector(".carousel-container"));

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
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
mobileNavBtn.addEventListener("click", openCloseNav);
document
  .querySelector(".mobile-home-btn")
  .addEventListener("click", openCloseNav);
document.querySelector(".overlay").addEventListener("click", openCloseNav);
function openCloseNav() {
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
const modals = document.querySelectorAll(".product-modal")[0];
// Get productCard that opens the modal
const productCards = document.querySelectorAll(".product-card")[0];
// Get element that closes the modal
const closers = document.querySelectorAll(".product-modal .close")[0];

// Open the modal on click
productCards.onclick = () => {
  modals.style.display = "block";
};
// Close the modal
closers.onclick = () => {
  modals.style.display = "none";
};

window.onclick = function (event) {
  if (!event.target == modals) {
    modals.style.display = "none";
  }
};

document.querySelectorAll(".product-card").forEach((element) => {
  element.addEventListener("click", openModel);
});
function openModel(e) {
  console.log(
    document.elementsFromPoint(e.clientX, e.clientY).map((x) => x.classList)
  );
}

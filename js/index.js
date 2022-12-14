import Carousel2 from "./carousel2";
import Filter from "./Filter";
import Flickity from "flickity";

// const spotlight = new Carousel2(document.querySelector(".carousel-container"));
const mainFilter = new Filter(document.querySelector(".products__filter"));

var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  pageDots: false,
  dragThreshold: 10,
  imagesLoaded: true,
  setGallerySize: false,
  arrowShape: {
    x0: 15,
    x1: 60,
    y1: 40,
    x2: 70,
    y2: 40,
    x3: 40,
  },
});

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
mobileNavBtn.addEventListener("click", openNav);
function openNav() {
  document.querySelector(".nav-container-mobile").classList.toggle("open");
}

/* Test environment for product card carousel ---------
-------------------------------------------------------*/
// const rightBtn = document.querySelector(".right-btn");

// rightBtn.addEventListener("click", slide);

// function slide() {
//   document.querySelector(".carousel").style.transform = `translateX(-100%)`;
// }

// document.querySelector(".theme-btn").addEventListener("click", themeSwitch);

// WELCOME
// const welcomeContainer = document.querySelector(".welcome-container");
// const left = document.querySelector(".welcome__left");
// const moveEvent = (e) => {
//   const welcomeWidth = welcomeContainer.clientWidth;
//   const x = ((e.pageX - welcomeContainer.offsetLeft) / welcomeWidth) * 100;
//   console.log(x);
//   left.style.width = `${x}%`;
// };

// document.onmousemove = (e) => moveEvent(e);

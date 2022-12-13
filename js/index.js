import Carousel2 from "./carousel2";
import Filter from "./Filter";

// const spotlight = new Carousel2(document.querySelector(".carousel-container"));
const mainFilter = new Filter(document.querySelector(".products__filter"));

/* Test environment for product card carousel ---------
-------------------------------------------------------*/
const rightBtn = document.querySelector(".right-btn");

rightBtn.addEventListener("click", slide);

function slide() {
  document.querySelector(".carousel").style.transform = `translateX(-100%)`;
}

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

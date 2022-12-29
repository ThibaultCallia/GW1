import "../css/style.css";
// import "../css/products_grid_filter.scss";

import Filter from "./Filter";
import Flickity from "flickity";

// const spotlight = new Carousel2(document.querySelector(".carousel-container"));
const mainFilter = new Filter(document.querySelector(".products__filter"));

// SubFilters
const globalFilter = {
  category: "Keyboard",
  brand: "",
  color: "Blue",
};
const allProducts = document.querySelectorAll(".product-card");
allProducts.forEach((element) => {
  console.log(element);
});
document
  .querySelector(".test-btn-filter")
  .addEventListener("click", filterProducts, true);

document
  .querySelector(".test-btn-sort")
  .addEventListener("click", sortProducts);

function filterProducts(e) {
  allProducts.forEach((element) => {
    // brand

    if (globalFilter.brand != "") {
    }
    // colors
    if (globalFilter.color != "") {
      if (!element.dataset.color.split(",").includes(globalFilter.color)) {
        element.classList.add("hidden");
      }
    }
    // category

    if (!element.classList.contains(globalFilter.category)) {
      element.classList.add("hidden");
    }
  });
}

function sortProducts() {
  document.querySelector(".grid-container").innerHTML = "";
  allProducts.forEach((element) => {
    if (element.classList.contains("Keyboard")) {
      document
        .querySelector(".grid-container")
        .insertAdjacentElement("afterbegin", element);
    }
  });
}

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

  // if (
  //   document.querySelector(".nav-container-mobile").classList.contains("open")
  // ) {
  //   document.querySelector("header").style.zIndex = 5;
  // } else {
  //   document.querySelector("header").style.zIndex = 2;
  // }
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

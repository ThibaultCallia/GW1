/*
const leftButton = document.querySelector(".carousel-left");
const rightButton = document.querySelector(".carousel-right");
const carouselLength = document.querySelectorAll(".carousel-list__item").length;

let position = 1;

leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);

function slideLeft() {
  if (position == 1) {
    position = carouselLength;
  } else {
    position--;
  }

  animate();
}
function slideRight() {
  if (position == carouselLength) {
    position = 1;
  } else {
    position++;
  }

  animate();
}
function animate() {
  document.querySelectorAll(".carousel-list__item").forEach((element) => {
    element.classList.add("hidden");
  });
  document
    .querySelector(`.carousel__list li:nth-child(${position})`)
    .classList.remove("hidden");
}
*/

// function createCarousel() {}
// function createButtons() {}
// function createRadio() {}

/*function styleImages() {
  document.querySelectorAll(".img-container").forEach((element) => {
    element.style.width = width + "px";
    element.style.height = height + "px";
    element.style.position = "relative";
    element.querySelector("img").style.height = 100 + "%";
    element.querySelector("img").style.width = 100 + "%";
    element.querySelector("img").style.objectFit = "cover";
    element.querySelector(".img-title").style.position = "absolute";
    element.querySelector(".img-title").style.zIndex = 1;
    element.querySelector(".img-title").style.fontSize = 3.5 + "rem";
    element.querySelector(".img-title").style.fontWeight = "bold";
    element.querySelector(".img-title").style.fontStyle = "italic";
    element.querySelector(".img-title").style.left = 50 + "%";
    element.querySelector(".img-title").style.transform = `translateX(${-50}%)`;
    element.querySelector(".img-title").style.backgroundColor = "green";
    if (element.querySelector(".img-title").classList.contains("top-title")) {
      element.querySelector(".img-title").style.top = 5 + "%";
    } else if (
      element.querySelector(".img-title").classList.contains("bottom-title")
    ) {
      element.querySelector(".img-title").style.bottom = 5 + "%";
    }
    console.log("test");
  });
  }
  */

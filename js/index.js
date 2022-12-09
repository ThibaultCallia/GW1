import Carousel from "./carousel";
import Carousel2 from "./carousel2";

const spotlight = new Carousel2(document.querySelector(".carousel-container"));

document.querySelector(".theme-btn").addEventListener("click", themeSwitch);

function themeSwitch() {
  if (document.querySelector(".theme-btn").classList.contains("fa-sun")) {
    document.body.style.backgroundColor = "var(--clr-body-light)";
    document.querySelector("header").style.backgroundColor =
      "var(--clr-body-light)";
    document.querySelector("header").style.color = "var(--clr-body-dark)";
    document.querySelector(".nav-container").style.borderColor =
      "var(--clr-body-dark)";
    document.querySelector(".dark").classList.add("hidden");
    document.querySelector(".light").classList.remove("hidden");
    document.querySelector(".theme-btn").classList.remove("fa-sun");
    document.querySelector(".theme-btn").classList.add("fa-moon");
  } else if (
    document.querySelector(".theme-btn").classList.contains("fa-moon")
  ) {
    document.body.style.backgroundColor = "var(--clr-body-dark)";
    document.querySelector("header").style.backgroundColor =
      "var(--clr-body-dark)";
    document.querySelector("header").style.color = "var(--clr-body-light)";
    document.querySelector(".nav-container").style.borderColor =
      "var(--clr-body-light)";
    document.querySelector(".dark").classList.remove("hidden");
    document.querySelector(".light").classList.add("hidden");
    document.querySelector(".theme-btn").classList.add("fa-sun");
    document.querySelector(".theme-btn").classList.remove("fa-moon");
  }
}

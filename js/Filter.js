class Filter {
  constructor(container) {
    this.container = container;
    this.ref = this.container.querySelector(".filter__list");
    this.generateFilter();
  }

  //   ISSUE: when activating, other filter items shift width of added border -> how to fix this?
  generateFilter() {
    this.ref.querySelectorAll(".filter__item").forEach((element) => {
      element.addEventListener("click", (e) => {
        this.ref.querySelectorAll(".filter__item").forEach((element) => {
          element.classList.remove("active-filter");
        });
        e.target.classList.add("active-filter");

        this.filter(e.target.dataset.filter);
      });
    });
  }
  filter(filterName) {
    switch (filterName) {
      case "Keyboard":
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "none";
        });
        document.querySelectorAll(".Keyboard").forEach((element) => {
          element.style.display = "block";
        });
        break;
      case "Switches":
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "none";
        });
        document.querySelectorAll(".Switches").forEach((element) => {
          element.style.display = "block";
        });
        break;
      case "Keycaps":
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "none";
        });
        document.querySelectorAll(".Keycaps").forEach((element) => {
          element.style.display = "block";
        });
        break;
      default:
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "block";
        });
        break;
    }
  }
}

export default Filter;

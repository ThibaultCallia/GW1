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
      case "all":
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "block";
        });
        break;
      case "keyboard":
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "none";
        });
        document.querySelectorAll(".keyboard").forEach((element) => {
          element.style.display = "block";
        });
        break;
      case "switches":
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "none";
        });
        document.querySelectorAll(".switches").forEach((element) => {
          element.style.display = "block";
        });
        break;
      case "keycaps":
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "none";
        });
        document.querySelectorAll(".keycaps").forEach((element) => {
          element.style.display = "block";
        });
        break;
      default:
      case "all":
        document.querySelectorAll(".product-card").forEach((element) => {
          element.style.display = "block";
        });
        break;
    }

    console.log(document.querySelector(`.${filterName}`));
  }
}

export default Filter;

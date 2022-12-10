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
      });
    });
  }
}

export default Filter;

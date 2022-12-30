import { findCommonElement } from "./helper";

class Filter {
  constructor(container) {
    this.container = container;
    this.ref = this.container.querySelector(".filter__list");
    this.generateFilter();
    this.generateSubFilter();
    this.generateSorter();
    this.globalFilter = {
      category: "",
      brand: "",
      color: ["black", "Blue"],
    };
    this.allProducts = document.querySelectorAll(".product-card");
  }

  //   ISSUE: when activating, other filter items shift width of added border -> how to fix this?
  generateFilter() {
    this.ref.querySelectorAll(".filter__item").forEach((element) => {
      element.addEventListener("click", (e) => {
        this.ref.querySelectorAll(".filter__item").forEach((element) => {
          element.classList.remove("active-filter");
        });
        e.target.classList.add("active-filter");

        this.globalFilter.category = e.target.dataset.filter;
        this.filterProducts();
      });
    });
  }

  generateSubFilter() {}
  generateSorter() {}

  filterProducts() {
    this.allProducts.forEach((element) => {
      element.classList.remove("hidden");

      // brand
      if (this.globalFilter.brand != "") {
        if (element.dataset.brand != this.globalFilter.brand) {
          element.classList.add("hidden");
        }
      }
      // colors -> check if arrays overlap
      if (this.globalFilter.color.length > 0) {
        const productColors = element.dataset.color.split(",");
        if (!findCommonElement(productColors, this.globalFilter.color)) {
          element.classList.add("hidden");
        }
      }
      // category
      if (this.globalFilter.category != "") {
        if (element.dataset.category != this.globalFilter.category) {
          element.classList.add("hidden");
        }
      }

      // Price
    });
  }

  sortProducts() {
    document.querySelector(".grid-container").innerHTML = "";
    allProducts.forEach((element) => {
      if (element.classList.contains("Keyboard")) {
        document
          .querySelector(".grid-container")
          .insertAdjacentElement("afterbegin", element);
      }
    });
  }
}

export default Filter;

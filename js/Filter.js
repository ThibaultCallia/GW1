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
      brand: [],
      color: [],
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

  generateSubFilter = () => {
    document.querySelectorAll(".subfilter-btn").forEach((element) => {
      element.addEventListener("click", (e) => {
        if (e.target.nextElementSibling.classList.contains("hidden")) {
          document
            .querySelectorAll(".subfilter__selection")
            .forEach((element) => {
              element.classList.add("hidden");
            });
          e.target.nextElementSibling.classList.remove("hidden");
        } else {
          e.target.nextElementSibling.classList.add("hidden");
        }
      });
    });
    document
      .querySelector(".subfilter-btn-go")
      .addEventListener("click", this.subFilter);
    document
      .querySelector(".subfilter-btn-clear")
      .addEventListener("click", this.clearFilters);
  };

  generateSorter() {}
  clearFilters = () => {
    // Clearing checkboxes
    document.querySelectorAll(".color-checkbox").forEach((element) => {
      if (element.checked) {
        element.checked = false;
      }
    });
    document.querySelectorAll(".brand-checkbox").forEach((element) => {
      if (element.checked) {
        element.checked = false;
      }
    });
    // Clearing globalFilter
    this.globalFilter.color = [];
    this.globalFilter.brand = [];

    // close all
    document.querySelectorAll(".subfilter__selection").forEach((element) => {
      element.classList.add("hidden");
    });
    // Filter products
    this.filterProducts();
  };
  subFilter = () => {
    // Colors
    this.globalFilter.color = [];
    document.querySelectorAll(".color-checkbox").forEach((element) => {
      if (element.checked) {
        this.globalFilter.color.push(element.id);
      }
    });
    this.filterProducts();
    // Brands
    this.globalFilter.brand = [];
    document.querySelectorAll(".brand-checkbox").forEach((element) => {
      if (element.checked) {
        this.globalFilter.brand.push(element.id);
      }
    });
    document.querySelectorAll(".subfilter__selection").forEach((element) => {
      element.classList.add("hidden");
    });
    this.filterProducts();

    // Price
  };
  filterProducts = () => {
    this.allProducts.forEach((element) => {
      element.classList.remove("hidden");

      // brand
      if (this.globalFilter.brand.length > 0) {
        if (!this.globalFilter.brand.includes(element.dataset.brand)) {
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
  };

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

// When clicking filter, filter should already start -> no "go" Btn.
// new SubFilterBtn should be created -> will autom insert into activeFilter section
//

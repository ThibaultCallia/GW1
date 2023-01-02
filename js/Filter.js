import { findCommonElement } from "./helper";
import SubFilterBtn from "./SubfilterBtn";

class Filter {
  static globalFilter = {
    category: "",
    brand: [],
    color: [],
  };
  constructor(container) {
    this.container = container;
    this.ref = this.container.querySelector(".filter__list");
    this.generateFilterBtns();
    this.generateSubFilterBtns();
    this.generateSorter();
    this.allProducts = document.querySelectorAll(".product-card");
  }

  generateFilterBtns() {
    this.ref.querySelectorAll(".filter__item").forEach((element) => {
      element.addEventListener("click", (e) => {
        this.ref.querySelectorAll(".filter__item").forEach((element) => {
          element.classList.remove("active-filter");
        });
        e.target.classList.add("active-filter");

        Filter.globalFilter.category = e.target.dataset.filter;
        this.filterProducts();
      });
    });
  }

  generateSubFilterBtns = () => {
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
    document.body.addEventListener("click", (e) => {
      if (
        !document
          .elementsFromPoint(e.clientX, e.clientY)
          .find((x) => x.classList.contains("subfilter__selection")) &&
        !e.target.classList.contains("general-subfilter-btn")
      ) {
        document
          .querySelectorAll(".subfilter__selection")
          .forEach((element) => {
            element.classList.add("hidden");
          });
      }
    });
    // CHANGE LOGIC TO FILTER WHEN LABEL IS CHECKED OR UNCHECKED
    // ADD TO LOGIC THAT ACTIVE FILTER BTN IS ADDED
    // document
    //   .querySelector(".subfilter-btn-go")
    //   .addEventListener("click", this.subFilter);
    document
      .querySelector(".subfilter-btn-clear")
      .addEventListener("click", this.clearFilters);
    document
      .querySelector(".subfilter__clear-color")
      .addEventListener("click", this.clearColors);
    document
      .querySelector(".subfilter__clear-brand")
      .addEventListener("click", this.clearBrands);
    document.querySelectorAll(".color-checkbox").forEach((element) => {
      element.addEventListener("change", this.subFilter);
    });
    document.querySelectorAll(".brand-checkbox").forEach((element) => {
      element.addEventListener("change", this.subFilter);
    });
    // CHANGE TO SINGLE CHECKBOX CLASS?
  };

  clearFilters = () => {
    // ADD TO LOGIC THAT ACTIVE FILTERS MUST BE REMOVED
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
    Filter.globalFilter.color = [];
    Filter.globalFilter.brand = [];

    // close all
    document.querySelectorAll(".subfilter__selection").forEach((element) => {
      element.classList.add("hidden");
    });
    // Filter products
    this.filterProducts();
  };
  clearColors = () => {
    console.log("test");
    document.querySelectorAll(".color-checkbox").forEach((element) => {
      if (element.checked) {
        element.checked = false;
      }
    });
    Filter.globalFilter.color = [];
    this.filterProducts();
  };
  clearBrands = () => {
    document.querySelectorAll(".brand-checkbox").forEach((element) => {
      if (element.checked) {
        element.checked = false;
      }
    });
    Filter.globalFilter.brand = [];
    this.filterProducts();
  };
  subFilter = () => {
    // Colors
    Filter.globalFilter.color = [];
    document.querySelectorAll(".color-checkbox").forEach((element) => {
      if (element.checked) {
        Filter.globalFilter.color.push(element.id);
      }
    });
    // Brands
    Filter.globalFilter.brand = [];
    document.querySelectorAll(".brand-checkbox").forEach((element) => {
      if (element.checked) {
        Filter.globalFilter.brand.push(element.id);
      }
    });
    // document.querySelectorAll(".subfilter__selection").forEach((element) => {
    //   element.classList.add("hidden");
    // });
    this.filterProducts();

    // Price
  };
  filterProducts = () => {
    this.allProducts.forEach((element) => {
      element.classList.remove("hidden");

      // brand
      if (Filter.globalFilter.brand.length > 0) {
        if (!Filter.globalFilter.brand.includes(element.dataset.brand)) {
          element.classList.add("hidden");
        }
      }
      // colors -> check if arrays overlap
      if (Filter.globalFilter.color.length > 0) {
        const productColors = element.dataset.color.split(",");
        if (!findCommonElement(productColors, Filter.globalFilter.color)) {
          element.classList.add("hidden");
        }
      }
      // category
      if (Filter.globalFilter.category != "") {
        if (element.dataset.category != Filter.globalFilter.category) {
          element.classList.add("hidden");
        }
      }

      // Price
    });
  };

  generateSorter() {}
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

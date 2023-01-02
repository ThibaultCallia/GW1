import Flickity from "flickity";
import { findCommonElement } from "./helper";
import SubFilterBtn from "./SubFilterBtn.js";

class Filter {
  static globalFilter = {
    category: "",
    brand: [],
    color: [],
  };
  static filterWalkieTalkie = [];
  static elementsPerPage = 10;
  static sort = "priceLH";

  constructor(container) {
    this.container = container;
    this.ref = this.container.querySelector(".filter__list");
    this.generateFilterBtns();
    this.generateSubFilterBtns();
    this.generateSorter();
    this.allProducts = document.querySelectorAll(".product-card");
    // way for subFilterBtns to communicate to Filter
    Filter.filterWalkieTalkie.push(this);
    this.sortProducts();
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
      element.addEventListener("change", this.toggleActiveColorBtn);
    });
    document.querySelectorAll(".brand-checkbox").forEach((element) => {
      element.addEventListener("change", this.subFilter);
      element.addEventListener("change", this.toggleActiveBrandBtn);
    });
    // CHANGE TO SINGLE CHECKBOX CLASS?
  };

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
    Filter.globalFilter.color = [];
    Filter.globalFilter.brand = [];
    // close all
    document.querySelectorAll(".subfilter__selection").forEach((element) => {
      element.classList.add("hidden");
    });
    // Delete all SubfilterBtn DOM elements
    for (const key in SubFilterBtn.activeFilters) {
      SubFilterBtn.activeFilters[key].forEach((element) => {
        element.delete();
      });
    }
    // Filter products
    this.filterProducts();
  };
  clearColors = () => {
    // All checkboxes on false colors
    document.querySelectorAll(".color-checkbox").forEach((element) => {
      if (element.checked) {
        element.checked = false;
      }
    });
    // Delete all activeFilter btns colors
    SubFilterBtn.activeFilters.colors.forEach((element) => {
      element.delete();
    });
    // Empty GlobalFilter color
    Filter.globalFilter.color = [];
    // Run filter
    this.filterProducts();
  };
  clearBrands = () => {
    // All checkboxes on false brands
    document.querySelectorAll(".brand-checkbox").forEach((element) => {
      if (element.checked) {
        element.checked = false;
      }
    });
    // Delete all activeFilter btns brands
    SubFilterBtn.activeFilters.brands.forEach((element) => {
      element.delete();
    });
    // Empty GlobalFilter brand
    Filter.globalFilter.brand = [];
    // run filter
    this.filterProducts();
  };
  toggleActiveColorBtn = (e) => {
    if (e.target.checked) {
      // In fact SubFilterBtn class should choose where to put new btn.

      new SubFilterBtn(e.target.id, e.target.nextElementSibling.innerHTML);
    } else {
      const targetId = e.target.id;
      // Delete div from DOM
      SubFilterBtn.activeFilters.colors.find((x) => x.id == targetId).delete();
    }
  };
  toggleActiveBrandBtn = (e) => {
    if (e.target.checked) {
      new SubFilterBtn(e.target.id, e.target.nextElementSibling.innerHTML);
    } else {
      const targetId = e.target.id;
      // Delete div from DOM
      SubFilterBtn.activeFilters.brands.find((x) => x.id == targetId).delete();
    }
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
    });
    this.sortProducts();
  };

  generateSorter() {
    document
      .querySelector(".testBtn")
      .addEventListener("click", this.sortProducts);
  }
  sortProducts = () => {
    document.querySelector(".grid-container").innerHTML = "";
    let counter = 0;
    this.allProducts.forEach((element) => {
      if (
        !element.classList.contains("hidden") &&
        counter < Filter.elementsPerPage
      ) {
        document
          .querySelector(".grid-container")
          .insertAdjacentElement("beforeend", element);
        counter++;
      }
    });
  };
}

export default Filter;

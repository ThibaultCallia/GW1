import { findCommonElement } from "./helper";
import SubFilterBtn from "./SubFilterBtn.js";

/**
 * Creates the filter <br>
 * Styling is done by scss
 */
class Filter {
  /**
   * static object that keeps track of all filters.
   * @type {{category: string, brand: Array, color:Array}}
   */
  static globalFilter = {
    category: "All",
    brand: [],
    color: [],
  };

  static filterWalkieTalkie = [];
  static elementsPerPage = 20;
  static sortOption = "dateNO";

  /**
   * @property {HTMLref} ref points to where main filter location is in website
   * @property {function} generateFilterBtns adds event listeners to main category btns
   * @property {function} generateSubFilterBtns adds event listeners to sub category btns
   * @property {function} generateSorter adds event listeners to sorter options btn
   * @property {DOMarray} allProducts stores all products that were generated by PHP in dom array
   * @property {function} sortProducts launches sortProducts in order to have a max of X products on screen
   */
  constructor() {
    this.ref = document.querySelector(".filter__list");
    this.generateFilterBtns();
    this.generateSubFilterBtns();
    this.generateSorter();
    this.allProducts = [...document.querySelectorAll(".product-card")];
    this.allProductsArray = [...this.allProducts];
    Filter.filterWalkieTalkie.push(this);
    this.updateFilterCount();
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

    document.addEventListener("customFilterEvent", this.updateFilterCount);
  };

  /**
   * @property {function} clearFilters
   * clears all checkboxes <br>
   * clear globalFilter <br>
   * close all open subfilter options <br>
   * close all open subfilter options <br>
   * delete all dom elements (by looping over activefilters within SubfilterBtn class and evoke delete()) <br>
   * Finally filters products again
   *
   * @returns {void}
   */
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

  /**
   * @property {function} clearColors
   * Same functionality as clearFilters but only for colors
   * @returns {void}
   */
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
  /**
   * @property {function} clearBrands
   * Same functionality as clearFilters and clearColors but only for colors
   * @returns {void}
   */
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
  /**
   * @property {function} toggleActiveColorBtn
   * toggles this specific filter Btn on or off <br>
   * checks whether e.target is checked. <br>
   * If yes -> new SubFilterBtn <br>
   * If no -> find this Btn in activeFilters and call delete().
   * @returns {void}
   */
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
  /**
   * @property {function} toggleActiveBrandBtn
   * Same functionality as toggleColorBtn but for brands
   * @returns {void}
   */
  toggleActiveBrandBtn = (e) => {
    if (e.target.checked) {
      new SubFilterBtn(e.target.id, e.target.nextElementSibling.innerHTML);
    } else {
      const targetId = e.target.id;
      // Delete div from DOM
      SubFilterBtn.activeFilters.brands.find((x) => x.id == targetId).delete();
    }
  };

  /**
   * @property {function} subFilter
   * Loops over checked and unchecked checkboxes of both Color and Brand and alters GlobalFilter accordingly <br>
   * Then it calls filterProducts function
   * @returns {void}
   */
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
  };

  /**
   * @property {function} filterProducts
   * For all filters (color, brand, main category), it add or removes "hidden" class according to info in globalFilter object <br>
   * Then it call sortProducts -> this step is still unsure
   * @returns {void}
   */
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
      if (Filter.globalFilter.category != "All") {
        if (element.dataset.category != Filter.globalFilter.category) {
          element.classList.add("hidden");
        }
      }
    });
    this.updateFilterCount();
  };

  generateSorter() {
    document
      .querySelector("#sort")
      .addEventListener("change", this.sortProducts);
  }

  /**
   * @property {function} sortProducts
   * Checks global sortOption (either standard one or chosen by user) and sorts allProducts array accordingly <br>
   * inserts HTML in this order. <br>
   * @returns {void}
   */
  sortProducts = (e) => {
    Filter.sortOption = e.target.value;
    switch (Filter.sortOption) {
      case "priceLH":
        this.allProducts = this.allProducts.sort(function (a, b) {
          return parseInt(a.dataset.price) >= parseInt(b.dataset.price)
            ? 1
            : -1;
        });
        break;

      case "priceHL":
        this.allProducts = this.allProducts.sort(function (a, b) {
          return parseInt(a.dataset.price) <= parseInt(b.dataset.price)
            ? 1
            : -1;
        });
        break;
      case "dateON":
        this.allProducts = this.allProducts.sort(function (a, b) {
          return parseInt(a.dataset.order) >= parseInt(b.dataset.order)
            ? 1
            : -1;
        });
        break;
      case "dateNO":
        this.allProducts = this.allProducts.sort(function (a, b) {
          return parseInt(a.dataset.order) <= parseInt(b.dataset.order)
            ? 1
            : -1;
        });
        break;
      default:
        console.log("test");
        break;
    }

    document.querySelector(".grid-container").innerHTML = "";

    this.allProducts.forEach((element) => {
      document
        .querySelector(".grid-container")
        .insertAdjacentElement("beforeend", element);
    });
  };

  updateFilterCount = () => {
    document.querySelectorAll(".filterCount").forEach((element) => {
      const id = element.parentElement.querySelector(".color-checkbox")?.id
        ? element.parentElement.querySelector(".color-checkbox").id
        : element.parentElement.querySelector(".brand-checkbox").id;
      const updatedCount = this.countFilters(id);
      element.innerHTML = `${updatedCount}`;
      // console.log(updatedCount);
    });
  };

  countFilters(id) {
    let count = 0;
    let arr =
      Filter.globalFilter.category === "All"
        ? [...this.allProductsArray]
        : this.allProductsArray.filter(
            (x) => x.dataset.category === Filter.globalFilter.category
          );
    // in case of colors:  filter arr on active brand and then each color id
    if (id.startsWith("c")) {
      if (Filter.globalFilter.brand.length > 0) {
        arr = arr.filter((x) =>
          Filter.globalFilter.brand.includes(x.dataset.brand)
        );
      }
      arr = arr.filter((x) => x.dataset.color.split(",").includes(id));
      count = arr.length;
    }
    // in case of brands: filter arr on active colors and then each brand id
    else if (id.startsWith("b")) {
      if (Filter.globalFilter.color.length > 0) {
        arr = arr.filter((x) =>
          findCommonElement(
            Filter.globalFilter.color,
            x.dataset.color.split(",")
          )
        );
      }
      arr = arr.filter((x) => x.dataset.brand === id);
      count = arr.length;
    }
    return count;
  }
  /*
    If counter <= elementsPerPage -> all products are shown so "show more" not needed

  */
}

export default Filter;

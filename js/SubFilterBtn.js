import Filter from "./Filter";

class SubFilterBtn {
  static activeFilters = {
    colors: [],
    brands: [],
  };

  constructor(id, filter) {
    this.id = id;
    this.filter = filter;
    this.ref = this.init();
    if (id.toLowerCase().startsWith("c")) {
      SubFilterBtn.activeFilters.colors.push(this);
    } else if (id.toLowerCase().startsWith("b")) {
      SubFilterBtn.activeFilters.brands.push(this);
    }
    this.ref.addEventListener("click", this.singleBtnDelete);
  }
  init = () => {
    // Check if "clear all" btn should be visible
    if (
      SubFilterBtn.activeFilters.colors.length === 0 &&
      SubFilterBtn.activeFilters.brands.length === 0
    ) {
      document.querySelector(".subfilter-btn-clear").classList.remove("hidden");
    }
    // Create button
    document.querySelector(".subfilter-active").insertAdjacentHTML(
      "beforeend",
      `<div class="active-filter-btn visibleBtns">
        <span>${this.filter}</span>
        <span>x</span>
      </div>`
    );
    return document.querySelector(".subfilter-active").lastChild;
  };

  delete() {
    // Remove Btn from DOM
    this.ref.parentNode.removeChild(this.ref);
    // delete filter from activeFilter Object
    SubFilterBtn.activeFilters.colors =
      SubFilterBtn.activeFilters.colors.filter((x) => x.id !== this.id);
    SubFilterBtn.activeFilters.brands =
      SubFilterBtn.activeFilters.brands.filter((x) => x.id !== this.id);
    // check if "clear All" should be deleted as well
    if (
      SubFilterBtn.activeFilters.colors.length === 0 &&
      SubFilterBtn.activeFilters.brands.length === 0
    ) {
      document.querySelector(".subfilter-btn-clear").classList.add("hidden");
    }
  }
  singleBtnDelete = () => {
    // MAIN FILTER-----
    // Uncheck checkbox within filter
    document.querySelector(`#${this.id}`).checked = false;
    // Rerun filter function in main Filter
    Filter.filterWalkieTalkie[0].subFilter();
    // SUB FILTER-----
    // Delete btn
    this.delete();
  };
}
export default SubFilterBtn;

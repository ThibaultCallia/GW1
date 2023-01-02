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
    // Create button
    document.querySelector(".subfilter-active").insertAdjacentHTML(
      "beforeend",
      `<div class="active-filter-btn">
        <span>${this.filter}</span>
        <span>x</span>
      </div>`
    );
    return document.querySelector(".subfilter-active").lastChild;
  };

  delete() {
    this.ref.parentNode.removeChild(this.ref);
    SubFilterBtn.activeFilters.colors =
      SubFilterBtn.activeFilters.colors.filter((x) => x.id !== this.id);
    SubFilterBtn.activeFilters.brands =
      SubFilterBtn.activeFilters.brands.filter((x) => x.id !== this.id);
  }
  singleBtnDelete = () => {
    document.querySelector(`#${this.id}`).checked = false;
    Filter.filterWalkieTalkie[0].subFilter();
    this.delete();
  };
}
export default SubFilterBtn;

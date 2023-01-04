import Filter from "./Filter";

/**
 * Creates the active filter buttons that appear when filter is chosen. <br>
 * Styling is done by scss
 */
class SubFilterBtn {
  static activeFilters = {
    colors: [],
    brands: [],
  };

  /**
   * @param {string} id id given by main Filter. eg "c1" for black or "b2" for Nuphy.
   * @param {string} filter InnerHTML of specific label -> will be visible to user. eg "black" or "Nuphy".
   */
  constructor(id, filter) {
    /**
     * @property {string} id Filter id of subfilterBtn
     * @property {string} filter Visible name of subfilterBtn
     * @property {htmlRef} ref Will always point to exact DOM location of this Btn
     */
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

  /**
   * @property {function} init creates and inserts div before end with proper values. Also checks whether "Clear all" btn should be visible.
   * @returns {htmlRef} Looks for lastChild within parent div of Btns
   */
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

  /**
   * @property {function} singleBtnDelete takes care of the checkboxes and main filter of website
   * @returns {void}
   */
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

  /**
   * @property {function} delete deletes DOM element, filters out activeFilter from static activeFilters and if last btn is deleted, also hides "clear All"
   * @returns {void}
   */
  delete = () => {
    // Remove Btn from DOM
    this.ref.parentNode.removeChild(this.ref);
    // delete filter from activeFilter Object

    // IF ELSE BRAND COLOR
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
  };
}
export default SubFilterBtn;

class SubFilterBtn {
  static activeFilters = {
    colors: [],
    brands: [],
  };

  constructor(filter) {
    this.filter = filter;
    // this.generateClear();
    this.ref = this.init();
  }
  init() {
    // if color -> acvtiveFIlters.color add
    // if brand...
    document
      .querySelector(".subfilter-active")
      .insertAdjacentHTML("beforeend", `<button class="testBTN">test</button>`);

    return "look for last inserted element and return";
  }
  generateClear() {
    // this.ref.querySelector().addEventlistener("click", clear);
  }
  delete() {
    /* 
    IDEA: never delete buttons but look for them 
    in de activeFiltersArray and add hidden. 
    When creating a button: first look through array
    and display block. If no such filter exists
    create new one.
    -> Alternative, you delete filters and always 
    recreate them.
    */
  }
}

/* When clicking on cross icon in filter, it must remove this id from 
GlobalFilter, launch filter function and delete himself from parent div
--->>> how to access GlobalFilter from within class? Custom Event?
---->>> this.GlobalFilter from Filter should be static? Can be accessed by other classes
we'll see
*/

export default SubFilterBtn;

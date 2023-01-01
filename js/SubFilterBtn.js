class SubFilterBtn {
  static activeFilters = {
    color: [],
    brand: [],
  };
  // Exactly same as GlobalFilter. Need both?

  constructor(filter) {
    // What will Filter class be able to give as variables?
    // What does subfilterBtn need?
    // name
    // If button X is pressed -> how will Filter know which exact
    // subfilter is deleted?

    this.filter = filter;
    this.ref = this.init();
  }
  init() {
    // if color -> acvtiveFIlters.color add this object (and thus ref)
    // if brand...

    // Create button
    document
      .querySelector(".subfilter-active")
      .insertAdjacentHTML("beforeend", `<button class="testBTN">test</button>`);

    //create clear event listener
    document
      .querySelector("placeholder")
      .addEventListener("click", this.delete);
    // return ref
    return "look for last inserted element and return";
  }

  delete() {
    this.ref.parentNode.removeChild(this.ref);
    // filter must now run as well.
    // Either do this in main Filter and have it
    // thisObject.delete() as well
    // or refer to Filter.filter() when thisObject.delete() is used
    // DONT FORGET TO UPDATE GLOBALFILTER

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

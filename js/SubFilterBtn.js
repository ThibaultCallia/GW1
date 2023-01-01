class SubFilterBtn {
  constructor(filter) {
    this.filter = filter;
    this.generateClear();
    this.ref = this.init();
  }
  init() {
    document
      .querySelector(".subfilter-active")
      .insertAdjacentHTML("beforeend", `<div class = "placeholder" ></div>`);

    return "look for last inserted element and return";
  }
  generateClear() {
    this.ref.querySelector().addEventlistener("click", clear);
  }
}

/* When clicking on cross icon in filter, it must remove this id from 
GlobalFilter, launch filter function and delete himself from parent div
--->>> how to access GlobalFilter from within class? Custom Event?
---->>> this.GlobalFilter from Filter should be static? Can be accessed by other classes

*/

export default SubFilterBtn;

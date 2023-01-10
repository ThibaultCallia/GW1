(() => {
  function e(e, t) {
    for (let r = 0; r < e.length; r++)
      for (let l = 0; l < t.length; l++) if (e[r] === t[l]) return !0;
    return !1;
  }
  class t {
    static activeFilters = { colors: [], brands: [] };
    constructor(e, r) {
      (this.id = e),
        (this.filter = r),
        (this.ref = this.init()),
        e.toLowerCase().startsWith("c")
          ? t.activeFilters.colors.push(this)
          : e.toLowerCase().startsWith("b") &&
            t.activeFilters.brands.push(this),
        this.ref.addEventListener("click", this.singleBtnDelete);
    }
    init = () => (
      0 === t.activeFilters.colors.length &&
        0 === t.activeFilters.brands.length &&
        document
          .querySelector(".subfilter-btn-clear")
          .classList.remove("hidden"),
      document
        .querySelector(".subfilter-active")
        .insertAdjacentHTML(
          "beforeend",
          `<div class="active-filter-btn visibleBtns">\n        <span>${this.filter}</span>\n        <span>&times;</span>\n      </div>`
        ),
      document.querySelector(".subfilter-active").lastChild
    );
    singleBtnDelete = () => {
      (document.querySelector(`#${this.id}`).checked = !1),
        o.filterWalkieTalkie[0].subFilter(),
        this.delete();
    };
    delete = () => {
      this.ref.parentNode.removeChild(this.ref),
        (t.activeFilters.colors = t.activeFilters.colors.filter(
          (e) => e.id !== this.id
        )),
        (t.activeFilters.brands = t.activeFilters.brands.filter(
          (e) => e.id !== this.id
        )),
        0 === t.activeFilters.colors.length &&
          0 === t.activeFilters.brands.length &&
          document
            .querySelector(".subfilter-btn-clear")
            .classList.add("hidden");
    };
  }
  var r = t;
  class l {
    static globalFilter = { category: "All", brand: [], color: [] };
    static filterWalkieTalkie = [];
    static elementsPerPage = 20;
    static sortOption = "dateNO";
    constructor() {
      (this.ref = document.querySelector(".filter__list")),
        this.generateFilterBtns(),
        this.generateSubFilterBtns(),
        this.generateSorter(),
        (this.allProducts = [...document.querySelectorAll(".product-card")]),
        (this.allProductsArray = [...this.allProducts]),
        l.filterWalkieTalkie.push(this),
        this.updateFilterCount();
    }
    generateFilterBtns() {
      this.ref.querySelectorAll(".filter__item").forEach((e) => {
        e.addEventListener("click", (e) => {
          this.ref.querySelectorAll(".filter__item").forEach((e) => {
            e.classList.remove("active-filter");
          }),
            e.target.classList.add("active-filter"),
            (l.globalFilter.category = e.target.dataset.filter),
            this.filterProducts();
        });
      });
    }
    generateSubFilterBtns = () => {
      function e(e, t) {
        "close" === t
          ? (e.target
              .querySelector(".fa-solid")
              .classList.add("fa-chevron-down"),
            e.target
              .querySelector(".fa-solid")
              .classList.remove("fa-chevron-up"))
          : "open" === t
          ? (e.target.querySelector(".fa-solid").classList.add("fa-chevron-up"),
            e.target
              .querySelector(".fa-solid")
              .classList.remove("fa-chevron-down"))
          : "allClose" === t &&
            document.querySelectorAll(".general-subfilter-btn").forEach((e) => {
              e.querySelector(".fa-solid").classList.remove("fa-chevron-up"),
                e.querySelector(".fa-solid").classList.add("fa-chevron-down");
            });
      }
      document.querySelectorAll(".subfilter-btn").forEach((t) => {
        t.addEventListener("click", (t) => {
          t.target.nextElementSibling.classList.contains("hidden")
            ? (e(t, "allClose"),
              document
                .querySelectorAll(".subfilter__selection")
                .forEach((e) => {
                  e.classList.add("hidden");
                }),
              t.target.nextElementSibling.classList.remove("hidden"),
              e(t, "open"))
            : (t.target.nextElementSibling.classList.add("hidden"),
              e(t, "close"));
        });
      }),
        document.body.addEventListener("click", (t) => {
          document
            .elementsFromPoint(t.clientX, t.clientY)
            .find((e) => e.classList.contains("subfilter__selection")) ||
            t.target.classList.contains("general-subfilter-btn") ||
            (e(t, "allClose"),
            document.querySelectorAll(".subfilter__selection").forEach((e) => {
              e.classList.add("hidden");
            }));
        }),
        document
          .querySelector(".subfilter-btn-clear")
          .addEventListener("click", this.clearFilters),
        document
          .querySelector(".subfilter__clear-color")
          .addEventListener("click", this.clearColors),
        document
          .querySelector(".subfilter__clear-brand")
          .addEventListener("click", this.clearBrands),
        document.querySelectorAll(".color-checkbox").forEach((e) => {
          e.addEventListener("change", this.subFilter),
            e.addEventListener("change", this.toggleActiveColorBtn);
        }),
        document.querySelectorAll(".brand-checkbox").forEach((e) => {
          e.addEventListener("change", this.subFilter),
            e.addEventListener("change", this.toggleActiveBrandBtn);
        });
    };
    clearFilters = () => {
      document.querySelectorAll(".color-checkbox").forEach((e) => {
        e.checked && (e.checked = !1);
      }),
        document.querySelectorAll(".brand-checkbox").forEach((e) => {
          e.checked && (e.checked = !1);
        }),
        (l.globalFilter.color = []),
        (l.globalFilter.brand = []),
        document.querySelectorAll(".subfilter__selection").forEach((e) => {
          e.classList.add("hidden");
        });
      for (const e in r.activeFilters)
        r.activeFilters[e].forEach((e) => {
          e.delete();
        });
      this.filterProducts();
    };
    clearColors = () => {
      document.querySelectorAll(".color-checkbox").forEach((e) => {
        e.checked && (e.checked = !1);
      }),
        r.activeFilters.colors.forEach((e) => {
          e.delete();
        }),
        (l.globalFilter.color = []),
        this.filterProducts();
    };
    clearBrands = () => {
      document.querySelectorAll(".brand-checkbox").forEach((e) => {
        e.checked && (e.checked = !1);
      }),
        r.activeFilters.brands.forEach((e) => {
          e.delete();
        }),
        (l.globalFilter.brand = []),
        this.filterProducts();
    };
    toggleActiveColorBtn = (e) => {
      if (e.target.checked)
        new r(e.target.id, e.target.nextElementSibling.innerHTML);
      else {
        const t = e.target.id;
        r.activeFilters.colors.find((e) => e.id == t).delete();
      }
    };
    toggleActiveBrandBtn = (e) => {
      if (e.target.checked)
        new r(e.target.id, e.target.nextElementSibling.innerHTML);
      else {
        const t = e.target.id;
        r.activeFilters.brands.find((e) => e.id == t).delete();
      }
    };
    subFilter = () => {
      (l.globalFilter.color = []),
        document.querySelectorAll(".color-checkbox").forEach((e) => {
          e.checked && l.globalFilter.color.push(e.id);
        }),
        (l.globalFilter.brand = []),
        document.querySelectorAll(".brand-checkbox").forEach((e) => {
          e.checked && l.globalFilter.brand.push(e.id);
        }),
        this.filterProducts();
    };
    filterProducts = () => {
      this.allProducts.forEach((t) => {
        if (
          (t.classList.remove("hidden"),
          l.globalFilter.brand.length > 0 &&
            (l.globalFilter.brand.includes(t.dataset.brand) ||
              t.classList.add("hidden")),
          l.globalFilter.color.length > 0)
        ) {
          e(t.dataset.color.split(","), l.globalFilter.color) ||
            t.classList.add("hidden");
        }
        "All" != l.globalFilter.category &&
          t.dataset.category != l.globalFilter.category &&
          t.classList.add("hidden");
      }),
        this.updateFilterCount();
    };
    generateSorter() {
      document.querySelectorAll(".sort-radio").forEach((e) => {
        e.addEventListener("change", this.sortProducts);
      });
    }
    sortProducts = (e) => {
      console.log(e.target.id);
      switch (((l.sortOption = e.target.id), l.sortOption)) {
        case "priceLH":
          this.allProducts = this.allProducts.sort(function (e, t) {
            return parseInt(e.dataset.price) >= parseInt(t.dataset.price)
              ? 1
              : -1;
          });
          break;
        case "priceHL":
          this.allProducts = this.allProducts.sort(function (e, t) {
            return parseInt(e.dataset.price) <= parseInt(t.dataset.price)
              ? 1
              : -1;
          });
          break;
        case "dateON":
          this.allProducts = this.allProducts.sort(function (e, t) {
            return parseInt(e.dataset.order) >= parseInt(t.dataset.order)
              ? 1
              : -1;
          });
          break;
        case "dateNO":
          this.allProducts = this.allProducts.sort(function (e, t) {
            return parseInt(e.dataset.order) <= parseInt(t.dataset.order)
              ? 1
              : -1;
          });
          break;
        case "adminActive":
          this.allProducts = this.allProducts.sort(function (e, t) {
            return parseInt(e.dataset.active) >= parseInt(t.dataset.active)
              ? 1
              : -1;
          });
          break;
        default:
          console.log("sorting option not known");
      }
      (document.querySelector(".grid-container").innerHTML = ""),
        this.allProducts.forEach((e) => {
          document
            .querySelector(".grid-container")
            .insertAdjacentElement("beforeend", e);
        });
    };
    updateFilterCount = () => {
      document.querySelectorAll(".subfilter__row").forEach((e) => {
        e.classList.remove("disabled");
      }),
        document.querySelectorAll(".color-checkbox").forEach((e) => {
          e.disabled = !1;
        }),
        document.querySelectorAll(".brand-checkbox").forEach((e) => {
          e.disabled = !1;
        }),
        document.querySelectorAll(".filterCount").forEach((e) => {
          const t = e.parentElement.querySelector(".color-checkbox")?.id
              ? e.parentElement.querySelector(".color-checkbox").id
              : e.parentElement.querySelector(".brand-checkbox").id,
            r = this.countFilters(t);
          0 !== r ||
            e.parentElement.firstElementChild.firstElementChild.checked ||
            (e.parentElement.classList.add("disabled"),
            (e.parentElement.querySelector(
              ".filterAndLabel"
            ).firstElementChild.disabled = !0)),
            (e.innerHTML = `${r}`);
        });
    };
    countFilters(t) {
      let r = 0,
        o =
          "All" === l.globalFilter.category
            ? [...this.allProductsArray]
            : this.allProductsArray.filter(
                (e) => e.dataset.category === l.globalFilter.category
              );
      return (
        t.startsWith("c")
          ? (l.globalFilter.brand.length > 0 &&
              (o = o.filter((e) =>
                l.globalFilter.brand.includes(e.dataset.brand)
              )),
            (o = o.filter((e) => e.dataset.color.split(",").includes(t))),
            (r = o.length))
          : t.startsWith("b") &&
            (l.globalFilter.color.length > 0 &&
              (o = o.filter((t) =>
                e(l.globalFilter.color, t.dataset.color.split(","))
              )),
            (o = o.filter((e) => e.dataset.brand === t)),
            (r = o.length)),
        r
      );
    }
  }
  var o = l;
  new o();
  function c() {
    document.querySelector(".nav-container-mobile").classList.toggle("open"),
      document.querySelector(".nav-container-mobile").classList.contains("open")
        ? ((document.body.style.overflow = "hidden"),
          (document.querySelector(".overlay").style.opacity = 1),
          (document.querySelector(".overlay").style.pointerEvents = "all"),
          document.querySelector(".mobile-nav-btn").classList.remove("fa-bars"),
          document
            .querySelector(".mobile-nav-btn")
            .classList.add("fa-bars-staggered"))
        : ((document.body.style.overflow = "auto"),
          (document.querySelector(".overlay").style.opacity = 0),
          (document.querySelector(".overlay").style.pointerEvents = "none"),
          document.querySelector(".mobile-nav-btn").classList.add("fa-bars"),
          document
            .querySelector(".mobile-nav-btn")
            .classList.remove("fa-bars-staggered"));
  }
  function s() {
    document
      .querySelector(".nav-container-mobile")
      .classList.contains("open") &&
      (document.querySelector(".nav-container-mobile").classList.remove("open"),
      (document.body.style.overflow = "auto"),
      (document.querySelector(".overlay").style.opacity = 0),
      (document.querySelector(".overlay").style.pointerEvents = "none"),
      document.querySelector(".mobile-nav-btn").classList.add("fa-bars"),
      document
        .querySelector(".mobile-nav-btn")
        .classList.remove("fa-bars-staggered"));
  }
  document.querySelector(".mobile-nav-btn").addEventListener("click", c),
    document.querySelector(".mobile-home-btn").addEventListener("click", c),
    document.querySelector(".mobile-products-btn").addEventListener("click", c),
    document.querySelector(".overlay").addEventListener("click", c),
    document.querySelectorAll(".logo-btn").forEach((e) => {
      e.addEventListener("click", s);
    });
  const i = document.querySelector(".product-modal"),
    a = document.querySelector(".card-front"),
    n = document.querySelector(".close");
  a.addEventListener("click", () => {
    i.showModal();
  }),
    n.addEventListener("click", () => {
      i.close(), console.dir(i);
    });
  let d = 0;
  window.addEventListener("scroll", function (e) {
    const t = document.body.scrollTop || document.documentElement.scrollTop;
    (u.style.display = t < d ? "block" : "none"), (d = t);
  });
  const u = document.querySelector(".grid-container > a");
  window.addEventListener("scroll", function (e) {
    document.body.scrollTop > 1e3 || document.documentElement.scrollTop > 1e3
      ? (u.style.display = "block")
      : (u.style.display = "none");
  });
})();
//# sourceMappingURL=index.js.map

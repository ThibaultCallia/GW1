// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"LUVNn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bc4f42fed93cfd40";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1Z4Rq":[function(require,module,exports) {
/**
 * Main index.js file
 * 1. imports Filter,
 * 2. creates Filter instance
 * 3. Adds nav mobile functionality
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _styleScss = require("../css/style.scss");
var _filter = require("./Filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _animateCss = require("animate.css");
// import Swiper JS
// import Swiper, { Navigation } from "swiper";
// import Swiper styles
// import "swiper/css";
new Swiper(".swiperM", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
let init = false;
var swiper = Swiper;
function swiperCard() {
    if (window.innerWidth <= 800) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiperD");
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);
const mainFilter = new (0, _filterDefault.default)();
// Mobile nav
document.querySelector(".mobile-nav-btn").addEventListener("click", openCloseMobileNav);
document.querySelector(".mobile-home-btn").addEventListener("click", openCloseMobileNav);
document.querySelector(".mobile-products-btn").addEventListener("click", openCloseMobileNav);
document.querySelector(".overlay").addEventListener("click", openCloseMobileNav);
document.querySelectorAll(".logo-btn").forEach((element)=>{
    element.addEventListener("click", closeMobileNav);
});
function openCloseMobileNav() {
    document.querySelector(".nav-container-mobile").classList.toggle("open");
    if (document.querySelector(".nav-container-mobile").classList.contains("open")) {
        document.body.style.overflow = "hidden";
        document.querySelector(".overlay").style.opacity = 1;
        document.querySelector(".overlay").style.pointerEvents = "all";
        document.querySelector(".mobile-nav-btn").classList.remove("fa-bars");
        document.querySelector(".mobile-nav-btn").classList.add("fa-bars-staggered");
    } else {
        document.body.style.overflow = "auto";
        document.querySelector(".overlay").style.opacity = 0;
        document.querySelector(".overlay").style.pointerEvents = "none";
        document.querySelector(".mobile-nav-btn").classList.add("fa-bars");
        document.querySelector(".mobile-nav-btn").classList.remove("fa-bars-staggered");
    }
}
function closeMobileNav() {
    if (document.querySelector(".nav-container-mobile").classList.contains("open")) {
        document.querySelector(".nav-container-mobile").classList.remove("open");
        document.body.style.overflow = "auto";
        document.querySelector(".overlay").style.opacity = 0;
        document.querySelector(".overlay").style.pointerEvents = "none";
        document.querySelector(".mobile-nav-btn").classList.add("fa-bars");
        document.querySelector(".mobile-nav-btn").classList.remove("fa-bars-staggered");
    }
}
// ---------- MODAL -------->
// Get the modal
document.querySelectorAll(".card-front").forEach((element)=>{
    element.addEventListener("click", (e)=>{
        document.elementsFromPoint(e.clientX, e.clientY).filter((x)=>x.classList.contains("product-card"))[0].querySelector(".product-modal").showModal();
    // document.body.style.overflow = "hidden";
    });
});
document.querySelectorAll(".close").forEach((element)=>{
    element.addEventListener("click", (e)=>{
        e.target.closest(".product-modal").close();
    // document.body.style.overflow = "auto";
    });
});
window.addEventListener("click", (e)=>{
    if (e.target.classList.contains("product-modal")) e.target.close();
});
// ---------- BACK TO PRODUCTS -------->
// only showing button when scrolling up
let lastScrollTop = 0;
window.addEventListener("scroll", function(e) {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) back2prod.style.display = "block";
    else back2prod.style.display = "none";
    lastScrollTop = scrollTop;
});
// only showing button when scrolling past 1000px
const back2prod = document.querySelector(".grid-container > a");
window.addEventListener("scroll", function(e) {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) back2prod.style.display = "block";
    else back2prod.style.display = "none";
});

},{"./Filter":"35zl1","animate.css":"8t3va","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","../css/style.scss":"1969R"}],"35zl1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helper = require("./helper");
var _subFilterBtnJs = require("./SubFilterBtn.js");
var _subFilterBtnJsDefault = parcelHelpers.interopDefault(_subFilterBtnJs);
var _animateCss = require("animate.css");
/**
 * Creates the filter <br>
 * Styling is done by scss
 */ class Filter {
    /**
   * static object that keeps track of all filters.
   * @type {{category: string, brand: Array, color:Array}}
   */ static globalFilter = {
        category: "All",
        brand: [],
        color: []
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
   */ constructor(){
        this.ref = document.querySelector(".filter__list");
        this.generateFilterBtns();
        this.generateSubFilterBtns();
        this.generateSorter();
        this.allProducts = [
            ...document.querySelectorAll(".product-card")
        ];
        this.allProductsArray = [
            ...this.allProducts
        ];
        Filter.filterWalkieTalkie.push(this);
        this.updateFilterCount();
    }
    generateFilterBtns() {
        this.ref.querySelectorAll(".filter__item").forEach((element)=>{
            element.addEventListener("click", (e)=>{
                this.ref.querySelectorAll(".filter__item").forEach((element)=>{
                    element.classList.remove("active-filter");
                });
                e.target.classList.add("active-filter");
                Filter.globalFilter.category = e.target.dataset.filter;
                this.filterProducts();
            });
        });
    }
    /**
   * @property {function} generateSubFilterBtns
   * Adds eventlistener click to subfilter btns <br>
   * -> Open en close subfilter selection <br>
   * -> Change arrow direction <br>
   * Includes seperate "changeArrow" function<br>
   * @returns {void}
   */ generateSubFilterBtns = ()=>{
        document.querySelectorAll(".subfilter-btn").forEach((element)=>{
            element.addEventListener("click", (e)=>{
                if (e.target.nextElementSibling.classList.contains("hidden")) {
                    arrowSwitch(e, "allClose");
                    document.querySelectorAll(".subfilter__selection").forEach((element)=>{
                        element.classList.add("hidden");
                    });
                    e.target.nextElementSibling.classList.remove("hidden");
                    arrowSwitch(e, "open");
                } else {
                    e.target.nextElementSibling.classList.add("hidden");
                    arrowSwitch(e, "close");
                }
            });
        });
        document.body.addEventListener("click", (e)=>{
            if (!document.elementsFromPoint(e.clientX, e.clientY).find((x)=>x.classList.contains("subfilter__selection")) && !e.target.classList.contains("general-subfilter-btn")) {
                arrowSwitch(e, "allClose");
                document.querySelectorAll(".subfilter__selection").forEach((element)=>{
                    element.classList.add("hidden");
                });
            }
        });
        document.querySelector(".subfilter-btn-clear").addEventListener("click", this.clearFilters);
        document.querySelector(".subfilter__clear-color").addEventListener("click", this.clearColors);
        document.querySelector(".subfilter__clear-brand").addEventListener("click", this.clearBrands);
        document.querySelectorAll(".color-checkbox").forEach((element)=>{
            element.addEventListener("change", this.subFilter);
            element.addEventListener("change", this.toggleActiveColorBtn);
        });
        document.querySelectorAll(".brand-checkbox").forEach((element)=>{
            element.addEventListener("change", this.subFilter);
            element.addEventListener("change", this.toggleActiveBrandBtn);
        });
        function arrowSwitch(e, direction) {
            if (direction === "close") {
                e.target.querySelector(".fa-solid").classList.add("fa-chevron-down");
                e.target.querySelector(".fa-solid").classList.remove("fa-chevron-up");
            } else if (direction === "open") {
                e.target.querySelector(".fa-solid").classList.add("fa-chevron-up");
                e.target.querySelector(".fa-solid").classList.remove("fa-chevron-down");
            } else if (direction === "allClose") document.querySelectorAll(".general-subfilter-btn").forEach((element)=>{
                element.querySelector(".fa-solid").classList.remove("fa-chevron-up");
                element.querySelector(".fa-solid").classList.add("fa-chevron-down");
            });
        }
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
   */ clearFilters = ()=>{
        // Clearing checkboxes
        document.querySelectorAll(".color-checkbox").forEach((element)=>{
            if (element.checked) element.checked = false;
        });
        document.querySelectorAll(".brand-checkbox").forEach((element)=>{
            if (element.checked) element.checked = false;
        });
        // Clearing globalFilter
        Filter.globalFilter.color = [];
        Filter.globalFilter.brand = [];
        // close all
        document.querySelectorAll(".subfilter__selection").forEach((element)=>{
            element.classList.add("hidden");
        });
        // Delete all SubfilterBtn DOM elements
        for(const key in (0, _subFilterBtnJsDefault.default).activeFilters)(0, _subFilterBtnJsDefault.default).activeFilters[key].forEach((element)=>{
            element.delete();
        });
        // Filter products
        this.filterProducts();
    };
    /**
   * @property {function} clearColors
   * Same functionality as clearFilters but only for colors
   * @returns {void}
   */ clearColors = ()=>{
        // All checkboxes on false colors
        document.querySelectorAll(".color-checkbox").forEach((element)=>{
            if (element.checked) element.checked = false;
        });
        // Delete all activeFilter btns colors
        (0, _subFilterBtnJsDefault.default).activeFilters.colors.forEach((element)=>{
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
   */ clearBrands = ()=>{
        // All checkboxes on false brands
        document.querySelectorAll(".brand-checkbox").forEach((element)=>{
            if (element.checked) element.checked = false;
        });
        // Delete all activeFilter btns brands
        (0, _subFilterBtnJsDefault.default).activeFilters.brands.forEach((element)=>{
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
   */ toggleActiveColorBtn = (e)=>{
        if (e.target.checked) // In fact SubFilterBtn class should choose where to put new btn.
        new (0, _subFilterBtnJsDefault.default)(e.target.id, e.target.nextElementSibling.innerHTML);
        else {
            const targetId = e.target.id;
            // Delete div from DOM
            (0, _subFilterBtnJsDefault.default).activeFilters.colors.find((x)=>x.id == targetId).delete();
        }
    };
    /**
   * @property {function} toggleActiveBrandBtn
   * Same functionality as toggleColorBtn but for brands
   * @returns {void}
   */ toggleActiveBrandBtn = (e)=>{
        if (e.target.checked) new (0, _subFilterBtnJsDefault.default)(e.target.id, e.target.nextElementSibling.innerHTML);
        else {
            const targetId = e.target.id;
            // Delete div from DOM
            (0, _subFilterBtnJsDefault.default).activeFilters.brands.find((x)=>x.id == targetId).delete();
        }
    };
    /**
   * @property {function} subFilter
   * Loops over checked and unchecked checkboxes of both Color and Brand and alters GlobalFilter accordingly <br>
   * Then it calls filterProducts function
   * @returns {void}
   */ subFilter = ()=>{
        // Colors
        Filter.globalFilter.color = [];
        document.querySelectorAll(".color-checkbox").forEach((element)=>{
            if (element.checked) Filter.globalFilter.color.push(element.id);
        });
        // Brands
        Filter.globalFilter.brand = [];
        document.querySelectorAll(".brand-checkbox").forEach((element)=>{
            if (element.checked) Filter.globalFilter.brand.push(element.id);
        });
        this.filterProducts();
    };
    /**
   * @property {function} filterProducts
   * For all filters (color, brand, main category), it add or removes "hidden" class according to info in globalFilter object <br>
   * Then it call sortProducts -> this step is still unsure
   * @returns {void}
   */ filterProducts = ()=>{
        this.allProducts.forEach((element)=>{
            element.classList.remove("hidden");
            // brand
            if (Filter.globalFilter.brand.length > 0) {
                if (!Filter.globalFilter.brand.includes(element.dataset.brand)) element.classList.add("hidden");
            }
            // colors -> check if arrays overlap
            if (Filter.globalFilter.color.length > 0) {
                const productColors = element.dataset.color.split(",");
                if (!(0, _helper.findCommonElement)(productColors, Filter.globalFilter.color)) element.classList.add("hidden");
            }
            // category
            if (Filter.globalFilter.category != "All") {
                if (element.dataset.category != Filter.globalFilter.category) element.classList.add("hidden");
            }
        });
        this.updateFilterCount();
    };
    /**
   * @property {function} generateSorter
   * Looks for sort-radio btn and adds eventlistener <br>
   * @returns {void}
   */ generateSorter() {
        document.querySelectorAll(".sort-radio").forEach((element)=>{
            element.addEventListener("change", this.sortProducts);
        });
    }
    /**
   * @property {function} sortProducts
   * Checks global sortOption (either standard one or chosen by user) and sorts allProducts array accordingly <br>
   * inserts HTML in this order. <br>
   * @returns {void}
   */ sortProducts = (e)=>{
        Filter.sortOption = e.target.id;
        switch(Filter.sortOption){
            case "priceLH":
                this.allProducts = this.allProducts.sort(function(a, b) {
                    return parseInt(a.dataset.price) >= parseInt(b.dataset.price) ? 1 : -1;
                });
                break;
            case "priceHL":
                this.allProducts = this.allProducts.sort(function(a, b) {
                    return parseInt(a.dataset.price) <= parseInt(b.dataset.price) ? 1 : -1;
                });
                break;
            case "dateON":
                this.allProducts = this.allProducts.sort(function(a, b) {
                    return parseInt(a.dataset.order) >= parseInt(b.dataset.order) ? 1 : -1;
                });
                break;
            case "dateNO":
                this.allProducts = this.allProducts.sort(function(a, b) {
                    return parseInt(a.dataset.order) <= parseInt(b.dataset.order) ? 1 : -1;
                });
                break;
            case "adminActive":
                this.allProducts = this.allProducts.sort(function(a, b) {
                    return parseInt(a.dataset.active) <= parseInt(b.dataset.active) ? 1 : -1;
                });
                break;
            default:
                console.log("sorting option not known");
                break;
        }
        document.querySelector(".grid-container").innerHTML = "";
        this.allProducts.forEach((element)=>{
            document.querySelector(".grid-container").insertAdjacentElement("beforeend", element);
        });
    };
    updateFilterCount = ()=>{
        document.querySelectorAll(".subfilter__row").forEach((element)=>{
            element.classList.remove("disabled");
        });
        document.querySelectorAll(".color-checkbox").forEach((element)=>{
            element.disabled = false;
        });
        document.querySelectorAll(".brand-checkbox").forEach((element)=>{
            element.disabled = false;
        });
        document.querySelectorAll(".filterCount").forEach((element)=>{
            const id = element.parentElement.querySelector(".color-checkbox")?.id ? element.parentElement.querySelector(".color-checkbox").id : element.parentElement.querySelector(".brand-checkbox").id;
            const updatedCount = this.countFilters(id);
            if (updatedCount === 0 && !element.parentElement.firstElementChild.firstElementChild.checked) {
                element.parentElement.classList.add("disabled");
                element.parentElement.querySelector(".filterAndLabel").firstElementChild.disabled = true;
            }
            element.innerHTML = `${updatedCount}`;
        // console.log(updatedCount);
        });
    };
    countFilters(id) {
        let count = 0;
        let arr = Filter.globalFilter.category === "All" ? [
            ...this.allProductsArray
        ] : this.allProductsArray.filter((x)=>x.dataset.category === Filter.globalFilter.category);
        // in case of colors:  filter arr on active brand and then each color id
        if (id.startsWith("c")) {
            if (Filter.globalFilter.brand.length > 0) arr = arr.filter((x)=>Filter.globalFilter.brand.includes(x.dataset.brand));
            arr = arr.filter((x)=>x.dataset.color.split(",").includes(id));
            count = arr.length;
        } else if (id.startsWith("b")) {
            if (Filter.globalFilter.color.length > 0) arr = arr.filter((x)=>(0, _helper.findCommonElement)(Filter.globalFilter.color, x.dataset.color.split(",")));
            arr = arr.filter((x)=>x.dataset.brand === id);
            count = arr.length;
        }
        return count;
    }
}
exports.default = Filter;

},{"./helper":"6fitd","./SubFilterBtn.js":"1rkLR","animate.css":"8t3va","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6fitd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findCommonElement", ()=>findCommonElement);
function findCommonElement(array1, array2) {
    // Loop for array1
    for(let i = 0; i < array1.length; i++)// Loop for array2
    for(let j = 0; j < array2.length; j++){
        // Compare the element of each and
        // every element from both of the
        // arrays
        if (array1[i] === array2[j]) // Return if common element found
        return true;
    }
    // Return if no common element exist
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fD7H8":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1rkLR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("./Filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
/**
 * Creates the active filter buttons that appear when filter is chosen. <br>
 * Styling is done by scss
 */ class SubFilterBtn {
    static activeFilters = {
        colors: [],
        brands: []
    };
    /**
   * @param {string} id id given by main Filter. eg "c1" for black or "b2" for Nuphy.
   * @param {string} filter InnerHTML of specific label -> will be visible to user. eg "black" or "Nuphy".
   */ constructor(id, filter){
        /**
     * @property {string} id Filter id of subfilterBtn
     * @property {string} filter Visible name of subfilterBtn
     * @property {htmlRef} ref Will always point to exact DOM location of this Btn
     */ this.id = id;
        this.filter = filter;
        this.ref = this.init();
        if (id.toLowerCase().startsWith("c")) SubFilterBtn.activeFilters.colors.push(this);
        else if (id.toLowerCase().startsWith("b")) SubFilterBtn.activeFilters.brands.push(this);
        this.ref.addEventListener("click", this.singleBtnDelete);
    }
    /**
   * @property {function} init creates and inserts div before end with proper values. Also checks whether "Clear all" btn should be visible.
   * @returns {htmlRef} Looks for lastChild within parent div of Btns
   */ init = ()=>{
        // Check if "clear all" btn should be visible
        if (SubFilterBtn.activeFilters.colors.length === 0 && SubFilterBtn.activeFilters.brands.length === 0) document.querySelector(".subfilter-btn-clear").classList.remove("hidden");
        // Create button
        document.querySelector(".subfilter-active").insertAdjacentHTML("beforeend", `<div class="active-filter-btn visibleBtns">
        <span>${this.filter}</span>
        <span>&times;</span>
      </div>`);
        return document.querySelector(".subfilter-active").lastChild;
    };
    /**
   * @property {function} singleBtnDelete takes care of the checkboxes and main filter of website
   * @returns {void}
   */ singleBtnDelete = ()=>{
        // MAIN FILTER-----
        // Uncheck checkbox within filter
        document.querySelector(`#${this.id}`).checked = false;
        // Rerun filter function in main Filter
        (0, _filterDefault.default).filterWalkieTalkie[0].subFilter();
        // SUB FILTER-----
        // Delete btn
        this.delete();
    };
    /**
   * @property {function} delete
   * Deletes DOM element <br>
   * Filters out activeFilter from static activeFilters and if last btn is deleted, also hides "clear All"
   * @returns {void}
   */ delete = ()=>{
        // Remove Btn from DOM
        this.ref.parentNode.removeChild(this.ref);
        // delete filter from activeFilter Object
        // IF ELSE BRAND COLOR
        SubFilterBtn.activeFilters.colors = SubFilterBtn.activeFilters.colors.filter((x)=>x.id !== this.id);
        SubFilterBtn.activeFilters.brands = SubFilterBtn.activeFilters.brands.filter((x)=>x.id !== this.id);
        // check if "clear All" should be deleted as well
        if (SubFilterBtn.activeFilters.colors.length === 0 && SubFilterBtn.activeFilters.brands.length === 0) document.querySelector(".subfilter-btn-clear").classList.add("hidden");
    };
}
exports.default = SubFilterBtn;

},{"./Filter":"35zl1","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8t3va":[function() {},{}],"8t3va":[function() {},{}],"1969R":[function() {},{}]},["LUVNn","1Z4Rq"], "1Z4Rq", "parcelRequire6e42")

//# sourceMappingURL=index.js.map

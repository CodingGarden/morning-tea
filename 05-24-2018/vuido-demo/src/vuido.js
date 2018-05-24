/*! Vuido v0.1.0 | Copyright (C) 2018 Michał Męciński | License: MIT */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["A"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["B"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_0_shared_util__["D"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__lang__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_1__lang__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_1__lang__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_2__env__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_3__options__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_3__options__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_3__options__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debug__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__debug__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_4__debug__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_4__debug__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__props__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_5__props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__next_tick__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_7__next_tick__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__observer_index__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__observer_index__["a"]; });












/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["s"] = isUndef;
/* harmony export (immutable) */ __webpack_exports__["k"] = isDef;
/* harmony export (immutable) */ __webpack_exports__["r"] = isTrue;
/* harmony export (immutable) */ __webpack_exports__["l"] = isFalse;
/* harmony export (immutable) */ __webpack_exports__["o"] = isPrimitive;
/* harmony export (immutable) */ __webpack_exports__["m"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["E"] = toRawType;
/* harmony export (immutable) */ __webpack_exports__["n"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["p"] = isRegExp;
/* harmony export (immutable) */ __webpack_exports__["t"] = isValidArrayIndex;
/* harmony export (immutable) */ __webpack_exports__["F"] = toString;
/* harmony export (immutable) */ __webpack_exports__["C"] = toNumber;
/* harmony export (immutable) */ __webpack_exports__["w"] = makeMap;
/* harmony export (immutable) */ __webpack_exports__["A"] = remove;
/* harmony export (immutable) */ __webpack_exports__["g"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["b"] = cached;
/* harmony export (immutable) */ __webpack_exports__["B"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["f"] = extend;
/* harmony export (immutable) */ __webpack_exports__["D"] = toObject;
/* harmony export (immutable) */ __webpack_exports__["y"] = noop;
/* unused harmony export genStaticKeys */
/* harmony export (immutable) */ __webpack_exports__["u"] = looseEqual;
/* harmony export (immutable) */ __webpack_exports__["v"] = looseIndexOf;
/* harmony export (immutable) */ __webpack_exports__["z"] = once;


const emptyObject = Object.freeze({});
/* harmony export (immutable) */ __webpack_exports__["e"] = emptyObject;


function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}

function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'boolean';
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

const _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}

function isValidArrayIndex(val) {
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

function toNumber(val) {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}

function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? val => map[val.toLowerCase()] : val => map[val];
}

const isBuiltInTag = makeMap('slot,component', true);
/* harmony export (immutable) */ __webpack_exports__["j"] = isBuiltInTag;


const isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/* harmony export (immutable) */ __webpack_exports__["q"] = isReservedAttribute;


function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

const camelizeRE = /-(\w)/g;
const camelize = cached(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
});
/* harmony export (immutable) */ __webpack_exports__["c"] = camelize;


const capitalize = cached(str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/* harmony export (immutable) */ __webpack_exports__["d"] = capitalize;


const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cached(str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/* harmony export (immutable) */ __webpack_exports__["h"] = hyphenate;


function polyfillBind(fn, ctx) {
  function boundFn(a) {
    const l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

const bind = Function.prototype.bind ? nativeBind : polyfillBind;
/* harmony export (immutable) */ __webpack_exports__["a"] = bind;


function toArray(list, start) {
  start = start || 0;
  let i = list.length - start;
  const ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}

function toObject(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

function noop(a, b, c) {}

const no = (a, b, c) => false;
/* harmony export (immutable) */ __webpack_exports__["x"] = no;


const identity = _ => _;
/* harmony export (immutable) */ __webpack_exports__["i"] = identity;


function genStaticKeys(modules) {
  return modules.reduce((keys, m) => {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

function looseEqual(a, b) {
  if (a === b) return true;
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key]);
        });
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) return i;
  }
  return -1;
}

function once(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_constants__ = __webpack_require__(6);






/* harmony default export */ __webpack_exports__["a"] = ({
  optionMergeStrategies: Object.create(null),

  silent: false,

  productionTip: process.env.NODE_ENV !== 'production',

  devtools: process.env.NODE_ENV !== 'production',

  performance: false,

  errorHandler: null,

  warnHandler: null,

  ignoredElements: [],

  keyCodes: Object.create(null),

  isReservedTag: __WEBPACK_IMPORTED_MODULE_0_shared_util__["x" /* no */],

  isReservedAttr: __WEBPACK_IMPORTED_MODULE_0_shared_util__["x" /* no */],

  isUnknownElement: __WEBPACK_IMPORTED_MODULE_0_shared_util__["x" /* no */],

  getTagNamespace: __WEBPACK_IMPORTED_MODULE_0_shared_util__["y" /* noop */],

  parsePlatformTagName: __WEBPACK_IMPORTED_MODULE_0_shared_util__["i" /* identity */],

  mustUseProp: __WEBPACK_IMPORTED_MODULE_0_shared_util__["x" /* no */],

  _lifecycleHooks: __WEBPACK_IMPORTED_MODULE_1_shared_constants__["b" /* LIFECYCLE_HOOKS */]
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = createTextVNode;
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneVNode;


class VNode {

  constructor(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  }

  get child() {
    return this.componentInstance;
  }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = VNode;


const createEmptyVNode = (text = '') => {
  const node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = createEmptyVNode;


function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

function cloneVNode(vnode) {
  const cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isUpdatingChildComponent; });
/* harmony export (immutable) */ __webpack_exports__["e"] = initLifecycle;
/* harmony export (immutable) */ __webpack_exports__["g"] = lifecycleMixin;
/* harmony export (immutable) */ __webpack_exports__["h"] = mountComponent;
/* harmony export (immutable) */ __webpack_exports__["i"] = updateChildComponent;
/* harmony export (immutable) */ __webpack_exports__["a"] = activateChildComponent;
/* harmony export (immutable) */ __webpack_exports__["d"] = deactivateChildComponent;
/* harmony export (immutable) */ __webpack_exports__["c"] = callHook;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer_watcher__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_perf__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vdom_vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_helpers_resolve_slots__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__observer_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__observer_dep__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_index__ = __webpack_require__(0);













let activeInstance = null;
let isUpdatingChildComponent = false;

function initLifecycle(vm) {
  const options = vm.$options;

  let parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    const vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    const prevEl = vm.$el;
    const prevVnode = vm._vnode;
    const prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;

    if (!prevVnode) {
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false, vm.$options._parentElm, vm.$options._refElm);

      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;

    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }

    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
  };

  Vue.prototype.$forceUpdate = function () {
    const vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    const vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;

    const parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["I" /* remove */])(parent.$children, vm);
    }

    if (vm._watcher) {
      vm._watcher.teardown();
    }
    let i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }

    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }

    vm._isDestroyed = true;

    vm.__patch__(vm._vnode, null);

    callHook(vm, 'destroyed');

    vm.$off();

    if (vm.$el) {
      vm.$el.__vue__ = null;
    }

    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = __WEBPACK_IMPORTED_MODULE_3__vdom_vnode__["b" /* createEmptyVNode */];
    if (process.env.NODE_ENV !== 'production') {
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["P" /* warn */])('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["P" /* warn */])('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  let updateComponent;

  if (process.env.NODE_ENV !== 'production' && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].performance && __WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */]) {
    updateComponent = () => {
      const name = vm._name;
      const id = vm._uid;
      const startTag = `vue-perf-start:${id}`;
      const endTag = `vue-perf-end:${id}`;

      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */])(startTag);
      const vnode = vm._render();
      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */])(endTag);
      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["b" /* measure */])(`vue ${name} render`, startTag, endTag);

      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */])(startTag);
      vm._update(vnode, hydrating);
      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["a" /* mark */])(endTag);
      Object(__WEBPACK_IMPORTED_MODULE_2__util_perf__["b" /* measure */])(`vue ${name} patch`, startTag, endTag);
    };
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating);
    };
  }

  new __WEBPACK_IMPORTED_MODULE_1__observer_watcher__["a" /* default */](vm, updateComponent, __WEBPACK_IMPORTED_MODULE_8__util_index__["F" /* noop */], null, true);
  hydrating = false;

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  const hasChildren = !!(renderChildren || vm.$options._renderChildren || parentVnode.data.scopedSlots || vm.$scopedSlots !== __WEBPACK_IMPORTED_MODULE_8__util_index__["g" /* emptyObject */]);

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode;

  if (vm._vnode) {
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  vm.$attrs = parentVnode.data.attrs || __WEBPACK_IMPORTED_MODULE_8__util_index__["g" /* emptyObject */];
  vm.$listeners = listeners || __WEBPACK_IMPORTED_MODULE_8__util_index__["g" /* emptyObject */];

  if (propsData && vm.$options.props) {
    Object(__WEBPACK_IMPORTED_MODULE_6__observer_index__["f" /* toggleObserving */])(false);
    const props = vm._props;
    const propKeys = vm.$options._propKeys || [];
    for (let i = 0; i < propKeys.length; i++) {
      const key = propKeys[i];
      const propOptions = vm.$options.props;
      props[key] = Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["O" /* validateProp */])(key, propOptions, propsData, vm);
    }
    Object(__WEBPACK_IMPORTED_MODULE_6__observer_index__["f" /* toggleObserving */])(true);

    vm.$options.propsData = propsData;
  }

  listeners = listeners || __WEBPACK_IMPORTED_MODULE_8__util_index__["g" /* emptyObject */];
  const oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  Object(__WEBPACK_IMPORTED_MODULE_4__events__["c" /* updateComponentListeners */])(vm, listeners, oldListeners);

  if (hasChildren) {
    vm.$slots = Object(__WEBPACK_IMPORTED_MODULE_5__render_helpers_resolve_slots__["b" /* resolveSlots */])(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) return true;
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (let i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (let i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  Object(__WEBPACK_IMPORTED_MODULE_7__observer_dep__["c" /* pushTarget */])();
  const handlers = vm.$options[hook];
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["j" /* handleError */])(e, vm, `${hook} hook`);
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  Object(__WEBPACK_IMPORTED_MODULE_7__observer_dep__["b" /* popTarget */])();
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return shouldObserve; });
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleObserving;
/* harmony export (immutable) */ __webpack_exports__["c"] = observe;
/* harmony export (immutable) */ __webpack_exports__["a"] = defineReactive;
/* harmony export (immutable) */ __webpack_exports__["d"] = set;
/* harmony export (immutable) */ __webpack_exports__["b"] = del;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dep__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom_vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_index__ = __webpack_require__(0);







const arrayKeys = Object.getOwnPropertyNames(__WEBPACK_IMPORTED_MODULE_2__array__["a" /* arrayMethods */]);

let shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}

class Observer {

  constructor(value) {
    this.value = value;
    this.dep = new __WEBPACK_IMPORTED_MODULE_0__dep__["a" /* default */]();
    this.vmCount = 0;
    Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["d" /* def */])(value, '__ob__', this);
    if (Array.isArray(value)) {
      const augment = __WEBPACK_IMPORTED_MODULE_3__util_index__["l" /* hasProto */] ? protoAugment : copyAugment;
      augment(value, __WEBPACK_IMPORTED_MODULE_2__array__["a" /* arrayMethods */], arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }

  observeArray(items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
/* unused harmony export Observer */


function protoAugment(target, src, keys) {
  target.__proto__ = src;
}

function copyAugment(target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["d" /* def */])(target, key, src[key]);
  }
}

function observe(value, asRootData) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["r" /* isObject */])(value) || value instanceof __WEBPACK_IMPORTED_MODULE_1__vdom_vnode__["d" /* default */]) {
    return;
  }
  let ob;
  if (Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["k" /* hasOwn */])(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["x" /* isServerRendering */])() && (Array.isArray(value) || Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["s" /* isPlainObject */])(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

function defineReactive(obj, key, val, customSetter, shallow) {
  const dep = new __WEBPACK_IMPORTED_MODULE_0__dep__["a" /* default */]();

  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  const getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  const setter = property && property.set;

  let childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      if (__WEBPACK_IMPORTED_MODULE_0__dep__["a" /* default */].target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }

      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

function set(target, key, val) {
  if (process.env.NODE_ENV !== 'production' && (Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["z" /* isUndef */])(target) || Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["t" /* isPrimitive */])(target))) {
    Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["P" /* warn */])(`Cannot set reactive property on undefined, null, or primitive value: ${target}`);
  }
  if (Array.isArray(target) && Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["A" /* isValidArrayIndex */])(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  const ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["P" /* warn */])('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

function del(target, key) {
  if (process.env.NODE_ENV !== 'production' && (Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["z" /* isUndef */])(target) || Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["t" /* isPrimitive */])(target))) {
    Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["P" /* warn */])(`Cannot delete reactive property on undefined, null, or primitive value: ${target}`);
  }
  if (Array.isArray(target) && Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["A" /* isValidArrayIndex */])(key)) {
    target.splice(key, 1);
    return;
  }
  const ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["P" /* warn */])('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__util_index__["k" /* hasOwn */])(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

function dependArray(value) {
  for (let e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SSR_ATTR = 'data-server-rendered';
/* harmony export (immutable) */ __webpack_exports__["c"] = SSR_ATTR;


const ASSET_TYPES = ['component', 'directive', 'filter'];
/* harmony export (immutable) */ __webpack_exports__["a"] = ASSET_TYPES;


const LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];
/* harmony export (immutable) */ __webpack_exports__["b"] = LIFECYCLE_HOOKS;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsPassive */
/* harmony export (immutable) */ __webpack_exports__["h"] = isNative;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Set; });

const hasProto = '__proto__' in {};
/* harmony export (immutable) */ __webpack_exports__["c"] = hasProto;


const inBrowser = typeof window !== 'undefined';
/* harmony export (immutable) */ __webpack_exports__["e"] = inBrowser;

const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
/* harmony export (immutable) */ __webpack_exports__["f"] = inWeex;

const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
/* unused harmony export weexPlatform */

const UA = inBrowser && window.navigator.userAgent.toLowerCase();
/* unused harmony export UA */

const isIE = UA && /msie|trident/.test(UA);
/* unused harmony export isIE */

const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
/* unused harmony export isIE9 */

const isEdge = UA && UA.indexOf('edge/') > 0;
/* unused harmony export isEdge */

const isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
/* unused harmony export isAndroid */

const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
/* harmony export (immutable) */ __webpack_exports__["g"] = isIOS;

const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
/* unused harmony export isChrome */


const nativeWatch = {}.watch;
/* harmony export (immutable) */ __webpack_exports__["j"] = nativeWatch;


let supportsPassive = false;
if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

let _isServer;
const isServerRendering = () => {
  if (_isServer === undefined) {
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};
/* harmony export (immutable) */ __webpack_exports__["i"] = isServerRendering;


const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* harmony export (immutable) */ __webpack_exports__["b"] = devtools;


function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

const hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
/* harmony export (immutable) */ __webpack_exports__["d"] = hasSymbol;


let _Set;

if (typeof Set !== 'undefined' && isNative(Set)) {
  _Set = Set;
} else {
  _Set = class Set {
    constructor() {
      this.set = Object.create(null);
    }
    has(key) {
      return this.set[key] === true;
    }
    add(key) {
      this.set[key] = true;
    }
    clear() {
      this.set = Object.create(null);
    }
  };
}



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("libui-node");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodes_textnode__ = __webpack_require__(23);



class Widget extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */] {
  constructor(tagName) {
    super(tagName);

    this.widget = null;
    this.widgetIndex = null;
  }

  appendChild(childNode) {
    super.appendChild(childNode);

    if (this.widget != null) {
      if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._appendElement(childNode);else if (childNode instanceof __WEBPACK_IMPORTED_MODULE_1__nodes_textnode__["a" /* TextNode */]) this._setWidgetText(child.text);
    }
  }

  insertBefore(childNode, referenceNode) {
    const index = super.insertBefore(childNode, referenceNode);

    if (this.widget != null) {
      if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._insertElement(childNode, index);
    }

    return index;
  }

  removeChild(childNode) {
    super.removeChild(childNode);

    if (this.widget != null) {
      if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._removeElement(childNode);
    }
  }

  setAttribute(key, value) {
    super.setAttribute(key, value);

    if (this.widget != null) this._setWidgetAttribute(key, value);
  }

  addEventListener(event, handler) {
    super.addEventListener(event, handler);

    if (this.widget != null) this._setWidgetHandler(event, handler);
  }

  removeEventListener(event) {
    super.removeEventListener(event);

    if (this.widget != null) this._setWidgetHandler(event, null);
  }

  _mountWidget() {
    this._createWidget();
    this._initializeWidgetAttributes();

    for (let key in this.handlers) this._setWidgetHandler(key, this.handlers[key]);

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._appendElement(childNode);else if (childNode instanceof __WEBPACK_IMPORTED_MODULE_1__nodes_textnode__["a" /* TextNode */]) this._setWidgetText(childNode.text);
    }
  }

  _getDefaultAttributes() {
    return {
      visible: true,
      enabled: true,
      stretchy: false
    };
  }

  _createWidget() {
    throw new Error(this.tagName + ' cannot be created');
  }

  _destroyWidget() {
    this.widget.destroy();
    this.widget = null;

    this.childNodes = [];
  }

  _appendElement(childNode) {
    if (!(childNode instanceof Widget)) throw new Error(this.tagName + ' cannot contain ' + childNode.tagName + ' elements');

    childNode._mountWidget();
    this._appendWidget(childNode);

    childNode.widgetIndex = this.childNodes.indexOf(childNode);
  }

  _insertElement(childNode, index) {
    if (!(childNode instanceof Widget)) throw new Error(this.tagName + ' cannot contain ' + childNode.tagName + ' elements');

    for (let i = this.childNodes.length - 1; i > index; i--) {
      const tailNode = this.childNodes[i];
      if (tailNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._removeWidget(tailNode);
    }

    childNode._mountWidget();
    this._appendWidget(childNode);

    for (let i = index + 1; i < this.childNodes.length; i++) {
      const tailNode = this.childNodes[i];
      if (tailNode instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* Element */]) this._appendWidget(tailNode);
    }

    this._reindexChildWidgets();
  }

  _removeElement(childNode) {
    this._removeWidget(childNode);

    childNode._destroyWidget();

    this._reindexChildWidgets();
  }

  _appendWidget(childNode) {
    throw new Error(this.tagName + ' cannot contain child widgets');
  }

  _removeWidget(childNode) {
    throw new Error(this.tagName + ' cannot contain child widgets');
  }

  _setContentText(text) {
    if (this.widget != null) this._setWidgetText(text);
  }

  _setWidgetText(text) {
    throw new Error(this.tagName + ' cannot contain text nodes');
  }

  _initializeWidgetAttributes() {
    if (!this.attributes.visible) this.widget.visible = false;
    if (!this.attributes.enabled) this.widget.enabled = false;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'visible') this.widget.visible = value;else if (key == 'enabled') this.widget.enabled = value;else throw new Error(this.tagName + ' does not have attribute ' + key);
  }

  _setWidgetHandler(event, handler) {
    throw new Error(this.tagName + ' does not have event ' + event);
  }

  _reindexChildWidgets() {
    let index = 0;
    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof Widget) childNode.widgetIndex = index++;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Widget;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tip; });
/* unused harmony export generateComponentTrace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatComponentName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(1);





let warn = __WEBPACK_IMPORTED_MODULE_1_shared_util__["y" /* noop */];
let tip = __WEBPACK_IMPORTED_MODULE_1_shared_util__["y" /* noop */];
let generateComponentTrace = __WEBPACK_IMPORTED_MODULE_1_shared_util__["y" /* noop */];
let formatComponentName = __WEBPACK_IMPORTED_MODULE_1_shared_util__["y" /* noop */];

if (process.env.NODE_ENV !== 'production') {
  const hasConsole = typeof console !== 'undefined';
  const classifyRE = /(?:^|[-_])(\w)/g;
  const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

  warn = (msg, vm) => {
    const trace = vm ? generateComponentTrace(vm) : '';

    if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].warnHandler) {
      __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].silent) {
      console.error(`[Vue warn]: ${msg}${trace}`);
    }
  };

  tip = (msg, vm) => {
    if (hasConsole && !__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].silent) {
      console.warn(`[Vue tip]: ${msg}` + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = (vm, includeFile) => {
    if (vm.$root === vm) {
      return '<Root>';
    }
    const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    let name = options.name || options._componentTag;
    const file = options.__file;
    if (!name && file) {
      const match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
  };

  const repeat = (str, n) => {
    let res = '';
    while (n) {
      if (n % 2 === 1) res += str;
      if (n > 1) str += str;
      n >>= 1;
    }
    return res;
  };

  generateComponentTrace = vm => {
    if (vm._isVue && vm.$parent) {
      const tree = [];
      let currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          const last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : repeat(' ', 5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
    } else {
      return `\n\n(found in ${formatComponentName(vm)})`;
    }
  };
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__merge_hook__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__merge_hook__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extract_props__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__extract_props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_listeners__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__update_listeners__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__normalize_children__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__normalize_children__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__normalize_children__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolve_async_component__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__resolve_async_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__resolve_async_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_first_component_child__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__get_first_component_child__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__is_async_placeholder__ = __webpack_require__(28);
/* unused harmony namespace reexport */










/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = pushTarget;
/* harmony export (immutable) */ __webpack_exports__["b"] = popTarget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);



let uid = 0;

class Dep {

  constructor() {
    this.id = uid++;
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["I" /* remove */])(this.subs, sub);
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dep;


Dep.target = null;
const targetStack = [];

function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = proxy;
/* harmony export (immutable) */ __webpack_exports__["c"] = initState;
/* harmony export (immutable) */ __webpack_exports__["b"] = getData;
/* harmony export (immutable) */ __webpack_exports__["a"] = defineComputed;
/* harmony export (immutable) */ __webpack_exports__["e"] = stateMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer_watcher__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer_dep__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lifecycle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observer_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_index__ = __webpack_require__(0);











const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */],
  set: __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */]
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  const opts = vm.$options;
  if (opts.props) initProps(vm, opts.props);
  if (opts.methods) initMethods(vm, opts.methods);
  if (opts.data) {
    initData(vm);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["c" /* observe */])(vm._data = {}, true);
  }
  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch && opts.watch !== __WEBPACK_IMPORTED_MODULE_5__util_index__["D" /* nativeWatch */]) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  const propsData = vm.$options.propsData || {};
  const props = vm._props = {};

  const keys = vm.$options._propKeys = [];
  const isRoot = !vm.$parent;

  if (!isRoot) {
    Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["f" /* toggleObserving */])(false);
  }
  for (const key in propsOptions) {
    keys.push(key);
    const value = Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["O" /* validateProp */])(key, propsOptions, propsData, vm);

    if (process.env.NODE_ENV !== 'production') {
      const hyphenatedKey = Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["n" /* hyphenate */])(key);
      if (Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["w" /* isReservedAttribute */])(hyphenatedKey) || __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isReservedAttr(hyphenatedKey)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`, vm);
      }
      Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["a" /* defineReactive */])(props, key, value, () => {
        if (vm.$parent && !__WEBPACK_IMPORTED_MODULE_3__lifecycle__["f" /* isUpdatingChildComponent */]) {
          Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Avoid mutating a prop directly since the value will be ` + `overwritten whenever the parent component re-renders. ` + `Instead, use a data or computed property based on the prop's ` + `value. Prop being mutated: "${key}"`, vm);
        }
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["a" /* defineReactive */])(props, key, value);
    }

    if (!(key in vm)) {
      proxy(vm, `_props`, key);
    }
  }
  Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["f" /* toggleObserving */])(true);
}

function initData(vm) {
  let data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["s" /* isPlainObject */])(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }

  const keys = Object.keys(data);
  const props = vm.$options.props;
  const methods = vm.$options.methods;
  let i = keys.length;
  while (i--) {
    const key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["k" /* hasOwn */])(methods, key)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Method "${key}" has already been defined as a data property.`, vm);
      }
    }
    if (props && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["k" /* hasOwn */])(props, key)) {
      process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`The data property "${key}" is already declared as a prop. ` + `Use prop default value instead.`, vm);
    } else if (!Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["v" /* isReserved */])(key)) {
      proxy(vm, `_data`, key);
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_4__observer_index__["c" /* observe */])(data, true);
}

function getData(data, vm) {
  Object(__WEBPACK_IMPORTED_MODULE_2__observer_dep__["c" /* pushTarget */])();
  try {
    return data.call(vm, vm);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["j" /* handleError */])(e, vm, `data()`);
    return {};
  } finally {
    Object(__WEBPACK_IMPORTED_MODULE_2__observer_dep__["b" /* popTarget */])();
  }
}

const computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  const watchers = vm._computedWatchers = Object.create(null);

  const isSSR = Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["x" /* isServerRendering */])();

  for (const key in computed) {
    const userDef = computed[key];
    const getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Getter is missing for computed property "${key}".`, vm);
    }

    if (!isSSR) {
      watchers[key] = new __WEBPACK_IMPORTED_MODULE_1__observer_watcher__["a" /* default */](vm, getter || __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */], __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */], computedWatcherOptions);
    }

    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`The computed property "${key}" is already defined in data.`, vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`The computed property "${key}" is already defined as a prop.`, vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  const shouldCache = !Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["x" /* isServerRendering */])();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
    sharedPropertyDefinition.set = __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */];
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */];
    sharedPropertyDefinition.set = userDef.set ? userDef.set : __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */];
  }
  if (process.env.NODE_ENV !== 'production' && sharedPropertyDefinition.set === __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */]) {
    sharedPropertyDefinition.set = function () {
      Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Computed property "${key}" was assigned to but it has no setter.`, this);
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    const watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (__WEBPACK_IMPORTED_MODULE_2__observer_dep__["a" /* default */].target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  const props = vm.$options.props;
  for (const key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Method "${key}" has an undefined value in the component definition. ` + `Did you reference the function correctly?`, vm);
      }
      if (props && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["k" /* hasOwn */])(props, key)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Method "${key}" has already been defined as a prop.`, vm);
      }
      if (key in vm && Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["v" /* isReserved */])(key)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`Method "${key}" conflicts with an existing Vue instance method. ` + `Avoid defining component methods that start with _ or $.`);
      }
    }
    vm[key] = methods[key] == null ? __WEBPACK_IMPORTED_MODULE_5__util_index__["F" /* noop */] : Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["b" /* bind */])(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (const key in watch) {
    const handler = watch[key];
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["s" /* isPlainObject */])(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  const dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  const propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])(`$props is readonly.`, this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = __WEBPACK_IMPORTED_MODULE_4__observer_index__["d" /* set */];
  Vue.prototype.$delete = __WEBPACK_IMPORTED_MODULE_4__observer_index__["b" /* del */];

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    const vm = this;
    if (Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["s" /* isPlainObject */])(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    const watcher = new __WEBPACK_IMPORTED_MODULE_1__observer_watcher__["a" /* default */](vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initEvents;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateComponentListeners;
/* harmony export (immutable) */ __webpack_exports__["a"] = eventsMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom_helpers_index__ = __webpack_require__(11);





function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;

  const listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

let target;

function add(event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  Object(__WEBPACK_IMPORTED_MODULE_1__vdom_helpers_index__["h" /* updateListeners */])(listeners, oldListeners || {}, add, remove, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  const hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    const vm = this;
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    const vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    const vm = this;

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }

    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this.$off(event[i], fn);
      }
      return vm;
    }

    const cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm._events[event] = null;
      return vm;
    }
    if (fn) {
      let cb;
      let i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    const vm = this;
    if (process.env.NODE_ENV !== 'production') {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["K" /* tip */])(`Event "${lowerCaseEvent}" is emitted in component ` + `${Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["i" /* formatComponentName */])(vm)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["n" /* hyphenate */])(event)}" instead of "${event}".`);
      }
    }
    let cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["L" /* toArray */])(cbs) : cbs;
      const args = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["L" /* toArray */])(arguments, 1);
      for (let i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, vm, `event handler for "${event}"`);
        }
      }
    }
    return vm;
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveSlots;
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveScopedSlots;

function resolveSlots(children, context) {
  const slots = {};
  if (!children) {
    return slots;
  }
  for (let i = 0, l = children.length; i < l; i++) {
    const child = children[i];
    const data = child.data;

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }

    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      const name = data.slot;
      const slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }

  for (const name in slots) {
    if (slots[name].every(isWhitespace)) {
      delete slots[name];
    }
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}

function resolveScopedSlots(fns, res) {
  res = res || {};
  for (let i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initMixin;
/* harmony export (immutable) */ __webpack_exports__["a"] = initInternalComponent;
/* harmony export (immutable) */ __webpack_exports__["c"] = resolveConstructorOptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proxy__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_perf__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lifecycle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_index__ = __webpack_require__(0);












let uid = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;

    vm._uid = uid++;

    let startTag, endTag;

    if (process.env.NODE_ENV !== 'production' && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].performance && __WEBPACK_IMPORTED_MODULE_5__util_perf__["a" /* mark */]) {
      startTag = `vue-perf-start:${vm._uid}`;
      endTag = `vue-perf-end:${vm._uid}`;
      Object(__WEBPACK_IMPORTED_MODULE_5__util_perf__["a" /* mark */])(startTag);
    }

    vm._isVue = true;

    if (options && options._isComponent) {
      initInternalComponent(vm, options);
    } else {
      vm.$options = Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["C" /* mergeOptions */])(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }

    if (process.env.NODE_ENV !== 'production') {
      Object(__WEBPACK_IMPORTED_MODULE_1__proxy__["a" /* initProxy */])(vm);
    } else {
      vm._renderProxy = vm;
    }

    vm._self = vm;
    Object(__WEBPACK_IMPORTED_MODULE_6__lifecycle__["e" /* initLifecycle */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_4__events__["b" /* initEvents */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_3__render__["a" /* initRender */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_6__lifecycle__["c" /* callHook */])(vm, 'beforeCreate');
    Object(__WEBPACK_IMPORTED_MODULE_7__inject__["a" /* initInjections */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_2__state__["c" /* initState */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_7__inject__["b" /* initProvide */])(vm);
    Object(__WEBPACK_IMPORTED_MODULE_6__lifecycle__["c" /* callHook */])(vm, 'created');

    if (process.env.NODE_ENV !== 'production' && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].performance && __WEBPACK_IMPORTED_MODULE_5__util_perf__["a" /* mark */]) {
      vm._name = Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["i" /* formatComponentName */])(vm, false);
      Object(__WEBPACK_IMPORTED_MODULE_5__util_perf__["a" /* mark */])(endTag);
      Object(__WEBPACK_IMPORTED_MODULE_5__util_perf__["b" /* measure */])(`vue ${vm._name} init`, startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  const opts = vm.$options = Object.create(vm.constructor.options);

  const parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  const vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  let options = Ctor.options;
  if (Ctor.super) {
    const superOptions = resolveConstructorOptions(Ctor.super);
    const cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions;

      const modifiedOptions = resolveModifiedOptions(Ctor);

      if (modifiedOptions) {
        Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["h" /* extend */])(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["C" /* mergeOptions */])(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  let modified;
  const latest = Ctor.options;
  const extended = Ctor.extendOptions;
  const sealed = Ctor.sealedOptions;
  for (const key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) modified = {};
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  if (Array.isArray(latest)) {
    const res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (let i = 0; i < latest.length; i++) {
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(7);






function handleError(err, vm, info) {
  if (vm) {
    let cur = vm;
    while (cur = cur.$parent) {
      const hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (let i = 0; i < hooks.length; i++) {
          try {
            const capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) return;
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError(err, vm, info) {
  if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].errorHandler) {
    try {
      return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].errorHandler.call(null, err, vm, info);
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`Error in ${info}: "${err.toString()}"`, vm);
  }

  if ((__WEBPACK_IMPORTED_MODULE_2__env__["e" /* inBrowser */] || __WEBPACK_IMPORTED_MODULE_2__env__["f" /* inWeex */]) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traverse__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dep__ = __webpack_require__(12);








let uid = 0;

class Watcher {

  constructor(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);

    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid;
    this.active = true;
    this.dirty = this.lazy;
    this.deps = [];
    this.newDeps = [];
    this.depIds = new __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* _Set */]();
    this.newDepIds = new __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* _Set */]();
    this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : '';

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["H" /* parsePath */])(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["P" /* warn */])(`Failed watching path: "${expOrFn}" ` + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  }

  get() {
    Object(__WEBPACK_IMPORTED_MODULE_3__dep__["c" /* pushTarget */])(this);
    let value;
    const vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, vm, `getter for watcher "${this.expression}"`);
      } else {
        throw e;
      }
    } finally {
      if (this.deep) {
        Object(__WEBPACK_IMPORTED_MODULE_1__traverse__["a" /* traverse */])(value);
      }
      Object(__WEBPACK_IMPORTED_MODULE_3__dep__["b" /* popTarget */])();
      this.cleanupDeps();
    }
    return value;
  }

  addDep(dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  }

  cleanupDeps() {
    let i = this.deps.length;
    while (i--) {
      const dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    let tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  }

  update() {
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_2__scheduler__["b" /* queueWatcher */])(this);
    }
  }

  run() {
    if (this.active) {
      const value = this.get();
      if (value !== this.value || Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["r" /* isObject */])(value) || this.deep) {
        const oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, this.vm, `callback for watcher "${this.expression}"`);
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  }

  evaluate() {
    this.value = this.get();
    this.dirty = false;
  }

  depend() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  }

  teardown() {
    if (this.active) {
      if (!this.vm._isBeingDestroyed) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["I" /* remove */])(this.vm._watchers, this);
      }
      let i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Watcher;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = traverse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom_vnode__ = __webpack_require__(3);






const seenObjects = new __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* _Set */]();

function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val, seen) {
  let i, keys;
  const isA = Array.isArray(val);
  if (!isA && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["r" /* isObject */])(val) || Object.isFrozen(val) || val instanceof __WEBPACK_IMPORTED_MODULE_1__vdom_vnode__["d" /* default */]) {
    return;
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) _traverse(val[i], seen);
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) _traverse(val[keys[i]], seen);
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createFnInvoker;
/* harmony export (immutable) */ __webpack_exports__["b"] = updateListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(1);





const normalizeEvent = Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["b" /* cached */])(name => {
  const passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  const once = name.charAt(0) === '~';
  name = once ? name.slice(1) : name;
  const capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name,
    once,
    capture,
    passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    const fns = invoker.fns;
    if (Array.isArray(fns)) {
      const cloned = fns.slice();
      for (let i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments);
      }
    } else {
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove, vm) {
  let name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (false) {
      cur = def.handler;
      event.params = def.params;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(cur)) {
      process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Invalid handler for event "${event.name}": got ` + String(cur), vm);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(old)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(on[name])) {
      event = normalizeEvent(name);
      remove(event.name, oldOn[name], event.capture);
    }
  }
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initRender;
/* harmony export (immutable) */ __webpack_exports__["b"] = renderMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vdom_create_element__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_helpers_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render_helpers_resolve_slots__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vdom_vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lifecycle__ = __webpack_require__(4);











function initRender(vm) {
  vm._vnode = null;
  vm._staticTrees = null;
  const options = vm.$options;
  const parentVnode = vm.$vnode = options._parentVnode;
  const renderContext = parentVnode && parentVnode.context;
  vm.$slots = Object(__WEBPACK_IMPORTED_MODULE_3__render_helpers_resolve_slots__["b" /* resolveSlots */])(options._renderChildren, renderContext);
  vm.$scopedSlots = __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */];

  vm._c = (a, b, c, d) => Object(__WEBPACK_IMPORTED_MODULE_1__vdom_create_element__["a" /* createElement */])(vm, a, b, c, d, false);

  vm.$createElement = (a, b, c, d) => Object(__WEBPACK_IMPORTED_MODULE_1__vdom_create_element__["a" /* createElement */])(vm, a, b, c, d, true);

  const parentData = parentVnode && parentVnode.data;

  if (process.env.NODE_ENV !== 'production') {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["e" /* defineReactive */])(vm, '$attrs', parentData && parentData.attrs || __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */], () => {
      !__WEBPACK_IMPORTED_MODULE_5__lifecycle__["f" /* isUpdatingChildComponent */] && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["P" /* warn */])(`$attrs is readonly.`, vm);
    }, true);
    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["e" /* defineReactive */])(vm, '$listeners', options._parentListeners || __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */], () => {
      !__WEBPACK_IMPORTED_MODULE_5__lifecycle__["f" /* isUpdatingChildComponent */] && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["P" /* warn */])(`$listeners is readonly.`, vm);
    }, true);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["e" /* defineReactive */])(vm, '$attrs', parentData && parentData.attrs || __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */], null, true);
    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["e" /* defineReactive */])(vm, '$listeners', options._parentListeners || __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */], null, true);
  }
}

function renderMixin(Vue) {
  Object(__WEBPACK_IMPORTED_MODULE_2__render_helpers_index__["a" /* installRenderHelpers */])(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["E" /* nextTick */])(fn, this);
  };

  Vue.prototype._render = function () {
    const vm = this;
    const { render, _parentVnode } = vm.$options;

    if (process.env.NODE_ENV !== 'production') {
      for (const key in vm.$slots) {
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || __WEBPACK_IMPORTED_MODULE_0__util_index__["g" /* emptyObject */];
    }

    vm.$vnode = _parentVnode;

    let vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, vm, `render`);

      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["j" /* handleError */])(e, vm, `renderError`);
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }

    if (!(vnode instanceof __WEBPACK_IMPORTED_MODULE_4__vdom_vnode__["d" /* default */])) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["P" /* warn */])('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = Object(__WEBPACK_IMPORTED_MODULE_4__vdom_vnode__["b" /* createEmptyVNode */])();
    }

    vnode.parent = _parentVnode;
    return vnode;
  };
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initProvide;
/* harmony export (immutable) */ __webpack_exports__["a"] = initInjections;
/* harmony export (immutable) */ __webpack_exports__["c"] = resolveInject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer_index__ = __webpack_require__(5);






function initProvide(vm) {
  const provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  const result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object(__WEBPACK_IMPORTED_MODULE_2__observer_index__["f" /* toggleObserving */])(false);
    Object.keys(result).forEach(key => {
      if (process.env.NODE_ENV !== 'production') {
        Object(__WEBPACK_IMPORTED_MODULE_2__observer_index__["a" /* defineReactive */])(vm, key, result[key], () => {
          Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["P" /* warn */])(`Avoid mutating an injected value directly since the changes will be ` + `overwritten whenever the provided component re-renders. ` + `injection being mutated: "${key}"`, vm);
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_2__observer_index__["a" /* defineReactive */])(vm, key, result[key]);
      }
    });
    Object(__WEBPACK_IMPORTED_MODULE_2__observer_index__["f" /* toggleObserving */])(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    const result = Object.create(null);
    const keys = __WEBPACK_IMPORTED_MODULE_1__util_index__["m" /* hasSymbol */] ? Reflect.ownKeys(inject).filter(key => {
      return Object.getOwnPropertyDescriptor(inject, key).enumerable;
    }) : Object.keys(inject);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const provideKey = inject[key].from;
      let source = vm;
      while (source) {
        if (source._provided && Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["g" /* hasOwn */])(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          const provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["P" /* warn */])(`Injection "${key}" not found`, vm);
        }
      }
    }
    return result;
  }
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TextNode {
  constructor(text) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = '';

    this.text = text;
  }

  setText(text) {
    this.text = text;

    if (this.parentNode != null) this.parentNode._setContentText(text);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextNode;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initProxy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);





let initProxy;

if (process.env.NODE_ENV !== 'production') {
  const allowedGlobals = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["B" /* makeMap */])('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require');

  const warnNonPresent = (target, key) => {
    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["P" /* warn */])(`Property or method "${key}" is not defined on the instance but ` + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  const hasProxy = typeof Proxy !== 'undefined' && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["q" /* isNative */])(Proxy);

  if (hasProxy) {
    const isBuiltInModifier = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["B" /* makeMap */])('stop,prevent,self,ctrl,shift,alt,meta,exact');
    __WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].keyCodes = new Proxy(__WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].keyCodes, {
      set(target, key, value) {
        if (isBuiltInModifier(key)) {
          Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["P" /* warn */])(`Avoid overwriting built-in modifier in config.keyCodes: .${key}`);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  const hasHandler = {
    has(target, key) {
      const has = key in target;
      const isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  const getHandler = {
    get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      const options = vm.$options;
      const handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queueActivatedComponent;
/* harmony export (immutable) */ __webpack_exports__["b"] = queueWatcher;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instance_lifecycle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index__ = __webpack_require__(0);






const MAX_UPDATE_COUNT = 100;
/* unused harmony export MAX_UPDATE_COUNT */


const queue = [];
const activatedChildren = [];
let has = {};
let circular = {};
let waiting = false;
let flushing = false;
let index = 0;

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

function flushSchedulerQueue() {
  flushing = true;
  let watcher, id;

  queue.sort((a, b) => a.id - b.id);

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();

    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["P" /* warn */])('You may have an infinite update loop ' + (watcher.user ? `in watcher with expression "${watcher.expression}"` : `in a component render function.`), watcher.vm);
        break;
      }
    }
  }

  const activatedQueue = activatedChildren.slice();
  const updatedQueue = queue.slice();

  resetSchedulerState();

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  if (__WEBPACK_IMPORTED_MODULE_2__util_index__["f" /* devtools */] && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].devtools) {
    __WEBPACK_IMPORTED_MODULE_2__util_index__["f" /* devtools */].emit('flush');
  }
}

function callUpdatedHooks(queue) {
  let i = queue.length;
  while (i--) {
    const watcher = queue[i];
    const vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      Object(__WEBPACK_IMPORTED_MODULE_1__instance_lifecycle__["c" /* callHook */])(vm, 'updated');
    }
  }
}

function queueActivatedComponent(vm) {
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (let i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    Object(__WEBPACK_IMPORTED_MODULE_1__instance_lifecycle__["a" /* activateChildComponent */])(queue[i], true);
  }
}

function queueWatcher(watcher) {
  const id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      let i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }

    if (!waiting) {
      waiting = true;
      Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["E" /* nextTick */])(flushSchedulerQueue);
    }
  }
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return measure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(7);


let mark;
let measure;

if (process.env.NODE_ENV !== 'production') {
  const perf = __WEBPACK_IMPORTED_MODULE_0__env__["e" /* inBrowser */] && window.performance;

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = tag => perf.mark(tag);
    measure = (name, startTag, endTag) => {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = simpleNormalizeChildren;
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeChildren;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(1);





function simpleNormalizeChildren(children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

function normalizeChildren(children) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["o" /* isPrimitive */])(children) ? [Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["k" /* isDef */])(node) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["k" /* isDef */])(node.text) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["l" /* isFalse */])(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  const res = [];
  let i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(c) || typeof c === 'boolean') continue;
    lastIndex = res.length - 1;
    last = res[lastIndex];

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, `${nestedIndex || ''}_${i}`);

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["o" /* isPrimitive */])(c)) {
      if (isTextNode(last)) {
        res[lastIndex] = Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(last.text + c);
      } else if (c !== '') {
        res.push(Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        res[lastIndex] = Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_vnode__["c" /* createTextVNode */])(last.text + c.text);
      } else {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["r" /* isTrue */])(children._isVList) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["k" /* isDef */])(c.tag) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["s" /* isUndef */])(c.key) && Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["k" /* isDef */])(nestedIndex)) {
          c.key = `__vlist${nestedIndex}_${i}__`;
        }
        res.push(c);
      }
    }
  }
  return res;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isAsyncPlaceholder;


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElement;
/* unused harmony export _createElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_component__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observer_traverse__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_index__ = __webpack_require__(11);











const SIMPLE_NORMALIZE = 1;
const ALWAYS_NORMALIZE = 2;

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["t" /* isPrimitive */])(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["y" /* isTrue */])(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data) && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data.__ob__)) {
    process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["P" /* warn */])(`Avoid using observed data object as vnode data: ${JSON.stringify(data)}\n` + 'Always create fresh vnode data objects in each render!', context);
    return Object(__WEBPACK_IMPORTED_MODULE_1__vnode__["b" /* createEmptyVNode */])();
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data) && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__vnode__["b" /* createEmptyVNode */])();
  }

  if (process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data) && Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data.key) && !Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["t" /* isPrimitive */])(data.key)) {
    if (true) {
      Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["P" /* warn */])('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  }

  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["e" /* normalizeChildren */])(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["g" /* simpleNormalizeChildren */])(children);
  }
  let vnode, ns;
  if (typeof tag === 'string') {
    let Ctor;
    ns = context.$vnode && context.$vnode.ns || __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].getTagNamespace(tag);
    if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isReservedTag(tag)) {
      vnode = new __WEBPACK_IMPORTED_MODULE_1__vnode__["d" /* default */](__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(Ctor = Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["J" /* resolveAsset */])(context.$options, 'components', tag))) {
      vnode = Object(__WEBPACK_IMPORTED_MODULE_2__create_component__["a" /* createComponent */])(Ctor, data, context, children, tag);
    } else {
      vnode = new __WEBPACK_IMPORTED_MODULE_1__vnode__["d" /* default */](tag, data, children, undefined, undefined, context);
    }
  } else {
    vnode = Object(__WEBPACK_IMPORTED_MODULE_2__create_component__["a" /* createComponent */])(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(vnode)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(ns)) applyNS(vnode, ns);
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data)) registerDeepBindings(data);
    return vnode;
  } else {
    return Object(__WEBPACK_IMPORTED_MODULE_1__vnode__["b" /* createEmptyVNode */])();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    ns = undefined;
    force = true;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(vnode.children)) {
    for (let i = 0, l = vnode.children.length; i < l; i++) {
      const child = vnode.children[i];
      if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(child.tag) && (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["z" /* isUndef */])(child.ns) || Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["y" /* isTrue */])(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
}

function registerDeepBindings(data) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["r" /* isObject */])(data.style)) {
    Object(__WEBPACK_IMPORTED_MODULE_3__observer_traverse__["a" /* traverse */])(data.style);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["r" /* isObject */])(data.class)) {
    Object(__WEBPACK_IMPORTED_MODULE_3__observer_traverse__["a" /* traverse */])(data.class);
  }
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createComponent;
/* harmony export (immutable) */ __webpack_exports__["b"] = createComponentInstanceForVnode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_instance_init__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_observer_scheduler__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_functional_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_weex_runtime_recycle_list_render_component_template__ = __webpack_require__(56);















const componentVNodeHooks = {
  init(vnode, hydrating, parentElm, refElm) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      const mountedNode = vnode;
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      const child = vnode.componentInstance = createComponentInstanceForVnode(vnode, __WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["b" /* activeInstance */], parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch(oldVnode, vnode) {
    const options = vnode.componentOptions;
    const child = vnode.componentInstance = oldVnode.componentInstance;
    Object(__WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["i" /* updateChildComponent */])(child, options.propsData, options.listeners, vnode, options.children);
  },

  insert(vnode) {
    const { context, componentInstance } = vnode;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      Object(__WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["c" /* callHook */])(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        Object(__WEBPACK_IMPORTED_MODULE_2_core_observer_scheduler__["a" /* queueActivatedComponent */])(componentInstance);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["a" /* activateChildComponent */])(componentInstance, true);
      }
    }
  },

  destroy(vnode) {
    const { componentInstance } = vnode;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_6__instance_lifecycle__["d" /* deactivateChildComponent */])(componentInstance, true);
      }
    }
  }
};

const hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["z" /* isUndef */])(Ctor)) {
    return;
  }

  const baseCtor = context.$options._base;

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["r" /* isObject */])(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["P" /* warn */])(`Invalid Component definition: ${String(Ctor)}`, context);
    }
    return;
  }

  let asyncFactory;
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["z" /* isUndef */])(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["f" /* resolveAsyncComponent */])(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["a" /* createAsyncPlaceholder */])(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};

  Object(__WEBPACK_IMPORTED_MODULE_1_core_instance_init__["c" /* resolveConstructorOptions */])(Ctor);

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(data.model)) {
    transformModel(Ctor.options, data);
  }

  const propsData = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_index__["b" /* extractPropsFromVNodeData */])(data, Ctor, tag);

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["y" /* isTrue */])(Ctor.options.functional)) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__create_functional_component__["a" /* createFunctionalComponent */])(Ctor, propsData, data, context, children);
  }

  const listeners = data.on;

  data.on = data.nativeOn;

  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["y" /* isTrue */])(Ctor.options.abstract)) {
    const slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  installComponentHooks(data);

  const name = Ctor.options.name || tag;
  const vnode = new __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */](`vue-component-${Ctor.cid}${name ? `-${name}` : ''}`, data, undefined, undefined, undefined, context, { Ctor, propsData, listeners, tag, children }, asyncFactory);

  if (false) {
    return renderRecyclableComponentTemplate(vnode);
  }

  return vnode;
}

function createComponentInstanceForVnode(vnode, parent, parentElm, refElm) {
  const options = {
    _isComponent: true,
    parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };

  const inlineTemplate = vnode.data.inlineTemplate;
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  const hooks = data.hook || (data.hook = {});
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

function transformModel(options, data) {
  const prop = options.model && options.model.prop || 'value';
  const event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  const on = data.on || (data.on = {});
  if (Object(__WEBPACK_IMPORTED_MODULE_4__util_index__["p" /* isDef */])(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = installRenderHelpers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_list__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render_slot__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolve_filter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__check_keycodes__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bind_object_props__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__render_static__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bind_object_listeners__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resolve_slots__ = __webpack_require__(15);













function installRenderHelpers(target) {
  target._o = __WEBPACK_IMPORTED_MODULE_7__render_static__["a" /* markOnce */];
  target._n = __WEBPACK_IMPORTED_MODULE_0_shared_util__["C" /* toNumber */];
  target._s = __WEBPACK_IMPORTED_MODULE_0_shared_util__["F" /* toString */];
  target._l = __WEBPACK_IMPORTED_MODULE_2__render_list__["a" /* renderList */];
  target._t = __WEBPACK_IMPORTED_MODULE_3__render_slot__["a" /* renderSlot */];
  target._q = __WEBPACK_IMPORTED_MODULE_0_shared_util__["u" /* looseEqual */];
  target._i = __WEBPACK_IMPORTED_MODULE_0_shared_util__["v" /* looseIndexOf */];
  target._m = __WEBPACK_IMPORTED_MODULE_7__render_static__["b" /* renderStatic */];
  target._f = __WEBPACK_IMPORTED_MODULE_4__resolve_filter__["a" /* resolveFilter */];
  target._k = __WEBPACK_IMPORTED_MODULE_5__check_keycodes__["a" /* checkKeyCodes */];
  target._b = __WEBPACK_IMPORTED_MODULE_6__bind_object_props__["a" /* bindObjectProps */];
  target._v = __WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__["c" /* createTextVNode */];
  target._e = __WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__["b" /* createEmptyVNode */];
  target._u = __WEBPACK_IMPORTED_MODULE_9__resolve_slots__["a" /* resolveScopedSlots */];
  target._g = __WEBPACK_IMPORTED_MODULE_8__bind_object_listeners__["a" /* bindObjectListeners */];
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = registerComponentHook;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateComponentData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




const RECYCLE_LIST_MARKER = '@inRecycleList';
/* harmony export (immutable) */ __webpack_exports__["a"] = RECYCLE_LIST_MARKER;


function registerComponentHook(componentId, type, hook, fn) {
  if (!document || !document.taskCenter) {
    Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Can't find available "document" or "taskCenter".`);
    return;
  }
  if (typeof document.taskCenter.registerHook === 'function') {
    return document.taskCenter.registerHook(componentId, type, hook, fn);
  }
  Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Failed to register component hook "${type}@${hook}#${componentId}".`);
}

function updateComponentData(componentId, newData, callback) {
  if (!document || !document.taskCenter) {
    Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Can't find available "document" or "taskCenter".`);
    return;
  }
  if (typeof document.taskCenter.updateData === 'function') {
    return document.taskCenter.updateData(componentId, newData, callback);
  }
  Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Failed to update component data (${componentId}).`);
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPatchFunction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_ref__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observer_traverse__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instance_lifecycle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_web_util_element__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_index__ = __webpack_require__(0);












const emptyNode = new __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */]('', {}, []);
/* harmony export (immutable) */ __webpack_exports__["b"] = emptyNode;


const hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(a.data) === Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(b.data) && sameInputType(a, b) || Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') return true;
  let i;
  const typeA = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = a.data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.attrs) && i.type;
  const typeB = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = b.data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.attrs) && i.type;
  return typeA === typeB || Object(__WEBPACK_IMPORTED_MODULE_6_web_util_element__["a" /* isTextInputType */])(typeA) && Object(__WEBPACK_IMPORTED_MODULE_6_web_util_element__["a" /* isTextInputType */])(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  let i, key;
  const map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(key)) map[key] = i;
  }
  return map;
}

function createPatchFunction(backend) {
  let i, j;
  const cbs = {};

  const { modules, nodeOps } = backend;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */](nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove() {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove;
  }

  function removeNode(el) {
    const parent = nodeOps.parentNode(el);

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].ignoredElements.length && __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].ignoredElements.some(ignore => {
      return Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["u" /* isRegExp */])(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].isUnknownElement(vnode.tag);
  }

  let creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.elm) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ownerArray)) {
      vnode = ownerArray[index] = Object(__WEBPACK_IMPORTED_MODULE_0__vnode__["a" /* cloneVNode */])(vnode);
    }

    vnode.isRootInsert = !nested;
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    const data = vnode.data;
    const children = vnode.children;
    const tag = vnode.tag;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement(vnode, creatingElmInVPre)) {
          Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["P" /* warn */])('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      if (false) {
        const appendAsTree = isDef(data) && isTrue(data.appendAsTree);
        if (!appendAsTree) {
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }
        createChildren(vnode, children, insertedVnodeQueue);
        if (appendAsTree) {
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }
      } else {
        createChildren(vnode, children, insertedVnodeQueue);
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    let i = vnode.data;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i)) {
      const isReactivated = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.componentInstance) && i.keepAlive;
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.init)) {
        i(vnode, false, parentElm, refElm);
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_3__modules_ref__["b" /* registerRef */])(vnode);

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    let i;

    let innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = innerNode.data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }

    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(parent)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (let i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["t" /* isPrimitive */])(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (let i = 0; i < cbs.create.length; ++i) {
      cbs.create[i](emptyNode, vnode);
    }
    i = vnode.data.hook;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i.create)) i.create(emptyNode, vnode);
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i.insert)) insertedVnodeQueue.push(vnode);
    }
  }

  function setScope(vnode) {
    let i;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      let ancestor = vnode;
      while (ancestor) {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = ancestor.context) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = __WEBPACK_IMPORTED_MODULE_5__instance_lifecycle__["b" /* activeInstance */]) && i !== vnode.context && i !== vnode.fnContext && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    let i, j;
    const data = vnode.data;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      const ch = vnodes[startIdx];
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ch)) {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(rm) || Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.data)) {
      let i;
      const listeners = cbs.remove.length + 1;
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(rm)) {
        rm.listeners += listeners;
      } else {
        rm = createRmCb(vnode.elm, listeners);
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.componentInstance) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i._vnode) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    const canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx];
      } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(idxInOld)) {
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    const seenKeys = {};
    for (let i = 0; i < children.length; i++) {
      const vnode = children[i];
      const key = vnode.key;
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(key)) {
        if (seenKeys[key]) {
          Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["P" /* warn */])(`Duplicate keys detected: '${key}'. This may cause an update error.`, vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (let i = start; i < end; i++) {
      const c = oldCh[i];
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(c) && sameVnode(node, c)) return i;
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    const elm = vnode.elm = oldVnode.elm;

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(oldVnode.isAsyncPlaceholder)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isStatic) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(oldVnode.isStatic) && vnode.key === oldVnode.key && (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isCloned) || Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    let i;
    const data = vnode.data;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    const oldCh = oldVnode.children;
    const ch = vnode.children;
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.update)) i(oldVnode, vnode);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(vnode.text)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldCh) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
      } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(ch)) {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode.text)) nodeOps.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.postpatch)) i(oldVnode, vnode);
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(initial) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (let i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  let hydrationBailed = false;

  const isRenderedModule = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["B" /* makeMap */])('attrs,class,staticClass,staticStyle,key');

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    let i;
    const { tag, data, children } = vnode;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(vnode.isComment) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data.hook) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.init)) i(vnode, true);
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(tag)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(children)) {
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = data) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.domProps) && Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false;
            }
          } else {
            let childrenMatch = true;
            let childNode = elm.firstChild;
            for (let i = 0; i < children.length; i++) {
              if (!childNode || !hydrate(childNode, children[i], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }

            if (!childrenMatch || childNode) {
              if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(data)) {
        let fullInvoke = false;
        for (const key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
        if (!fullInvoke && data['class']) {
          Object(__WEBPACK_IMPORTED_MODULE_4__observer_traverse__["a" /* traverse */])(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(vnode)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode)) invokeDestroyHook(oldVnode);
      return;
    }

    let isInitialPatch = false;
    const insertedVnodeQueue = [];

    if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["z" /* isUndef */])(oldVnode)) {
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      const isRealElement = Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(__WEBPACK_IMPORTED_MODULE_2_shared_constants__["c" /* SSR_ATTR */])) {
            oldVnode.removeAttribute(__WEBPACK_IMPORTED_MODULE_2_shared_constants__["c" /* SSR_ATTR */]);
            hydrating = true;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["y" /* isTrue */])(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (process.env.NODE_ENV !== 'production') {
              Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["P" /* warn */])('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }

          oldVnode = emptyNodeAt(oldVnode);
        }

        const oldElm = oldVnode.elm;
        const parentElm = nodeOps.parentNode(oldElm);

        createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));

        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(vnode.parent)) {
          let ancestor = vnode.parent;
          const patchable = isPatchable(vnode);
          while (ancestor) {
            for (let i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (let i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, ancestor);
              }

              const insert = ancestor.data.hook.insert;
              if (insert.merged) {
                for (let i = 1; i < insert.fns.length; i++) {
                  insert.fns[i]();
                }
              }
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_3__modules_ref__["b" /* registerRef */])(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["p" /* isDef */])(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = registerRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["a"] = ({
  create(_, vnode) {
    registerRef(vnode);
  },
  update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy(vnode) {
    registerRef(vnode, true);
  }
});

function registerRef(vnode, isRemoval) {
  const key = vnode.data.ref;
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["k" /* isDef */])(key)) return;

  const vm = vnode.context;
  const ref = vnode.componentInstance || vnode.elm;
  const refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["A" /* remove */])(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isUnaryTag */
/* unused harmony export canBeLeftOpenTag */
/* harmony export (immutable) */ __webpack_exports__["e"] = mustUseProp;
/* harmony export (immutable) */ __webpack_exports__["a"] = getTagNamespace;
/* harmony export (immutable) */ __webpack_exports__["d"] = isUnknownElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);


function isUnaryTag(el) {
  return false;
}

function canBeLeftOpenTag(el) {
  return false;
}

function mustUseProp(tag, type, name) {
  return false;
}

const isReservedTag = Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["w" /* makeMap */])('template,script,style,box,button,text,textarea,textinput,window', true);
/* harmony export (immutable) */ __webpack_exports__["c"] = isReservedTag;


function getTagNamespace(tag) {}

function isUnknownElement(tag) {
  return false;
}

const isBooleanAttr = Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["w" /* makeMap */])('visible,enabled,stretchy,margined,padded,horizontal,readonly');
/* harmony export (immutable) */ __webpack_exports__["b"] = isBooleanAttr;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__ = __webpack_require__(23);


class Element {
  constructor(tagName) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = tagName;

    this.childNodes = [];

    this.attributes = this._getDefaultAttributes();
    this.handlers = {};
  }

  appendChild(childNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (childNode.parentNode != null) throw new Error('Child node already has a parent');

    if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__["a" /* TextNode */] && this.childNodes.length > 0) throw new Error('Element cannot contian multiple text nodes');

    childNode.parentNode = this;

    if (this.childNodes.length > 0) {
      const lastChild = this.childNodes[this.childNodes.length - 1];
      childNode.prevSibling = lastChild;
      lastChild.nextSibling = childNode;
    }

    this.childNodes.push(childNode);
  }

  insertBefore(childNode, referenceNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (referenceNode != null && referenceNode.parentNode != this) throw new Error('Reference node has invalid parent');

    if (childNode.parentNode != null) throw new Error('Child node already has a parent');

    if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__["a" /* TextNode */]) throw new Error('Text node cannot be inserted dynamically');

    const index = this.childNodes.indexOf(referenceNode);

    childNode.parentNode = this;
    childNode.nextSibling = referenceNode;
    childNode.prevSibling = this.childNodes[index - 1];

    referenceNode.prevSibling = childNode;
    this.childNodes.splice(index, 0, childNode);

    return index;
  }

  removeChild(childNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (childNode.parentNode != this) throw new Error('Child node has invalid parent');

    if (childNode instanceof __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__["a" /* TextNode */]) throw new Error('Text node cannot be removed dynamically');

    childNode.parentNode = null;

    if (childNode.prevSibling != null) childNode.prevSibling.nextSibling = childNode.nextSibling;

    if (childNode.nextSibling != null) childNode.nextSibling.prevSibling = childNode.prevSibling;

    const index = this.childNodes.indexOf(childNode);

    this.childNodes.splice(index, 1);
  }

  setAttribute(key, value) {
    this.attributes[key] = value;
  }

  addEventListener(event, handler) {
    this.handlers[event] = handler;
  }

  removeEventListener(event) {
    delete this.handlers[event];
  }

  _getDefaultAttributes() {
    return {};
  }

  _setContentText(text) {
    throw new Error(this.tagName + ' cannot contain text nodes');
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Element;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_instance_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_global_api_index__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_instance_lifecycle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patch__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(35);








Object(__WEBPACK_IMPORTED_MODULE_1_core_global_api_index__["a" /* initGlobalAPI */])(__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].version = '2.5.16';

__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].config.mustUseProp = __WEBPACK_IMPORTED_MODULE_4__util__["e" /* mustUseProp */];
__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].config.isReservedTag = __WEBPACK_IMPORTED_MODULE_4__util__["c" /* isReservedTag */];
__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].config.getTagNamespace = __WEBPACK_IMPORTED_MODULE_4__util__["a" /* getTagNamespace */];
__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].config.isUnknownElement = __WEBPACK_IMPORTED_MODULE_4__util__["d" /* isUnknownElement */];

__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].prototype.__patch__ = __WEBPACK_IMPORTED_MODULE_3__patch__["a" /* patch */];

__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */].prototype.$mount = function (el, hydrating) {
  if (el != null) throw new Error('Mount element is not supported');

  Object(__WEBPACK_IMPORTED_MODULE_2_core_instance_lifecycle__["h" /* mountComponent */])(this, el, hydrating);

  if (this.$parent == null && this.$el.widget == null) {
    if (this.$el.tagName != 'Window') throw new Error('Top level element must be a Window');

    this.$el._mountWindow();

    this.$on('hook:destroyed', () => {
      this.$el._destroyWindow();
    });
  }

  return this;
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_core_instance_index__["a" /* default */]);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lifecycle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_index__ = __webpack_require__(0);







function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    Object(__WEBPACK_IMPORTED_MODULE_5__util_index__["P" /* warn */])('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

Object(__WEBPACK_IMPORTED_MODULE_0__init__["b" /* initMixin */])(Vue);
Object(__WEBPACK_IMPORTED_MODULE_1__state__["e" /* stateMixin */])(Vue);
Object(__WEBPACK_IMPORTED_MODULE_3__events__["a" /* eventsMixin */])(Vue);
Object(__WEBPACK_IMPORTED_MODULE_4__lifecycle__["g" /* lifecycleMixin */])(Vue);
Object(__WEBPACK_IMPORTED_MODULE_2__render__["b" /* renderMixin */])(Vue);

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isReserved;
/* harmony export (immutable) */ __webpack_exports__["a"] = def;
/* harmony export (immutable) */ __webpack_exports__["c"] = parsePath;

function isReserved(str) {
  const c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

const bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  const segments = path.split('.');
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeDataOrFn */
/* harmony export (immutable) */ __webpack_exports__["c"] = validateComponentName;
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeOptions;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveAsset;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observer_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shared_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_util__ = __webpack_require__(1);











const strats = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].optionMergeStrategies;

if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`option "${key}" can only be used during instance ` + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

function mergeData(to, from) {
  if (!from) return to;
  let key, toVal, fromVal;
  const keys = Object.keys(from);
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(to, key)) {
      Object(__WEBPACK_IMPORTED_MODULE_3__observer_index__["d" /* set */])(to, key, fromVal);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(toVal) && Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }

    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      const instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      const defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

__WEBPACK_IMPORTED_MODULE_4_shared_constants__["b" /* LIFECYCLE_HOOKS */].forEach(hook => {
  strats[hook] = mergeHook;
});

function mergeAssets(parentVal, childVal, vm, key) {
  const res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])(res, childVal);
  } else {
    return res;
  }
}

__WEBPACK_IMPORTED_MODULE_4_shared_constants__["a" /* ASSET_TYPES */].forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

strats.watch = function (parentVal, childVal, vm, key) {
  if (parentVal === __WEBPACK_IMPORTED_MODULE_2__env__["j" /* nativeWatch */]) parentVal = undefined;
  if (childVal === __WEBPACK_IMPORTED_MODULE_2__env__["j" /* nativeWatch */]) childVal = undefined;

  if (!childVal) return Object.create(parentVal || null);
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) return childVal;
  const ret = {};
  Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])(ret, parentVal);
  for (const key in childVal) {
    let parent = ret[key];
    const child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};

strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) return childVal;
  const ret = Object.create(null);
  Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])(ret, parentVal);
  if (childVal) Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])(ret, childVal);
  return ret;
};
strats.provide = mergeDataOrFn;

const defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

function checkComponents(options) {
  for (const key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["j" /* isBuiltInTag */])(name) || __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isReservedTag(name)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}

function normalizeProps(options, vm) {
  const props = options.props;
  if (!props) return;
  const res = {};
  let i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["c" /* camelize */])(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('props must be strings when using array syntax.');
      }
    }
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(props)) {
    for (const key in props) {
      val = props[key];
      name = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["c" /* camelize */])(key);
      res[name] = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(val) ? val : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`Invalid value for option "props": expected an Array or an Object, ` + `but got ${Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["E" /* toRawType */])(props)}.`, vm);
  }
  options.props = res;
}

function normalizeInject(options, vm) {
  const inject = options.inject;
  if (!inject) return;
  const normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (let i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(inject)) {
    for (const key in inject) {
      const val = inject[key];
      normalized[key] = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(val) ? Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["f" /* extend */])({ from: key }, val) : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`Invalid value for option "inject": expected an Array or an Object, ` + `but got ${Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["E" /* toRawType */])(inject)}.`, vm);
  }
}

function normalizeDirectives(options) {
  const dirs = options.directives;
  if (dirs) {
    for (const key in dirs) {
      const def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["n" /* isPlainObject */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])(`Invalid value for option "${name}": expected an Object, ` + `but got ${Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["E" /* toRawType */])(value)}.`, vm);
  }
}

function mergeOptions(parent, child, vm) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  const extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (let i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  const options = {};
  let key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    const strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

function resolveAsset(options, type, id, warnMissing) {
  if (typeof id !== 'string') {
    return;
  }
  const assets = options[type];

  if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(assets, id)) return assets[id];
  const camelizedId = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["c" /* camelize */])(id);
  if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(assets, camelizedId)) return assets[camelizedId];
  const PascalCaseId = Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["d" /* capitalize */])(camelizedId);
  if (Object(__WEBPACK_IMPORTED_MODULE_5_shared_util__["g" /* hasOwn */])(assets, PascalCaseId)) return assets[PascalCaseId];

  const res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    Object(__WEBPACK_IMPORTED_MODULE_1__debug__["c" /* warn */])('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);




const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayMethods;


const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

methodsToPatch.forEach(function (method) {
  const original = arrayProto[method];
  Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["d" /* def */])(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);

    ob.dep.notify();
    return result;
  });
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateProp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debug__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_util__ = __webpack_require__(1);






function validateProp(key, propOptions, propsData, vm) {
  const prop = propOptions[key];
  const absent = !Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["g" /* hasOwn */])(propsData, key);
  let value = propsData[key];

  const booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["g" /* hasOwn */])(prop, 'default')) {
      value = false;
    } else if (value === '' || value === Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["h" /* hyphenate */])(key)) {
      const stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }

  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);

    const prevShouldObserve = __WEBPACK_IMPORTED_MODULE_1__observer_index__["e" /* shouldObserve */];
    Object(__WEBPACK_IMPORTED_MODULE_1__observer_index__["f" /* toggleObserving */])(true);
    Object(__WEBPACK_IMPORTED_MODULE_1__observer_index__["c" /* observe */])(value);
    Object(__WEBPACK_IMPORTED_MODULE_1__observer_index__["f" /* toggleObserving */])(prevShouldObserve);
  }
  if (process.env.NODE_ENV !== 'production' && !(false && Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["m" /* isObject */])(value) && '@binding' in value)) {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

function getPropDefaultValue(vm, prop, key) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["g" /* hasOwn */])(prop, 'default')) {
    return undefined;
  }
  const def = prop.default;

  if (process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["m" /* isObject */])(def)) {
    Object(__WEBPACK_IMPORTED_MODULE_0__debug__["c" /* warn */])('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }

  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }

  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    Object(__WEBPACK_IMPORTED_MODULE_0__debug__["c" /* warn */])('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  let type = prop.type;
  let valid = !type || type === true;
  const expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (let i = 0; i < type.length && !valid; i++) {
      const assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    Object(__WEBPACK_IMPORTED_MODULE_0__debug__["c" /* warn */])(`Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map(__WEBPACK_IMPORTED_MODULE_2_shared_util__["d" /* capitalize */]).join(', ')}` + `, got ${Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["E" /* toRawType */])(value)}.`, vm);
    return;
  }
  const validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__debug__["c" /* warn */])('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["n" /* isPlainObject */])(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}

function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  for (let i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }
  return -1;
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export withMacroTask */
/* harmony export (immutable) */ __webpack_exports__["a"] = nextTick;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(7);






const callbacks = [];
let pending = false;

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

let microTimerFunc;
let macroTimerFunc;
let useMacroTask = false;

if (typeof setImmediate !== 'undefined' && Object(__WEBPACK_IMPORTED_MODULE_2__env__["h" /* isNative */])(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (Object(__WEBPACK_IMPORTED_MODULE_2__env__["h" /* isNative */])(MessageChannel) || MessageChannel.toString() === '[object MessageChannelConstructor]')) {
  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = () => {
    port.postMessage(1);
  };
} else {
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

if (typeof Promise !== 'undefined' && Object(__WEBPACK_IMPORTED_MODULE_2__env__["h" /* isNative */])(Promise)) {
  const p = Promise.resolve();
  microTimerFunc = () => {
    p.then(flushCallbacks);

    if (__WEBPACK_IMPORTED_MODULE_2__env__["g" /* isIOS */]) setTimeout(__WEBPACK_IMPORTED_MODULE_0_shared_util__["y" /* noop */]);
  };
} else {
  microTimerFunc = macroTimerFunc;
}

function withMacroTask(fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    const res = fn.apply(null, arguments);
    useMacroTask = false;
    return res;
  });
}

function nextTick(cb, ctx) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1__error__["a" /* handleError */])(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }

  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve;
    });
  }
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeVNodeHook;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_listeners__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_util__ = __webpack_require__(1);






function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */]) {
    def = def.data.hook || (def.data.hook = {});
  }
  let invoker;
  const oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);

    Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["A" /* remove */])(invoker.fns, wrappedHook);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["s" /* isUndef */])(oldHook)) {
    invoker = Object(__WEBPACK_IMPORTED_MODULE_1__update_listeners__["a" /* createFnInvoker */])([wrappedHook]);
  } else {
    if (Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["k" /* isDef */])(oldHook.fns) && Object(__WEBPACK_IMPORTED_MODULE_2_shared_util__["r" /* isTrue */])(oldHook.merged)) {
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      invoker = Object(__WEBPACK_IMPORTED_MODULE_1__update_listeners__["a" /* createFnInvoker */])([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extractPropsFromVNodeData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function extractPropsFromVNodeData(data, Ctor, tag) {
  const propOptions = Ctor.options.props;
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(propOptions)) {
    return;
  }
  const res = {};
  const { attrs, props } = data;
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(attrs) || Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(props)) {
    for (const key in propOptions) {
      const altKey = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["n" /* hyphenate */])(key);
      if (process.env.NODE_ENV !== 'production') {
        const keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["k" /* hasOwn */])(attrs, keyInLowerCase)) {
          Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["K" /* tip */])(`Prop "${keyInLowerCase}" is passed to component ` + `${Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["i" /* formatComponentName */])(tag || Ctor)}, but the declared prop name is` + ` "${key}". ` + `Note that HTML attributes are case-insensitive and camelCased ` + `props need to use their kebab-case equivalents when using in-DOM ` + `templates. You should probably use "${altKey}" instead of "${key}".`);
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(hash)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["k" /* hasOwn */])(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["k" /* hasOwn */])(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAsyncPlaceholder;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveAsyncComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__ = __webpack_require__(3);






function ensureCtor(comp, base) {
  if (comp.__esModule || __WEBPACK_IMPORTED_MODULE_0_core_util_index__["m" /* hasSymbol */] && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["r" /* isObject */])(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  const node = Object(__WEBPACK_IMPORTED_MODULE_1_core_vdom_vnode__["b" /* createEmptyVNode */])();
  node.asyncFactory = factory;
  node.asyncMeta = { data, context, children, tag };
  return node;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["y" /* isTrue */])(factory.error) && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.errorComp)) {
    return factory.errorComp;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.resolved)) {
    return factory.resolved;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["y" /* isTrue */])(factory.loading) && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.contexts)) {
    factory.contexts.push(context);
  } else {
    const contexts = factory.contexts = [context];
    let sync = true;

    const forceRender = () => {
      for (let i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    const resolve = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["G" /* once */])(res => {
      factory.resolved = ensureCtor(res, baseCtor);

      if (!sync) {
        forceRender();
      }
    });

    const reject = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["G" /* once */])(reason => {
      process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Failed to resolve async component: ${String(factory)}` + (reason ? `\nReason: ${reason}` : ''));
      if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    const res = factory(resolve, reject);

    if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["r" /* isObject */])(res)) {
      if (typeof res.then === 'function') {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(() => {
              if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(factory.resolved) && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(res.timeout)) {
          setTimeout(() => {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["z" /* isUndef */])(factory.resolved)) {
              reject(process.env.NODE_ENV !== 'production' ? `timeout (${res.timeout}ms)` : null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false;

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFirstComponentChild;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_async_placeholder__ = __webpack_require__(28);





function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["k" /* isDef */])(c) && (Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["k" /* isDef */])(c.componentOptions) || Object(__WEBPACK_IMPORTED_MODULE_1__is_async_placeholder__["a" /* isAsyncPlaceholder */])(c))) {
        return c;
      }
    }
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FunctionalRenderContext */
/* harmony export (immutable) */ __webpack_exports__["a"] = createFunctionalComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_element__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instance_inject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vdom_helpers_normalize_children__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instance_render_helpers_resolve_slots__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instance_render_helpers_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_index__ = __webpack_require__(0);











function FunctionalRenderContext(data, props, children, parent, Ctor) {
  const options = Ctor.options;

  let contextVm;
  if (Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["k" /* hasOwn */])(parent, '_uid')) {
    contextVm = Object.create(parent);

    contextVm._original = parent;
  } else {
    contextVm = parent;

    parent = parent._original;
  }
  const isCompiled = Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["y" /* isTrue */])(options._compiled);
  const needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || __WEBPACK_IMPORTED_MODULE_6__util_index__["g" /* emptyObject */];
  this.injections = Object(__WEBPACK_IMPORTED_MODULE_2__instance_inject__["c" /* resolveInject */])(options.inject, parent);
  this.slots = () => Object(__WEBPACK_IMPORTED_MODULE_4__instance_render_helpers_resolve_slots__["b" /* resolveSlots */])(children, parent);

  if (isCompiled) {
    this.$options = options;

    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || __WEBPACK_IMPORTED_MODULE_6__util_index__["g" /* emptyObject */];
  }

  if (options._scopeId) {
    this._c = (a, b, c, d) => {
      const vnode = Object(__WEBPACK_IMPORTED_MODULE_1__create_element__["a" /* createElement */])(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = (a, b, c, d) => Object(__WEBPACK_IMPORTED_MODULE_1__create_element__["a" /* createElement */])(contextVm, a, b, c, d, needNormalization);
  }
}

Object(__WEBPACK_IMPORTED_MODULE_5__instance_render_helpers_index__["a" /* installRenderHelpers */])(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  const options = Ctor.options;
  const props = {};
  const propOptions = options.props;
  if (Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["p" /* isDef */])(propOptions)) {
    for (const key in propOptions) {
      props[key] = Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["O" /* validateProp */])(key, propOptions, propsData || __WEBPACK_IMPORTED_MODULE_6__util_index__["g" /* emptyObject */]);
    }
  } else {
    if (Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["p" /* isDef */])(data.attrs)) mergeProps(props, data.attrs);
    if (Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["p" /* isDef */])(data.props)) mergeProps(props, data.props);
  }

  const renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

  const vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof __WEBPACK_IMPORTED_MODULE_0__vnode__["d" /* default */]) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
  } else if (Array.isArray(vnode)) {
    const vnodes = Object(__WEBPACK_IMPORTED_MODULE_3__vdom_helpers_normalize_children__["a" /* normalizeChildren */])(vnode) || [];
    const res = new Array(vnodes.length);
    for (let i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
  const clone = Object(__WEBPACK_IMPORTED_MODULE_0__vnode__["a" /* cloneVNode */])(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone;
}

function mergeProps(to, from) {
  for (const key in from) {
    to[Object(__WEBPACK_IMPORTED_MODULE_6__util_index__["c" /* camelize */])(key)] = from[key];
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function renderList(val, render) {
  let ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["r" /* isObject */])(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["p" /* isDef */])(ret)) {
    ret._isVList = true;
  }
  return ret;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderSlot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function renderSlot(name, fallback, props, bindObject) {
  const scopedSlotFn = this.$scopedSlots[name];
  let nodes;
  if (scopedSlotFn) {
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["r" /* isObject */])(bindObject)) {
        Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])('slot v-bind without argument expects an Object', this);
      }
      props = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["h" /* extend */])(Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["h" /* extend */])({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    const slotNodes = this.$slots[name];

    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])(`Duplicate presence of slot "${name}" found in the same render tree ` + `- this will likely cause render errors.`, this);
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  const target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes);
  } else {
    return nodes;
  }
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveFilter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function resolveFilter(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["J" /* resolveAsset */])(this.$options, 'filters', id, true) || __WEBPACK_IMPORTED_MODULE_0_core_util_index__["o" /* identity */];
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkKeyCodes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(1);





function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}

function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  const mappedKeyCode = __WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !__WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["h" /* hyphenate */])(eventKeyName) !== key;
  }
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindObjectProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_util_index__ = __webpack_require__(0);






function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["r" /* isObject */])(value)) {
      process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["P" /* warn */])('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["M" /* toObject */])(value);
      }
      let hash;
      for (const key in value) {
        if (key === 'class' || key === 'style' || Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["w" /* isReservedAttribute */])(key)) {
          hash = data;
        } else {
          const type = data.attrs && data.attrs.type;
          hash = asProp || __WEBPACK_IMPORTED_MODULE_0_core_config__["a" /* default */].mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            const on = data.on || (data.on = {});
            on[`update:${key}`] = function ($event) {
              value[key] = $event;
            };
          }
        }
      }
    }
  }
  return data;
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = renderStatic;
/* harmony export (immutable) */ __webpack_exports__["a"] = markOnce;

function renderStatic(index, isInFor) {
  const cached = this._staticTrees || (this._staticTrees = []);
  let tree = cached[index];

  if (tree && !isInFor) {
    return tree;
  }

  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, `__static__${index}`, false);
  return tree;
}

function markOnce(tree, index, key) {
  markStatic(tree, `__once__${index}${key ? `_${key}` : ``}`, true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], `${key}_${i}`, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindObjectListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);




function bindObjectListeners(data, value) {
  if (value) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["s" /* isPlainObject */])(value)) {
      process.env.NODE_ENV !== 'production' && Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["P" /* warn */])('v-on without argument expects an Object value', this);
    } else {
      const on = data.on = data.on ? Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["h" /* extend */])({}, data.on) : {};
      for (const key in value) {
        const existing = on[key];
        const ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isRecyclableComponent */
/* unused harmony export renderRecyclableComponentTemplate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_debug__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_util_error__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_weex_util_index__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_vdom_create_component__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__virtual_component__ = __webpack_require__(57);








function isRecyclableComponent(vnode) {
  return vnode.data.attrs ? __WEBPACK_IMPORTED_MODULE_2_weex_util_index__["a" /* RECYCLE_LIST_MARKER */] in vnode.data.attrs : false;
}

function renderRecyclableComponentTemplate(vnode) {
  delete vnode.data.attrs[__WEBPACK_IMPORTED_MODULE_2_weex_util_index__["a" /* RECYCLE_LIST_MARKER */]];
  Object(__WEBPACK_IMPORTED_MODULE_4__virtual_component__["a" /* resolveVirtualComponent */])(vnode);
  const vm = Object(__WEBPACK_IMPORTED_MODULE_3_core_vdom_create_component__["b" /* createComponentInstanceForVnode */])(vnode);
  const render = vm.$options['@render'];
  if (render) {
    try {
      return render.call(vm);
    } catch (err) {
      Object(__WEBPACK_IMPORTED_MODULE_1_core_util_error__["a" /* handleError */])(err, vm, `@render`);
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0_core_util_debug__["c" /* warn */])(`@render function not defined on component used in <recycle-list>. ` + `Make sure to declare \`recyclable="true"\` on the component's template.`, vm);
  }
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveVirtualComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_observer_watcher__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_instance_proxy__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_instance_state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_instance_render__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_instance_events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_instance_inject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_instance_init__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_index__ = __webpack_require__(32);













let uid = 0;

function initVirtualComponent(options = {}) {
  const vm = this;
  const componentId = options.componentId;

  vm._uid = `virtual-component-${uid++}`;

  vm._isVue = true;

  if (options && options._isComponent) {
    Object(__WEBPACK_IMPORTED_MODULE_8_core_instance_init__["a" /* initInternalComponent */])(vm, options);
  } else {
    vm.$options = Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["C" /* mergeOptions */])(Object(__WEBPACK_IMPORTED_MODULE_8_core_instance_init__["c" /* resolveConstructorOptions */])(vm.constructor), options || {}, vm);
  }

  if (process.env.NODE_ENV !== 'production') {
    Object(__WEBPACK_IMPORTED_MODULE_2_core_instance_proxy__["a" /* initProxy */])(vm);
  } else {
    vm._renderProxy = vm;
  }

  vm._self = vm;
  Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["e" /* initLifecycle */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_5_core_instance_events__["b" /* initEvents */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_4_core_instance_render__["a" /* initRender */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'beforeCreate');
  Object(__WEBPACK_IMPORTED_MODULE_6_core_instance_inject__["a" /* initInjections */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_3_core_instance_state__["c" /* initState */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_6_core_instance_inject__["b" /* initProvide */])(vm);
  Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'created');

  const data = vm.$options.data;
  const params = typeof data === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_3_core_instance_state__["b" /* getData */])(data, vm) : data || {};
  if (Object(__WEBPACK_IMPORTED_MODULE_0_core_util_index__["s" /* isPlainObject */])(params)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["c" /* updateComponentData */])(componentId, params);
  }

  Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["b" /* registerComponentHook */])(componentId, 'lifecycle', 'attach', () => {
    Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'beforeMount');

    const updateComponent = () => {
      vm._update(vm._vnode, false);
    };
    new __WEBPACK_IMPORTED_MODULE_1_core_observer_watcher__["a" /* default */](vm, updateComponent, __WEBPACK_IMPORTED_MODULE_0_core_util_index__["F" /* noop */], null, true);

    vm._isMounted = true;
    Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'mounted');
  });

  Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["b" /* registerComponentHook */])(componentId, 'lifecycle', 'detach', () => {
    vm.$destroy();
  });
}

function updateVirtualComponent(vnode) {
  const vm = this;
  const componentId = vm.$options.componentId;
  if (vm._isMounted) {
    Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'beforeUpdate');
  }
  vm._vnode = vnode;
  if (vm._isMounted && componentId) {
    const data = Object.assign({}, vm._data);
    Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["c" /* updateComponentData */])(componentId, data, () => {
      Object(__WEBPACK_IMPORTED_MODULE_7_core_instance_lifecycle__["c" /* callHook */])(vm, 'updated');
    });
  }
}

function resolveVirtualComponent(vnode) {
  const BaseCtor = vnode.componentOptions.Ctor;
  const VirtualComponent = BaseCtor.extend({});
  const cid = VirtualComponent.cid;
  VirtualComponent.prototype._init = initVirtualComponent;
  VirtualComponent.prototype._update = updateVirtualComponent;

  vnode.componentOptions.Ctor = BaseCtor.extend({
    beforeCreate() {
      const createVirtualComponent = (componentId, propsData) => {
        new VirtualComponent({
          componentId,
          propsData
        });
      };

      Object(__WEBPACK_IMPORTED_MODULE_9__util_index__["b" /* registerComponentHook */])(cid, 'lifecycle', 'create', createVirtualComponent);
    },
    beforeDestroy() {
      delete this._virtualComponents;
    }
  });
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initGlobalAPI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__use__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extend__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observer_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shared_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_index__ = __webpack_require__(0);













function initGlobalAPI(Vue) {
  const configDef = {};
  configDef.get = () => __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */];
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["P" /* warn */])('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  Vue.util = {
    warn: __WEBPACK_IMPORTED_MODULE_8__util_index__["P" /* warn */],
    extend: __WEBPACK_IMPORTED_MODULE_8__util_index__["h" /* extend */],
    mergeOptions: __WEBPACK_IMPORTED_MODULE_8__util_index__["C" /* mergeOptions */],
    defineReactive: __WEBPACK_IMPORTED_MODULE_8__util_index__["e" /* defineReactive */]
  };

  Vue.set = __WEBPACK_IMPORTED_MODULE_5__observer_index__["d" /* set */];
  Vue.delete = __WEBPACK_IMPORTED_MODULE_5__observer_index__["b" /* del */];
  Vue.nextTick = __WEBPACK_IMPORTED_MODULE_8__util_index__["E" /* nextTick */];

  Vue.options = Object.create(null);
  __WEBPACK_IMPORTED_MODULE_6_shared_constants__["a" /* ASSET_TYPES */].forEach(type => {
    Vue.options[type + 's'] = Object.create(null);
  });

  Vue.options._base = Vue;

  Object(__WEBPACK_IMPORTED_MODULE_8__util_index__["h" /* extend */])(Vue.options.components, __WEBPACK_IMPORTED_MODULE_7__components_index__["a" /* default */]);

  Object(__WEBPACK_IMPORTED_MODULE_1__use__["a" /* initUse */])(Vue);
  Object(__WEBPACK_IMPORTED_MODULE_2__mixin__["a" /* initMixin */])(Vue);
  Object(__WEBPACK_IMPORTED_MODULE_3__extend__["a" /* initExtend */])(Vue);
  Object(__WEBPACK_IMPORTED_MODULE_4__assets__["a" /* initAssetRegisters */])(Vue);
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initUse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);




function initUse(Vue) {
  Vue.use = function (plugin) {
    const installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }

    const args = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["L" /* toArray */])(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);




function initMixin(Vue) {
  Vue.mixin = function (mixin) {
    this.options = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["C" /* mergeOptions */])(this.options, mixin);
    return this;
  };
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initExtend;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instance_state__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index__ = __webpack_require__(0);






function initExtend(Vue) {
  Vue.cid = 0;
  let cid = 1;

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    const Super = this;
    const SuperId = Super.cid;
    const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    const name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["N" /* validateComponentName */])(name);
    }

    const Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["C" /* mergeOptions */])(Super.options, extendOptions);
    Sub['super'] = Super;

    if (Sub.options.props) {
      initProps(Sub);
    }
    if (Sub.options.computed) {
      initComputed(Sub);
    }

    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    __WEBPACK_IMPORTED_MODULE_0_shared_constants__["a" /* ASSET_TYPES */].forEach(function (type) {
      Sub[type] = Super[type];
    });

    if (name) {
      Sub.options.components[name] = Sub;
    }

    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = Object(__WEBPACK_IMPORTED_MODULE_2__util_index__["h" /* extend */])({}, Sub.options);

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps(Comp) {
  const props = Comp.options.props;
  for (const key in props) {
    Object(__WEBPACK_IMPORTED_MODULE_1__instance_state__["d" /* proxy */])(Comp.prototype, `_props`, key);
  }
}

function initComputed(Comp) {
  const computed = Comp.options.computed;
  for (const key in computed) {
    Object(__WEBPACK_IMPORTED_MODULE_1__instance_state__["a" /* defineComputed */])(Comp.prototype, key, computed[key]);
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initAssetRegisters;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);





function initAssetRegisters(Vue) {
  __WEBPACK_IMPORTED_MODULE_0_shared_constants__["a" /* ASSET_TYPES */].forEach(type => {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["N" /* validateComponentName */])(id);
        }
        if (type === 'component' && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["s" /* isPlainObject */])(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keep_alive__ = __webpack_require__(64);


/* harmony default export */ __webpack_exports__["a"] = ({
  KeepAlive: __WEBPACK_IMPORTED_MODULE_0__keep_alive__["a" /* default */]
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_vdom_helpers_index__ = __webpack_require__(11);





function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["p" /* isRegExp */])(pattern)) {
    return pattern.test(name);
  }

  return false;
}

function pruneCache(keepAliveInstance, filter) {
  const { cache, keys, _vnode } = keepAliveInstance;
  for (const key in cache) {
    const cachedNode = cache[key];
    if (cachedNode) {
      const name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  const cached = cache[key];
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy();
  }
  cache[key] = null;
  Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["A" /* remove */])(keys, key);
}

const patternTypes = [String, RegExp, Array];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed() {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted() {
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name));
    });
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name));
    });
  },

  render() {
    const slot = this.$slots.default;
    const vnode = Object(__WEBPACK_IMPORTED_MODULE_1_core_vdom_helpers_index__["c" /* getFirstComponentChild */])(slot);
    const componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      const name = getComponentName(componentOptions);
      const { include, exclude } = this;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        return vnode;
      }

      const { cache, keys } = this;
      const key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '') : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;

        Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["A" /* remove */])(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || slot && slot[0];
  }
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_vdom_modules_index__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_index__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_ops__ = __webpack_require__(72);






const modules = __WEBPACK_IMPORTED_MODULE_2__modules_index__["a" /* default */].concat(__WEBPACK_IMPORTED_MODULE_1_core_vdom_modules_index__["a" /* default */]);

const patch = Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__["a" /* createPatchFunction */])({ nodeOps: __WEBPACK_IMPORTED_MODULE_3__node_ops__, modules });
/* harmony export (immutable) */ __webpack_exports__["a"] = patch;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getTagNamespace */
/* unused harmony export isUnknownElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_util_env__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_util__ = __webpack_require__(1);





const namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
/* unused harmony export namespaceMap */


const isHTMLTag = Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["w" /* makeMap */])('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');
/* unused harmony export isHTMLTag */


const isSVG = Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["w" /* makeMap */])('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
/* unused harmony export isSVG */


const isPreTag = tag => tag === 'pre';
/* unused harmony export isPreTag */


const isReservedTag = tag => {
  return isHTMLTag(tag) || isSVG(tag);
};
/* unused harmony export isReservedTag */


function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }

  if (tag === 'math') {
    return 'math';
  }
}

const unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  if (!__WEBPACK_IMPORTED_MODULE_0_core_util_env__["e" /* inBrowser */]) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  const el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

const isTextInputType = Object(__WEBPACK_IMPORTED_MODULE_1_shared_util__["w" /* makeMap */])('text,number,password,search,email,tel,url');
/* harmony export (immutable) */ __webpack_exports__["a"] = isTextInputType;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ref__ = __webpack_require__(34);



/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_1__ref__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__directives__["a" /* default */]]);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_vdom_helpers_index__ = __webpack_require__(11);






/* harmony default export */ __webpack_exports__["a"] = ({
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__["b" /* emptyNode */]);
  }
});

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  const isCreate = oldVnode === __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__["b" /* emptyNode */];
  const isDestroy = vnode === __WEBPACK_IMPORTED_MODULE_0_core_vdom_patch__["b" /* emptyNode */];
  const oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
  const newDirs = normalizeDirectives(vnode.data.directives, vnode.context);

  const dirsWithInsert = [];
  const dirsWithPostpatch = [];

  let key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      callHook(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      dir.oldValue = oldDir.value;
      callHook(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    const callInsert = () => {
      for (let i = 0; i < dirsWithInsert.length; i++) {
        callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      Object(__WEBPACK_IMPORTED_MODULE_2_core_vdom_helpers_index__["d" /* mergeVNodeHook */])(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    Object(__WEBPACK_IMPORTED_MODULE_2_core_vdom_helpers_index__["d" /* mergeVNodeHook */])(vnode, 'postpatch', () => {
      for (let i = 0; i < dirsWithPostpatch.length; i++) {
        callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

const emptyModifiers = Object.create(null);

function normalizeDirectives(dirs, vm) {
  const res = Object.create(null);
  if (!dirs) {
    return res;
  }
  let i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["J" /* resolveAsset */])(vm.$options, 'directives', dir.name, true);
  }

  return res;
}

function getRawDirName(dir) {
  return dir.rawName || `${dir.name}.${Object.keys(dir.modifiers || {}).join('.')}`;
}

function callHook(dir, hook, vnode, oldVnode, isDestroy) {
  const fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_1_core_util_index__["j" /* handleError */])(e, vnode.context, `directive ${dir.name} ${hook} hook`);
    }
  }
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attrs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(71);



/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__attrs__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */]]);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(35);



function updateAttrs(oldVnode, vnode) {
  if (oldVnode.data.attrs == null && vnode.data.attrs == null) return;

  const elm = vnode.elm;
  const oldAttrs = oldVnode.data.attrs || {};
  let attrs = vnode.data.attrs || {};

  if (attrs.__ob__ != null) attrs = vnode.data.attrs = Object(__WEBPACK_IMPORTED_MODULE_0_shared_util__["f" /* extend */])({}, attrs);

  for (let key in attrs) {
    let cur = attrs[key];
    let old = oldAttrs[key];
    if (old !== cur) setAttr(elm, key, cur);
  }

  for (let key in oldAttrs) {
    if (attrs[key] == null) elm.setAttribute(key, null);
  }
}

function setAttr(elm, key, value) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isBooleanAttr */])(key)) {
    if (value == null || value === false) elm.setAttribute(key, false);else elm.setAttribute(key, true);
  } else {
    elm.setAttribute(key, value);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  create: updateAttrs,
  update: updateAttrs
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_vdom_helpers_update_listeners__ = __webpack_require__(20);


let target = null;

function add(event, handler, once, capture) {
  if (capture) throw new Error('Bubble phase events are not supported');

  if (once) {
    const oldHandler = handler;
    const _target = target;

    handler = function (ev) {
      const res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
      if (res !== null) remove(event, null, null, _target);
    };
  }

  target.addEventListener(event, handler);
}

function remove(event, handler, capture, _target) {
  (_target || target).removeEventListener(event);
}

function updateDOMListeners(oldVnode, vnode) {
  if (oldVnode.data.on == null && vnode.data.on == null) return;

  const on = vnode.data.on || {};
  const oldOn = oldVnode.data.on || {};

  target = vnode.elm;
  Object(__WEBPACK_IMPORTED_MODULE_0_core_vdom_helpers_update_listeners__["b" /* updateListeners */])(on, oldOn, add, remove, vnode.context);
  target = null;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  create: updateDOMListeners,
  update: updateDOMListeners
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createElement"] = createElement;
/* harmony export (immutable) */ __webpack_exports__["createElementNS"] = createElementNS;
/* harmony export (immutable) */ __webpack_exports__["createTextNode"] = createTextNode;
/* harmony export (immutable) */ __webpack_exports__["createComment"] = createComment;
/* harmony export (immutable) */ __webpack_exports__["appendChild"] = appendChild;
/* harmony export (immutable) */ __webpack_exports__["insertBefore"] = insertBefore;
/* harmony export (immutable) */ __webpack_exports__["removeChild"] = removeChild;
/* harmony export (immutable) */ __webpack_exports__["parentNode"] = parentNode;
/* harmony export (immutable) */ __webpack_exports__["nextSibling"] = nextSibling;
/* harmony export (immutable) */ __webpack_exports__["tagName"] = tagName;
/* harmony export (immutable) */ __webpack_exports__["setTextContent"] = setTextContent;
/* harmony export (immutable) */ __webpack_exports__["setAttribute"] = setAttribute;
/* harmony export (immutable) */ __webpack_exports__["setStyleScope"] = setStyleScope;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodes_comment__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements__ = __webpack_require__(74);




function createElement(tagName, vnode) {
  const element = __WEBPACK_IMPORTED_MODULE_2__elements__[tagName];
  if (element == null) throw new Error('Unknown element ' + tagName);
  return new element(tagName);
}

function createElementNS(namespace, tagName) {
  throw new Error('Namespaced elements are not supported');
}

function createTextNode(text) {
  return new __WEBPACK_IMPORTED_MODULE_0__nodes_textnode__["a" /* TextNode */](text);
}

function createComment(text) {
  return new __WEBPACK_IMPORTED_MODULE_1__nodes_comment__["a" /* Comment */](text);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.setText(text);
}

function setAttribute(node, key, value) {
  node.setAttribute(key, value);
}

function setStyleScope(node, scopeId) {
  throw new Error('Scoped styles are not supported');
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Comment {
  constructor(text) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = '';

    this.text = text;
  }

  setText(text) {
    this.text = text;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Comment;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(75);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return __WEBPACK_IMPORTED_MODULE_0__window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__box__ = __webpack_require__(76);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return __WEBPACK_IMPORTED_MODULE_1__box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text__ = __webpack_require__(77);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_2__text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textarea__ = __webpack_require__(78);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return __WEBPACK_IMPORTED_MODULE_3__textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textinput__ = __webpack_require__(79);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return __WEBPACK_IMPORTED_MODULE_4__textinput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button__ = __webpack_require__(80);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_5__button__["a"]; });







/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget__ = __webpack_require__(9);





class Window extends __WEBPACK_IMPORTED_MODULE_1__element__["a" /* Element */] {
  constructor(tagName) {
    super(tagName);

    this.window = null;
  }

  appendChild(childNode) {
    super.appendChild(childNode);

    if (!(childNode instanceof __WEBPACK_IMPORTED_MODULE_2__widget__["a" /* Widget */])) throw new Error('Window can only contain child widgets');

    if (this.childNodes.length > 1) throw new Error('Window can only contain one child element');

    if (this.window != null) throw new Error('Window child element cannot be inserted dynamically');
  }

  insertBefore(childNode, referenceNode) {
    throw new Error('Window child element cannot be inserted dynamically');
  }

  removeChild(childNode) {
    throw new Error('Window child element cannot be removed dynamically');
  }

  setAttribute(key, value) {
    super.setAttribute(key, value);

    if (this.window != null) this._setWindowAttribute(key, value);
  }

  addEventListener(event, handler) {
    super.addEventListener(event, handler);

    if (this.window != null) this._setWindowHandler(event, handler);
  }

  removeEventListener(event) {
    super.removeEventListener(event);

    if (this.window != null) this._setWindowHandler(event, null);
  }

  _getDefaultAttributes() {
    return {
      title: 'Vuido',
      width: 400,
      height: 300,
      menu: false,
      margined: false
    };
  }

  _mountWindow() {
    this.window = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiWindow(this.attributes.title, this.attributes.width, this.attributes.height, this.attributes.menu);

    if (this.attributes.margined) this.window.margined = true;

    for (let key in this.handlers) this._setWindowHandler(key, this.handlers[key]);

    if (this.childNodes.length > 0) {
      this.childNodes[0]._mountWidget();
      this.window.setChild(this.childNodes[0].widget);
    }

    this.window.show();
  }

  _destroyWindow() {
    this.window.close();
    this.window = null;

    this.childNodes = [];
  }

  _setWindowAttribute(key, value) {
    throw new Error('Window does not have attribute ' + key);
  }

  _setWindowHandler(event, handler) {
    if (event == 'close') this.window.onClosing(handler);else throw new Error('Window does not have event ' + event);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Window;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Box extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      horizontal: false,
      padded: false
    });
  }

  _createWidget() {
    if (this.attributes.horizontal) this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiHorizontalBox();else this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiVerticalBox();
  }

  _appendWidget(childNode) {
    this.widget.append(childNode.widget, childNode.attributes.stretchy);
  }

  _removeWidget(childNode) {
    this.widget.deleteAt(childNode.widgetIndex);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.padded) this.widget.padded = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'padded') this.widget.padded = value;else super._setWidgetAttribute(key, value);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Box;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(9);




class Text extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiLabel();
  }

  _setWidgetText(text) {
    this.widget.text = text;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Text;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class TextArea extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: '',
      readonly: false
    });
  }

  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiMultilineEntry();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.value != '') this.widget.text = this.attributes.value;
    if (this.attributes.readonly) this.widget.readOnly = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.text != value) this.widget.text = value;
    } else if (key == 'readonly') {
      this.widget.readOnly = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'input') {
      this.widget.onChanged(() => {
        handler(this.widget.text);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextArea;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class TextInput extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      type: 'text',
      value: '',
      readonly: false
    });
  }

  _createWidget() {
    if (this.attributes.type == 'text') this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiEntry();else if (this.attributes.type == 'password') this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiPasswordEntry();else if (this.attributes.type == 'search') this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiSearchEntry();else throw new Error('Invalid TextInput type ' + this.attributes.type);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.value != '') this.widget.text = this.attributes.value;
    if (this.attributes.readonly) this.widget.readOnly = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.text != value) this.widget.text = value;
    } else if (key == 'readonly') {
      this.widget.readOnly = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'input') {
      this.widget.onChanged(() => {
        handler(this.widget.text);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextInput;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libui_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_libui_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(9);




class Button extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
  _createWidget() {
    this.widget = new __WEBPACK_IMPORTED_MODULE_0_libui_node___default.a.UiButton();
  }

  _setWidgetText(text) {
    this.widget.text = text;
  }

  _setWidgetHandler(event, handler) {
    if (event == 'click') this.widget.onClicked(handler);else super._setWidgetHandler(event, handler);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;


/***/ })
/******/ ])["default"];
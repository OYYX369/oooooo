(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_vendors-C_Users_13303_AppData_Local_Temp_MicrosoftEdgeDownloads_bf72533e-7bda-4a22-9346-44806-52a484"],{

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@umijs\\preset-dumi\\lib\\theme\\context.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@umijs\preset-dumi\lib\theme\context.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
function _react() {
  const data = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
  _react = function _react() {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = _react().default.createContext({
  config: {
    mode: 'doc',
    title: '',
    navs: {},
    menus: {},
    locales: [],
    repository: {
      branch: 'master'
    },
    theme: {}
  },
  meta: {
    title: ''
  },
  menu: [],
  nav: [],
  base: '',
  routes: [],
  apis: {},
  demos: {}
});

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@umijs\\preset-dumi\\lib\\theme\\layout.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@umijs\preset-dumi\lib\theme\layout.js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@umijs\\preset-dumi\\lib\\theme\\context.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * hooks for get meta data of current route
 * @param routes    project route configurations
 * @param pathname  pathname of location
 */
var useCurrentRouteMeta = function useCurrentRouteMeta(routes, pathname) {
  var handler = function handler() {
    var _args$0$find;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var pathWithoutSuffix = args[1].replace(/([^^])\/$/, '$1');
    return _objectSpread(_objectSpread({}, ((_args$0$find = args[0].find(function (_ref) {
      var path = _ref.path;
      return path === pathWithoutSuffix;
    })) === null || _args$0$find === void 0 ? void 0 : _args$0$find.meta) || {}), {}, {
      __pathname: pathname
    });
  };
  var _useState = (0, _react.useState)(handler(routes, pathname)),
    _useState2 = _slicedToArray(_useState, 2),
    meta = _useState2[0],
    setMeta = _useState2[1];
  (0, _react.useLayoutEffect)(function () {
    setMeta(handler(routes, pathname));
  }, [pathname]);
  return meta;
};
/**
 * hooks for get locale from current route
 * @param locales   project locale configurations
 * @param pathname  pathname of location
 */
var useCurrentLocale = function useCurrentLocale(locales, pathname) {
  var handler = function handler() {
    var _args$0$find2;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    // get locale by route prefix
    return ((_args$0$find2 = args[0].find(function (locale) {
      return new RegExp("/".concat(locale.name, "(/|$)")).test(args[1]);
    })) === null || _args$0$find2 === void 0 ? void 0 : _args$0$find2.name) || locales[0].name;
  };
  var _useState3 = (0, _react.useState)(handler(locales, pathname)),
    _useState4 = _slicedToArray(_useState3, 2),
    locale = _useState4[0],
    setLocale = _useState4[1];
  (0, _react.useLayoutEffect)(function () {
    setLocale(handler(locales, pathname));
  }, [pathname]);
  return locale;
};
/**
 * hooks for get menu data of current route
 * @param ctxConfig context config
 * @param locale    locale from current route
 * @param pathname  pathname of location
 */
var useCurrentMenu = function useCurrentMenu(ctxConfig, locale, pathname) {
  var handler = function handler() {
    var _args$0$menus$args$;
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    var navs = args[0].navs[args[1]] || [];
    var navPath = '*';
    // find nav in reverse way to fallback to the first nav
    for (var i = navs.length - 1; i >= 0; i -= 1) {
      var nav = navs[i];
      var items = [nav].concat(nav.children).filter(Boolean);
      var matched = items.find(function (item) {
        return item.path && new RegExp("^".concat(item.path.replace(/\.html$/, ''), "(/|.|$)")).test(args[2]);
      });
      if (matched) {
        navPath = matched.path;
        break;
      }
    }
    return ((_args$0$menus$args$ = args[0].menus[args[1]]) === null || _args$0$menus$args$ === void 0 ? void 0 : _args$0$menus$args$[navPath]) || [];
  };
  var _useState5 = (0, _react.useState)(handler(ctxConfig, locale, pathname)),
    _useState6 = _slicedToArray(_useState5, 2),
    menu = _useState6[0],
    setMenu = _useState6[1];
  (0, _react.useLayoutEffect)(function () {
    setMenu(handler(ctxConfig, locale, pathname));
  }, [ctxConfig.navs, ctxConfig.menus, locale, pathname]);
  return menu;
};
/**
 * hooks for doc base route path
 * @param locale    current locale
 * @param locales   project locale configurations
 * @param route     layout route configurations
 * @note  handle these points:
 *          1. locale prefix, such as empty or /zh-CN
 *          2. integrate mode route prefix, such as /~docs or /~docs/zh-CN
 */
var useCurrentBase = function useCurrentBase(locale, locales, route) {
  var handler = function handler() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    if (args[0] === args[1][0].name) {
      // use layout route path as base in default locale
      return args[2].path;
    }
    // join layout route path & locale prefix in other locale
    return "".concat(route.path, "/").concat(locale).replace(/\/\//, '/');
  };
  var _useState7 = (0, _react.useState)(handler(locale, locales, route)),
    _useState8 = _slicedToArray(_useState7, 2),
    base = _useState8[0],
    setBase = _useState8[1];
  (0, _react.useLayoutEffect)(function () {
    setBase(handler(locale, locales, route));
  }, [locale]);
  return base;
};
var findDumiRoot = function findDumiRoot(routes) {
  var rootRoutes;
  var _iterator = _createForOfIteratorHelper(routes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (item.__dumiRoot) {
        rootRoutes = item.routes;
        break;
      } else if (item.routes && (rootRoutes = findDumiRoot(item.routes))) {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return rootRoutes;
};
/**
 * outer theme layout
 */
var OuterLayout = function OuterLayout(props) {
  var location = props.location,
    route = props.route,
    children = props.children,
    config = props.config,
    apis = props.apis,
    demos = props.demos;
  var pathWithoutPrefix = location.pathname.replace(
  // to avoid stripped the first /
  route.path.replace(/^\/$/, '//'), '');
  var routes = findDumiRoot(props.routes) || [];
  var meta = useCurrentRouteMeta(routes, location.pathname);
  // use non-prefix for detect current locale, such as /~docs/en-US -> /en-US
  var locale = useCurrentLocale(config.locales, pathWithoutPrefix);
  var menu = useCurrentMenu(config, locale, location.pathname);
  var base = useCurrentBase(locale, config.locales, route);
  return /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
    value: {
      config: config,
      meta: meta.__pathname === location.pathname ? meta : {},
      locale: locale,
      nav: config.navs[locale] || [],
      menu: menu,
      base: base,
      routes: routes,
      apis: apis,
      demos: demos
    }
  }, children);
};
var _default = exports.default = OuterLayout;

/***/ })

}]);
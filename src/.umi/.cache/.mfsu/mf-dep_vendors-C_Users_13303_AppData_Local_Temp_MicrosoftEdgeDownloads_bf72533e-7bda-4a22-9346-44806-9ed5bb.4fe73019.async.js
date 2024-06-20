(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_vendors-C_Users_13303_AppData_Local_Temp_MicrosoftEdgeDownloads_bf72533e-7bda-4a22-9346-44806-9ed5bb"],{

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\Dark.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\Dark.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dumi/theme */ "./node_modules/@umijs/preset-dumi/lib/theme/index.js");
/* harmony import */ var _Dark_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dark.less */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\Dark.less");
/* harmony import */ var _Dark_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dark_less__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




;

var Dark = function Dark(_ref) {
  var darkSwitch = _ref.darkSwitch,
      onDarkSwitchClick = _ref.onDarkSwitchClick,
      isSideMenu = _ref.isSideMenu;
  var allState = ['dark', 'light', 'auto'];

  var _usePrefersColor = (0,dumi_theme__WEBPACK_IMPORTED_MODULE_1__.usePrefersColor)(),
      _usePrefersColor2 = _slicedToArray(_usePrefersColor, 2),
      color = _usePrefersColor2[0],
      setColor = _usePrefersColor2[1];

  var prefersColor = color;
  var sunSvg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "4026",
    width: "22",
    height: "22"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z",
    "p-id": "4027"
  }));
  var moonSvg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "3854",
    width: "22",
    height: "22"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z",
    "p-id": "3855"
  }));
  var autoSvg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "11002",
    width: "22",
    height: "22"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z",
    "p-id": "11003"
  }));
  var list = allState.filter(function (state) {
    return state !== prefersColor;
  });

  var changeColor = function changeColor(ev, toColor) {
    if (!isSideMenu && onDarkSwitchClick) {
      onDarkSwitchClick(ev);
    }

    if (toColor === prefersColor) return;
    setColor(toColor);
  };

  var getSvg = function getSvg(baseColor) {
    switch (baseColor) {
      case 'dark':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "dumi-dark-btn-moon",
          title: "Dark theme",
          onClick: function onClick(ev) {
            return changeColor(ev, baseColor);
          },
          className: "__dumi-default-dark-moon ".concat(baseColor === prefersColor ? '__dumi-default-dark-switch-active' : '')
        }, moonSvg);

      case 'light':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "dumi-dark-btn-sun",
          title: "Light theme",
          onClick: function onClick(ev) {
            return changeColor(ev, baseColor);
          },
          className: "__dumi-default-dark-sun ".concat(baseColor === prefersColor ? '__dumi-default-dark-switch-active' : '')
        }, sunSvg);

      case 'auto':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "dumi-dark-btn-auto",
          title: "Default to system",
          onClick: function onClick(ev) {
            return changeColor(ev, baseColor);
          },
          className: "__dumi-default-dark-auto ".concat(baseColor === prefersColor ? '__dumi-default-dark-switch-active' : '')
        }, autoSvg);

      default:
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-dark-switch ".concat(!isSideMenu && darkSwitch ? "__dumi-default-dark-switch-open" : "")
  }, isSideMenu ? allState.map(function (item) {
    return getSvg(item);
  }) : getSvg(prefersColor)), !isSideMenu && darkSwitch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-dark-switch-list"
  }, list.map(function (item) {
    return getSvg(item);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dark);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\LocaleSelect.js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\LocaleSelect.js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var dumi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dumi */ "./src/.umi/core/umiExports.ts");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dumi/theme */ "./node_modules/@umijs/preset-dumi/lib/theme/index.js");
/* harmony import */ var _LocaleSelect_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocaleSelect.less */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\LocaleSelect.less");
/* harmony import */ var _LocaleSelect_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LocaleSelect_less__WEBPACK_IMPORTED_MODULE_2__);
 // @ts-ignore





var LocaleSelect = function LocaleSelect(_ref) {
  var location = _ref.location;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),
      base = _useContext.base,
      locale = _useContext.locale,
      locales = _useContext.config.locales;

  var firstDiffLocale = locales.find(function (_ref2) {
    var name = _ref2.name;
    return name !== locale;
  });

  function getLocaleTogglePath(target) {
    var baseWithoutLocale = base.replace("/".concat(locale), '');
    var pathnameWithoutLocale = location.pathname.replace(new RegExp("^".concat(base, "(/|$)")), "".concat(baseWithoutLocale, "$1")) || '/'; // append locale prefix to path if it is not the default locale

    if (target !== locales[0].name) {
      // compatiable with integrate route prefix /~docs
      var routePrefix = "".concat(baseWithoutLocale, "/").concat(target).replace(/\/\//, '/');
      var pathnameWithoutBase = location.pathname.replace( // to avoid stripped the first /
      base.replace(/^\/$/, '//'), '');
      return "".concat(routePrefix).concat(pathnameWithoutBase).replace(/\/$/, '');
    }

    return pathnameWithoutLocale;
  }

  return firstDiffLocale ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-locale-select",
    "data-locale-count": locales.length
  }, locales.length > 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    value: locale,
    onChange: function onChange(ev) {
      return dumi__WEBPACK_IMPORTED_MODULE_3__.history.push(getLocaleTogglePath(ev.target.value));
    }
  }, locales.map(function (localeItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: localeItem.name,
      key: localeItem.name
    }, localeItem.label);
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: getLocaleTogglePath(firstDiffLocale.name)
  }, firstDiffLocale.label)) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (LocaleSelect);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\Navbar.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\Navbar.js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dumi/theme */ "./node_modules/@umijs/preset-dumi/lib/theme/index.js");
/* harmony import */ var _LocaleSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocaleSelect */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\LocaleSelect.js");
/* harmony import */ var _Navbar_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.less */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\Navbar.less");
/* harmony import */ var _Navbar_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_less__WEBPACK_IMPORTED_MODULE_2__);





var Navbar = function Navbar(_ref) {
  var onMobileMenuClick = _ref.onMobileMenuClick,
      navPrefix = _ref.navPrefix,
      location = _ref.location,
      darkPrefix = _ref.darkPrefix;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),
      base = _useContext.base,
      _useContext$config = _useContext.config,
      mode = _useContext$config.mode,
      title = _useContext$config.title,
      logo = _useContext$config.logo,
      navItems = _useContext.nav;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-navbar",
    "data-mode": mode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "__dumi-default-navbar-toggle",
    onClick: onMobileMenuClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "__dumi-default-navbar-logo",
    style: {
      backgroundImage: logo && "url('".concat(logo, "')")
    },
    to: base,
    "data-plaintext": logo === false || undefined
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, navPrefix, navItems.map(function (nav) {
    var _nav$children;

    var child = Boolean((_nav$children = nav.children) === null || _nav$children === void 0 ? void 0 : _nav$children.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, nav.children.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: item.path
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
        to: item.path
      }, item.title));
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: nav.title || nav.path
    }, nav.path ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: nav.path,
      key: nav.path
    }, nav.title) : nav.title, child);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-navbar-tool"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LocaleSelect__WEBPACK_IMPORTED_MODULE_3__.default, {
    location: location
  }), darkPrefix)));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SearchBar.js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\SearchBar.js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlight": function() { return /* binding */ highlight; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dumi/theme */ "./node_modules/@umijs/preset-dumi/lib/theme/index.js");
/* harmony import */ var _SearchBar_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.less */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SearchBar.less");
/* harmony import */ var _SearchBar_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_less__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var highlight = function highlight(key, title) {
  var index = title.toLowerCase().indexOf(key.toLowerCase());
  var l = key.length;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, title.substring(0, index), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "__dumi-default-search-highlight"
  }, title.substring(index, index + l)), title.substring(index + l, title.length));
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      keywords = _useState2[0],
      setKeywords = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var result = (0,dumi_theme__WEBPACK_IMPORTED_MODULE_1__.useSearch)(keywords);
  var emptySvg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: "__dumi-default-search-empty",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2347",
    width: "32",
    height: "32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (Array.isArray(result)) {
      setItems(result);
    } else if (typeof result === 'function') {
      result(".".concat(input.current.className));
    }
  }, [result]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    className: "__dumi-default-search-input",
    type: "search",
    ref: input
  }, Array.isArray(result) ? {
    value: keywords,
    onChange: function onChange(ev) {
      return setKeywords(ev.target.value);
    }
  } : {})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, items.length > 0 && items.map(function (meta) {
    var _meta$parent;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: meta.path,
      onClick: function onClick() {
        return setKeywords('');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.AnchorLink, {
      to: meta.path
    }, ((_meta$parent = meta.parent) === null || _meta$parent === void 0 ? void 0 : _meta$parent.title) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, meta.parent.title), highlight(keywords, meta.title)));
  }), items.length === 0 && keywords && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: {
      textAlign: 'center'
    }
  }, emptySvg)));
});

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SideMenu.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\SideMenu.js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dumi/theme */ "./node_modules/@umijs/preset-dumi/lib/theme/index.js");
/* harmony import */ var _LocaleSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocaleSelect */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\LocaleSelect.js");
/* harmony import */ var _SlugList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SlugList */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SlugList.js");
/* harmony import */ var _SideMenu_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideMenu.less */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SideMenu.less");
/* harmony import */ var _SideMenu_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideMenu_less__WEBPACK_IMPORTED_MODULE_2__);






var SideMenu = function SideMenu(_ref) {
  var mobileMenuCollapsed = _ref.mobileMenuCollapsed,
      location = _ref.location,
      darkPrefix = _ref.darkPrefix;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),
      _useContext$config = _useContext.config,
      logo = _useContext$config.logo,
      title = _useContext$config.title,
      description = _useContext$config.description,
      mode = _useContext$config.mode,
      repoUrl = _useContext$config.repository.url,
      menu = _useContext.menu,
      navItems = _useContext.nav,
      base = _useContext.base,
      meta = _useContext.meta;

  var isHiddenMenus = Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') || meta.sidemenu === false || undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-menu",
    "data-mode": mode,
    "data-hidden": isHiddenMenus,
    "data-mobile-show": !mobileMenuCollapsed || undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-menu-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-menu-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: base,
    className: "__dumi-default-menu-logo",
    style: {
      backgroundImage: logo && "url('".concat(logo, "')")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, description), /github\.com/.test(repoUrl) && mode === 'doc' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("object", {
    type: "image/svg+xml",
    data: "https://img.shields.io/github/stars".concat(repoUrl.match(/((\/[^\/]+){2})$/)[1], "?style=social")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-menu-mobile-area"
  }, !!navItems.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "__dumi-default-menu-nav-list"
  }, navItems.map(function (nav) {
    var _nav$children;

    var child = Boolean((_nav$children = nav.children) === null || _nav$children === void 0 ? void 0 : _nav$children.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, nav.children.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: item.path || item.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
        to: item.path
      }, item.title));
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: nav.path || nav.title
    }, nav.path ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: nav.path
    }, nav.title) : nav.title, child);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LocaleSelect__WEBPACK_IMPORTED_MODULE_3__.default, {
    location: location
  }), darkPrefix), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "__dumi-default-menu-list"
  }, !isHiddenMenus && menu.map(function (item) {
    var _meta$slugs;

    // always use meta from routes to reduce menu data size
    var hasSlugs = Boolean((_meta$slugs = meta.slugs) === null || _meta$slugs === void 0 ? void 0 : _meta$slugs.length);
    var hasChildren = item.children && Boolean(item.children.length);
    var show1LevelSlugs = meta.toc === 'menu' && !hasChildren && hasSlugs && item.path === location.pathname.replace(/([^^])\/$/, '$1');
    var menuPaths = hasChildren ? item.children.map(function (i) {
      return i.path;
    }) : [item.path, // handle menu group which has no index route and no valid children
    location.pathname.startsWith("".concat(item.path, "/")) && meta.title === item.title ? location.pathname : null];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: item.path || item.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: item.path,
      isActive: function isActive() {
        return menuPaths.includes(location.pathname);
      }
    }, item.title), Boolean(item.children && item.children.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, item.children.map(function (child) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: child.path
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
        to: child.path,
        exact: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, child.title)), Boolean(meta.toc === 'menu' && typeof window !== 'undefined' && child.path === location.pathname && hasSlugs) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SlugList__WEBPACK_IMPORTED_MODULE_4__.default, {
        slugs: meta.slugs
      }));
    })), show1LevelSlugs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SlugList__WEBPACK_IMPORTED_MODULE_4__.default, {
      slugs: meta.slugs
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SlugList.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\SlugList.js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dumi/theme */ "./node_modules/@umijs/preset-dumi/lib/theme/index.js");
/* harmony import */ var _SlugList_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlugList.less */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SlugList.less");
/* harmony import */ var _SlugList_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SlugList_less__WEBPACK_IMPORTED_MODULE_2__);
var _excluded = ["slugs"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var SlugsList = function SlugsList(_ref) {
  var slugs = _ref.slugs,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", _extends({
    role: "slug-list"
  }, props), slugs.filter(function (_ref2) {
    var depth = _ref2.depth;
    return depth > 1 && depth < 4;
  }).map(function (slug) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: slug.heading,
      title: slug.value,
      "data-depth": slug.depth
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.AnchorLink, {
      to: "#".concat(slug.heading)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, slug.value)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SlugsList);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\layout.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\layout.js ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dumi/theme */ "./node_modules/@umijs/preset-dumi/lib/theme/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\Navbar.js");
/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SideMenu */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SideMenu.js");
/* harmony import */ var _components_SlugList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SlugList */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SlugList.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchBar */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SearchBar.js");
/* harmony import */ var _components_Dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Dark */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\Dark.js");
/* harmony import */ var _style_layout_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/layout.less */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\style\\layout.less");
/* harmony import */ var _style_layout_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_layout_less__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Hero = function Hero(hero) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-layout-hero"
  }, hero.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: hero.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, hero.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: hero.desc
    }
  }), hero.actions && hero.actions.map(function (action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: action.link,
      key: action.text
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button"
    }, action.text));
  })));
};

var Features = function Features(features) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-layout-features"
  }, features.map(function (feat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", {
      key: feat.title,
      style: {
        backgroundImage: feat.icon ? "url(".concat(feat.icon, ")") : undefined
      }
    }, feat.link ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: feat.link
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, feat.title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, feat.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      dangerouslySetInnerHTML: {
        __html: feat.desc
      }
    }));
  }));
};

var Layout = function Layout(_ref) {
  var _meta$slugs, _match;

  var children = _ref.children,
      location = _ref.location;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),
      _useContext$config = _useContext.config,
      mode = _useContext$config.mode,
      repository = _useContext$config.repository,
      navItems = _useContext.nav,
      meta = _useContext.meta,
      locale = _useContext.locale;

  var repoUrl = repository.url,
      branch = repository.branch,
      platform = repository.platform;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      menuCollapsed = _useState2[0],
      setMenuCollapsed = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      darkSwitch = _useState4[0],
      setDarkSwitch = _useState4[1];

  var isSiteMode = mode === 'site';
  var showHero = isSiteMode && meta.hero;
  var showFeatures = isSiteMode && meta.features;
  var showSideMenu = meta.sidemenu !== false && !showHero && !showFeatures && !meta.gapless;
  var showSlugs = !showHero && !showFeatures && Boolean((_meta$slugs = meta.slugs) === null || _meta$slugs === void 0 ? void 0 : _meta$slugs.length) && (meta.toc === 'content' || meta.toc === undefined) && !meta.gapless;
  var isCN = /^zh|cn$/i.test(locale);
  var updatedTimeIns = new Date(meta.updatedTime);
  var updatedTime = "".concat(updatedTimeIns.toLocaleDateString([], {
    hour12: false
  }), " ").concat(updatedTimeIns.toLocaleTimeString([], {
    hour12: false
  }));
  var repoPlatform = {
    github: 'GitHub',
    gitlab: 'GitLab'
  }[((_match = (repoUrl || '').match(/(github|gitlab)/)) === null || _match === void 0 ? void 0 : _match[1]) || 'nothing'] || platform;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-layout",
    "data-route": location.pathname,
    "data-show-sidemenu": String(showSideMenu),
    "data-show-slugs": String(showSlugs),
    "data-site-mode": isSiteMode,
    "data-gapless": String(!!meta.gapless),
    onClick: function onClick() {
      setDarkSwitch(false);
      if (menuCollapsed) return;
      setMenuCollapsed(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
    location: location,
    navPrefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.default, null),
    darkPrefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dark__WEBPACK_IMPORTED_MODULE_5__.default, {
      darkSwitch: darkSwitch,
      onDarkSwitchClick: function onDarkSwitchClick(ev) {
        setDarkSwitch(function (val) {
          return !val;
        });
        ev.stopPropagation();
      },
      isSideMenu: false
    }),
    onMobileMenuClick: function onMobileMenuClick(ev) {
      setMenuCollapsed(function (val) {
        return !val;
      });
      ev.stopPropagation();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SideMenu__WEBPACK_IMPORTED_MODULE_6__.default, {
    darkPrefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dark__WEBPACK_IMPORTED_MODULE_5__.default, {
      darkSwitch: darkSwitch,
      isSideMenu: true
    }),
    mobileMenuCollapsed: menuCollapsed,
    location: location
  }), showSlugs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SlugList__WEBPACK_IMPORTED_MODULE_7__.default, {
    slugs: meta.slugs,
    className: "__dumi-default-layout-toc"
  }), showHero && Hero(meta.hero), showFeatures && Features(meta.features), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-layout-content"
  }, children, !showHero && !showFeatures && meta.filePath && !meta.gapless && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-layout-footer-meta"
  }, repoPlatform && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "".concat(repoUrl, "/edit/").concat(branch, "/").concat(meta.filePath)
  }, isCN ? "\u5728 ".concat(repoPlatform, " \u4E0A\u7F16\u8F91\u6B64\u9875") : "Edit this doc on ".concat(repoPlatform)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "data-updated-text": isCN ? '最后更新时间：' : 'Last update: '
  }, updatedTime)), (showHero || showFeatures) && meta.footer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "__dumi-default-layout-footer",
    dangerouslySetInnerHTML: {
      __html: meta.footer
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\Dark.less":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\Dark.less ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\LocaleSelect.less":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\LocaleSelect.less ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\Navbar.less":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\Navbar.less ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SearchBar.less":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\SearchBar.less ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SideMenu.less":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\SideMenu.less ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\components\\SlugList.less":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\components\SlugList.less ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\dumi-theme-default\\es\\style\\layout.less":
/*!**************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\dumi-theme-default\es\style\layout.less ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/antd/es/message/style/index.less":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/message/style/index.less ***!
  \*******************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/antd/es/notification/style/index.less":
/*!************************************************************!*\
  !*** ./node_modules/antd/es/notification/style/index.less ***!
  \************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/antd/es/style/default.less":
/*!*************************************************!*\
  !*** ./node_modules/antd/es/style/default.less ***!
  \*************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/@umijs/plugin-request/lib/ui/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@umijs/plugin-request/lib/ui/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "message", ({
  enumerable: true,
  get: function get() {
    return _message.default;
  }
}));
Object.defineProperty(exports, "notification", ({
  enumerable: true,
  get: function get() {
    return _notification.default;
  }
}));

__webpack_require__(/*! antd/es/message/style */ "./node_modules/antd/es/message/style/index.js");

var _message = _interopRequireDefault(__webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js"));

__webpack_require__(/*! antd/es/notification/style */ "./node_modules/antd/es/notification/style/index.js");

var _notification = _interopRequireDefault(__webpack_require__(/*! antd/es/notification */ "./node_modules/antd/es/notification/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/antd/es/message/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/message/style/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/default.less */ "./node_modules/antd/es/style/default.less");
/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_default_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./node_modules/antd/es/message/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/notification/style/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/notification/style/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/default.less */ "./node_modules/antd/es/style/default.less");
/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_default_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./node_modules/antd/es/notification/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ })

}]);
(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_vendors-C_Users_13303_AppData_Local_Temp_MicrosoftEdgeDownloads_bf72533e-7bda-4a22-9346-44806-29dc6d"],{

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\configContext.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\configContext.js ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
ConfigContext.displayName = 'UseRequestConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (ConfigContext);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\index.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\index.js ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAsync": function() { return /* reexport safe */ _useAsync__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "usePaginated": function() { return /* reexport safe */ _usePaginated__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "useLoadMore": function() { return /* reexport safe */ _useLoadMore__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "UseRequestProvider": function() { return /* binding */ UseRequestProvider; },
/* harmony export */   "UseAPIProvider": function() { return /* binding */ UseAPIProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsync */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\useAsync.js");
/* harmony import */ var _useLoadMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLoadMore */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\useLoadMore.js");
/* harmony import */ var _usePaginated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePaginated */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\usePaginated.js");
/* harmony import */ var _configContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configContext */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\configContext.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};
/* eslint-disable react-hooks/rules-of-hooks */








function useRequest(service, options) {
  if (options === void 0) {
    options = {};
  }

  var contextConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_configContext__WEBPACK_IMPORTED_MODULE_4__.default);

  var finalOptions = __assign(__assign({}, contextConfig), options);

  var paginated = finalOptions.paginated,
      loadMore = finalOptions.loadMore,
      requestMethod = finalOptions.requestMethod;
  var paginatedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(paginated);
  var loadMoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(loadMore);

  if (paginatedRef.current !== paginated) {
    throw Error('You should not modify the paginated of options');
  }

  if (loadMoreRef.current !== loadMore) {
    throw Error('You should not modify the loadMore of options');
  }

  paginatedRef.current = paginated;
  loadMoreRef.current = loadMore; // @ts-ignore

  var fetchProxy = function fetchProxy() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // @ts-ignore


    return fetch.apply(void 0, __spread(args)).then(function (res) {
      if (res.ok) {
        return res.json();
      }

      throw new Error(res.statusText);
    });
  };

  var finalRequestMethod = requestMethod || fetchProxy;
  var promiseService;

  switch (typeof service) {
    case 'string':
      promiseService = function promiseService() {
        return finalRequestMethod(service);
      };

      break;

    case 'object':
      var url_1 = service.url,
          rest_1 = __rest(service, ["url"]);

      promiseService = function promiseService() {
        return requestMethod ? requestMethod(service) : fetchProxy(url_1, rest_1);
      };

      break;

    default:
      promiseService = function promiseService() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return new Promise(function (resolve, reject) {
          var s = service.apply(void 0, __spread(args));
          var fn = s;

          if (!s.then) {
            switch (typeof s) {
              case 'string':
                fn = finalRequestMethod(s);
                break;

              case 'object':
                var url_2 = s.url,
                    rest_2 = __rest(s, ["url"]);

                fn = requestMethod ? requestMethod(s) : fetchProxy(url_2, rest_2);
                break;
            }
          }

          fn.then(resolve)["catch"](reject);
        });
      };

  }

  if (loadMore) {
    return (0,_useLoadMore__WEBPACK_IMPORTED_MODULE_2__.default)(promiseService, finalOptions);
  }

  if (paginated) {
    return (0,_usePaginated__WEBPACK_IMPORTED_MODULE_3__.default)(promiseService, finalOptions);
  }

  return (0,_useAsync__WEBPACK_IMPORTED_MODULE_1__.default)(promiseService, finalOptions);
}

var UseRequestProvider = _configContext__WEBPACK_IMPORTED_MODULE_4__.default.Provider; // UseAPIProvider 已经废弃，此处为了兼容 umijs 插件 plugin-request

var UseAPIProvider = UseRequestProvider;

/* harmony default export */ __webpack_exports__["default"] = (useRequest);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\useAsync.js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\useAsync.js ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\lodash.debounce\\index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\lodash.throttle\\index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\index.js");
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/cache */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\cache.js");
/* harmony import */ var _utils_limit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/limit */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\limit.js");
/* harmony import */ var _utils_usePersistFn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/usePersistFn */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\usePersistFn.js");
/* harmony import */ var _utils_useUpdateEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/useUpdateEffect */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\useUpdateEffect.js");
/* harmony import */ var _utils_windowFocus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/windowFocus */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\windowFocus.js");
/* harmony import */ var _utils_windowVisible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/windowVisible */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\windowVisible.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};











var DEFAULT_KEY = 'AHOOKS_USE_REQUEST_DEFAULT_KEY';

var Fetch =
/** @class */
function () {
  function Fetch(service, config, subscribe, initState) {
    // 请求时序
    this.count = 0; // visible 后，是否继续轮询

    this.pollingWhenVisibleFlag = false;
    this.pollingTimer = undefined;
    this.loadingDelayTimer = undefined;
    this.unsubscribe = [];
    this.that = this;
    this.state = {
      loading: false,
      params: [],
      data: undefined,
      error: undefined,
      run: this.run.bind(this.that),
      mutate: this.mutate.bind(this.that),
      refresh: this.refresh.bind(this.that),
      cancel: this.cancel.bind(this.that),
      unmount: this.unmount.bind(this.that)
    };
    this.service = service;
    this.config = config;
    this.subscribe = subscribe;

    if (initState) {
      this.state = __assign(__assign({}, this.state), initState);
    }

    this.debounceRun = this.config.debounceInterval ? lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this._run, this.config.debounceInterval) : undefined;
    this.throttleRun = this.config.throttleInterval ? lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(this._run, this.config.throttleInterval) : undefined;
    this.limitRefresh = (0,_utils_limit__WEBPACK_IMPORTED_MODULE_5__.default)(this.refresh.bind(this), this.config.focusTimespan);

    if (this.config.pollingInterval) {
      this.unsubscribe.push((0,_utils_windowVisible__WEBPACK_IMPORTED_MODULE_9__.default)(this.rePolling.bind(this)));
    }

    if (this.config.refreshOnWindowFocus) {
      this.unsubscribe.push((0,_utils_windowFocus__WEBPACK_IMPORTED_MODULE_8__.default)(this.limitRefresh.bind(this)));
    }
  }

  Fetch.prototype.setState = function (s) {
    if (s === void 0) {
      s = {};
    }

    this.state = __assign(__assign({}, this.state), s);
    this.subscribe(this.state);
  };

  Fetch.prototype._run = function () {
    var _this = this;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // 取消已有定时器


    if (this.pollingTimer) {
      clearTimeout(this.pollingTimer);
    } // 取消 loadingDelayTimer


    if (this.loadingDelayTimer) {
      clearTimeout(this.loadingDelayTimer);
    }

    this.count += 1; // 闭包存储当次请求的 count

    var currentCount = this.count;
    this.setState({
      loading: !this.config.loadingDelay,
      params: args
    });

    if (this.config.loadingDelay) {
      this.loadingDelayTimer = setTimeout(function () {
        _this.setState({
          loading: true
        });
      }, this.config.loadingDelay);
    }

    return this.service.apply(this, __spread(args)).then(function (res) {
      if (currentCount !== _this.count) {
        // prevent run.then when request is canceled
        return new Promise(function () {});
      }

      if (_this.loadingDelayTimer) {
        clearTimeout(_this.loadingDelayTimer);
      }

      var formattedResult = _this.config.formatResult ? _this.config.formatResult(res) : res;

      _this.setState({
        data: formattedResult,
        error: undefined,
        loading: false
      });

      if (_this.config.onSuccess) {
        _this.config.onSuccess(formattedResult, args);
      }

      return formattedResult;
    })["catch"](function (error) {
      if (currentCount !== _this.count) {
        // prevent run.then when request is canceled
        return new Promise(function () {});
      }

      if (_this.loadingDelayTimer) {
        clearTimeout(_this.loadingDelayTimer);
      }

      _this.setState({
        data: undefined,
        error: error,
        loading: false
      });

      if (_this.config.onError) {
        _this.config.onError(error, args);
      } // If throwOnError, user should catch the error self,
      // or the page will crash


      if (_this.config.throwOnError) {
        throw error;
      }

      console.error(error); // eslint-disable-next-line prefer-promise-reject-errors

      return Promise.reject('useRequest has caught the exception, if you need to handle the exception yourself, you can set options.throwOnError to true.');
    })["finally"](function () {
      if (currentCount === _this.count) {
        if (_this.config.pollingInterval) {
          // 如果屏幕隐藏，并且 !pollingWhenHidden, 则停止轮询，并记录 flag，等 visible 时，继续轮询
          if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isDocumentVisible)() && !_this.config.pollingWhenHidden) {
            _this.pollingWhenVisibleFlag = true;
            return;
          }

          _this.pollingTimer = setTimeout(function () {
            _this._run.apply(_this, __spread(args));
          }, _this.config.pollingInterval);
        }
      }
    });
  };

  Fetch.prototype.run = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (this.debounceRun) {
      this.debounceRun.apply(this, __spread(args)); // TODO 如果 options 存在 debounceInterval，或 throttleInterval，则 run 和 refresh 不会返回 Promise。 带类型需要修复后，此处变成 return;。

      return Promise.resolve(null);
    }

    if (this.throttleRun) {
      this.throttleRun.apply(this, __spread(args));
      return Promise.resolve(null);
    }

    return this._run.apply(this, __spread(args));
  };

  Fetch.prototype.cancel = function () {
    if (this.debounceRun) {
      this.debounceRun.cancel();
    }

    if (this.throttleRun) {
      this.throttleRun.cancel();
    }

    if (this.loadingDelayTimer) {
      clearTimeout(this.loadingDelayTimer);
    }

    if (this.pollingTimer) {
      clearTimeout(this.pollingTimer);
    }

    this.pollingWhenVisibleFlag = false;
    this.count += 1;
    this.setState({
      loading: false
    });
  };

  Fetch.prototype.refresh = function () {
    return this.run.apply(this, __spread(this.state.params));
  };

  Fetch.prototype.rePolling = function () {
    if (this.pollingWhenVisibleFlag) {
      this.pollingWhenVisibleFlag = false;
      this.refresh();
    }
  };

  Fetch.prototype.mutate = function (data) {
    if (typeof data === 'function') {
      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        data: data(this.state.data) || {}
      });
    } else {
      this.setState({
        data: data
      });
    }
  };

  Fetch.prototype.unmount = function () {
    this.cancel();
    this.unsubscribe.forEach(function (s) {
      s();
    });
  };

  return Fetch;
}();

function useAsync(service, options) {
  var _options = options || {};

  var _a = _options.refreshDeps,
      refreshDeps = _a === void 0 ? [] : _a,
      _b = _options.manual,
      manual = _b === void 0 ? false : _b,
      _c = _options.onSuccess,
      onSuccess = _c === void 0 ? function () {} : _c,
      _d = _options.onError,
      onError = _d === void 0 ? function () {} : _d,
      _e = _options.defaultLoading,
      defaultLoading = _e === void 0 ? false : _e,
      loadingDelay = _options.loadingDelay,
      _f = _options.pollingInterval,
      pollingInterval = _f === void 0 ? 0 : _f,
      _g = _options.pollingWhenHidden,
      pollingWhenHidden = _g === void 0 ? true : _g,
      _h = _options.defaultParams,
      defaultParams = _h === void 0 ? [] : _h,
      _j = _options.refreshOnWindowFocus,
      refreshOnWindowFocus = _j === void 0 ? false : _j,
      _k = _options.focusTimespan,
      focusTimespan = _k === void 0 ? 5000 : _k,
      fetchKey = _options.fetchKey,
      cacheKey = _options.cacheKey,
      _l = _options.cacheTime,
      cacheTime = _l === void 0 ? 5 * 60 * 1000 : _l,
      _m = _options.staleTime,
      staleTime = _m === void 0 ? 0 : _m,
      debounceInterval = _options.debounceInterval,
      throttleInterval = _options.throttleInterval,
      initialData = _options.initialData,
      _o = _options.ready,
      ready = _o === void 0 ? true : _o,
      _p = _options.throwOnError,
      throwOnError = _p === void 0 ? false : _p;
  var newstFetchKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(DEFAULT_KEY); // 持久化一些函数

  var servicePersist = (0,_utils_usePersistFn__WEBPACK_IMPORTED_MODULE_6__.default)(service);
  var onSuccessPersist = (0,_utils_usePersistFn__WEBPACK_IMPORTED_MODULE_6__.default)(onSuccess);
  var onErrorPersist = (0,_utils_usePersistFn__WEBPACK_IMPORTED_MODULE_6__.default)(onError);
  var fetchKeyPersist = (0,_utils_usePersistFn__WEBPACK_IMPORTED_MODULE_6__.default)(fetchKey);
  var formatResult;

  if ('formatResult' in _options) {
    // eslint-disable-next-line prefer-destructuring
    formatResult = _options.formatResult;
  }

  var formatResultPersist = (0,_utils_usePersistFn__WEBPACK_IMPORTED_MODULE_6__.default)(formatResult);
  var config = {
    formatResult: formatResultPersist,
    onSuccess: onSuccessPersist,
    onError: onErrorPersist,
    loadingDelay: loadingDelay,
    pollingInterval: pollingInterval,
    pollingWhenHidden: pollingWhenHidden,
    // refreshOnWindowFocus should not work on manual mode
    refreshOnWindowFocus: !manual && refreshOnWindowFocus,
    focusTimespan: focusTimespan,
    debounceInterval: debounceInterval,
    throttleInterval: throttleInterval,
    throwOnError: throwOnError
  };
  var subscribe = (0,_utils_usePersistFn__WEBPACK_IMPORTED_MODULE_6__.default)(function (key, data) {
    setFetches(function (s) {
      // eslint-disable-next-line no-param-reassign
      s[key] = data;
      return __assign({}, s);
    });
  });

  var _q = __read((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(function () {
    var _a; // 如果有 缓存，则从缓存中读数据


    if (cacheKey) {
      var cacheData_1 = (_a = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_4__.getCache)(cacheKey)) === null || _a === void 0 ? void 0 : _a.data;

      if (cacheData_1) {
        newstFetchKey.current = cacheData_1.newstFetchKey;
        /* 使用 initState, 重新 new Fetch */

        var newFetches_1 = {};
        Object.keys(cacheData_1.fetches).forEach(function (key) {
          var cacheFetch = cacheData_1.fetches[key];
          var newFetch = new Fetch(servicePersist, config, subscribe.bind(null, key), {
            loading: cacheFetch.loading,
            params: cacheFetch.params,
            data: cacheFetch.data,
            error: cacheFetch.error
          });
          newFetches_1[key] = newFetch.state;
        });
        return newFetches_1;
      }
    }

    return {};
  }), 2),
      fetches = _q[0],
      setFetches = _q[1];

  var fetchesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(fetches);
  fetchesRef.current = fetches;
  var readyMemoryParams = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var run = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!ready) {
      // 没有 ready, 记录请求参数，等 ready 后，发起请求用
      readyMemoryParams.current = args;
      return;
    }

    if (fetchKeyPersist) {
      var key = fetchKeyPersist.apply(void 0, __spread(args));
      newstFetchKey.current = key === undefined ? DEFAULT_KEY : key;
    }

    var currentFetchKey = newstFetchKey.current; // 这里必须用 fetchsRef，而不能用 fetches。
    // 否则在 reset 完，立即 run 的时候，这里拿到的 fetches 是旧的。

    var currentFetch = fetchesRef.current[currentFetchKey];

    if (!currentFetch) {
      var newFetch = new Fetch(servicePersist, config, subscribe.bind(null, currentFetchKey), {
        data: initialData
      });
      currentFetch = newFetch.state;
      setFetches(function (s) {
        // eslint-disable-next-line no-param-reassign
        s[currentFetchKey] = currentFetch;
        return __assign({}, s);
      });
    }

    return currentFetch.run.apply(currentFetch, __spread(args));
  }, [fetchKey, subscribe, ready]);
  var runRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(run);
  runRef.current = run; // cache

  (0,_utils_useUpdateEffect__WEBPACK_IMPORTED_MODULE_7__.default)(function () {
    if (cacheKey) {
      (0,_utils_cache__WEBPACK_IMPORTED_MODULE_4__.setCache)(cacheKey, cacheTime, {
        fetches: fetches,
        newstFetchKey: newstFetchKey.current
      });
    }
  }, [cacheKey, fetches]); // for ready

  var hasTriggeredByReady = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  (0,_utils_useUpdateEffect__WEBPACK_IMPORTED_MODULE_7__.default)(function () {
    if (ready) {
      if (!hasTriggeredByReady.current && readyMemoryParams.current) {
        runRef.current.apply(runRef, __spread(readyMemoryParams.current));
      }

      hasTriggeredByReady.current = true;
    }
  }, [ready]); // 第一次默认执行

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _a;

    if (!manual) {
      // 如果有缓存，则重新请求
      if (Object.keys(fetches).length > 0) {
        // 如果 staleTime 是 -1，则 cache 永不过期
        // 如果 statleTime 超期了，则重新请求
        var cacheStartTime = cacheKey && ((_a = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_4__.getCache)(cacheKey)) === null || _a === void 0 ? void 0 : _a.startTime) || 0;

        if (!(staleTime === -1 || new Date().getTime() - cacheStartTime <= staleTime)) {
          /* 重新执行所有的 cache */
          Object.values(fetches).forEach(function (f) {
            f.refresh();
          });
        }
      } else {
        // 第一次默认执行，可以通过 defaultParams 设置参数
        runRef.current.apply(runRef, __spread(defaultParams));
      }
    }
  }, []); // 重置 fetches

  var reset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    Object.values(fetchesRef.current).forEach(function (f) {
      f.unmount();
    });
    newstFetchKey.current = DEFAULT_KEY;
    setFetches({}); // 不写会有问题。如果不写，此时立即 run，会是老的数据

    fetchesRef.current = {};
  }, [setFetches]); //  refreshDeps 变化，重新执行所有请求

  (0,_utils_useUpdateEffect__WEBPACK_IMPORTED_MODULE_7__.default)(function () {
    if (!manual) {
      /* 全部重新执行 */
      Object.values(fetchesRef.current).forEach(function (f) {
        f.refresh();
      });
    }
  }, __spread(refreshDeps)); // 卸载组件触发

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return function () {
      Object.values(fetchesRef.current).forEach(function (f) {
        f.unmount();
      });
    };
  }, []);
  var notExecutedWarning = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (name) {
    return function () {
      console.warn("You should't call " + name + " when service not executed once.");
    };
  }, []);
  return __assign(__assign({
    loading: ready && !manual || defaultLoading,
    data: initialData,
    error: undefined,
    params: [],
    cancel: notExecutedWarning('cancel'),
    refresh: notExecutedWarning('refresh'),
    mutate: notExecutedWarning('mutate')
  }, fetches[newstFetchKey.current] || {}), {
    run: run,
    fetches: fetches,
    reset: reset
  });
}

/* harmony default export */ __webpack_exports__["default"] = (useAsync);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\useLoadMore.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\useLoadMore.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsync */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\useAsync.js");
/* harmony import */ var _utils_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/useUpdateEffect */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\useUpdateEffect.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};





function useLoadMore(service, options) {
  var _a = options.refreshDeps,
      refreshDeps = _a === void 0 ? [] : _a,
      ref = options.ref,
      isNoMore = options.isNoMore,
      _b = options.threshold,
      threshold = _b === void 0 ? 100 : _b,
      fetchKey = options.fetchKey,
      restOptions = __rest(options, ["refreshDeps", "ref", "isNoMore", "threshold", "fetchKey"]);

  var _c = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
      loadingMore = _c[0],
      setLoadingMore = _c[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (options.fetchKey) {
      console.warn("useRequest loadMore mode don't need fetchKey!");
    }
  }, []);
  var result = (0,_useAsync__WEBPACK_IMPORTED_MODULE_1__.default)(service, __assign(__assign({}, restOptions), {
    fetchKey: function fetchKey(d) {
      var _a;

      return ((_a = d === null || d === void 0 ? void 0 : d.list) === null || _a === void 0 ? void 0 : _a.length) || 0;
    },
    onSuccess: function onSuccess() {
      var params = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
      }

      setLoadingMore(false);

      if (options.onSuccess) {
        options.onSuccess.apply(options, __spread(params));
      }
    }
  }));
  var data = result.data,
      run = result.run,
      params = result.params,
      reset = result.reset,
      loading = result.loading,
      fetches = result.fetches;
  var reload = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    reset();

    var _a = __read(params),
        restParams = _a.slice(1);

    run.apply(void 0, __spread([undefined], restParams));
  }, [run, reset, params]);
  var reloadRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(reload);
  reloadRef.current = reload;
  /* loadMore 场景下，如果 refreshDeps 变化，重置到第一页 */

  (0,_utils_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__.default)(function () {
    /* 只有自动执行的场景， refreshDeps 才有效 */
    if (!options.manual) {
      reloadRef.current();
    }
  }, __spread(refreshDeps));
  var dataGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var listGroup = []; // 在 loadMore 时，不希望清空上一次的 data。需要把最后一个 非 loading 的请求 data，放回去。

    var lastNoLoadingData = data;
    Object.values(fetches).forEach(function (h) {
      var _a, _b;

      if ((_a = h.data) === null || _a === void 0 ? void 0 : _a.list) {
        listGroup = listGroup.concat((_b = h.data) === null || _b === void 0 ? void 0 : _b.list);
      }

      if (!h.loading) {
        lastNoLoadingData = h.data;
      }
    });
    return __assign(__assign({}, lastNoLoadingData), {
      list: listGroup
    });
  }, [fetches, data]);
  var noMore = isNoMore ? !loading && !loadingMore && isNoMore(dataGroup) : false;
  var loadMore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (noMore) {
      return;
    }

    setLoadingMore(true);

    var _a = __read(params),
        restParams = _a.slice(1);

    run.apply(void 0, __spread([dataGroup], restParams));
  }, [noMore, run, dataGroup, params]);
  /* 上拉加载的方法 */

  var scrollMethod = function scrollMethod() {
    if (loading || loadingMore || !ref || !ref.current) {
      return;
    }

    if (ref.current.scrollHeight - ref.current.scrollTop <= ref.current.clientHeight + threshold) {
      loadMore();
    }
  }; // 如果不用 ref，而用之前的 useCallbak，在某些情况下会出问题，造成拿到的 loading 不是最新的。
  // fix https://github.com/alibaba/hooks/issues/630


  var scrollMethodRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(scrollMethod);
  scrollMethodRef.current = scrollMethod;
  /* 如果有 ref，则会上拉加载更多 */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!ref || !ref.current) {
      return function () {};
    }

    var scrollTrigger = function scrollTrigger() {
      return scrollMethodRef.current();
    };

    ref.current.addEventListener('scroll', scrollTrigger);
    return function () {
      if (ref && ref.current) {
        ref.current.removeEventListener('scroll', scrollTrigger);
      }
    };
  }, [scrollMethodRef]);
  return __assign(__assign({}, result), {
    data: dataGroup,
    reload: reload,
    loading: loading && dataGroup.list.length === 0,
    loadMore: loadMore,
    loadingMore: loadingMore,
    noMore: noMore
  });
}

/* harmony default export */ __webpack_exports__["default"] = (useLoadMore);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\usePaginated.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\usePaginated.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsync */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\useAsync.js");
/* harmony import */ var _utils_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/useUpdateEffect */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\useUpdateEffect.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};





function usePaginated(service, options) {
  var paginated = options.paginated,
      _a = options.defaultPageSize,
      defaultPageSize = _a === void 0 ? 10 : _a,
      _b = options.refreshDeps,
      refreshDeps = _b === void 0 ? [] : _b,
      fetchKey = options.fetchKey,
      restOptions = __rest(options, ["paginated", "defaultPageSize", "refreshDeps", "fetchKey"]);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (fetchKey) {
      console.error("useRequest pagination's fetchKey will not work!");
    }
  }, []);

  var _c = (0,_useAsync__WEBPACK_IMPORTED_MODULE_1__.default)(service, __assign({
    defaultParams: [{
      current: 1,
      pageSize: defaultPageSize
    }]
  }, restOptions)),
      data = _c.data,
      params = _c.params,
      run = _c.run,
      loading = _c.loading,
      rest = __rest(_c, ["data", "params", "run", "loading"]);

  var _d = params && params[0] ? params[0] : {},
      _e = _d.current,
      current = _e === void 0 ? 1 : _e,
      _f = _d.pageSize,
      pageSize = _f === void 0 ? defaultPageSize : _f,
      _g = _d.sorter,
      sorter = _g === void 0 ? {} : _g,
      _h = _d.filters,
      filters = _h === void 0 ? {} : _h; // 只改变 pagination，其他参数原样传递


  var runChangePagination = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (paginationParams) {
    var _a = __read(params),
        oldPaginationParams = _a[0],
        restParams = _a.slice(1);

    run.apply(void 0, __spread([__assign(__assign({}, oldPaginationParams), paginationParams)], restParams));
  }, [run, params]);
  var total = (data === null || data === void 0 ? void 0 : data.total) || 0;
  var totalPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);
  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (c, p) {
    var toCurrent = c <= 0 ? 1 : c;
    var toPageSize = p <= 0 ? 1 : p;
    var tempTotalPage = Math.ceil(total / toPageSize);

    if (toCurrent > tempTotalPage) {
      toCurrent = Math.max(1, tempTotalPage);
    }

    runChangePagination({
      current: toCurrent,
      pageSize: toPageSize
    });
  }, [total, runChangePagination]);
  var changeCurrent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (c) {
    onChange(c, pageSize);
  }, [onChange, pageSize]);
  var changePageSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (p) {
    onChange(current, p);
  }, [onChange, current]);
  var changeCurrentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(changeCurrent);
  changeCurrentRef.current = changeCurrent;
  /* 分页场景下，如果 refreshDeps 变化，重置分页 */

  (0,_utils_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__.default)(function () {
    /* 只有自动执行的场景， refreshDeps 才有效 */
    if (!options.manual) {
      changeCurrentRef.current(1);
    }
  }, __spread(refreshDeps)); // 表格翻页 排序 筛选等

  var changeTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (p, f, s) {
    runChangePagination({
      current: p.current,
      pageSize: p.pageSize || defaultPageSize,
      filters: f,
      sorter: s
    });
  }, [filters, sorter, runChangePagination]);
  return __assign({
    loading: loading,
    data: data,
    params: params,
    run: run,
    pagination: {
      current: current,
      pageSize: pageSize,
      total: total,
      totalPage: totalPage,
      onChange: onChange,
      changeCurrent: changeCurrent,
      changePageSize: changePageSize
    },
    tableProps: {
      dataSource: (data === null || data === void 0 ? void 0 : data.list) || [],
      loading: loading,
      onChange: changeTable,
      pagination: {
        current: current,
        pageSize: pageSize,
        total: total
      }
    },
    sorter: sorter,
    filters: filters
  }, rest);
}

/* harmony default export */ __webpack_exports__["default"] = (usePaginated);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\cache.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\utils\cache.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCache": function() { return /* binding */ getCache; },
/* harmony export */   "setCache": function() { return /* binding */ setCache; }
/* harmony export */ });
var cache = new Map();

var setCache = function setCache(key, cacheTime, data) {
  var currentCache = cache.get(key);

  if (currentCache === null || currentCache === void 0 ? void 0 : currentCache.timer) {
    clearTimeout(currentCache.timer);
  }

  var timer = undefined;

  if (cacheTime > -1) {
    // 数据在不活跃 cacheTime 后，删除掉
    timer = setTimeout(function () {
      cache["delete"](key);
    }, cacheTime);
  }

  cache.set(key, {
    data: data,
    timer: timer,
    startTime: new Date().getTime()
  });
};

var getCache = function getCache(key) {
  var currentCache = cache.get(key);
  return {
    data: currentCache === null || currentCache === void 0 ? void 0 : currentCache.data,
    startTime: currentCache === null || currentCache === void 0 ? void 0 : currentCache.startTime
  };
};



/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\index.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\utils\index.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDocumentVisible": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isDocumentVisible; },
/* harmony export */   "isOnline": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isOnline; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\utils.js");


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\limit.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\utils\limit.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ limit; }
/* harmony export */ });
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

function limit(fn, timespan) {
  var pending = false;
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (pending) return;
    pending = true;
    fn.apply(void 0, __spread(args));
    setTimeout(function () {
      pending = false;
    }, timespan);
  };
}

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\usePersistFn.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\utils\usePersistFn.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};



function usePersistFn(fn) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () {
    throw new Error('Cannot call an event handler while rendering.');
  });
  ref.current = fn;
  var persist = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var refFn = ref.current;

    if (refFn) {
      return refFn.apply(void 0, __spread(args));
    }
  }, [ref]);

  if (typeof fn === 'function') {
    return persist;
  }

  return undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (usePersistFn);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\useUpdateEffect.js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\utils\useUpdateEffect.js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

/* harmony default export */ __webpack_exports__["default"] = (useUpdateEffect);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\utils.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\utils\utils.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDocumentVisible": function() { return /* binding */ isDocumentVisible; },
/* harmony export */   "isOnline": function() { return /* binding */ isOnline; }
/* harmony export */ });
function isDocumentVisible() {
  if (typeof document !== 'undefined' && typeof document.visibilityState !== 'undefined') {
    return document.visibilityState !== 'hidden';
  }

  return true;
}
function isOnline() {
  if (typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  }

  return true;
}

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\windowFocus.js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\utils\windowFocus.js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\utils.js");
// from swr

var listeners = [];

function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

var eventsBinded = false;

if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
  var revalidate = function revalidate() {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isDocumentVisible)() || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isOnline)()) return;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };

  window.addEventListener('visibilitychange', revalidate, false);
  window.addEventListener('focus', revalidate, false); // only bind the events once

  eventsBinded = true;
}

/* harmony default export */ __webpack_exports__["default"] = (subscribe);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\windowVisible.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\@ahooksjs\use-request\es\utils\windowVisible.js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\@ahooksjs\\use-request\\es\\utils\\utils.js");
// from swr

var listeners = [];

function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

var eventsBinded = false;

if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
  var revalidate = function revalidate() {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isDocumentVisible)()) return;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };

  window.addEventListener('visibilitychange', revalidate, false); // only bind the events once

  eventsBinded = true;
}

/* harmony default export */ __webpack_exports__["default"] = (subscribe);

/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\lodash.debounce\\index.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\lodash.debounce\index.js ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\lodash.throttle\\index.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\lodash.throttle\index.js ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ })

}]);
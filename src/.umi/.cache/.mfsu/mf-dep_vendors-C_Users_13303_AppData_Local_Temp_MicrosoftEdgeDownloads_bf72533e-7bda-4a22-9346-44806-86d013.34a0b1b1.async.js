(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_vendors-C_Users_13303_AppData_Local_Temp_MicrosoftEdgeDownloads_bf72533e-7bda-4a22-9346-44806-86d013"],{

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\call-bind\\callBound.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\call-bind\callBound.js ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\get-intrinsic\\index.js");

var callBind = __webpack_require__(/*! ./ */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\call-bind\\index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\call-bind\\index.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\call-bind\index.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\function-bind\\index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\get-intrinsic\\index.js");
var setFunctionLength = __webpack_require__(/*! set-function-length */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\set-function-length\\index.js");

var $TypeError = __webpack_require__(/*! es-errors/type */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\type.js");
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = __webpack_require__(/*! es-define-property */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-define-property\\index.js");
var $max = GetIntrinsic('%Math.max%');

module.exports = function callBind(originalFunction) {
	if (typeof originalFunction !== 'function') {
		throw new $TypeError('a function is required');
	}
	var func = $reflectApply(bind, $call, arguments);
	return setFunctionLength(
		func,
		1 + $max(0, originalFunction.length - (arguments.length - 1)),
		true
	);
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\define-data-property\\index.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\define-data-property\index.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! es-define-property */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-define-property\\index.js");

var $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\syntax.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\type.js");

var gopd = __webpack_require__(/*! gopd */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\gopd\\index.js");

/** @type {import('.')} */
module.exports = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty) {
		$defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-define-property\\index.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\es-define-property\index.js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\get-intrinsic\\index.js");

/** @type {import('.')} */
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true) || false;
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

module.exports = $defineProperty;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\eval.js":
/*!****************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\es-errors\eval.js ***!
  \****************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./eval')} */
module.exports = EvalError;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\index.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\es-errors\index.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
module.exports = Error;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\range.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\es-errors\range.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./range')} */
module.exports = RangeError;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\ref.js":
/*!***************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\es-errors\ref.js ***!
  \***************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./ref')} */
module.exports = ReferenceError;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\syntax.js":
/*!******************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\es-errors\syntax.js ***!
  \******************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./syntax')} */
module.exports = SyntaxError;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\type.js":
/*!****************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\es-errors\type.js ***!
  \****************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./type')} */
module.exports = TypeError;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\uri.js":
/*!***************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\es-errors\uri.js ***!
  \***************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./uri')} */
module.exports = URIError;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\function-bind\\implementation.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\function-bind\implementation.js ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\function-bind\\index.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\function-bind\index.js ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\function-bind\\implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\get-intrinsic\\index.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\get-intrinsic\index.js ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $Error = __webpack_require__(/*! es-errors */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\index.js");
var $EvalError = __webpack_require__(/*! es-errors/eval */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\eval.js");
var $RangeError = __webpack_require__(/*! es-errors/range */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\range.js");
var $ReferenceError = __webpack_require__(/*! es-errors/ref */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\ref.js");
var $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\syntax.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\type.js");
var $URIError = __webpack_require__(/*! es-errors/uri */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\uri.js");

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\has-symbols\\index.js")();
var hasProto = __webpack_require__(/*! has-proto */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\has-proto\\index.js")();

var getProto = Object.getPrototypeOf || (
	hasProto
		? function (x) { return x.__proto__; } // eslint-disable-line no-proto
		: null
);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\function-bind\\index.js");
var hasOwn = __webpack_require__(/*! hasown */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\hasown\\index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\gopd\\index.js":
/*!************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\gopd\index.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\get-intrinsic\\index.js");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\has-property-descriptors\\index.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\has-property-descriptors\index.js ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! es-define-property */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-define-property\\index.js");

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	return !!$defineProperty;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!$defineProperty) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\has-proto\\index.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\has-proto\index.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


var test = {
	__proto__: null,
	foo: {}
};

var $Object = Object;

/** @type {import('.')} */
module.exports = function hasProto() {
	// @ts-expect-error: TS errors on an inherited property for some reason
	return { __proto__: test }.foo === test.foo
		&& !(test instanceof $Object);
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\has-symbols\\index.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\has-symbols\index.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\has-symbols\\shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\has-symbols\\shams.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\has-symbols\shams.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\hasown\\index.js":
/*!**************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\hasown\index.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __webpack_require__(/*! function-bind */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\function-bind\\index.js");

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\isomorphic-fetch\\fetch-npm-browserify.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\isomorphic-fetch\fetch-npm-browserify.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\whatwg-fetch\\fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\object-inspect\\index.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\object-inspect\index.js ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = __webpack_require__(/*! ./util.inspect */ "?150b");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */
    if (typeof window !== 'undefined' && obj === window) {
        return '{ [object Window] }';
    }
    if (obj === __webpack_require__.g) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\formats.js":
/*!****************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\qs\lib\formats.js ***!
  \****************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\index.js":
/*!**************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\qs\lib\index.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\stringify.js");
var parse = __webpack_require__(/*! ./parse */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\parse.js");
var formats = __webpack_require__(/*! ./formats */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\parse.js":
/*!**************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\qs\lib\parse.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\stringify.js":
/*!******************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\qs\lib\stringify.js ***!
  \******************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\side-channel\\index.js");
var utils = __webpack_require__(/*! ./utils */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\utils.js");
var formats = __webpack_require__(/*! ./formats */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? '[]' : '') + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\utils.js":
/*!**************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\qs\lib\utils.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\set-function-length\\index.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\set-function-length\index.js ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\get-intrinsic\\index.js");
var define = __webpack_require__(/*! define-data-property */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\define-data-property\\index.js");
var hasDescriptors = __webpack_require__(/*! has-property-descriptors */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\has-property-descriptors\\index.js")();
var gOPD = __webpack_require__(/*! gopd */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\gopd\\index.js");

var $TypeError = __webpack_require__(/*! es-errors/type */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\type.js");
var $floor = GetIntrinsic('%Math.floor%');

/** @type {import('.')} */
module.exports = function setFunctionLength(fn, length) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
		throw new $TypeError('`length` must be a positive 32-bit integer');
	}

	var loose = arguments.length > 2 && !!arguments[2];

	var functionLengthIsConfigurable = true;
	var functionLengthIsWritable = true;
	if ('length' in fn && gOPD) {
		var desc = gOPD(fn, 'length');
		if (desc && !desc.configurable) {
			functionLengthIsConfigurable = false;
		}
		if (desc && !desc.writable) {
			functionLengthIsWritable = false;
		}
	}

	if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
		if (hasDescriptors) {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
		} else {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
		}
	}
	return fn;
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\side-channel\\index.js":
/*!********************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\side-channel\index.js ***!
  \********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\get-intrinsic\\index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\call-bind\\callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\object-inspect\\index.js");

var $TypeError = __webpack_require__(/*! es-errors/type */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\es-errors\\type.js");
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list. By doing so, all the recently used nodes can be accessed relatively quickly.
*/
/** @type {import('.').listGetNode} */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	/** @type {typeof list | NonNullable<(typeof list)['next']>} */
	var prev = list;
	/** @type {(typeof list)['next']} */
	var curr;
	for (; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			// eslint-disable-next-line no-extra-parens
			curr.next = /** @type {NonNullable<typeof list.next>} */ (list.next);
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

/** @type {import('.').listGet} */
var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
/** @type {import('.').listSet} */
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = /** @type {import('.').ListNode<typeof value>} */ ({ // eslint-disable-line no-param-reassign, no-extra-parens
			key: key,
			next: objects.next,
			value: value
		});
	}
};
/** @type {import('.').listHas} */
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

/** @type {import('.')} */
module.exports = function getSideChannel() {
	/** @type {WeakMap<object, unknown>} */ var $wm;
	/** @type {Map<object, unknown>} */ var $m;
	/** @type {import('.').RootNode<unknown>} */ var $o;

	/** @type {import('.').Channel} */
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					// Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\umi-request\\dist\\index.esm.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\umi-request\dist\index.esm.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onion": function() { return /* binding */ Onion; },
/* harmony export */   "RequestError": function() { return /* binding */ RequestError; },
/* harmony export */   "ResponseError": function() { return /* binding */ ResponseError; },
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "fetch": function() { return /* binding */ fetch$1; }
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\qs\\lib\\index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\isomorphic-fetch\\fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// 返回一个组合了所有插件的“插件”
function compose(middlewares) {
  if (!Array.isArray(middlewares)) throw new TypeError('Middlewares must be an array!');
  var middlewaresLen = middlewares.length;

  for (var i = 0; i < middlewaresLen; i++) {
    if (typeof middlewares[i] !== 'function') {
      throw new TypeError('Middleware must be componsed of function');
    }
  }

  return function wrapMiddlewares(params, next) {
    var index = -1;

    function dispatch(i) {
      if (i <= index) {
        return Promise.reject(new Error('next() should not be called multiple times in one middleware!'));
      }

      index = i;
      var fn = middlewares[i] || next;
      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(params, function () {
          return dispatch(i + 1);
        }));
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return dispatch(0);
  };
}

var Onion = /*#__PURE__*/function () {
  function Onion(defaultMiddlewares) {
    _classCallCheck(this, Onion);

    if (!Array.isArray(defaultMiddlewares)) throw new TypeError('Default middlewares must be an array!');
    this.defaultMiddlewares = _toConsumableArray(defaultMiddlewares);
    this.middlewares = [];
  }

  _createClass(Onion, [{
    key: "use",
    value: // 内置内核中间件长度
    function use(newMiddleware) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: false,
        core: false,
        defaultInstance: false
      };
      var core = false;
      var global = false;
      var defaultInstance = false;

      if (typeof opts === 'number') {
        if (process && ({"NODE_ENV":"development"}) && "development" === 'development') {
          console.warn('use() options should be object, number property would be deprecated in future，please update use() options to "{ core: true }".');
        }

        core = true;
        global = false;
      } else if (_typeof(opts) === 'object' && opts) {
        global = opts.global || false;
        core = opts.core || false;
        defaultInstance = opts.defaultInstance || false;
      } // 全局中间件


      if (global) {
        Onion.globalMiddlewares.splice(Onion.globalMiddlewares.length - Onion.defaultGlobalMiddlewaresLength, 0, newMiddleware);
        return;
      } // 内核中间件


      if (core) {
        Onion.coreMiddlewares.splice(Onion.coreMiddlewares.length - Onion.defaultCoreMiddlewaresLength, 0, newMiddleware);
        return;
      } // 默认实例中间件，供开发者使用


      if (defaultInstance) {
        this.defaultMiddlewares.push(newMiddleware);
        return;
      } // 实例中间件


      this.middlewares.push(newMiddleware);
    }
  }, {
    key: "execute",
    value: function execute() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var fn = compose([].concat(_toConsumableArray(this.middlewares), _toConsumableArray(this.defaultMiddlewares), _toConsumableArray(Onion.globalMiddlewares), _toConsumableArray(Onion.coreMiddlewares)));
      return fn(params);
    }
  }]);

  return Onion;
}();

Onion.globalMiddlewares = [];
Onion.defaultGlobalMiddlewaresLength = 0;
Onion.coreMiddlewares = [];
Onion.defaultCoreMiddlewaresLength = 0;

var MapCache = /*#__PURE__*/function () {
  function MapCache(options) {
    _classCallCheck(this, MapCache);

    this.cache = new Map();
    this.timer = {};
    this.extendOptions(options);
  }

  _createClass(MapCache, [{
    key: "extendOptions",
    value: function extendOptions(options) {
      this.maxCache = options.maxCache || 0;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.cache.get(JSON.stringify(key));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var _this = this;

      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60000;

      // 如果超过最大缓存数, 删除头部的第一个缓存.
      if (this.maxCache > 0 && this.cache.size >= this.maxCache) {
        var deleteKey = _toConsumableArray(this.cache.keys())[0];

        this.cache.delete(deleteKey);

        if (this.timer[deleteKey]) {
          clearTimeout(this.timer[deleteKey]);
        }
      }

      var cacheKey = JSON.stringify(key);
      this.cache.set(cacheKey, value);

      if (ttl > 0) {
        this.timer[cacheKey] = setTimeout(function () {
          _this.cache.delete(cacheKey);

          delete _this.timer[cacheKey];
        }, ttl);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var cacheKey = JSON.stringify(key);
      delete this.timer[cacheKey];
      return this.cache.delete(cacheKey);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.timer = {};
      return this.cache.clear();
    }
  }]);

  return MapCache;
}();
/**
 * 请求异常
 */

var RequestError = /*#__PURE__*/function (_Error) {
  _inherits(RequestError, _Error);

  var _super = _createSuper(RequestError);

  function RequestError(text, request) {
    var _this2;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'RequestError';

    _classCallCheck(this, RequestError);

    _this2 = _super.call(this, text);
    _this2.name = 'RequestError';
    _this2.request = request;
    _this2.type = type;
    return _this2;
  }

  return RequestError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * 响应异常
 */

var ResponseError = /*#__PURE__*/function (_Error2) {
  _inherits(ResponseError, _Error2);

  var _super2 = _createSuper(ResponseError);

  function ResponseError(response, text, data, request) {
    var _this3;

    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'ResponseError';

    _classCallCheck(this, ResponseError);

    _this3 = _super2.call(this, text || response.statusText);
    _this3.name = 'ResponseError';
    _this3.data = data;
    _this3.response = response;
    _this3.request = request;
    _this3.type = type;
    return _this3;
  }

  return ResponseError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * http://gitlab.alipay-inc.com/KBSJ/gxt/blob/release_gxt_S8928905_20180531/src/util/request.js#L63
 * 支持gbk
 */

function readerGBK(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsText(file, 'GBK'); // setup GBK decoding
  });
}
/**
 * 安全的JSON.parse
 */

function safeJsonParse(data) {
  var throwErrIfParseFail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var response = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var request = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  try {
    return JSON.parse(data);
  } catch (e) {
    if (throwErrIfParseFail) {
      throw new ResponseError(response, 'JSON.parse fail', data, request, 'ParseError');
    }
  } // eslint-disable-line no-empty


  return data;
}
function timeout2Throw(msec, timeoutMessage, request) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new RequestError(timeoutMessage || "timeout of ".concat(msec, "ms exceeded"), request, 'Timeout'));
    }, msec);
  });
} // If request options contain 'cancelToken', reject request when token has been canceled

function cancel2Throw(opt) {
  return new Promise(function (_, reject) {
    if (opt.cancelToken) {
      opt.cancelToken.promise.then(function (cancel) {
        reject(cancel);
      });
    }
  });
}
var toString = Object.prototype.toString; // Check env is browser or node

function getEnv() {
  var env; // Only Node.JS has a process variable that is of [[Class]] process

  if (typeof process !== 'undefined' && toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    env = 'NODE';
  }

  if (typeof XMLHttpRequest !== 'undefined') {
    env = 'BROWSER';
  }

  return env;
}
function isArray(val) {
  return _typeof(val) === 'object' && Object.prototype.toString.call(val) === '[object Array]';
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
function isDate(val) {
  return _typeof(val) === 'object' && Object.prototype.toString.call(val) === '[object Date]';
}
function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
function forEach2ObjArr(target, callback) {
  if (!target) return;

  if (_typeof(target) !== 'object') {
    target = [target];
  }

  if (isArray(target)) {
    for (var i = 0; i < target.length; i++) {
      callback.call(null, target[i], i, target);
    }
  } else {
    for (var key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        callback.call(null, target[key], key, target);
      }
    }
  }
}
function getParamObject(val) {
  if (isURLSearchParams(val)) {
    return (0,qs__WEBPACK_IMPORTED_MODULE_0__.parse)(val.toString(), {
      strictNullHandling: true
    });
  }

  if (typeof val === 'string') {
    return [val];
  }

  return val;
}
function reqStringify(val) {
  return (0,qs__WEBPACK_IMPORTED_MODULE_0__.stringify)(val, {
    arrayFormat: 'repeat',
    strictNullHandling: true
  });
}
function mergeRequestOptions(options, options2Merge) {
  return _objectSpread2(_objectSpread2(_objectSpread2({}, options), options2Merge), {}, {
    headers: _objectSpread2(_objectSpread2({}, options.headers), options2Merge.headers),
    params: _objectSpread2(_objectSpread2({}, getParamObject(options.params)), getParamObject(options2Merge.params)),
    method: (options2Merge.method || options.method || 'get').toLowerCase()
  });
}

// 前后缀拦截
var addfix = function addfix(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var prefix = options.prefix,
      suffix = options.suffix;

  if (prefix) {
    url = "".concat(prefix).concat(url);
  }

  if (suffix) {
    url = "".concat(url).concat(suffix);
  }

  return {
    url: url,
    options: options
  };
};

var warnedCoreType = false; // 默认缓存判断，开放缓存判断给非 get 请求使用

function __defaultValidateCache(url, options) {
  var _options$method = options.method,
      method = _options$method === void 0 ? 'get' : _options$method;
  return method.toLowerCase() === 'get';
}

function fetchMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
      options = _ctx$req$options === void 0 ? {} : _ctx$req$options,
      _ctx$req$url = _ctx$req.url,
      url = _ctx$req$url === void 0 ? '' : _ctx$req$url,
      cache = ctx.cache,
      responseInterceptors = ctx.responseInterceptors;

  var _options$timeout = options.timeout,
      timeout = _options$timeout === void 0 ? 0 : _options$timeout,
      timeoutMessage = options.timeoutMessage,
      _options$__umiRequest = options.__umiRequestCoreType__,
      __umiRequestCoreType__ = _options$__umiRequest === void 0 ? 'normal' : _options$__umiRequest,
      _options$useCache = options.useCache,
      useCache = _options$useCache === void 0 ? false : _options$useCache,
      _options$method2 = options.method,
      method = _options$method2 === void 0 ? 'get' : _options$method2,
      params = options.params,
      ttl = options.ttl,
      _options$validateCach = options.validateCache,
      validateCache = _options$validateCach === void 0 ? __defaultValidateCache : _options$validateCach;

  if (__umiRequestCoreType__ !== 'normal') {
    if (process && ({"NODE_ENV":"development"}) && "development" === 'development' && warnedCoreType === false) {
      warnedCoreType = true;
      console.warn('__umiRequestCoreType__ is a internal property that use in umi-request, change its value would affect the behavior of request! It only use when you want to extend or use request core.');
    }

    return next();
  }

  var adapter = fetch;

  if (!adapter) {
    throw new Error('Global fetch not exist!');
  } // 从缓存池检查是否有缓存数据


  var isBrowser = getEnv() === 'BROWSER';
  var needCache = validateCache(url, options) && useCache && isBrowser;

  if (needCache) {
    var responseCache = cache.get({
      url: url,
      params: params,
      method: method
    });

    if (responseCache) {
      responseCache = responseCache.clone();
      responseCache.useCache = true;
      ctx.res = responseCache;
      return next();
    }
  }

  var response; // 超时处理、取消请求处理

  if (timeout > 0) {
    response = Promise.race([cancel2Throw(options), adapter(url, options), timeout2Throw(timeout, timeoutMessage, ctx.req)]);
  } else {
    response = Promise.race([cancel2Throw(options), adapter(url, options)]);
  } // 兼容老版本 response.interceptor


  responseInterceptors.forEach(function (handler) {
    response = response.then(function (res) {
      // Fix multiple clones not working, issue: https://github.com/github/fetch/issues/504
      var clonedRes = typeof res.clone === 'function' ? res.clone() : res;
      return handler(clonedRes, options);
    });
  });
  return response.then(function (res) {
    // 是否存入缓存池
    if (needCache) {
      if (res.status === 200) {
        var copy = res.clone();
        copy.useCache = true;
        cache.set({
          url: url,
          params: params,
          method: method
        }, copy, ttl);
      }
    }

    ctx.res = res;
    return next();
  });
}

function parseResponseMiddleware(ctx, next) {
  var copy;
  return next().then(function () {
    if (!ctx) return;
    var _ctx$res = ctx.res,
        res = _ctx$res === void 0 ? {} : _ctx$res,
        _ctx$req = ctx.req,
        req = _ctx$req === void 0 ? {} : _ctx$req;

    var _ref = req || {},
        _ref$options = _ref.options;

    _ref$options = _ref$options === void 0 ? {} : _ref$options;
    var _ref$options$response = _ref$options.responseType,
        responseType = _ref$options$response === void 0 ? 'json' : _ref$options$response,
        _ref$options$charset = _ref$options.charset,
        charset = _ref$options$charset === void 0 ? 'utf8' : _ref$options$charset,
        _ref$options$getRespo = _ref$options.getResponse,
        _ref$options$throwErr = _ref$options.throwErrIfParseFail,
        throwErrIfParseFail = _ref$options$throwErr === void 0 ? false : _ref$options$throwErr,
        _ref$options$parseRes = _ref$options.parseResponse,
        parseResponse = _ref$options$parseRes === void 0 ? true : _ref$options$parseRes;

    if (!parseResponse) {
      return;
    }

    if (!res || !res.clone) {
      return;
    } // 只在浏览器环境对 response 做克隆， node 环境如果对 response 克隆会有问题：https://github.com/bitinn/node-fetch/issues/553


    copy = getEnv() === 'BROWSER' ? res.clone() : res;
    copy.useCache = res.useCache || false; // 解析数据

    if (charset === 'gbk') {
      try {
        return res.blob().then(readerGBK).then(function (d) {
          return safeJsonParse(d, false, copy, req);
        });
      } catch (e) {
        throw new ResponseError(copy, e.message, null, req, 'ParseError');
      }
    } else if (responseType === 'json') {
      return res.text().then(function (d) {
        return safeJsonParse(d, throwErrIfParseFail, copy, req);
      });
    }

    try {
      // 其他如text, blob, arrayBuffer, formData
      return res[responseType]();
    } catch (e) {
      throw new ResponseError(copy, 'responseType not support', null, req, 'ParseError');
    }
  }).then(function (body) {
    if (!ctx) return;
    var _ctx$res2 = ctx.res,
        _ctx$req2 = ctx.req,
        req = _ctx$req2 === void 0 ? {} : _ctx$req2;

    var _ref2 = req || {},
        _ref2$options = _ref2.options;

    _ref2$options = _ref2$options === void 0 ? {} : _ref2$options;
    var _ref2$options$getResp = _ref2$options.getResponse,
        getResponse = _ref2$options$getResp === void 0 ? false : _ref2$options$getResp;

    if (!copy) {
      return;
    }

    if (copy.status >= 200 && copy.status < 300) {
      // 提供源response, 以便自定义处理
      if (getResponse) {
        ctx.res = {
          data: body,
          response: copy
        };
        return;
      }

      ctx.res = body;
      return;
    }

    throw new ResponseError(copy, 'http error', body, req, 'HttpError');
  }).catch(function (e) {
    if (e instanceof RequestError || e instanceof ResponseError) {
      throw e;
    } // 对未知错误进行处理


    var req = ctx.req,
        res = ctx.res;
    e.request = e.request || req;
    e.response = e.response || res;
    e.type = e.type || e.name;
    e.data = e.data || undefined;
    throw e;
  });
}

function simplePostMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
      options = _ctx$req$options === void 0 ? {} : _ctx$req$options;
  var _options$method = options.method,
      method = _options$method === void 0 ? 'get' : _options$method;

  if (['post', 'put', 'patch', 'delete'].indexOf(method.toLowerCase()) === -1) {
    return next();
  }

  var _options$requestType = options.requestType,
      requestType = _options$requestType === void 0 ? 'json' : _options$requestType,
      data = options.data; // 数据使用类axios的新字段data, 避免引用后影响旧代码, 如将body stringify多次

  if (data) {
    var dataType = Object.prototype.toString.call(data);

    if (dataType === '[object Object]' || dataType === '[object Array]') {
      if (requestType === 'json') {
        options.headers = _objectSpread2({
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }, options.headers);
        options.body = JSON.stringify(data);
      } else if (requestType === 'form') {
        options.headers = _objectSpread2({
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }, options.headers);
        options.body = reqStringify(data);
      }
    } else {
      // 其他 requestType 自定义header
      options.headers = _objectSpread2({
        Accept: 'application/json'
      }, options.headers);
      options.body = data;
    }
  }

  ctx.req.options = options;
  return next();
}

function paramsSerialize(params, paramsSerializer) {
  var serializedParams;
  var jsonStringifiedParams; // 支持参数自动拼装，其他 method 也可用，不冲突

  if (params) {
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      if (isArray(params)) {
        jsonStringifiedParams = [];
        forEach2ObjArr(params, function (item) {
          if (item === null || typeof item === 'undefined') {
            jsonStringifiedParams.push(item);
          } else {
            jsonStringifiedParams.push(isObject(item) ? JSON.stringify(item) : item);
          }
        }); // a: [1,2,3] => a=1&a=2&a=3

        serializedParams = reqStringify(jsonStringifiedParams);
      } else {
        jsonStringifiedParams = {};
        forEach2ObjArr(params, function (value, key) {
          var jsonStringifiedValue = value;

          if (value === null || typeof value === 'undefined') {
            jsonStringifiedParams[key] = value;
          } else if (isDate(value)) {
            jsonStringifiedValue = value.toISOString();
          } else if (isArray(value)) {
            jsonStringifiedValue = value;
          } else if (isObject(value)) {
            jsonStringifiedValue = JSON.stringify(value);
          }

          jsonStringifiedParams[key] = jsonStringifiedValue;
        });
        var tmp = reqStringify(jsonStringifiedParams);
        serializedParams = tmp;
      }
    }
  }

  return serializedParams;
} // 对请求参数做处理，实现 query 简化、 post 简化

function simpleGetMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
      options = _ctx$req$options === void 0 ? {} : _ctx$req$options;
  var paramsSerializer = options.paramsSerializer,
      params = options.params;
  var _ctx$req2 = ctx.req;
  _ctx$req2 = _ctx$req2 === void 0 ? {} : _ctx$req2;
  var _ctx$req2$url = _ctx$req2.url,
      url = _ctx$req2$url === void 0 ? '' : _ctx$req2$url; // 将 method 改为大写

  options.method = options.method ? options.method.toUpperCase() : 'GET'; // 设置 credentials 默认值为 same-origin，确保当开发者没有设置时，各浏览器对请求是否发送 cookies 保持一致的行为
  // - omit: 从不发送cookies.
  // - same-origin: 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息.(浏览器默认值,在旧版本浏览器，例如safari 11依旧是omit，safari 12已更改)
  // - include: 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息.

  options.credentials = options.credentials || 'same-origin'; // 支持类似axios 参数自动拼装, 其他method也可用, 不冲突.

  var serializedParams = paramsSerialize(params, paramsSerializer);
  ctx.req.originUrl = url;

  if (serializedParams) {
    var urlSign = url.indexOf('?') !== -1 ? '&' : '?';
    ctx.req.url = "".concat(url).concat(urlSign).concat(serializedParams);
  }

  ctx.req.options = options;
  return next();
}

var globalMiddlewares = [simplePostMiddleware, simpleGetMiddleware, parseResponseMiddleware];
var coreMiddlewares = [fetchMiddleware];
Onion.globalMiddlewares = globalMiddlewares;
Onion.defaultGlobalMiddlewaresLength = globalMiddlewares.length;
Onion.coreMiddlewares = coreMiddlewares;
Onion.defaultCoreMiddlewaresLength = coreMiddlewares.length;

var Core = /*#__PURE__*/function () {
  function Core(initOptions) {
    _classCallCheck(this, Core);

    this.onion = new Onion([]);
    this.fetchIndex = 0; // 【即将废弃】请求中间件位置

    this.mapCache = new MapCache(initOptions);
    this.initOptions = initOptions;
    this.instanceRequestInterceptors = [];
    this.instanceResponseInterceptors = [];
  } // 旧版拦截器为共享


  _createClass(Core, [{
    key: "use",
    value: function use(newMiddleware) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: false,
        core: false
      };
      this.onion.use(newMiddleware, opt);
      return this;
    }
  }, {
    key: "extendOptions",
    value: function extendOptions(options) {
      this.initOptions = mergeRequestOptions(this.initOptions, options);
      this.mapCache.extendOptions(options);
    } // 执行请求前拦截器

  }, {
    key: "dealRequestInterceptors",
    value: function dealRequestInterceptors(ctx) {
      var reducer = function reducer(p1, p2) {
        return p1.then(function () {
          var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          ctx.req.url = ret.url || ctx.req.url;
          ctx.req.options = ret.options || ctx.req.options;
          return p2(ctx.req.url, ctx.req.options);
        });
      };

      var allInterceptors = [].concat(_toConsumableArray(Core.requestInterceptors), _toConsumableArray(this.instanceRequestInterceptors));
      return allInterceptors.reduce(reducer, Promise.resolve()).then(function () {
        var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        ctx.req.url = ret.url || ctx.req.url;
        ctx.req.options = ret.options || ctx.req.options;
        return Promise.resolve();
      });
    }
  }, {
    key: "request",
    value: function request(url, options) {
      var _this = this;

      var onion = this.onion;
      var obj = {
        req: {
          url: url,
          options: _objectSpread2(_objectSpread2({}, options), {}, {
            url: url
          })
        },
        res: null,
        cache: this.mapCache,
        responseInterceptors: [].concat(_toConsumableArray(Core.responseInterceptors), _toConsumableArray(this.instanceResponseInterceptors))
      };

      if (typeof url !== 'string') {
        throw new Error('url MUST be a string');
      }

      return new Promise(function (resolve, reject) {
        _this.dealRequestInterceptors(obj).then(function () {
          return onion.execute(obj);
        }).then(function () {
          resolve(obj.res);
        }).catch(function (error) {
          var errorHandler = obj.req.options.errorHandler;

          if (errorHandler) {
            try {
              var data = errorHandler(error);
              resolve(data);
            } catch (e) {
              reject(e);
            }
          } else {
            reject(error);
          }
        });
      });
    }
  }], [{
    key: "requestUse",
    value: // 请求拦截器 默认 { global: true } 兼容旧版本拦截器
    function requestUse(handler) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: true
      };
      if (typeof handler !== 'function') throw new TypeError('Interceptor must be function!');

      if (opt.global) {
        Core.requestInterceptors.push(handler);
      } else {
        this.instanceRequestInterceptors.push(handler);
      }
    } // 响应拦截器 默认 { global: true } 兼容旧版本拦截器

  }, {
    key: "responseUse",
    value: function responseUse(handler) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: true
      };
      if (typeof handler !== 'function') throw new TypeError('Interceptor must be function!');

      if (opt.global) {
        Core.responseInterceptors.push(handler);
      } else {
        this.instanceResponseInterceptors.push(handler);
      }
    }
  }]);

  return Core;
}();

Core.requestInterceptors = [addfix];
Core.responseInterceptors = [];

/**
 * 当执行 “取消请求” 操作时会抛出 Cancel 对象作为一场
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return this.message ? "Cancel: ".concat(this.message) : 'Cancel';
};

Cancel.prototype.__CANCEL__ = true;

/**
 * 通过 CancelToken 来取消请求操作
 *
 * @class
 * @param {Function} executor The executor function.
 */

function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // 取消操作已被调用过
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * 如果请求已经取消，抛出 Cancel 异常
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * 通过 source 来返回 CancelToken 实例和取消 CancelToken 的函数
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

var request = function request() {
  var initOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var coreInstance = new Core(initOptions);

  var umiInstance = function umiInstance(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mergeOptions = mergeRequestOptions(coreInstance.initOptions, options);
    return coreInstance.request(url, mergeOptions);
  }; // 中间件


  umiInstance.use = coreInstance.use.bind(coreInstance);
  umiInstance.fetchIndex = coreInstance.fetchIndex; // 拦截器

  umiInstance.interceptors = {
    request: {
      use: Core.requestUse.bind(coreInstance)
    },
    response: {
      use: Core.responseUse.bind(coreInstance)
    }
  }; // 请求语法糖： reguest.get request.post ……

  var METHODS = ['get', 'post', 'delete', 'put', 'patch', 'head', 'options', 'rpc'];
  METHODS.forEach(function (method) {
    umiInstance[method] = function (url, options) {
      return umiInstance(url, _objectSpread2(_objectSpread2({}, options), {}, {
        method: method
      }));
    };
  });
  umiInstance.Cancel = Cancel;
  umiInstance.CancelToken = CancelToken;
  umiInstance.isCancel = isCancel;
  umiInstance.extendOptions = coreInstance.extendOptions.bind(coreInstance); // 暴露各个实例的中间件，供开发者自由组合

  umiInstance.middlewares = {
    instance: coreInstance.onion.middlewares,
    defaultInstance: coreInstance.onion.defaultMiddlewares,
    global: Onion.globalMiddlewares,
    core: Onion.coreMiddlewares
  };
  return umiInstance;
};
/**
 * extend 方法参考了ky, 让用户可以定制配置.
 * initOpions 初始化参数
 * @param {number} maxCache 最大缓存数
 * @param {string} prefix url前缀
 * @param {function} errorHandler 统一错误处理方法
 * @param {object} headers 统一的headers
 */


var extend = function extend(initOptions) {
  return request(initOptions);
};
/**
 * 暴露 fetch 中间件，保障依旧可以使用
 */

var fetch$1 = request({
  parseResponse: false
});
var request$1 = request({});

/* harmony default export */ __webpack_exports__["default"] = (request$1);



/***/ }),

/***/ "C:\\Users\\13303\\AppData\\Local\\Temp\\MicrosoftEdgeDownloads\\bf72533e-7bda-4a22-9346-44806c59ea43\\user-center-frontend-master\\node_modules\\whatwg-fetch\\fetch.js":
/*!********************************************************************************************************************************************************************!*\
  !*** C:\Users\13303\AppData\Local\Temp\MicrosoftEdgeDownloads\bf72533e-7bda-4a22-9346-44806c59ea43\user-center-frontend-master\node_modules\whatwg-fetch\fetch.js ***!
  \********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Headers": function() { return /* binding */ Headers; },
/* harmony export */   "Request": function() { return /* binding */ Request; },
/* harmony export */   "Response": function() { return /* binding */ Response; },
/* harmony export */   "DOMException": function() { return /* binding */ DOMException; },
/* harmony export */   "fetch": function() { return /* binding */ fetch; }
/* harmony export */ });
/* eslint-disable no-prototype-builtins */
var g =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  // eslint-disable-next-line no-undef
  (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||
  {}

var support = {
  searchParams: 'URLSearchParams' in g,
  iterable: 'Symbol' in g && 'iterator' in Symbol,
  blob:
    'FileReader' in g &&
    'Blob' in g &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in g,
  arrayBuffer: 'ArrayBuffer' in g
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      if (header.length != 2) {
        throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
      }
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body._noBody) return
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type)
  var encoding = match ? match[1] : 'utf-8'
  reader.readAsText(blob, encoding)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    // eslint-disable-next-line no-self-assign
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._noBody = true;
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }
  }

  this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var isConsumed = consumed(this)
      if (isConsumed) {
        return isConsumed
      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
        return Promise.resolve(
          this._bodyArrayBuffer.buffer.slice(
            this._bodyArrayBuffer.byteOffset,
            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
          )
        )
      } else {
        return Promise.resolve(this._bodyArrayBuffer)
      }
    } else if (support.blob) {
      return this.blob().then(readBlobAsArrayBuffer)
    } else {
      throw new Error('could not read as ArrayBuffer')
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal || (function () {
    if ('AbortController' in g) {
      var ctrl = new AbortController();
      return ctrl.signal;
    }
  }());
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        try {
          headers.append(key, value)
        } catch (error) {
          console.warn('Response ' + error.message)
        }
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  if (this.status < 200 || this.status > 599) {
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
  }
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 200, statusText: ''})
  response.ok = false
  response.status = 0
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = g.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      // This check if specifically for when a user fetches a file locally from the file system
      // Only if the status is out of a normal range
      if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
        options.status = 200;
      } else {
        options.status = xhr.status;
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request timed out'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && g.location.href ? g.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
      var names = [];
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        names.push(normalizeName(name))
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
      request.headers.forEach(function(value, name) {
        if (names.indexOf(name) === -1) {
          xhr.setRequestHeader(name, value)
        }
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!g.fetch) {
  g.fetch = fetch
  g.Headers = Headers
  g.Request = Request
  g.Response = Response
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

}]);
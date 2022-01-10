/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n}\\r\\nbody {\\r\\n    background: rgb(238,174,202);\\r\\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(222,148,233,1) 100%);\\r\\n}\\r\\ninput, textarea {\\r\\n    width: 250px;\\r\\n}\\r\\n.navbar{\\r\\n    background-color: #a20ad0 ;\\r\\n}\\r\\n\\r\\n/* -----Cart----- */\\r\\n.cart-table td{\\r\\n    vertical-align: middle;\\r\\n    text-align: center;\\r\\n\\r\\n}\\r\\n\\r\\n.cart-table i{\\r\\n    cursor: pointer;\\r\\n}\\r\\n.bi-trash {\\r\\n    font-size : 25px;\\r\\n    color: red;\\r\\n    \\r\\n}\\r\\n\\r\\n.hidden{\\r\\n    display: none !important;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shoppingcartjs/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = cssWithMappingToString(item);\r\n\r\n      if (item[2]) {\r\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n  // eslint-disable-next-line func-names\r\n\r\n\r\n  list.i = function (modules, mediaQuery, dedupe) {\r\n    if (typeof modules === \"string\") {\r\n      // eslint-disable-next-line no-param-reassign\r\n      modules = [[null, modules, \"\"]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var i = 0; i < this.length; i++) {\r\n        // eslint-disable-next-line prefer-destructuring\r\n        var id = this[i][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _i = 0; _i < modules.length; _i++) {\r\n      var item = [].concat(modules[_i]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        // eslint-disable-next-line no-continue\r\n        continue;\r\n      }\r\n\r\n      if (mediaQuery) {\r\n        if (!item[2]) {\r\n          item[2] = mediaQuery;\r\n        } else {\r\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://shoppingcartjs/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDom = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDom.length; i++) {\r\n    if (stylesInDom[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var index = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3]\r\n    };\r\n\r\n    if (index !== -1) {\r\n      stylesInDom[index].references++;\r\n      stylesInDom[index].updater(obj);\r\n    } else {\r\n      stylesInDom.push({\r\n        identifier: identifier,\r\n        updater: addStyle(obj, options),\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  return function updateStyle(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDom[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDom[_index].references === 0) {\r\n        stylesInDom[_index].updater();\r\n\r\n        stylesInDom.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var style = document.createElement(\"style\");\r\n  options.setAttributes(style, options.attributes);\r\n  options.insert(style);\r\n  return style;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(style) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    style.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(style, options, obj) {\r\n  var css = obj.css;\r\n  var media = obj.media;\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (media) {\r\n    style.setAttribute(\"media\", media);\r\n  } else {\r\n    style.removeAttribute(\"media\");\r\n  }\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, style);\r\n}\r\n\r\nfunction removeStyleElement(style) {\r\n  // istanbul ignore if\r\n  if (style.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  style.parentNode.removeChild(style);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var style = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(style, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(style);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, style) {\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = css;\r\n  } else {\r\n    while (style.firstChild) {\r\n      style.removeChild(style.firstChild);\r\n    }\r\n\r\n    style.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\r\n// require the crypto API and do not support built-in fallback to lower quality random number\r\n// generators (like Math.random()).\r\nvar getRandomValues;\r\nvar rnds8 = new Uint8Array(16);\r\nfunction rng() {\r\n  // lazy load so that environments that need to polyfill have a chance to do so\r\n  if (!getRandomValues) {\r\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\r\n    // find the complete implementation of crypto (msCrypto) on IE11.\r\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\r\n\r\n    if (!getRandomValues) {\r\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\r\n    }\r\n  }\r\n\r\n  return getRandomValues(rnds8);\r\n}\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\r\n/**\r\n * Convert array of 16 byte values to UUID string format of the form:\r\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\r\n */\r\n\r\nvar byteToHex = [];\r\n\r\nfor (var i = 0; i < 256; ++i) {\r\n  byteToHex.push((i + 0x100).toString(16).substr(1));\r\n}\r\n\r\nfunction stringify(arr) {\r\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\r\n  // Note: Be careful editing this code!  It's been tuned for performance\r\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\r\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\r\n  // of the following:\r\n  // - One or more input array values don't map to a hex octet (leading to\r\n  // \"undefined\" in the uuid)\r\n  // - Invalid input values for the RFC `version` or `variant` fields\r\n\r\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\r\n    throw TypeError('Stringified UUID is invalid');\r\n  }\r\n\r\n  return uuid;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\r\n\r\n\r\nfunction v4(options, buf, offset) {\r\n  options = options || {};\r\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\r\n\r\n  rnds[6] = rnds[6] & 0x0f | 0x40;\r\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\r\n\r\n  if (buf) {\r\n    offset = offset || 0;\r\n\r\n    for (var i = 0; i < 16; ++i) {\r\n      buf[offset + i] = rnds[i];\r\n    }\r\n\r\n    return buf;\r\n  }\r\n\r\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\r\n\r\nfunction validate(uuid) {\r\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://shoppingcartjs/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ \"./src/product.js\");\n/* harmony import */ var _myCartView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myCartView */ \"./src/myCartView.js\");\n\r\n\r\n\r\n\r\n\r\nclass Cart {\r\n  constructor() {\r\n    this.load();\r\n  }\r\n\r\n  load() {\r\n    this.products = (_storage__WEBPACK_IMPORTED_MODULE_1__.default.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.default.CART_ITEMS_STORAGE_KEY) ?? []).map(\r\n      (productData) => new _product__WEBPACK_IMPORTED_MODULE_2__.default(productData)\r\n    );\r\n  }\r\n\r\n  save() {\r\n    _storage__WEBPACK_IMPORTED_MODULE_1__.default.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.default.CART_ITEMS_STORAGE_KEY, this.products);\r\n  }\r\n\r\n  getProductsCount() {\r\n    return this.products.length;\r\n  }\r\n\r\n  increaseQuantity(product) {\r\n    product.inCart += 1;\r\n    //product.increaseQuantity();\r\n    this.save();\r\n  }\r\n\r\n  decreaseQuantity(product) {\r\n    if (product.quantity === 1) {\r\n      this.removeProduct();\r\n    } else {\r\n      product.decreaseQuantity();\r\n      this.save();\r\n    }\r\n  }\r\n\r\n\r\n  addProduct(product) {\r\n    product.inCart = 1;\r\n    this.products = [...this.products, product];\r\n    this.save();\r\n  }\r\n\r\n  increaseOrAdd(product) {\r\n    this.load();\r\n    /*\r\n    this.products.forEach(item => {\r\n      console.log(item.id === product.id)\r\n      if(item.id === product.id) {\r\n        this.increaseQuantity(product);\r\n        return\r\n      }\r\n      else {\r\n        this.addProduct(product);\r\n        return\r\n      }\r\n    });\r\n  }*/\r\n\r\n    if (this.products.length === 0) {\r\n      console.log('empty', product)\r\n      this.addProduct(product);\r\n    } else if (!(this.products.some(elem => elem.id === product.id))) {\r\n      console.log('not in array', product);\r\n      this.addProduct(product);\r\n\r\n    } else {\r\n      this.products.forEach(item => {\r\n        if (item.id == product.id) {\r\n          console.log('in array', product);\r\n          this.increaseQuantity(item)\r\n        }\r\n      });\r\n    }/*\r\n  console.log('product', product)\r\n  product = new Product(product);\r\nconsole.log('instance of :', product instanceof Product);\r\n  console.log('Product',product)\r\n  if(this.products.some(elem => elem.id === product.id)){\r\n    console.log('true')\r\n    this.increaseQuantity(product);\r\n  } else {\r\n    console.log('false');\r\n    this.addProduct(product);\r\n  }*/\r\n\r\n    /*console.log(this.products.includes(product));\r\n    if (this.products.includes(product)) {\r\n      this.increaseQuantity(product)\r\n    } else {\r\n      this.addProduct(product);\r\n    }*/\r\n  }\r\n\r\n  removeProduct(product) {\r\n    this.products = this.products.filter((p) => p.id !== product.id);\r\n    this.save();\r\n  }\r\n\r\n  displayCartItems() {\r\n    \r\n    const myCartView = new _myCartView__WEBPACK_IMPORTED_MODULE_3__.default();\r\n    myCartView.displayCart(this.products);\r\n  }\r\n\r\n  clearCart(){\r\n    localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_0__.default.CART_ITEMS_STORAGE_KEY);\r\n    this.displayCartItems();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n\n//# sourceURL=webpack://shoppingcartjs/./src/cart.js?");

/***/ }),

/***/ "./src/cartController.js":
/*!*******************************!*\
  !*** ./src/cartController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/cart.js\");\n\r\n\r\nfunction CartController(products) {\r\n    const addCart = document.querySelectorAll('.add-cart');\r\n    const cartBtn = document.querySelector('.cart');\r\n    const clearBtn = document.querySelector('.clear-cart');\r\n    const cartTotal = document.querySelector('.cart-total');\r\n\r\n    let cart = new _cart__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n    for (let i = 0; i < addCart.length; i++) {\r\n        addCart[i].addEventListener('click', () => {\r\n            cart.increaseOrAdd(products[i]);\r\n            cart.displayCartItems();\r\n        })\r\n    }\r\n    cartBtn.addEventListener('click', cart.displayCartItems());\r\n\r\n    clearBtn.addEventListener('click', () => {\r\n        cart.clearCart();\r\n        cart.load();\r\n        cartTotal.classList.add('hidden');\r\n        cart.displayCartItems();\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartController);\n\n//# sourceURL=webpack://shoppingcartjs/./src/cartController.js?");

/***/ }),

/***/ "./src/cartView.js":
/*!*************************!*\
  !*** ./src/cartView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CartView {\r\n    constructor(options) {\r\n      this.node = document.getElementById(\"cart\");\r\n      this.options = options;\r\n    }\r\n  \r\n    showProducts(products) {\r\n      const list = document.createElement(\"ul\");\r\n      list.addEventListener(\"click\", () => this.options.onListClick);\r\n  \r\n      products.forEach((product) => {\r\n        const item = document.createElement(\"li\");\r\n        item.innerText = `${product.name}\r\n        ${product.getFormattedPrice()}\r\n        `;\r\n  \r\n        const deleteButton = document.createElement(\"button\");\r\n        deleteButton.innerText = \"Delete\";\r\n        deleteButton.addEventListener(\"click\", (event) => {\r\n          event.stopPropagation();\r\n          this.options.onProductDelete(product);\r\n        });\r\n  \r\n        item.appendChild(deleteButton);\r\n  \r\n        item.addEventListener(\"click\", () =>\r\n          this.options.onProductClick(product)\r\n        );\r\n        list.appendChild(item);\r\n      });\r\n  \r\n      this.node.innerHTML = \"\";\r\n      this.node.appendChild(list);\r\n    }\r\n  }\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartView);\n\n//# sourceURL=webpack://shoppingcartjs/./src/cartView.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constants\": () => (/* binding */ constants),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst constants = {\r\n    CART_ITEMS_STORAGE_KEY: \"cartItems\",\r\n    PRODUCTS_STORAGE_KEY: \"products\"\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constants);\n\n//# sourceURL=webpack://shoppingcartjs/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ \"./src/product.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ \"./src/cart.js\");\n/* harmony import */ var _cartView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartView */ \"./src/cartView.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _productsView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productsView */ \"./src/productsView.js\");\n/* harmony import */ var _cartController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cartController */ \"./src/cartController.js\");\n/* harmony import */ var _myCartView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myCartView */ \"./src/myCartView.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet products = _storage__WEBPACK_IMPORTED_MODULE_5__.default.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__.default.PRODUCTS_STORAGE_KEY) ?? [];\r\nconst productsView = new _productsView__WEBPACK_IMPORTED_MODULE_7__.default();\r\n\r\n\r\nproductsView.displayProducts(products);\r\n\r\n\r\n\r\n// const deleteBtn = document.querySelector('.btn-danger');\r\n// deleteBtn.addEventListener('click', {\r\n//\r\n// })\r\n\r\n/*\r\nconst addCart = document.querySelectorAll('.add-cart');\r\nconst cartBtn = document.querySelector('.cart');\r\n\r\nlet cart = new Cart();\r\n\r\nfor (let i = 0; i < addCart.length; i++) {\r\n    addCart[i].addEventListener('click', () => {\r\n        \r\n        cart.increaseOrAdd(products[i]);\r\n        cart.displayCartItems();\r\n\r\n    })\r\n}   \r\n\r\ncartBtn.addEventListener('click', cart.displayCartItems());\r\n*/\r\n(0,_cartController__WEBPACK_IMPORTED_MODULE_8__.default)(products);\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shoppingcartjs/./src/index.js?");

/***/ }),

/***/ "./src/myCartView.js":
/*!***************************!*\
  !*** ./src/myCartView.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/cart.js\");\n\r\n\r\nclass MyCartView {\r\n    constructor(){\r\n        this.node = document.querySelector('.products-container');\r\n        this.cartSpan = document.querySelector('.cart span');\r\n        this.clearBtn = document.querySelector('.clear-cart');\r\n        this.cartTotal = document.querySelector('.cart-total');\r\n\r\n    }\r\n\r\n    displayCart(cartItems){\r\n        this.cartSpan.innerText = cartItems.length;\r\n        if (cartItems === null || cartItems.length === 0 ) {\r\n            this.node.innerHTML = '<h5> Your cart is empty!</h5>';\r\n            this.clearBtn.classList.add('hidden');\r\n        } else {\r\n\r\n            if (this.clearBtn.classList.contains('hidden')) this.clearBtn.classList.remove('hidden');\r\n            if (this.cartTotal.classList.contains('hidden')) this.cartTotal.classList.remove('hidden');\r\n\r\n            let totalCost = 0;\r\n            this.node.innerHTML = `\r\n            <table class='cart-table table'>\r\n            <thead>\r\n            <tr>\r\n                <th class='w-5-pct bg-dark text-white' style=\"text-align: center; width: 20%;\">Image</th>\r\n                <th class='w-5-pct bg-dark text-white' style=\"text-align: center\">Product</th>\r\n                <th class='w-5-pct bg-dark text-white' style=\"text-align: center\">Price</th>\r\n                <th class='w-5-pct bg-dark text-white' style=\"text-align: center\">Amount</th>\r\n                <th class='w-5-pct bg-dark text-white' style=\"text-align: center\">Total</th>\r\n                <th class='w-5-pct bg-dark text-white' style=\"text-align: center\">Action</th>\r\n             </tr>\r\n             </thead>\r\n            `;\r\n\r\n                cartItems.forEach(item => {\r\n                    \r\n                let totalItemCost = item.price * item.inCart;\r\n                \r\n    \r\n                let itemRow = document.createElement('tr');\r\n    \r\n                const cartTable = document.querySelector('.cart-table');\r\n    \r\n                let itemImg = document.createElement('img');\r\n                itemImg.src = `../src/img/${item.image}`\r\n                itemImg.style = \"width: 100%;\"\r\n    \r\n                let titleTD = document.createElement('td');\r\n                titleTD.innerText = item.title\r\n    \r\n                let priceTD = document.createElement('td');\r\n                priceTD.innerText = item.price + '$';\r\n    \r\n                let amountTD = document.createElement('td');\r\n                amountTD.innerHTML = `<i class=\"bi bi-arrow-down\"></i> ${item.inCart} <i class=\"bi bi-arrow-up\"></i>`;\r\n    \r\n                let totalTD = document.createElement('td');\r\n                totalTD.innerText = totalItemCost + '$';\r\n    \r\n                let deleteButtonTD = document.createElement('td');\r\n    \r\n    \r\n                let deleteIcon = document.createElement('i');\r\n                deleteIcon.classList.add(\"bi\");\r\n                deleteIcon.classList.add(\"bi-trash\");\r\n                deleteIcon.dataset.productId = item.id;\r\n    \r\n                deleteButtonTD.append(deleteIcon);\r\n    \r\n                itemRow.append(itemImg, titleTD, priceTD, amountTD, totalTD, deleteButtonTD);\r\n                cartTable.append(itemRow);\r\n    \r\n                totalCost += totalItemCost;\r\n            });\r\n        \r\n            this.cartTotal.innerHTML = `<h4>Summary: <b>${totalCost}$</b></h4>`\r\n        }\r\n    }\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCartView);\n\n//# sourceURL=webpack://shoppingcartjs/./src/myCartView.js?");

/***/ }),

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nclass Product {\r\n    constructor(data = {}) {\r\n      this.id = data.id ?? _utils__WEBPACK_IMPORTED_MODULE_0__.default.generateId(\"product\");\r\n      this.title = data.title;\r\n      this.description = data.description;\r\n      this.price = data.price;\r\n      this.image = data.image || 'no-image.jpg';\r\n      this.inCart = data.inCart ?? 0;\r\n    }\r\n  \r\n    increaseQuantity() {\r\n      this.inCart += 1;\r\n    }\r\n  \r\n    decreaseQuantity() {\r\n      this.inCart = Math.max(0, this.inCart - 1);\r\n    }\r\n  \r\n    getFormattedPrice() {\r\n      return _utils__WEBPACK_IMPORTED_MODULE_0__.default.formatPrice(this.price);\r\n    }\r\n  }\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n\n//# sourceURL=webpack://shoppingcartjs/./src/product.js?");

/***/ }),

/***/ "./src/productsView.js":
/*!*****************************!*\
  !*** ./src/productsView.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProductsView {\r\n    constructor() {\r\n        this.node = document.querySelector('.product-card');\r\n    }\r\n\r\n    displayProducts(products) {\r\n        let displayProduct = '';\r\n\r\n\r\n        products.forEach((item, i) => {\r\n            if (i % 4 === 0) {\r\n                displayProduct += `<div class=\"row\">`;\r\n            }\r\n\r\n\r\n            displayProduct +=\r\n                `\r\n            <div class=\"card col-md-4 col-6 col-lg-3 mt-4 col\">\r\n            \r\n            <a href=\"product.html?id=${item.id}\">\r\n                <img src=\"../src/img/${item.image}\" class=\"card-img-top\" alt=\"${item.image}\">\r\n                </a>\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">${item.title}</h5>\r\n                    <p class=\"card-text\">${item.description}<br> ${item.price}$</p>\r\n                    <a href=\"#\" class=\"btn btn-primary btn add-cart\"> Add to cart<i class=\"bi bi-cart-plus\"></i></a> <span> <a href=\"\" class=\"btn btn-danger\">Delete</a></span>\r\n                </div>\r\n            </div>\r\n       `;\r\n\r\n            if (i % 4 === 3) {\r\n                displayProduct += `</div>`\r\n            }\r\n\r\n            this.node.innerHTML = displayProduct;\r\n\r\n        });\r\n\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsView);\n\n//# sourceURL=webpack://shoppingcartjs/./src/productsView.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Storage = {\r\n    getItem(key) {\r\n      try {\r\n        return JSON.parse(window.localStorage.getItem(key));\r\n      } catch (e) {\r\n        return null;\r\n      }\r\n    },\r\n    setItem(key, value) {\r\n      const strValue = JSON.stringify(value);\r\n      window.localStorage.setItem(key, strValue);\r\n    },\r\n    removeItem(key) {\r\n      window.localStorage.removeItem(key);\r\n    },\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://shoppingcartjs/./src/storage.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\r\n\r\nconst Utils = {\r\n    formatPrice(price) {\r\n      return price.toLocaleString(\"en-US\", {\r\n        style: \"currency\",\r\n        currency: \"USD\"\r\n      });\r\n    },\r\n    generateId(prefix) {\r\n      return prefix + \"-\" + (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    }\r\n  }\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);\n\n//# sourceURL=webpack://shoppingcartjs/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
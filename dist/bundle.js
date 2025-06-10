/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/to-capital-case/index.js":
/*!***********************************************!*\
  !*** ./node_modules/to-capital-case/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar space = __webpack_require__(/*! to-space-case */ \"./node_modules/to-space-case/index.js\")\n\n/**\n * Export.\n */\n\nmodule.exports = toCapitalCase\n\n/**\n * Convert a `string` to capital case.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toCapitalCase(string) {\n  return space(string).replace(/(^|\\s)(\\w)/g, function (matches, previous, letter) {\n    return previous + letter.toUpperCase()\n  })\n}\n\n\n//# sourceURL=webpack://modulo-npm-demo/./node_modules/to-capital-case/index.js?");

/***/ }),

/***/ "./node_modules/to-constant-case/index.js":
/*!************************************************!*\
  !*** ./node_modules/to-constant-case/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar snake = __webpack_require__(/*! to-snake-case */ \"./node_modules/to-snake-case/index.js\")\n\n/**\n * Export.\n */\n\nmodule.exports = toConstantCase\n\n/**\n * Convert a `string` to constant case.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toConstantCase(string) {\n  return snake(string).toUpperCase()\n}\n\n\n//# sourceURL=webpack://modulo-npm-demo/./node_modules/to-constant-case/index.js?");

/***/ }),

/***/ "./node_modules/to-no-case/index.js":
/*!******************************************!*\
  !*** ./node_modules/to-no-case/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n/**\n * Export.\n */\n\nmodule.exports = toNoCase\n\n/**\n * Test whether a string is camel-case.\n */\n\nvar hasSpace = /\\s/\nvar hasSeparator = /(_|-|\\.|:)/\nvar hasCamel = /([a-z][A-Z]|[A-Z][a-z])/\n\n/**\n * Remove any starting case from a `string`, like camel or snake, but keep\n * spaces and punctuation that may be important otherwise.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toNoCase(string) {\n  if (hasSpace.test(string)) return string.toLowerCase()\n  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()\n  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()\n  return string.toLowerCase()\n}\n\n/**\n * Separator splitter.\n */\n\nvar separatorSplitter = /[\\W_]+(.|$)/g\n\n/**\n * Un-separate a `string`.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction unseparate(string) {\n  return string.replace(separatorSplitter, function (m, next) {\n    return next ? ' ' + next : ''\n  })\n}\n\n/**\n * Camelcase splitter.\n */\n\nvar camelSplitter = /(.)([A-Z]+)/g\n\n/**\n * Un-camelcase a `string`.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction uncamelize(string) {\n  return string.replace(camelSplitter, function (m, previous, uppers) {\n    return previous + ' ' + uppers.toLowerCase().split('').join(' ')\n  })\n}\n\n\n//# sourceURL=webpack://modulo-npm-demo/./node_modules/to-no-case/index.js?");

/***/ }),

/***/ "./node_modules/to-snake-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-snake-case/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toSpace = __webpack_require__(/*! to-space-case */ \"./node_modules/to-space-case/index.js\")\n\n/**\n * Export.\n */\n\nmodule.exports = toSnakeCase\n\n/**\n * Convert a `string` to snake case.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toSnakeCase(string) {\n  return toSpace(string).replace(/\\s/g, '_')\n}\n\n\n//# sourceURL=webpack://modulo-npm-demo/./node_modules/to-snake-case/index.js?");

/***/ }),

/***/ "./node_modules/to-space-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-space-case/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar clean = __webpack_require__(/*! to-no-case */ \"./node_modules/to-no-case/index.js\")\n\n/**\n * Export.\n */\n\nmodule.exports = toSpaceCase\n\n/**\n * Convert a `string` to space case.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toSpaceCase(string) {\n  return clean(string).replace(/[\\W_]+(.|$)/g, function (matches, match) {\n    return match ? ' ' + match : ''\n  }).trim()\n}\n\n\n//# sourceURL=webpack://modulo-npm-demo/./node_modules/to-space-case/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\ndocument.getElementById('btn').addEventListener('click', () => {\r\n    const input = document.getElementById('txt').value;\r\n    const result = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.transformText)(input);\r\n    document.getElementById('result').innerText = result;\r\n});\r\n\n\n//# sourceURL=webpack://modulo-npm-demo/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   transformText: () => (/* binding */ transformText)\n/* harmony export */ });\n/* harmony import */ var to_space_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! to-space-case */ \"./node_modules/to-space-case/index.js\");\n/* harmony import */ var to_space_case__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(to_space_case__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var to_capital_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! to-capital-case */ \"./node_modules/to-capital-case/index.js\");\n/* harmony import */ var to_capital_case__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(to_capital_case__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var to_constant_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! to-constant-case */ \"./node_modules/to-constant-case/index.js\");\n/* harmony import */ var to_constant_case__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(to_constant_case__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nfunction transformText(text) {\r\n    return {\r\n        spaceCase: to_space_case__WEBPACK_IMPORTED_MODULE_0___default()(text),\r\n        capitalCase: to_capital_case__WEBPACK_IMPORTED_MODULE_1___default()(text),\r\n        constantCase: to_constant_case__WEBPACK_IMPORTED_MODULE_2___default()(text)\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://modulo-npm-demo/./src/utils.js?");

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
/******/ 			// no module.id needed
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
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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDefaultOptions\": () => (/* binding */ getDefaultOptions),\n/* harmony export */   \"setDefaultOptions\": () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\n\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__.initPage)();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\nclass List {\r\n\r\n    constructor(name) {\r\n        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n\r\n    setTasks(tasks) {\r\n        this.tasks = tasks;\r\n    }\r\n\r\n    add(title){\r\n        this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, this.id));\r\n    }\r\n\r\n    remove(taskId){\r\n        const index = this.tasks.findIndex(task => task.getId() === taskId);\r\n\r\n        if(index > -1){\r\n            this.tasks.splice(index, 1);\r\n        }\r\n    }\r\n\r\n    getId() {\r\n        return this.id;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/list.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isSameDay */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isSameWeek */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Storage {\r\n    static getAllLists() {\r\n        let lists =  JSON.parse(localStorage.getItem('task-lists'));\r\n\r\n        if(!lists) return [];\r\n\r\n        lists = lists.map(list => Object.assign(new _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), list));\r\n\r\n        lists.forEach(list => {\r\n            list.setTasks(list.getTasks()\r\n            .map(task => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task)));\r\n        });\r\n\r\n        return lists\r\n    }\r\n\r\n    static getList(id) {\r\n        return this.getAllLists().find(item => item.getId() === id);\r\n    }\r\n\r\n    static saveLists(lists) {\r\n        localStorage.setItem('task-lists', JSON.stringify(lists));\r\n    }\r\n\r\n    static saveList(newList) {\r\n        const lists = this.getAllLists();\r\n        const index = lists.findIndex(list => list.getId() === newList.getId());\r\n\r\n        if(index === -1) lists.push(newList);\r\n        else lists.splice(index, 1, newList);\r\n            \r\n        this.saveLists(lists);\r\n    }\r\n\r\n    static getAllTasks() {\r\n        const lists = Storage.getAllLists();\r\n\r\n        return lists.reduce((arr, list) => {\r\n            arr.push(list.getTasks());\r\n\r\n            return arr;\r\n        }, []).flat();\r\n    }\r\n\r\n    static getAllTodayTasks() {\r\n        return Storage.getAllTasks().filter(task => (0,date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Date(), new Date(task.getDueDate())));\r\n    }\r\n\r\n    static getAllWeekTasks() {\r\n        return Storage.getAllTasks().filter(task => (0,date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new Date(), new Date(task.getDueDate())));\r\n    }\r\n\r\n    static saveTask(newTask) {\r\n        const list = Storage.getList(newTask.getListId());\r\n        const tasks = list.getTasks();\r\n        const index = tasks.findIndex(task => task.getId() === newTask.getId());\r\n\r\n        if(index !== -1)  tasks.splice(index, 1, newTask);\r\n        else tasks.push(newTask);\r\n        list.setTasks(tasks);\r\n        this.saveList(list);\r\n    }\r\n\r\n    static deleteList(list) {\r\n        Storage.saveLists(\r\n            Storage.getAllLists()\r\n            .filter(item => item.getId() !== list.getId()));\r\n    }\r\n\r\n    static deleteTask(task) {\r\n        const list = Storage.getList(task.getListId());\r\n        list.setTasks(list.getTasks().filter(item => item.getId() !== task.getId()));\r\n        Storage.saveList(list);\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n\r\n    constructor(title, listId, dueDate = null) {\r\n        this.title = title;\r\n        this.dueDate = dueDate;\r\n        this.listId = listId;\r\n        this.id =  Date.now().toString(36) + Math.random().toString(36).substring(2);\r\n    }\r\n\r\n    getId() {\r\n        return this.id;\r\n    }\r\n\r\n    getTitle() {\r\n        return this.title;\r\n    }\r\n\r\n    getDueDate() {\r\n        return this.dueDate;\r\n    }\r\n\r\n    getListId() {\r\n        return this.listId;\r\n    }\r\n\r\n    setTitle(title) {\r\n        this.title = title;\r\n    }\r\n\r\n    setDueDate(dueDate) {\r\n        this.dueDate = dueDate;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initPage\": () => (/* binding */ initPage)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\n\r\nfunction initPage() {\r\n\r\n    renderDefaultList('main', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTasks());\r\n    renderLists();\r\n\r\n    initButtons();\r\n}\r\n\r\n// render the default list of all tasks\r\nfunction renderDefaultList(listName, tasks) {\r\n\r\n    const button = document.querySelector(`#${listName}`);\r\n    const tasksList = document.querySelector('.tasks-list');\r\n\r\n    setTitle(`${listName[0].toUpperCase() + listName.substring(1)}`);\r\n\r\n    //set main button to be active\r\n    setActive(button);\r\n\r\n    //clear all tasks\r\n    clearTasks();\r\n\r\n    //render tasks\r\n    tasks.forEach(task => tasksList.appendChild(makeTask(task)));\r\n\r\n    hideAddTaskButton();\r\n}\r\n\r\n//render the button list of lists \r\nfunction renderLists() {\r\n\r\n    const userLists = document.querySelector('.user-lists');\r\n    const lists = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllLists(); \r\n\r\n    //render lists\r\n    lists.forEach(list => userLists.appendChild(makeList(list)));\r\n}\r\n\r\n//render tasks from list\r\nfunction renderTasks(list) {\r\n\r\n    const tasksList = document.querySelector('.tasks-list');\r\n    const listTitle = document.querySelector('.list-title');\r\n\r\n    setTitle(list.getName());\r\n\r\n    //clear all tasks\r\n    clearTasks();\r\n\r\n    //render tasks\r\n    list.getTasks().forEach(task => tasksList.appendChild(makeTask(task)));\r\n\r\n    showAddTaskButton();\r\n}\r\n\r\n//init all buttons on page\r\nfunction initButtons() {\r\n\r\n    initDefaultButtons();\r\n    initPopupButtons();\r\n    initAddButtons();\r\n    initCancleButtons();\r\n}\r\n\r\nfunction initDefaultButtons() {\r\n\r\n    initDefaultButton('main', renderDefaultList);\r\n    initDefaultButton('today', renderDefaultList);\r\n    initDefaultButton('week', renderDefaultList);\r\n}\r\n\r\nfunction initPopupButtons() {\r\n    const buttons = document.querySelectorAll('.btn-add');\r\n    \r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', e => { showPopup(button) });\r\n    });\r\n}\r\n\r\nfunction initAddButtons() {\r\n\r\n    initAddListButton();\r\n    initAddTaskButton();\r\n}\r\n\r\nfunction initAddListButton() {\r\n\r\n    const inputField = document.querySelector('#add-list');\r\n    const addListButton = inputField.nextElementSibling.children[0];\r\n\r\n    addListButton.addEventListener('click', e => { \r\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveList(new _list__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputField.value)); \r\n        clearLists();\r\n        renderLists();\r\n        inputField.value = '';\r\n        hidePopup(inputField.parentElement);\r\n    });\r\n}\r\n\r\nfunction initAddTaskButton() {\r\n\r\n    const inputField = document.querySelector('#add-task');\r\n    const addTaskButton = inputField.nextElementSibling.children[0];\r\n\r\n    addTaskButton.addEventListener('click', e => { \r\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTask(new _task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputField.value, getActiveList())); \r\n        clearTasks();\r\n        renderTasks(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList(getActiveList()));\r\n        inputField.value = '';\r\n        hidePopup(inputField.parentElement);\r\n    });\r\n}\r\n\r\nfunction initCancleButtons() {\r\n    const buttons = document.querySelectorAll('.input-btns:last-child');\r\n\r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', e => { hidePopup(button.parentElement) });\r\n    });\r\n}\r\n\r\nfunction initDefaultButton(btnName, func) {\r\n\r\n    const actions = {\r\n        'main': _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTasks,\r\n        'today': _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTodayTasks,\r\n        'week': _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllWeekTasks\r\n    };\r\n\r\n    const button = document.querySelector(`#${btnName}`);\r\n\r\n    button.addEventListener('click', e => {\r\n        setAllNotActive();\r\n        setActive(button);\r\n        func(btnName, actions[btnName]());\r\n    });\r\n}\r\n\r\n//clear the tasks\r\nfunction clearTasks() {\r\n\r\n    const tasksList = document.querySelector('.tasks-list');\r\n\r\n    while(tasksList.lastChild) tasksList.removeChild(tasksList.lastChild);\r\n}\r\n\r\nfunction clearLists() {\r\n\r\n    const lists = document.querySelector('.user-lists');\r\n\r\n    while(lists.lastChild) lists.removeChild(lists.lastChild);\r\n}\r\n\r\n//set the button to be active\r\nfunction setActive(button) {\r\n\r\n    setAllNotActive();\r\n\r\n    button.classList.add('active');\r\n}\r\n\r\n//set all buttons to no active\r\nfunction setAllNotActive() {\r\n\r\n    const buttons = document.querySelectorAll('button');\r\n\r\n    buttons.forEach(button => button.classList.remove('active'));\r\n}\r\n\r\n//create a task component\r\nfunction makeTask(task) {\r\n\r\n    const taskButton = document.createElement('button');\r\n    const taskTitle = document.createElement('span');\r\n    const dateInput = document.createElement('input');\r\n\r\n    taskButton.classList.add('task');\r\n\r\n    taskTitle.textContent = task.getTitle();\r\n    taskButton.appendChild(taskTitle);\r\n\r\n    dateInput.type = 'date';\r\n    dateInput.value = task.getDueDate();\r\n    dateInput.addEventListener('click', e => { e.stopPropagation() });\r\n    dateInput.addEventListener('change', e => {\r\n        task.setDueDate(e.target.value);\r\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTask(task);\r\n\r\n        const activeList = getActiveList();\r\n\r\n        if(activeList === 'main') renderDefaultList('main', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTasks());\r\n        else if(activeList === 'today') renderDefaultList('today', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTodayTasks());\r\n        else if(activeList === 'week') renderDefaultList('week', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllWeekTasks());\r\n        else renderTasks(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList(task.getListId()));\r\n     });\r\n    \r\n    taskButton.appendChild(dateInput);\r\n\r\n    taskButton.addEventListener('click', e => {\r\n        const activeList = getActiveList();\r\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(task);\r\n\r\n        if(activeList === 'main') renderDefaultList('main', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTasks());\r\n        else if(activeList === 'today') renderDefaultList('today', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTodayTasks());\r\n        else if(activeList === 'week') renderDefaultList('week', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllWeekTasks());\r\n        else renderTasks(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList(task.getListId()));\r\n    });\r\n\r\n    return taskButton;\r\n}\r\n\r\n//create a list component\r\nfunction makeList(list) {\r\n\r\n    const button = document.createElement('button');\r\n    const text = document.createElement('span');\r\n    const del = document.createElement('button');\r\n\r\n    button.classList.add('btn-default');\r\n    button.id = list.getId()\r\n\r\n    text.textContent = list.getName();\r\n\r\n    del.textContent = 'X';\r\n    del.classList.add('del');\r\n\r\n    button.appendChild(text);\r\n    button.appendChild(del);\r\n\r\n    button.addEventListener('click', e => {\r\n        setActive(e.target);\r\n        renderTasks(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList(list.getId()));\r\n    });\r\n\r\n    button.addEventListener('mouseover', e => { del.style['display'] = 'initial'; });\r\n    button.addEventListener('mouseout', e => { del.style['display'] = 'none' });;\r\n\r\n    del.addEventListener('click', e => {\r\n        e.stopPropagation();\r\n\r\n        const activeList = getActiveList();\r\n\r\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteList(list);\r\n        clearLists();\r\n        renderLists();\r\n\r\n        if(activeList === list.getId() || activeList === 'main') {\r\n            renderDefaultList('main', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTasks());\r\n        }\r\n        else if(activeList === 'today') {\r\n            renderDefaultList('today', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTodayTasks());\r\n        }\r\n        else if(activeList === 'week') {\r\n            renderDefaultList('week', _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllWeekTasks());\r\n        }\r\n        else {\r\n            setActive(document.querySelector(`#${activeList}`));\r\n        }\r\n    });\r\n\r\n    return button;\r\n}\r\n\r\nfunction setTitle(title) {\r\n\r\n    const listTitle = document.querySelector('.list-title');\r\n\r\n    listTitle.textContent = title;\r\n}\r\n\r\nfunction showPopup(button) {\r\n    const popup = button.nextElementSibling;\r\n\r\n    button.style['display'] = 'none';\r\n    popup.style['display'] = 'flex';\r\n}\r\n\r\nfunction hidePopup(popup) {\r\n    const button = popup.previousElementSibling;\r\n\r\n    button.style['display'] = 'initial';\r\n    popup.style['display'] = 'none';\r\n}\r\n\r\nfunction getActiveList() {\r\n    return document.querySelector('.btn-default.active').id;\r\n}\r\n\r\nfunction hideAddTaskButton() {\r\n    const button = document.querySelector('.tasks .btn-add');\r\n\r\n    button.style['display'] = 'none'\r\n}\r\n\r\nfunction showAddTaskButton() {\r\n    const button = document.querySelector('.tasks .btn-add');\r\n\r\n    button.style['display'] = 'initial'\r\n}\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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
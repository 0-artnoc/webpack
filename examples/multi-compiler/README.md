# example.js

```javascript
if(ENV === "mobile") {
	require("./mobile-stuff");
}
console.log("Running " + ENV + " build");
```

# webpack.config.js

```javascript
var path = require("path");
var webpack = require("../../");
module.exports = [
	{
		name: "mobile",
		// mode: "development || "production",
		entry: "./example",
		output: {
			path: path.join(__dirname, "dist"),
			filename: "mobile.js"
		},
		plugins: [
			new webpack.DefinePlugin({
				ENV: JSON.stringify("mobile")
			})
		]
	},

	{
		name: "desktop",
		// mode: "development || "production",
		entry: "./example",
		output: {
			path: path.join(__dirname, "dist"),
			filename: "desktop.js"
		},
		plugins: [
			new webpack.DefinePlugin({
				ENV: JSON.stringify("desktop")
			})
		]
	}
];
```

# dist/desktop.js

```javascript
/******/ ((modules, runtime) => { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 		modules[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(0);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements:  */
/***/ (() => {

if(false) {}
console.log("Running " + "desktop" + " build");

/***/ })
/******/ ]);
```

# dist/mobile.js

```javascript
/******/ ((modules, runtime) => { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 		modules[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(0);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unusedmodule, __unusedexports, __webpack_require__) => {

if(true) {
	__webpack_require__(/*! ./mobile-stuff */ 1);
}
console.log("Running " + "mobile" + " build");

/***/ }),
/* 1 */
/*!*************************!*\
  !*** ./mobile-stuff.js ***!
  \*************************/
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements:  */
/***/ (() => {

// mobile only stuff

/***/ })
/******/ ]);
```

# Info

## Unoptimized

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 5.0.0-alpha.30
Child mobile:
    Hash: 0a1b2c3d4e5f6a7b8c9d
        Asset      Size  Chunks             Chunk Names
    mobile.js  1.86 KiB     {0}  [emitted]  main
    Entrypoint main = mobile.js
    chunk {0} mobile.js (main) 114 bytes [entry] [rendered]
        > ./example main
     [0] ./example.js 94 bytes {0} [built]
         [used exports unknown]
         entry ./example main
     [1] ./mobile-stuff.js 20 bytes {0} [built]
         [used exports unknown]
         cjs require ./mobile-stuff [0] ./example.js 2:1-26
Child desktop:
    Hash: 0a1b2c3d4e5f6a7b8c9d
         Asset     Size  Chunks             Chunk Names
    desktop.js  1.5 KiB     {0}  [emitted]  main
    Entrypoint main = desktop.js
    chunk {0} desktop.js (main) 94 bytes [entry] [rendered]
        > ./example main
     [0] ./example.js 94 bytes {0} [built]
         [used exports unknown]
         entry ./example main
```

## Production mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 5.0.0-alpha.30
Child mobile:
    Hash: 0a1b2c3d4e5f6a7b8c9d
        Asset       Size  Chunks             Chunk Names
    mobile.js  231 bytes   {179}  [emitted]  main
    Entrypoint main = mobile.js
    chunk {179} mobile.js (main) 114 bytes [entry] [rendered]
        > ./example main
     [144] ./example.js 94 bytes {179} [built]
           entry ./example main
     [791] ./mobile-stuff.js 20 bytes {179} [built]
           cjs require ./mobile-stuff [144] ./example.js 2:1-26
Child desktop:
    Hash: 0a1b2c3d4e5f6a7b8c9d
         Asset       Size  Chunks             Chunk Names
    desktop.js  209 bytes   {179}  [emitted]  main
    Entrypoint main = desktop.js
    chunk {179} desktop.js (main) 94 bytes [entry] [rendered]
        > ./example main
     [144] ./example.js 94 bytes {179} [built]
           entry ./example main
```

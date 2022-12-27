/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Bootloader.ts":
/*!***************************!*\
  !*** ./src/Bootloader.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAppSettingsIdentifier": () => (/* binding */ IAppSettingsIdentifier),
/* harmony export */   "default": () => (/* binding */ Bootloader)
/* harmony export */ });
/* harmony import */ var _amaic_dijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amaic/dijs */ "./node_modules/@amaic/dijs/dist/index.js");
/* harmony import */ var _amaic_dijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_amaic_dijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
/* harmony import */ var _amaic_dijs_extensions_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amaic/dijs-extensions-registration */ "./node_modules/@amaic/dijs-extensions-registration/dist/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const IAppSettingsIdentifier = Symbol("IAppSettings");
const RegisterServicesCallbackDefault = () => Promise.resolve();
const InitializationCallbackDefault = () => Promise.resolve();
let FetchAppSettingsTask;
let RegisterServices;
let Initialization;
function Bootloader({ appSettingsUrl = "", registerServices = RegisterServicesCallbackDefault, initialization = InitializationCallbackDefault }) {
    FetchAppSettingsTask = fetch(appSettingsUrl);
    RegisterServices = registerServices;
    Initialization = initialization;
    if (document.readyState === "loading") {
        window.addEventListener('DOMContentLoaded', startup);
    }
    else {
        startup();
    }
}
function startup() {
    return __awaiter(this, void 0, void 0, function* () {
        if (FetchAppSettingsTask == undefined) {
            console.error("FetchAppSettingsTask is undefined.");
            return;
        }
        if (RegisterServices == undefined) {
            console.error("RegisterServices is undefined.");
            return;
        }
        if (Initialization == undefined) {
            console.error("Initialization is undefined.");
            return;
        }
        const appSettingsrResponse = yield FetchAppSettingsTask;
        if (appSettingsrResponse.ok == false) {
            console.error("Unable to load %s: %d %s", appSettingsrResponse.url, appSettingsrResponse.status, appSettingsrResponse.statusText);
            return;
        }
        const appSettings = yield appSettingsrResponse.json();
        const serviceCollection = new _amaic_dijs__WEBPACK_IMPORTED_MODULE_0__.ServiceCollection();
        serviceCollection.RegisterInstance(_amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_1__.ServiceRegistrationMode.Single, IAppSettingsIdentifier, appSettings);
        RegisterServices(serviceCollection, appSettings);
        const serviceProvider = serviceCollection.CreateServiceProvider();
        Initialization(serviceProvider);
    });
}


/***/ }),

/***/ "./src/ComponentLoader.ts":
/*!********************************!*\
  !*** ./src/ComponentLoader.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComponentLoader)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);

class ComponentLoader {
    constructor() {
    }
    getConfig(componentName, callback) {
        callback({ template: "<div>Alexander</div>" });
        // ko.components.defaultLoader.getConfig(componentName, callback);
    }
    loadComponent(componentName, config, callback) {
        knockout__WEBPACK_IMPORTED_MODULE_0___default().components.defaultLoader.loadComponent(componentName, config, callback);
    }
    loadTemplate(componentName, config, callback) {
        knockout__WEBPACK_IMPORTED_MODULE_0___default().components.defaultLoader.loadTemplate(componentName, config, callback);
    }
    loadViewModel(componentName, config, callback) {
        knockout__WEBPACK_IMPORTED_MODULE_0___default().components.defaultLoader.loadViewModel(componentName, config, callback);
    }
}


/***/ }),

/***/ "./src/Run.ts":
/*!********************!*\
  !*** ./src/Run.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialization)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComponentLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentLoader */ "./src/ComponentLoader.ts");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function Initialization(serviceProvider) {
    return __awaiter(this, void 0, void 0, function* () {
        (knockout__WEBPACK_IMPORTED_MODULE_0___default().components.loaders.length) = 0;
        knockout__WEBPACK_IMPORTED_MODULE_0___default().components.loaders.push(new _ComponentLoader__WEBPACK_IMPORTED_MODULE_1__["default"]());
        knockout__WEBPACK_IMPORTED_MODULE_0___default().components.register("amaic-spa-content", {});
        knockout__WEBPACK_IMPORTED_MODULE_0___default().applyBindings({});
        return Promise.resolve();
    });
}


/***/ }),

/***/ "./src/Services.ts":
/*!*************************!*\
  !*** ./src/Services.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterServices)
/* harmony export */ });
/* harmony import */ var _amaic_sma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amaic/sma */ "./node_modules/@amaic/sma/dist/index.js");
/* harmony import */ var _amaic_sma__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_amaic_sma__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function RegisterServices(serviceCollection, appSettings) {
    return __awaiter(this, void 0, void 0, function* () {
        serviceCollection.RegisterTransientClass(_amaic_sma__WEBPACK_IMPORTED_MODULE_0__.IStateManagerIdentifier, _amaic_sma__WEBPACK_IMPORTED_MODULE_0__.StateManager, (classType, serviceProvider) => new classType(serviceProvider.GetRequiredServices(_amaic_sma__WEBPACK_IMPORTED_MODULE_0__.IStateManagerStorageIdentifier)));
        serviceCollection.RegisterTransientClass(_amaic_sma__WEBPACK_IMPORTED_MODULE_0__.IStateManagerStorageIdentifier, _amaic_sma__WEBPACK_IMPORTED_MODULE_0__.StateManagerLocalStorage);
    });
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bootloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bootloader */ "./src/Bootloader.ts");
/* harmony import */ var _Run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Run */ "./src/Run.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services */ "./src/Services.ts");



(0,_Bootloader__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appSettingsUrl: "./appSettings.json",
    registerServices: _Services__WEBPACK_IMPORTED_MODULE_2__["default"],
    initialization: _Run__WEBPACK_IMPORTED_MODULE_1__["default"]
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkamaic_spa"] = self["webpackChunkamaic_spa"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_amaic_dijs-extensions-registration_dist_index_js-node_modules_amaic_sma_-d1b395"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=95b4ebf03ee147ec8a4d.js.map
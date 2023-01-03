/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../amaic-dijs-extensions-registration/dist/extensions.js":
/*!****************************************************************!*\
  !*** ../amaic-dijs-extensions-registration/dist/extensions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ServiceCollection = void 0;
var dijs_1 = __webpack_require__(/*! @amaic/dijs */ "../amaic-dijs-extensions-registration/node_modules/@amaic/dijs/dist/index.js");
Object.defineProperty(exports, "ServiceCollection", ({
  enumerable: true,
  get: function get() {
    return dijs_1.ServiceCollection;
  }
}));
var dijs_abstractions_1 = __webpack_require__(/*! @amaic/dijs-abstractions */ "../amaic-dijs-extensions-registration/node_modules/@amaic/dijs-abstractions/dist/index.js");
dijs_1.ServiceCollection.prototype.RegisterTransientClass = function (id, ct, ctor) {
  this.RegisterClass(dijs_abstractions_1.ServiceRegistrationMode.Single, dijs_abstractions_1.ServiceType.Transient, id, ct, ctor);
};
dijs_1.ServiceCollection.prototype.OverwriteTransientClass = function (id, ct, ctor) {
  this.RegisterClass(dijs_abstractions_1.ServiceRegistrationMode.Overwrite, dijs_abstractions_1.ServiceType.Transient, id, ct, ctor);
};
dijs_1.ServiceCollection.prototype.AddTransientClass = function (id, ct, ctor) {
  this.RegisterClass(dijs_abstractions_1.ServiceRegistrationMode.Multiple, dijs_abstractions_1.ServiceType.Transient, id, ct, ctor);
};
dijs_1.ServiceCollection.prototype.RegisterTransientNamedClass = function (id, ct, ctor) {
  this.RegisterClass(dijs_abstractions_1.ServiceRegistrationMode.Single, dijs_abstractions_1.ServiceType.TransientNamed, id, ct, ctor);
};
dijs_1.ServiceCollection.prototype.RegisterTransientFactory = function (id, factory) {
  this.RegisterFactory(dijs_abstractions_1.ServiceRegistrationMode.Single, dijs_abstractions_1.ServiceType.Transient, id, factory);
};
dijs_1.ServiceCollection.prototype.RegisterTransientNamedFactory = function (id, factory) {
  this.RegisterFactory(dijs_abstractions_1.ServiceRegistrationMode.Single, dijs_abstractions_1.ServiceType.TransientNamed, id, factory);
};

/***/ }),

/***/ "../amaic-dijs-extensions-registration/dist/index.js":
/*!***********************************************************!*\
  !*** ../amaic-dijs-extensions-registration/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ServiceCollection = void 0;
var extensions_1 = __webpack_require__(/*! ./extensions */ "../amaic-dijs-extensions-registration/dist/extensions.js");
Object.defineProperty(exports, "ServiceCollection", ({
  enumerable: true,
  get: function get() {
    return extensions_1.ServiceCollection;
  }
}));

/***/ }),

/***/ "./src/pages/HomePage.html":
/*!*********************************!*\
  !*** ./src/pages/HomePage.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div>\r\n    <h1>Homepage</h1>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Run.ts":
/*!********************!*\
  !*** ./src/Run.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Startup)
/* harmony export */ });
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _interfaces_INavigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces/INavigator */ "./src/interfaces/INavigator.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./src/pages/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function Startup(serviceProvider) {
    return __awaiter(this, void 0, void 0, function* () {
        const navigator = serviceProvider.GetRequiredService(_interfaces_INavigator__WEBPACK_IMPORTED_MODULE_3__.INavigatorIdentifier);
        yield navigator.Initialize();
        new _pages__WEBPACK_IMPORTED_MODULE_4__.HomePage();
        console.debug("SPA is running.");
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
/* harmony import */ var _amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
/* harmony import */ var _amaic_sma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amaic/sma */ "./node_modules/@amaic/sma/dist/index.js");
/* harmony import */ var _amaic_sma__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amaic_sma__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_IKnockoutService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces/IKnockoutService */ "./src/interfaces/IKnockoutService.ts");
/* harmony import */ var _interfaces_INavigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces/INavigator */ "./src/interfaces/INavigator.ts");
/* harmony import */ var _services_KnockoutService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/KnockoutService */ "./src/services/KnockoutService.ts");
/* harmony import */ var _services_Navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/Navigator */ "./src/services/Navigator.ts");
/* harmony import */ var _amaic_dijs_extensions_registration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amaic/dijs-extensions-registration */ "../amaic-dijs-extensions-registration/dist/index.js");
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
        serviceCollection.RegisterClass(_amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_0__.ServiceRegistrationMode.Single, _amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_0__.ServiceType.Singleton, _interfaces_IKnockoutService__WEBPACK_IMPORTED_MODULE_2__.IKnockoutServiceIdentifier, _services_KnockoutService__WEBPACK_IMPORTED_MODULE_4__["default"]);
        serviceCollection.RegisterClass(_amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_0__.ServiceRegistrationMode.Single, _amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_0__.ServiceType.Singleton, _interfaces_INavigator__WEBPACK_IMPORTED_MODULE_3__.INavigatorIdentifier, _services_Navigator__WEBPACK_IMPORTED_MODULE_5__["default"]);
        registerStateManager(serviceCollection);
    });
}
function registerStateManager(serviceCollection) {
    serviceCollection.RegisterTransientClass(_amaic_sma__WEBPACK_IMPORTED_MODULE_1__.IStateManagerIdentifier, _amaic_sma__WEBPACK_IMPORTED_MODULE_1__.StateManager, (ct, sp) => new ct(sp.GetRequiredServices(_amaic_sma__WEBPACK_IMPORTED_MODULE_1__.IStateManagerStorageIdentifier)));
    serviceCollection.AddTransientClass(_amaic_sma__WEBPACK_IMPORTED_MODULE_1__.IStateManagerStorageIdentifier, _amaic_sma__WEBPACK_IMPORTED_MODULE_1__.StateManagerLocalStorage);
    serviceCollection.AddTransientClass(_amaic_sma__WEBPACK_IMPORTED_MODULE_1__.IStateManagerStorageIdentifier, _amaic_sma__WEBPACK_IMPORTED_MODULE_1__.StateManagerLocationStorage);
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Bootloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/Bootloader */ "./src/services/Bootloader.ts");
/* harmony import */ var _Run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Run */ "./src/Run.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services */ "./src/Services.ts");



(0,_services_Bootloader__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appSettingsUrl: "./appSettings.json",
    registerServices: _Services__WEBPACK_IMPORTED_MODULE_2__["default"],
    startup: _Run__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),

/***/ "./src/interfaces/IAppSettings.ts":
/*!****************************************!*\
  !*** ./src/interfaces/IAppSettings.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAppSettingsIdentifier": () => (/* binding */ IAppSettingsIdentifier),
/* harmony export */   "IsIAppSettings": () => (/* binding */ IsIAppSettings)
/* harmony export */ });
const IAppSettingsIdentifier = Symbol("IAppSettings");
function IsIAppSettings(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IAppSettings) === IAppSettingsIdentifier;
}


/***/ }),

/***/ "./src/interfaces/IInitialize.ts":
/*!***************************************!*\
  !*** ./src/interfaces/IInitialize.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IInitializeIdentifier": () => (/* binding */ IInitializeIdentifier),
/* harmony export */   "IsIInitialize": () => (/* binding */ IsIInitialize)
/* harmony export */ });
const IInitializeIdentifier = Symbol("IInitialize");
function IsIInitialize(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IInitialize) === IInitializeIdentifier;
}


/***/ }),

/***/ "./src/interfaces/IKnockoutService.ts":
/*!********************************************!*\
  !*** ./src/interfaces/IKnockoutService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IKnockoutServiceIdentifier": () => (/* binding */ IKnockoutServiceIdentifier),
/* harmony export */   "IsIKnockoutService": () => (/* binding */ IsIKnockoutService)
/* harmony export */ });
const IKnockoutServiceIdentifier = Symbol("IKnockoutService");
function IsIKnockoutService(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IKnockoutService) === IKnockoutServiceIdentifier;
}


/***/ }),

/***/ "./src/interfaces/INavigator.ts":
/*!**************************************!*\
  !*** ./src/interfaces/INavigator.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INavigatorIdentifier": () => (/* binding */ INavigatorIdentifier),
/* harmony export */   "IsINavigator": () => (/* binding */ IsINavigator)
/* harmony export */ });
const INavigatorIdentifier = Symbol("INavigator");
function IsINavigator(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.INavigator) === INavigatorIdentifier;
}


/***/ }),

/***/ "./src/options/DefaultAppSettings.ts":
/*!*******************************************!*\
  !*** ./src/options/DefaultAppSettings.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultAppSettings": () => (/* binding */ DefaultAppSettings)
/* harmony export */ });
/* harmony import */ var _interfaces_IAppSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/IAppSettings */ "./src/interfaces/IAppSettings.ts");

const DefaultAppSettings = {
    IAppSettings: _interfaces_IAppSettings__WEBPACK_IMPORTED_MODULE_0__.IAppSettingsIdentifier,
    ApiEndpoint: ""
};


/***/ }),

/***/ "./src/pages/HomePage.ts":
/*!*******************************!*\
  !*** ./src/pages/HomePage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _HomePage_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.html */ "./src/pages/HomePage.html");

class HomePage {
    constructor() {
        console.debug(_HomePage_html__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
}


/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* reexport safe */ _HomePage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage */ "./src/pages/HomePage.ts");




/***/ }),

/***/ "./src/services/Bootloader.ts":
/*!************************************!*\
  !*** ./src/services/Bootloader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bootloader)
/* harmony export */ });
/* harmony import */ var _amaic_dijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amaic/dijs */ "./node_modules/@amaic/dijs/dist/index.js");
/* harmony import */ var _amaic_dijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_amaic_dijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
/* harmony import */ var _amaic_dijs_extensions_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amaic/dijs-extensions-registration */ "../amaic-dijs-extensions-registration/dist/index.js");
/* harmony import */ var _interfaces_IAppSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/IAppSettings */ "./src/interfaces/IAppSettings.ts");
/* harmony import */ var _options_DefaultAppSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../options/DefaultAppSettings */ "./src/options/DefaultAppSettings.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const RegisterServicesCallbackDefault = () => Promise.resolve();
const StartupCallbackDefault = () => Promise.resolve();
let FetchAppSettingsTask;
let RegisterServices;
let Startup;
function Bootloader({ appSettingsUrl = "", registerServices = RegisterServicesCallbackDefault, startup = StartupCallbackDefault }) {
    FetchAppSettingsTask = fetch(appSettingsUrl);
    RegisterServices = registerServices;
    Startup = startup;
    if (document.readyState === "loading") {
        window.addEventListener('DOMContentLoaded', onContentLoaded);
    }
    else {
        onContentLoaded();
    }
}
function onContentLoaded() {
    return __awaiter(this, void 0, void 0, function* () {
        if (FetchAppSettingsTask == undefined) {
            console.error("FetchAppSettingsTask is undefined.");
            return;
        }
        if (RegisterServices == undefined) {
            console.error("RegisterServices is undefined.");
            return;
        }
        if (Startup == undefined) {
            console.error("Startup is undefined.");
            return;
        }
        const appSettingsResponse = yield FetchAppSettingsTask;
        if (appSettingsResponse.ok == false) {
            console.error("Unable to load %s: %d %s", appSettingsResponse.url, appSettingsResponse.status, appSettingsResponse.statusText);
            return;
        }
        const appSettings = Object.assign(Object.assign({}, _options_DefaultAppSettings__WEBPACK_IMPORTED_MODULE_4__.DefaultAppSettings), yield appSettingsResponse.json());
        const serviceCollection = new _amaic_dijs__WEBPACK_IMPORTED_MODULE_0__.ServiceCollection();
        serviceCollection.RegisterInstance(_amaic_dijs_abstractions__WEBPACK_IMPORTED_MODULE_1__.ServiceRegistrationMode.Single, _interfaces_IAppSettings__WEBPACK_IMPORTED_MODULE_3__.IAppSettingsIdentifier, appSettings);
        RegisterServices(serviceCollection, appSettings);
        const serviceProvider = serviceCollection.CreateServiceProvider();
        Startup(serviceProvider);
    });
}


/***/ }),

/***/ "./src/services/KnockoutService.ts":
/*!*****************************************!*\
  !*** ./src/services/KnockoutService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KnockoutService)
/* harmony export */ });
/* harmony import */ var _interfaces_IInitialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/IInitialize */ "./src/interfaces/IInitialize.ts");
/* harmony import */ var _interfaces_IKnockoutService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/IKnockoutService */ "./src/interfaces/IKnockoutService.ts");


class KnockoutService {
    constructor() {
        this.IInitialize = _interfaces_IInitialize__WEBPACK_IMPORTED_MODULE_0__.IInitializeIdentifier;
        this.IKnockoutService = _interfaces_IKnockoutService__WEBPACK_IMPORTED_MODULE_1__.IKnockoutServiceIdentifier;
    }
    Initialize() {
        throw new Error("Method not implemented.");
    }
}


/***/ }),

/***/ "./src/services/Navigator.ts":
/*!***********************************!*\
  !*** ./src/services/Navigator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigator)
/* harmony export */ });
/* harmony import */ var _interfaces_IInitialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/IInitialize */ "./src/interfaces/IInitialize.ts");
/* harmony import */ var _interfaces_INavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/INavigator */ "./src/interfaces/INavigator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Navigator {
    constructor() {
        this.INavigator = _interfaces_INavigator__WEBPACK_IMPORTED_MODULE_1__.INavigatorIdentifier;
        this.IInitialize = _interfaces_IInitialize__WEBPACK_IMPORTED_MODULE_0__.IInitializeIdentifier;
    }
    Initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.resolve();
        });
    }
}


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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-amaic-dijs-extensions-registration_node_modules_amaic_dijs_dist_index_js-node_modules-f7fa18"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.f94d2959ae08dd2c1b3d.js.map
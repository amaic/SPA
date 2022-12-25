/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../amaic-sma/dist/classes/StateKey.js":
/*!*********************************************!*\
  !*** ../amaic-sma/dist/classes/StateKey.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IStateKey_1 = __webpack_require__(/*! ../interfaces/IStateKey */ "../amaic-sma/dist/interfaces/IStateKey.js");
class StateKey {
    constructor(storageType, key, scope) {
        this.IStateKey = IStateKey_1.IStateKeyIdentifier;
        this._storageType = storageType;
        this._key = key;
        this._scope = scope == undefined ? null : scope;
    }
    get StorageType() { return this._storageType; }
    get Key() { return this._key; }
    get Scope() { return this._scope; }
    get FullQualifiedName() {
        return this._scope == null ? this._key : `${this._scope}-${this._key}`;
    }
}
exports["default"] = StateKey;
//# sourceMappingURL=StateKey.js.map

/***/ }),

/***/ "../amaic-sma/dist/classes/StateManager.js":
/*!*************************************************!*\
  !*** ../amaic-sma/dist/classes/StateManager.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const StorageTypeNotRegistered_1 = __importDefault(__webpack_require__(/*! ../errors/StorageTypeNotRegistered */ "../amaic-sma/dist/errors/StorageTypeNotRegistered.js"));
const IStateManager_1 = __webpack_require__(/*! ../interfaces/IStateManager */ "../amaic-sma/dist/interfaces/IStateManager.js");
class StateManager {
    constructor(storages) {
        this.IStateManager = IStateManager_1.IStateManagerIdentifier;
        this._storages = {};
        for (const storage of storages) {
            this._storages[storage.StorageType] = storage;
        }
    }
    _getStorage(storageType) {
        const storage = this._storages[storageType];
        if (storage == undefined)
            throw new StorageTypeNotRegistered_1.default();
        return storage;
    }
    SetState(stateKey, value) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const storage = this._getStorage(stateKey.StorageType);
            storage.SetState((_b = (_a = stateKey.Scope) === null || _a === void 0 ? void 0 : _a.Scope) !== null && _b !== void 0 ? _b : null, stateKey.Key, value);
        });
    }
    GetState(stateKey) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const storage = this._getStorage(stateKey.StorageType);
            return yield storage.GetState((_b = (_a = stateKey.Scope) === null || _a === void 0 ? void 0 : _a.Scope) !== null && _b !== void 0 ? _b : null, stateKey.Key);
        });
    }
    GetRegisteredStorageTypes() {
        return Object.getOwnPropertySymbols(this._storages);
    }
}
exports["default"] = StateManager;
//# sourceMappingURL=StateManager.js.map

/***/ }),

/***/ "../amaic-sma/dist/errors/StorageTypeNotRegistered.js":
/*!************************************************************!*\
  !*** ../amaic-sma/dist/errors/StorageTypeNotRegistered.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class StorageTypeNotRegistered extends Error {
    constructor(message = "Storage type not registered.") {
        super(message);
    }
}
exports["default"] = StorageTypeNotRegistered;
//# sourceMappingURL=StorageTypeNotRegistered.js.map

/***/ }),

/***/ "../amaic-sma/dist/index.js":
/*!**********************************!*\
  !*** ../amaic-sma/dist/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateManagerLocationStorageType = exports.StateManagerLocationStorage = exports.StateManagerLocalStorageType = exports.StateManagerLocalStorage = exports.IStateManagerStorageIdentifier = exports.IStateKeyIdentifier = exports.StateKey = exports.IStateManagerIdentifier = exports.StateManager = void 0;
const StateManager_1 = __importDefault(__webpack_require__(/*! ./classes/StateManager */ "../amaic-sma/dist/classes/StateManager.js"));
exports.StateManager = StateManager_1.default;
const StateManagerLocalStorage_1 = __importStar(__webpack_require__(/*! ./storages/StateManagerLocalStorage */ "../amaic-sma/dist/storages/StateManagerLocalStorage.js"));
exports.StateManagerLocalStorage = StateManagerLocalStorage_1.default;
Object.defineProperty(exports, "StateManagerLocalStorageType", ({ enumerable: true, get: function () { return StateManagerLocalStorage_1.StateManagerLocalStorageType; } }));
const IStateManager_1 = __webpack_require__(/*! ./interfaces/IStateManager */ "../amaic-sma/dist/interfaces/IStateManager.js");
Object.defineProperty(exports, "IStateManagerIdentifier", ({ enumerable: true, get: function () { return IStateManager_1.IStateManagerIdentifier; } }));
const IStateManagerStorage_1 = __webpack_require__(/*! ./interfaces/IStateManagerStorage */ "../amaic-sma/dist/interfaces/IStateManagerStorage.js");
Object.defineProperty(exports, "IStateManagerStorageIdentifier", ({ enumerable: true, get: function () { return IStateManagerStorage_1.IStateManagerStorageIdentifier; } }));
const StateKey_1 = __importDefault(__webpack_require__(/*! ./classes/StateKey */ "../amaic-sma/dist/classes/StateKey.js"));
exports.StateKey = StateKey_1.default;
const IStateKey_1 = __webpack_require__(/*! ./interfaces/IStateKey */ "../amaic-sma/dist/interfaces/IStateKey.js");
Object.defineProperty(exports, "IStateKeyIdentifier", ({ enumerable: true, get: function () { return IStateKey_1.IStateKeyIdentifier; } }));
const StateManagerLocationStorage_1 = __importStar(__webpack_require__(/*! ./storages/StateManagerLocationStorage */ "../amaic-sma/dist/storages/StateManagerLocationStorage.js"));
exports.StateManagerLocationStorage = StateManagerLocationStorage_1.default;
Object.defineProperty(exports, "StateManagerLocationStorageType", ({ enumerable: true, get: function () { return StateManagerLocationStorage_1.StateManagerLocationStorageType; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../amaic-sma/dist/interfaces/IStateKey.js":
/*!*************************************************!*\
  !*** ../amaic-sma/dist/interfaces/IStateKey.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsIStateKey = exports.IStateKeyIdentifier = void 0;
/** Unique identifier of IStateKey. */
exports.IStateKeyIdentifier = Symbol("IStateKey");
/**
 * Test if a object implements IStateKey.
 * @param instance test object
 * @returns if implements IStateKey then true else false
 */
function IsIStateKey(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateKey) === exports.IStateKeyIdentifier;
}
exports.IsIStateKey = IsIStateKey;
//# sourceMappingURL=IStateKey.js.map

/***/ }),

/***/ "../amaic-sma/dist/interfaces/IStateManager.js":
/*!*****************************************************!*\
  !*** ../amaic-sma/dist/interfaces/IStateManager.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsIStateManager = exports.IStateManagerIdentifier = void 0;
/** Unique identifier of IStateManager */
exports.IStateManagerIdentifier = Symbol("IStateManager");
/**
 * Test if a object implements IStateManager.
 * @param instance test object
 * @returns if implements IStateManager then true else false
 */
function IsIStateManager(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateManager) === exports.IStateManagerIdentifier;
}
exports.IsIStateManager = IsIStateManager;
//# sourceMappingURL=IStateManager.js.map

/***/ }),

/***/ "../amaic-sma/dist/interfaces/IStateManagerStorage.js":
/*!************************************************************!*\
  !*** ../amaic-sma/dist/interfaces/IStateManagerStorage.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsIStateManagerStorage = exports.IStateManagerStorageIdentifier = void 0;
exports.IStateManagerStorageIdentifier = Symbol("IStateManagerStorage");
function IsIStateManagerStorage(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateManagerStorage) === exports.IStateManagerStorageIdentifier;
}
exports.IsIStateManagerStorage = IsIStateManagerStorage;
//# sourceMappingURL=IStateManagerStorage.js.map

/***/ }),

/***/ "../amaic-sma/dist/storages/StateManagerLocalStorage.js":
/*!**************************************************************!*\
  !*** ../amaic-sma/dist/storages/StateManagerLocalStorage.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateManagerLocalStorageType = void 0;
const IStateManagerStorage_1 = __webpack_require__(/*! ../interfaces/IStateManagerStorage */ "../amaic-sma/dist/interfaces/IStateManagerStorage.js");
class StateManagerLocalStorage {
    constructor() {
        this.IStateManagerStorage = IStateManagerStorage_1.IStateManagerStorageIdentifier;
    }
    get StorageType() {
        return exports.StateManagerLocalStorageType;
    }
    _getFullQualifiedKey(scope, key) {
        return scope == null ? key : `${scope}.${key}`;
    }
    SetState(scope, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullQualifiedKey = this._getFullQualifiedKey(scope, key);
            if (value == null) {
                window.localStorage.removeItem(fullQualifiedKey);
            }
            else {
                window.localStorage.setItem(fullQualifiedKey, value);
            }
        });
    }
    GetState(scope, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullQualifiedKey = this._getFullQualifiedKey(scope, key);
            return window.localStorage.getItem(fullQualifiedKey);
        });
    }
}
exports["default"] = StateManagerLocalStorage;
exports.StateManagerLocalStorageType = Symbol("StateManagerLocalStorage");
//# sourceMappingURL=StateManagerLocalStorage.js.map

/***/ }),

/***/ "../amaic-sma/dist/storages/StateManagerLocationStorage.js":
/*!*****************************************************************!*\
  !*** ../amaic-sma/dist/storages/StateManagerLocationStorage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateManagerLocationStorageType = void 0;
const IStateManagerStorage_1 = __webpack_require__(/*! ../interfaces/IStateManagerStorage */ "../amaic-sma/dist/interfaces/IStateManagerStorage.js");
class StateManagerLocationStorage {
    constructor() {
        this.IStateManagerStorage = IStateManagerStorage_1.IStateManagerStorageIdentifier;
    }
    get StorageType() {
        return exports.StateManagerLocationStorageType;
    }
    _getFullQualifiedKey(scope, key) {
        return scope == null ? key : `${scope}-${key}`;
    }
    SetState(scope, key, value) {
        const fullQualifiedKey = this._getFullQualifiedKey(scope, key);
        const searchParams = new URLSearchParams(window.location.search);
        if (value == null) {
            searchParams.delete(fullQualifiedKey);
        }
        else {
            searchParams.set(fullQualifiedKey, value);
        }
        window.location.search = searchParams.toString();
        return Promise.resolve();
    }
    GetState(scope, key) {
        const fullQualifiedKey = this._getFullQualifiedKey(scope, key);
        const searchParams = new URLSearchParams(window.location.search);
        const value = searchParams.get(fullQualifiedKey);
        return Promise.resolve(value);
    }
}
exports["default"] = StateManagerLocationStorage;
exports.StateManagerLocationStorageType = Symbol("StateManagerLocationStorage");
//# sourceMappingURL=StateManagerLocationStorage.js.map

/***/ }),

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
        knockout__WEBPACK_IMPORTED_MODULE_0___default().components.register("content", {});
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
/* harmony import */ var amaic_sma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amaic-sma */ "../amaic-sma/dist/index.js");
/* harmony import */ var amaic_sma__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amaic_sma__WEBPACK_IMPORTED_MODULE_0__);
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
        serviceCollection.RegisterTransientClass(amaic_sma__WEBPACK_IMPORTED_MODULE_0__.IStateManagerIdentifier, amaic_sma__WEBPACK_IMPORTED_MODULE_0__.StateManager, (classType, serviceProvider) => new classType(serviceProvider.GetRequiredServices(amaic_sma__WEBPACK_IMPORTED_MODULE_0__.IStateManagerStorageIdentifier)));
        serviceCollection.RegisterTransientClass(amaic_sma__WEBPACK_IMPORTED_MODULE_0__.IStateManagerStorageIdentifier, amaic_sma__WEBPACK_IMPORTED_MODULE_0__.StateManagerLocalStorage);
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkspa"] = self["webpackChunkspa"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_amaic_dijs-extensions-registration_dist_index_js-node_modules_knockout_b-281400"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.57bad6a4365a1532ac7e.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@amaic/dijs-abstractions/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@amaic/dijs-abstractions/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceRegistrationMode = exports.ServiceType = exports.IsIServiceProvider = exports.IServiceProviderIdentifier = exports.IsIServiceCollection = exports.IServiceCollectionIdentifier = void 0;
const IServiceCollection_1 = __webpack_require__(/*! ./interfaces/IServiceCollection */ "./node_modules/@amaic/dijs-abstractions/dist/interfaces/IServiceCollection.js");
Object.defineProperty(exports, "IServiceCollectionIdentifier", ({ enumerable: true, get: function () { return IServiceCollection_1.IServiceCollectionIdentifier; } }));
Object.defineProperty(exports, "IsIServiceCollection", ({ enumerable: true, get: function () { return IServiceCollection_1.IsIServiceCollection; } }));
const IServiceProvider_1 = __webpack_require__(/*! ./interfaces/IServiceProvider */ "./node_modules/@amaic/dijs-abstractions/dist/interfaces/IServiceProvider.js");
Object.defineProperty(exports, "IServiceProviderIdentifier", ({ enumerable: true, get: function () { return IServiceProvider_1.IServiceProviderIdentifier; } }));
Object.defineProperty(exports, "IsIServiceProvider", ({ enumerable: true, get: function () { return IServiceProvider_1.IsIServiceProvider; } }));
const ServiceType_1 = __webpack_require__(/*! ./types/ServiceType */ "./node_modules/@amaic/dijs-abstractions/dist/types/ServiceType.js");
Object.defineProperty(exports, "ServiceType", ({ enumerable: true, get: function () { return ServiceType_1.ServiceType; } }));
const ServiceRegistrationMode_1 = __webpack_require__(/*! ./types/ServiceRegistrationMode */ "./node_modules/@amaic/dijs-abstractions/dist/types/ServiceRegistrationMode.js");
Object.defineProperty(exports, "ServiceRegistrationMode", ({ enumerable: true, get: function () { return ServiceRegistrationMode_1.ServiceRegistrationMode; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs-abstractions/dist/interfaces/IServiceCollection.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@amaic/dijs-abstractions/dist/interfaces/IServiceCollection.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsIServiceCollection = exports.IServiceCollectionIdentifier = void 0;
/** Unique IServiceCollection identifier. */
exports.IServiceCollectionIdentifier = Symbol("IServiceCollection");
/**
 * Test if object implements interface IServiceCollection.
 * @param instance object to test
 * @returns if interface is implemented then true else false
 */
function IsIServiceCollection(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IServiceCollection) === exports.IServiceCollectionIdentifier;
}
exports.IsIServiceCollection = IsIServiceCollection;
//# sourceMappingURL=IServiceCollection.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs-abstractions/dist/interfaces/IServiceProvider.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@amaic/dijs-abstractions/dist/interfaces/IServiceProvider.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsIServiceProvider = exports.IServiceProviderIdentifier = void 0;
/** Unique IServiceProvider identifier. */
exports.IServiceProviderIdentifier = Symbol("IServiceProvider");
/**
 * Test if object implements interface IServiceProvider.
 * @param instance object to test
 * @returns if interface is implemented then true else false
 */
function IsIServiceProvider(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IServiceProvider) === exports.IServiceProviderIdentifier;
}
exports.IsIServiceProvider = IsIServiceProvider;
//# sourceMappingURL=IServiceProvider.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs-abstractions/dist/types/ServiceRegistrationMode.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@amaic/dijs-abstractions/dist/types/ServiceRegistrationMode.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceRegistrationMode = void 0;
var ServiceRegistrationMode;
(function (ServiceRegistrationMode) {
    /** Only one registration per identifier or identifier with name allowed. */
    ServiceRegistrationMode["Single"] = "single";
    /** Overwrite previous registrations of identifier or identifier with name. */
    ServiceRegistrationMode["Overwrite"] = "overwrite";
    /** Multiple registrations per identifier or identifier with namre allowed. */
    ServiceRegistrationMode["Multiple"] = "multiple";
})(ServiceRegistrationMode = exports.ServiceRegistrationMode || (exports.ServiceRegistrationMode = {}));
//# sourceMappingURL=ServiceRegistrationMode.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs-abstractions/dist/types/ServiceType.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@amaic/dijs-abstractions/dist/types/ServiceType.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceType = void 0;
var ServiceType;
(function (ServiceType) {
    /** Register already existing instance. */
    ServiceType["Instance"] = "instance";
    /** Only one instance for all. */
    ServiceType["Singleton"] = "singleton";
    /** Each name gets it's own instance, but only one instance per name. */
    ServiceType["Named"] = "named";
    /** Each scope gets it's own instance, but only one instance per scope. */
    ServiceType["Scoped"] = "scoped";
    /** Each scope/name combination gets it's own instance, but only one instance per scope/name combination. */
    ServiceType["ScopedNamed"] = "scopednamed";
    /** Everytime a new instance. */
    ServiceType["Transient"] = "transient";
    /** Everytime a new instance for each name. */
    ServiceType["TransientNamed"] = "transientnamed";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
//# sourceMappingURL=ServiceType.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs-extensions-registration/dist/extensions.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@amaic/dijs-extensions-registration/dist/extensions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceCollection = void 0;
const dijs_1 = __webpack_require__(/*! @amaic/dijs */ "./node_modules/@amaic/dijs/dist/index.js");
Object.defineProperty(exports, "ServiceCollection", ({ enumerable: true, get: function () { return dijs_1.ServiceCollection; } }));
const dijs_abstractions_1 = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
dijs_1.ServiceCollection.prototype.RegisterTransientClass = function (id, ct, ctr) {
    this.RegisterClass(dijs_abstractions_1.ServiceRegistrationMode.Single, dijs_abstractions_1.ServiceType.Transient, id, ct, ctr);
};
//# sourceMappingURL=extensions.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs-extensions-registration/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@amaic/dijs-extensions-registration/dist/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceCollection = void 0;
const extensions_1 = __webpack_require__(/*! ./extensions */ "./node_modules/@amaic/dijs-extensions-registration/dist/extensions.js");
Object.defineProperty(exports, "ServiceCollection", ({ enumerable: true, get: function () { return extensions_1.ServiceCollection; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/classes/Service.js":
/*!**********************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/classes/Service.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InstanceNameNotAvailable_1 = __importDefault(__webpack_require__(/*! ../errors/InstanceNameNotAvailable */ "./node_modules/@amaic/dijs/dist/errors/InstanceNameNotAvailable.js"));
const InstanceNameMandatory_1 = __importDefault(__webpack_require__(/*! ../errors/InstanceNameMandatory */ "./node_modules/@amaic/dijs/dist/errors/InstanceNameMandatory.js"));
const UnknownServiceIdentifierError_1 = __importDefault(__webpack_require__(/*! ../errors/UnknownServiceIdentifierError */ "./node_modules/@amaic/dijs/dist/errors/UnknownServiceIdentifierError.js"));
const dijs_abstractions_1 = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
const InvalidServiceType_1 = __importDefault(__webpack_require__(/*! ../errors/InvalidServiceType */ "./node_modules/@amaic/dijs/dist/errors/InvalidServiceType.js"));
class Service {
    constructor(serviceProvider, serviceDescriptor) {
        this._instances = {};
        this._serviceProvider = serviceProvider;
        this._serviceDescriptor = serviceDescriptor;
    }
    _getInstance(serviceConstructorIndex, name) {
        let internalName;
        switch (this._serviceDescriptor.ServiceType) {
            case dijs_abstractions_1.ServiceType.Instance:
            case dijs_abstractions_1.ServiceType.Singleton:
            case dijs_abstractions_1.ServiceType.Transient:
            case dijs_abstractions_1.ServiceType.Scoped:
                if (name !== undefined)
                    throw new InstanceNameNotAvailable_1.default(`Service is of type '${this._serviceDescriptor.ServiceType}' and parameter 'instanceName' must be null.`);
                internalName = "";
                break;
            case dijs_abstractions_1.ServiceType.Named:
            case dijs_abstractions_1.ServiceType.ScopedNamed:
            case dijs_abstractions_1.ServiceType.TransientNamed:
                if (name == undefined || name.isEmptyOrWhitespace())
                    throw new InstanceNameMandatory_1.default(`Service is of type '${this._serviceDescriptor.ServiceType}' and parameter 'name' must not be null, empty or whitespace.`);
                internalName = name;
                break;
            default:
                throw new InvalidServiceType_1.default();
        }
        const serviceConstructor = this._serviceDescriptor.ServiceConstructors[serviceConstructorIndex];
        switch (this._serviceDescriptor.ServiceType) {
            case dijs_abstractions_1.ServiceType.Transient:
            case dijs_abstractions_1.ServiceType.TransientNamed:
                return serviceConstructor(this._serviceProvider, name);
            case dijs_abstractions_1.ServiceType.Instance:
            case dijs_abstractions_1.ServiceType.Singleton:
            case dijs_abstractions_1.ServiceType.Scoped:
            case dijs_abstractions_1.ServiceType.Named:
            case dijs_abstractions_1.ServiceType.ScopedNamed:
                if (this._instances[internalName] == undefined) {
                    this._instances[internalName] = new Array(this._serviceDescriptor.ServiceConstructors.length);
                }
                if (this._instances[internalName][serviceConstructorIndex] == undefined) {
                    this._instances[internalName][serviceConstructorIndex] = serviceConstructor(this._serviceProvider, name);
                }
                return this._instances[internalName][serviceConstructorIndex];
            default:
                throw new UnknownServiceIdentifierError_1.default();
        }
    }
    GetInstance(name) {
        const serviceConstructorIndex = this._serviceDescriptor.ServiceConstructors.length - 1;
        if (serviceConstructorIndex < 0) {
            throw new Error("Should not happen: no service constructor found.");
        }
        return this._getInstance(serviceConstructorIndex, name);
    }
    GetInstances(name) {
        const instances = [];
        for (let serviceConstructorIndex = 0; serviceConstructorIndex < this._serviceDescriptor.ServiceConstructors.length; serviceConstructorIndex++) {
            instances.push(this._getInstance(serviceConstructorIndex, name));
        }
        return instances;
    }
}
exports["default"] = Service;
//# sourceMappingURL=Service.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/classes/ServiceCollection.js":
/*!********************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/classes/ServiceCollection.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dijs_abstractions_1 = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
const InvalidServiceType_1 = __importDefault(__webpack_require__(/*! ../errors/InvalidServiceType */ "./node_modules/@amaic/dijs/dist/errors/InvalidServiceType.js"));
const ServiceIdentifierAlreadyInUse_1 = __importDefault(__webpack_require__(/*! ../errors/ServiceIdentifierAlreadyInUse */ "./node_modules/@amaic/dijs/dist/errors/ServiceIdentifierAlreadyInUse.js"));
const ServiceDescriptor_1 = __importDefault(__webpack_require__(/*! ./ServiceDescriptor */ "./node_modules/@amaic/dijs/dist/classes/ServiceDescriptor.js"));
const ServiceScope_1 = __importDefault(__webpack_require__(/*! ./ServiceScope */ "./node_modules/@amaic/dijs/dist/classes/ServiceScope.js"));
class ServiceCollection {
    constructor() {
        this.IServiceCollection = dijs_abstractions_1.IServiceCollectionIdentifier;
        this._serviceDescriptors = {};
        this.RegisterInstance(dijs_abstractions_1.ServiceRegistrationMode.Single, dijs_abstractions_1.IServiceCollectionIdentifier, this);
    }
    _registerService(registrationMode, serviceType, serviceIdentifier, serviceConstructor) {
        switch (registrationMode) {
            case dijs_abstractions_1.ServiceRegistrationMode.Overwrite:
                this._serviceDescriptors[serviceIdentifier] = new ServiceDescriptor_1.default(serviceIdentifier, serviceType, serviceConstructor);
                break;
            case dijs_abstractions_1.ServiceRegistrationMode.Single:
                if (this._serviceDescriptors[serviceIdentifier] != undefined) {
                    throw new ServiceIdentifierAlreadyInUse_1.default(`Service with identifier '${serviceIdentifier.description}' is already registered.`);
                }
                this._serviceDescriptors[serviceIdentifier] = new ServiceDescriptor_1.default(serviceIdentifier, serviceType, serviceConstructor);
                break;
            case dijs_abstractions_1.ServiceRegistrationMode.Multiple:
                if (this._serviceDescriptors[serviceIdentifier] == undefined) {
                    this._serviceDescriptors[serviceIdentifier] = new ServiceDescriptor_1.default(serviceIdentifier, serviceType, serviceConstructor);
                }
                else {
                    if (serviceType != this._serviceDescriptors[serviceIdentifier].ServiceType) {
                        throw new InvalidServiceType_1.default(`${serviceType} <> ${this._serviceDescriptors[serviceIdentifier].ServiceType}`);
                    }
                    this._serviceDescriptors[serviceIdentifier].ServiceConstructors.push(serviceConstructor);
                }
                break;
            default:
                throw new Error("Invalid service registration mode.");
        }
    }
    RegisterInstance(registrationMode, interfaceIdentifier, instance) {
        this._registerService(registrationMode, dijs_abstractions_1.ServiceType.Instance, interfaceIdentifier, () => instance);
    }
    RegisterClass(registrationMode, serviceType, interfaceIdentifier, classType, constructor) {
        this._registerService(registrationMode, serviceType, interfaceIdentifier, (serviceProvider, name) => constructor == undefined ? new classType() : constructor(classType, serviceProvider, name));
    }
    RegisterFactory(registrationMode, serviceType, interfaceIdentifier, factory) {
        this._registerService(registrationMode, serviceType, interfaceIdentifier, (serviceProvider, name) => factory(serviceProvider, name));
    }
    CreateServiceProvider() {
        const serviceDescriptorsClone = {};
        const keys = Object.getOwnPropertySymbols(this._serviceDescriptors);
        for (let key of keys) {
            serviceDescriptorsClone[key] = this._serviceDescriptors[key].Clone();
        }
        const serviceProvider = new ServiceScope_1.default(null, serviceDescriptorsClone);
        return serviceProvider;
    }
}
exports["default"] = ServiceCollection;
//# sourceMappingURL=ServiceCollection.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/classes/ServiceDescriptor.js":
/*!********************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/classes/ServiceDescriptor.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IClonable_1 = __webpack_require__(/*! ../interfaces/IClonable */ "./node_modules/@amaic/dijs/dist/interfaces/IClonable.js");
class ServiceDescriptor {
    constructor(serviceIdentifier, serviceType, serviceConstructor) {
        this.ICloneable = IClonable_1.ICloneableIdentifier;
        this.ServiceIdentifier = serviceIdentifier;
        this.ServiceType = serviceType;
        this.ServiceConstructors = new Array(serviceConstructor);
    }
    Clone() {
        const clone = Object.assign({}, this);
        clone.ServiceConstructors = [...this.ServiceConstructors];
        return clone;
    }
}
exports["default"] = ServiceDescriptor;
//# sourceMappingURL=ServiceDescriptor.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/classes/ServiceScope.js":
/*!***************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/classes/ServiceScope.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ScopedNotAllowedInMainContext_1 = __importDefault(__webpack_require__(/*! ../errors/ScopedNotAllowedInMainContext */ "./node_modules/@amaic/dijs/dist/errors/ScopedNotAllowedInMainContext.js"));
const UnknownOrUnsupportedServiceType_1 = __importDefault(__webpack_require__(/*! ../errors/UnknownOrUnsupportedServiceType */ "./node_modules/@amaic/dijs/dist/errors/UnknownOrUnsupportedServiceType.js"));
const UnknownServiceIdentifierError_1 = __importDefault(__webpack_require__(/*! ../errors/UnknownServiceIdentifierError */ "./node_modules/@amaic/dijs/dist/errors/UnknownServiceIdentifierError.js"));
const Service_1 = __importDefault(__webpack_require__(/*! ./Service */ "./node_modules/@amaic/dijs/dist/classes/Service.js"));
const dijs_abstractions_1 = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
class ServiceScope {
    constructor(parentScope, serviceDescriptors) {
        this.IServiceProvider = dijs_abstractions_1.IServiceProviderIdentifier;
        this._services = {};
        this._parentScope = parentScope;
        this._serviceDescriptors = serviceDescriptors;
    }
    get IsMainContext() {
        return this._parentScope == null;
    }
    _getService(serviceDescriptor) {
        switch (serviceDescriptor.ServiceType) {
            case dijs_abstractions_1.ServiceType.Instance:
            case dijs_abstractions_1.ServiceType.Singleton:
            case dijs_abstractions_1.ServiceType.Named:
            case dijs_abstractions_1.ServiceType.Transient:
            case dijs_abstractions_1.ServiceType.TransientNamed:
                if (this._parentScope === null) {
                    if (this._services[serviceDescriptor.ServiceIdentifier] === undefined) {
                        this._services[serviceDescriptor.ServiceIdentifier] = new Service_1.default(this, serviceDescriptor);
                    }
                    return this._services[serviceDescriptor.ServiceIdentifier];
                }
                else {
                    return this._parentScope._getService(serviceDescriptor);
                }
            case dijs_abstractions_1.ServiceType.Scoped:
            case dijs_abstractions_1.ServiceType.ScopedNamed:
                if (this.IsMainContext) {
                    throw new ScopedNotAllowedInMainContext_1.default(`Scoped service type '${serviceDescriptor.ServiceIdentifier.description}' not allowed in main context.`);
                }
                if (this._services[serviceDescriptor.ServiceIdentifier] === undefined) {
                    this._services[serviceDescriptor.ServiceIdentifier] = new Service_1.default(this, serviceDescriptor);
                }
                return this._services[serviceDescriptor.ServiceIdentifier];
            default:
                throw new UnknownOrUnsupportedServiceType_1.default();
        }
    }
    GetService(serviceIdentifier, name) {
        const serviceDescriptor = this._serviceDescriptors[serviceIdentifier];
        if (serviceDescriptor === undefined)
            return null;
        const service = this._getService(serviceDescriptor);
        return service.GetInstance(name);
    }
    GetRequiredService(serviceIdentifier, name) {
        const serviceDescriptor = this._serviceDescriptors[serviceIdentifier];
        if (serviceDescriptor === undefined)
            throw new UnknownServiceIdentifierError_1.default(`Service with identifier '${serviceIdentifier.description}' not found.`);
        const service = this._getService(serviceDescriptor);
        return service.GetInstance(name);
    }
    GetServices(serviceIdentifier, name) {
        const serviceDescriptor = this._serviceDescriptors[serviceIdentifier];
        if (serviceDescriptor === undefined)
            return [];
        const service = this._getService(serviceDescriptor);
        return service.GetInstances(name);
    }
    GetRequiredServices(serviceIdentifier, name) {
        const serviceDescriptor = this._serviceDescriptors[serviceIdentifier];
        if (serviceDescriptor === undefined)
            throw new UnknownServiceIdentifierError_1.default(`Service with identifier '${serviceIdentifier.description}' not found.`);
        const service = this._getService(serviceDescriptor);
        return service.GetInstances(name);
    }
    CreateScope() {
        return new ServiceScope(this, this._serviceDescriptors);
    }
}
exports["default"] = ServiceScope;
//# sourceMappingURL=ServiceScope.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/errors/InstanceNameMandatory.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/errors/InstanceNameMandatory.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class InstanceNameMandatory extends Error {
    constructor(message = "Instance name mandatory.") {
        super(message);
    }
}
exports["default"] = InstanceNameMandatory;
//# sourceMappingURL=InstanceNameMandatory.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/errors/InstanceNameNotAvailable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/errors/InstanceNameNotAvailable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class InstanceNameNotAvailable extends Error {
    constructor(message = "Instance name not available.") {
        super(message);
    }
}
exports["default"] = InstanceNameNotAvailable;
//# sourceMappingURL=InstanceNameNotAvailable.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/errors/InvalidServiceType.js":
/*!********************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/errors/InvalidServiceType.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class InvalidServiceType extends Error {
    constructor(message = "With multiple registration mode all services must be of same service type.") {
        super(message);
    }
}
exports["default"] = InvalidServiceType;
//# sourceMappingURL=InvalidServiceType.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/errors/ScopedNotAllowedInMainContext.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/errors/ScopedNotAllowedInMainContext.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ScopedNotAllowedInMainContext extends Error {
    constructor(message = "Scoped service type not allowed in main context.") {
        super(message);
    }
}
exports["default"] = ScopedNotAllowedInMainContext;
//# sourceMappingURL=ScopedNotAllowedInMainContext.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/errors/ServiceIdentifierAlreadyInUse.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/errors/ServiceIdentifierAlreadyInUse.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ServiceIdentifierAlreadyInUse extends Error {
    constructor(message = "Service identifier already in use.") {
        super(message);
    }
}
exports["default"] = ServiceIdentifierAlreadyInUse;
//# sourceMappingURL=ServiceIdentifierAlreadyInUse.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/errors/UnknownOrUnsupportedServiceType.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/errors/UnknownOrUnsupportedServiceType.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class UnknownOrUnsupportedServiceType extends Error {
    constructor(message = "Unknown or unsupported service type.") {
        super(message);
    }
}
exports["default"] = UnknownOrUnsupportedServiceType;
//# sourceMappingURL=UnknownOrUnsupportedServiceType.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/errors/UnknownServiceIdentifierError.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/errors/UnknownServiceIdentifierError.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class UnknownServiceIdentifierError extends Error {
    constructor(message = "Unknown service identifier.") {
        super(message);
    }
}
exports["default"] = UnknownServiceIdentifierError;
//# sourceMappingURL=UnknownServiceIdentifierError.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceCollection = void 0;
__webpack_require__(/*! ./polyfills */ "./node_modules/@amaic/dijs/dist/polyfills/index.js");
const ServiceCollection_1 = __importDefault(__webpack_require__(/*! ./classes/ServiceCollection */ "./node_modules/@amaic/dijs/dist/classes/ServiceCollection.js"));
exports.ServiceCollection = ServiceCollection_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/interfaces/IClonable.js":
/*!***************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/interfaces/IClonable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsICloneable = exports.ICloneableIdentifier = void 0;
exports.ICloneableIdentifier = Symbol("ICloneable");
function IsICloneable(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.ICloneable) === exports.ICloneableIdentifier;
}
exports.IsICloneable = IsICloneable;
//# sourceMappingURL=IClonable.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/polyfills/StringExtensions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/polyfills/StringExtensions.js ***!
  \*********************************************************************/
/***/ (() => {


String.prototype.isEmptyOrWhitespace = function () {
    return this.match(/^ *$/) !== null;
};
//# sourceMappingURL=StringExtensions.js.map

/***/ }),

/***/ "./node_modules/@amaic/dijs/dist/polyfills/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@amaic/dijs/dist/polyfills/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./StringExtensions */ "./node_modules/@amaic/dijs/dist/polyfills/StringExtensions.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/bootloader.ts":
/*!***************************!*\
  !*** ./src/bootloader.ts ***!
  \***************************/
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
const dijs_1 = __webpack_require__(/*! @amaic/dijs */ "./node_modules/@amaic/dijs/dist/index.js");
const dijs_abstractions_1 = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
__webpack_require__(/*! @amaic/dijs-extensions-registration */ "./node_modules/@amaic/dijs-extensions-registration/dist/index.js");
const IAppSettings_1 = __webpack_require__(/*! ./interfaces/IAppSettings */ "./src/interfaces/IAppSettings.ts");
let fetchAppSettingsTask;
function Bootloader(appSettingsUrl) {
    fetchAppSettingsTask = fetch(appSettingsUrl);
    if (document.readyState === "loading") {
        window.addEventListener('DOMContentLoaded', Startup);
    }
    else {
        Startup();
    }
}
exports["default"] = Bootloader;
function Startup() {
    return __awaiter(this, void 0, void 0, function* () {
        if (fetchAppSettingsTask == undefined) {
            console.error("fetchAppSettingsTask is undefined.");
            return;
        }
        const appSettingsrResponse = yield fetchAppSettingsTask;
        if (appSettingsrResponse.ok == false) {
            console.error("Unable to load %s: %d %s", appSettingsrResponse.url, appSettingsrResponse.status, appSettingsrResponse.statusText);
            return;
        }
        const appSettings = yield appSettingsrResponse.json();
        const serviceCollection = new dijs_1.ServiceCollection();
        serviceCollection.RegisterInstance(dijs_abstractions_1.ServiceRegistrationMode.Single, IAppSettings_1.IAppSettingsIdentifier, appSettings);
        const serviceProvider = serviceCollection.CreateServiceProvider();
        const test = serviceProvider.GetRequiredService(IAppSettings_1.IAppSettingsIdentifier);
        console.debug(test.ApiEndpoint);
    });
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const bootloader_1 = __importDefault(__webpack_require__(/*! ./bootloader */ "./src/bootloader.ts"));
(0, bootloader_1.default)("./appSettings.json");


/***/ }),

/***/ "./src/interfaces/IAppSettings.ts":
/*!****************************************!*\
  !*** ./src/interfaces/IAppSettings.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IAppSettingsIdentifier = void 0;
exports.IAppSettingsIdentifier = Symbol("IAppSettings");


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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map
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

/***/ "../amaic-sma/dist/classes/StateKey.js":
/*!*********************************************!*\
  !*** ../amaic-sma/dist/classes/StateKey.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const IStateKey_1 = __webpack_require__(/*! ../interfaces/IStateKey */ "../amaic-sma/dist/interfaces/IStateKey.js");
class StateKey {
  constructor(storageType, key, scope) {
    this.IStateKey = IStateKey_1.IStateKeyIdentifier;
    this._storageType = storageType;
    this._key = key;
    this._scope = scope == undefined ? null : scope;
  }
  get StorageType() {
    return this._storageType;
  }
  get Key() {
    return this._key;
  }
  get Scope() {
    return this._scope;
  }
  get FullQualifiedName() {
    return this._scope == null ? this._key : `${this._scope}-${this._key}`;
  }
}
exports["default"] = StateKey;

/***/ }),

/***/ "../amaic-sma/dist/classes/StateManager.js":
/*!*************************************************!*\
  !*** ../amaic-sma/dist/classes/StateManager.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
    if (storage == undefined) throw new StorageTypeNotRegistered_1.default();
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

/***/ }),

/***/ "../amaic-sma/dist/errors/StorageTypeNotRegistered.js":
/*!************************************************************!*\
  !*** ../amaic-sma/dist/errors/StorageTypeNotRegistered.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
class StorageTypeNotRegistered extends Error {
  constructor(message = "Storage type not registered.") {
    super(message);
  }
}
exports["default"] = StorageTypeNotRegistered;

/***/ }),

/***/ "../amaic-sma/dist/index.js":
/*!**********************************!*\
  !*** ../amaic-sma/dist/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StateManagerLocationStorageType = exports.StateManagerLocationStorage = exports.StateManagerLocalStorageType = exports.StateManagerLocalStorage = exports.IStateManagerStorageIdentifier = exports.IStateKeyIdentifier = exports.StateKey = exports.IStateManagerIdentifier = exports.StateManager = void 0;
const StateManager_1 = __importDefault(__webpack_require__(/*! ./classes/StateManager */ "../amaic-sma/dist/classes/StateManager.js"));
exports.StateManager = StateManager_1.default;
const StateManagerLocalStorage_1 = __importStar(__webpack_require__(/*! ./storages/StateManagerLocalStorage */ "../amaic-sma/dist/storages/StateManagerLocalStorage.js"));
exports.StateManagerLocalStorage = StateManagerLocalStorage_1.default;
Object.defineProperty(exports, "StateManagerLocalStorageType", ({
  enumerable: true,
  get: function () {
    return StateManagerLocalStorage_1.StateManagerLocalStorageType;
  }
}));
const IStateManager_1 = __webpack_require__(/*! ./interfaces/IStateManager */ "../amaic-sma/dist/interfaces/IStateManager.js");
Object.defineProperty(exports, "IStateManagerIdentifier", ({
  enumerable: true,
  get: function () {
    return IStateManager_1.IStateManagerIdentifier;
  }
}));
const IStateManagerStorage_1 = __webpack_require__(/*! ./interfaces/IStateManagerStorage */ "../amaic-sma/dist/interfaces/IStateManagerStorage.js");
Object.defineProperty(exports, "IStateManagerStorageIdentifier", ({
  enumerable: true,
  get: function () {
    return IStateManagerStorage_1.IStateManagerStorageIdentifier;
  }
}));
const StateKey_1 = __importDefault(__webpack_require__(/*! ./classes/StateKey */ "../amaic-sma/dist/classes/StateKey.js"));
exports.StateKey = StateKey_1.default;
const IStateKey_1 = __webpack_require__(/*! ./interfaces/IStateKey */ "../amaic-sma/dist/interfaces/IStateKey.js");
Object.defineProperty(exports, "IStateKeyIdentifier", ({
  enumerable: true,
  get: function () {
    return IStateKey_1.IStateKeyIdentifier;
  }
}));
const StateManagerLocationStorage_1 = __importStar(__webpack_require__(/*! ./storages/StateManagerLocationStorage */ "../amaic-sma/dist/storages/StateManagerLocationStorage.js"));
exports.StateManagerLocationStorage = StateManagerLocationStorage_1.default;
Object.defineProperty(exports, "StateManagerLocationStorageType", ({
  enumerable: true,
  get: function () {
    return StateManagerLocationStorage_1.StateManagerLocationStorageType;
  }
}));

/***/ }),

/***/ "../amaic-sma/dist/interfaces/IStateKey.js":
/*!*************************************************!*\
  !*** ../amaic-sma/dist/interfaces/IStateKey.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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

/***/ }),

/***/ "../amaic-sma/dist/interfaces/IStateManager.js":
/*!*****************************************************!*\
  !*** ../amaic-sma/dist/interfaces/IStateManager.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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

/***/ }),

/***/ "../amaic-sma/dist/interfaces/IStateManagerStorage.js":
/*!************************************************************!*\
  !*** ../amaic-sma/dist/interfaces/IStateManagerStorage.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.IsIStateManagerStorage = exports.IStateManagerStorageIdentifier = void 0;
exports.IStateManagerStorageIdentifier = Symbol("IStateManagerStorage");
function IsIStateManagerStorage(instance) {
  return (instance === null || instance === void 0 ? void 0 : instance.IStateManagerStorage) === exports.IStateManagerStorageIdentifier;
}
exports.IsIStateManagerStorage = IsIStateManagerStorage;

/***/ }),

/***/ "../amaic-sma/dist/storages/StateManagerLocalStorage.js":
/*!**************************************************************!*\
  !*** ../amaic-sma/dist/storages/StateManagerLocalStorage.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
      } else {
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

/***/ }),

/***/ "../amaic-sma/dist/storages/StateManagerLocationStorage.js":
/*!*****************************************************************!*\
  !*** ../amaic-sma/dist/storages/StateManagerLocationStorage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
    } else {
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

/***/ }),

/***/ "./src/Bootloader.ts":
/*!***************************!*\
  !*** ./src/Bootloader.ts ***!
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
exports.IAppSettingsIdentifier = void 0;
const dijs_1 = __webpack_require__(/*! @amaic/dijs */ "./node_modules/@amaic/dijs/dist/index.js");
const dijs_abstractions_1 = __webpack_require__(/*! @amaic/dijs-abstractions */ "./node_modules/@amaic/dijs-abstractions/dist/index.js");
__webpack_require__(/*! @amaic/dijs-extensions-registration */ "./node_modules/@amaic/dijs-extensions-registration/dist/index.js");
exports.IAppSettingsIdentifier = Symbol("IAppSettings");
const RegisterServicesCallbackDefault = () => Promise.resolve();
let FetchAppSettingsTask;
let RegisterServices;
function Bootloader({ appSettingsUrl = "", registerServices = RegisterServicesCallbackDefault }) {
    FetchAppSettingsTask = fetch(appSettingsUrl);
    RegisterServices = registerServices;
    if (document.readyState === "loading") {
        window.addEventListener('DOMContentLoaded', startup);
    }
    else {
        startup();
    }
}
exports["default"] = Bootloader;
function startup() {
    return __awaiter(this, void 0, void 0, function* () {
        if (FetchAppSettingsTask == undefined) {
            console.error("fetchAppSettingsTask is undefined.");
            return;
        }
        if (RegisterServices == undefined) {
            console.error("registerServicesCallback is undefined.");
            return;
        }
        const appSettingsrResponse = yield FetchAppSettingsTask;
        if (appSettingsrResponse.ok == false) {
            console.error("Unable to load %s: %d %s", appSettingsrResponse.url, appSettingsrResponse.status, appSettingsrResponse.statusText);
            return;
        }
        const appSettings = yield appSettingsrResponse.json();
        const serviceCollection = new dijs_1.ServiceCollection();
        serviceCollection.RegisterInstance(dijs_abstractions_1.ServiceRegistrationMode.Single, exports.IAppSettingsIdentifier, appSettings);
        RegisterServices(serviceCollection, appSettings);
    });
}


/***/ }),

/***/ "./src/ServiceRegistration.ts":
/*!************************************!*\
  !*** ./src/ServiceRegistration.ts ***!
  \************************************/
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
const amaic_sma_1 = __webpack_require__(/*! amaic-sma */ "../amaic-sma/dist/index.js");
function RegisterServices(serviceCollection, appSettings) {
    return __awaiter(this, void 0, void 0, function* () {
        serviceCollection.RegisterTransientClass(amaic_sma_1.IStateManagerIdentifier, amaic_sma_1.StateManager, (classType, serviceProvider) => new classType(serviceProvider.GetRequiredServices(amaic_sma_1.IStateManagerStorageIdentifier)));
        serviceCollection.RegisterTransientClass(amaic_sma_1.IStateManagerStorageIdentifier, amaic_sma_1.StateManagerLocalStorage);
    });
}
exports["default"] = RegisterServices;


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
const Bootloader_1 = __importDefault(__webpack_require__(/*! ./Bootloader */ "./src/Bootloader.ts"));
const ServiceRegistration_1 = __importDefault(__webpack_require__(/*! ./ServiceRegistration */ "./src/ServiceRegistration.ts"));
(0, Bootloader_1.default)({
    appSettingsUrl: "./appSettings.json",
    registerServices: ServiceRegistration_1.default
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
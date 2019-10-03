(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/ngjs/editable-field/editable-field.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngjs/editable-field/editable-field.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// import * as angular from 'angular';
(function () {
    'use strict';
    angular.module('heroApp').component('editableField', {
        templateUrl: 'app/ngjs/editable-field/editable-field.html',
        controller: EditableFieldController,
        controllerAs: 'vm',
        bindings: {
            fieldValue: '<',
            fieldType: '@?',
            onUpdate: '&'
        }
    });
    EditableFieldController.$inject = ['$scope', '$element', '$attrs'];
    function EditableFieldController($scope, $element, $attrs) {
        var vm = this;
        vm.editMode = false;
        vm.$onInit = function () {
            // Make a copy of the initial value to be able to reset it later
            vm.fieldValueCopy = vm.fieldValue;
            // Set a default fieldType
            if (!vm.fieldType) {
                vm.fieldType = 'text';
            }
        };
        vm.handleModeChange = function () {
            if (vm.editMode) {
                vm.onUpdate({ value: vm.fieldValue });
                vm.fieldValueCopy = vm.fieldValue;
            }
            vm.editMode = !vm.editMode;
        };
        vm.reset = function () {
            vm.fieldValue = vm.fieldValueCopy;
        };
    }
})();


/***/ }),

/***/ "./src/app/ngjs/hero-detail/hero-detail.ts":
/*!*************************************************!*\
  !*** ./src/app/ngjs/hero-detail/hero-detail.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function () {
    "use strict";
    angular.module("heroApp").component("heroDetail", {
        templateUrl: "app/hero-detail/hero-detail.html",
        controller: HeroDetailController,
        controllerAs: 'vm',
        bindings: {
            hero: "<",
            onDelete: "&",
            onUpdate: "&"
        }
    });
    HeroDetailController.$inject = ['$window'];
    function HeroDetailController($window) {
        var vm = this;
        vm.$onInit = onInit;
        vm.download = download;
        function onInit() {
            vm.foo = isEdge();
        }
        vm.delete = function () {
            vm.onDelete({ hero: vm.hero });
        };
        vm.update = function (prop, value) {
            vm.onUpdate({ hero: vm.hero, prop: prop, value: value });
        };
        function download(filename) {
            if (vm.foo) {
                var fileName = 'testCsv';
                var csv_content = 'hello;world';
                var blob = new Blob(["\ufeff", csv_content], { type: "data:text/csv;charset=utf-8" });
                $window.navigator.msSaveOrOpenBlob(blob, fileName + '.csv');
            }
            else {
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Hello World'));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }
        }
        // is current browser edge?
        // parameter is optional
        function isEdge() {
            var match = navigator.userAgent.match(/Edge\/(\d+)/);
            return false; //match !== null? true : false;
        }
        ;
    }
})();


/***/ }),

/***/ "./src/app/ngjs/hero-list/hero-list.ts":
/*!*********************************************!*\
  !*** ./src/app/ngjs/hero-list/hero-list.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// import './../hero-list/hero-list.html';
(function () {
    'use strict';
    angular.module('heroApp').component('heroList', {
        templateUrl: 'app/ngjs/hero-list/hero-list.html',
        controller: HeroListController,
        controllerAs: 'vm'
    });
    HeroListController.$inject = ['$scope', '$element', '$attrs'];
    function HeroListController($scope, $element, $attrs) {
        var vm = this;
        // This would be loaded by $http etc.
        vm.list = [
            {
                name: 'Superman',
                location: 'The sky'
            },
            {
                name: 'Batman',
                location: 'Baticueva'
            },
            {
                name: 'Aquaman',
                location: 'El mar'
            },
            {
                name: 'Neo',
                location: 'Matrix'
            }
        ];
        vm.updateHero = function (hero, prop, value) {
            hero[prop] = value;
        };
        vm.deleteHero = function (hero) {
            var idx = vm.list.indexOf(hero);
            if (idx >= 0) {
                vm.list.splice(idx, 1);
            }
        };
    }
})();


/***/ }),

/***/ "./src/app/ngjs/index.ts":
/*!*******************************!*\
  !*** ./src/app/ngjs/index.ts ***!
  \*******************************/
/*! exports provided: heroAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroAppModule", function() { return heroAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);


// initialize root module and make it exportable to be able to bootstrap it 
// inside angular
const heroAppModule = angular__WEBPACK_IMPORTED_MODULE_1__["module"]('heroApp', [
    'ngMaterial',
    'perfect_scrollbar',
    'ngJsTree',
    'ngTagsInput',
    'ui.router',
    'heroApp.underscore'
]).config(['$stateProvider', function ($stateProvider) {
        var heroState = {
            name: 'hero',
            url: '/hero',
            template: '<hero-list></hero-list>'
        };
        var customLocationsState = {
            name: 'customLocations',
            url: '/custom-locations',
            template: '<map-menu-custom-locations></map-menu-custom-locations>'
        };
        $stateProvider.state(heroState);
        $stateProvider.state(customLocationsState);
    }]);
/** start: REQUIRE ZONE for angularjs
 * Add angularjs files since they aren't yet fully ES6 modules
 * we use requirejs as module loader
 */
__webpack_require__(/*! ./editable-field/editable-field */ "./src/app/ngjs/editable-field/editable-field.ts");
__webpack_require__(/*! ./hero-detail/hero-detail */ "./src/app/ngjs/hero-detail/hero-detail.ts");
__webpack_require__(/*! ./hero-list/hero-list */ "./src/app/ngjs/hero-list/hero-list.ts");
__webpack_require__(/*! ./map-menu-custom-location/map-menu-custom-location.component */ "./src/app/ngjs/map-menu-custom-location/map-menu-custom-location.component.ts");
__webpack_require__(/*! ./underscore/underscore.module */ "./src/app/ngjs/underscore/underscore.module.ts");
__webpack_require__(/*! ./underscore/underscore.service */ "./src/app/ngjs/underscore/underscore.service.ts");
/**
 * end: REQUIRE ZONE for angularjs
 */


/***/ }),

/***/ "./src/app/ngjs/map-menu-custom-location/map-menu-custom-location.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ngjs/map-menu-custom-location/map-menu-custom-location.component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function () {
    angular
        .module('heroApp')
        .component('mapMenuCustomLocations', {
        templateUrl: 'app/ngjs/map-menu-custom-location/map-menu-custom-location.html',
        controller: MapMenuCustomLocationsController,
        controllerAs: 'vm',
        bindings: {
        // customLocations: '<',
        // onSelectCustomLocation: '&'
        }
    });
    MapMenuCustomLocationsController.$inject = ['$timeout', 'underscore'];
    function MapMenuCustomLocationsController($timeout, underscore) {
        var vm = this;
        var _ = underscore;
        vm.$onInit = onInit;
        vm.defaultCustomLocation = 'ALL';
        vm.selectCustomLocation = selectCustomLocation;
        /******************************************************** */
        vm.searchCriteria = "";
        var newId = 1;
        vm.ignoreChanges = false;
        vm.newNode = {};
        vm.applySearch = function () {
            var to = false;
            if (to) {
                clearTimeout(timeout);
            }
            var timeout = setTimeout(function () {
                if (vm.treeInstance) {
                    vm.treeInstance.jstree(true).search(vm.searchCriteria);
                    //vm.treeInstance.jstree(true)
                }
            }, 250);
        };
        vm.tags = [];
        vm.loadTags = function (query) {
            return [
                { "text": "Tag1" },
                { "text": "Tag2" },
                { "text": "Tag3" },
                { "text": "Tag4" },
                { "text": "Tag5" },
                { "text": "Tag6" },
                { "text": "Tag7" },
                { "text": "Tag8" },
                { "text": "Tag9" },
                { "text": "Tag10" }
            ];
        };
        //vm.jstree.defaults.search 
        vm.treeConfig = {
            core: {
                themes: {
                    icons: false
                },
                multiple: true,
                animation: false,
                error: function (error) {
                    console.error('treeCtrl: error from js tree - ' + angular.toJson(error));
                },
                check_callback: true,
                worker: true
            },
            search: {
                show_only_matches: true,
                close_opened_onclear: true //,
                //search_leaves_only: true
            },
            // types : {
            //     default : {
            //         icon : 'glyphicon glyphicon-flash'
            //     },
            //     star : {
            //         icon : 'glyphicon glyphicon-star'
            //     },
            //     cloud : {
            //         icon : 'glyphicon glyphicon-cloud'
            //     }
            // },
            version: 1,
            plugins: ['checkbox', 'search']
        };
        vm.originalData =
            [
                {
                    id: 'adu1',
                    parent: '#',
                    text: 'United States'
                },
                {
                    id: 'adu11',
                    parent: 'adu1',
                    text: 'Alabama'
                },
                {
                    id: 'adu12',
                    parent: 'adu1',
                    text: 'California'
                },
                {
                    id: 'adu13',
                    parent: 'adu1',
                    text: 'Minnesota'
                },
                {
                    id: 'adu14',
                    parent: 'adu1',
                    text: 'Florida'
                },
                {
                    id: 'adu15',
                    parent: 'adu1',
                    text: 'Tennessee'
                },
                {
                    id: 'adu111',
                    parent: 'adu11',
                    text: 'ARK-0510'
                },
                {
                    id: 'adu112',
                    parent: 'adu11',
                    text: 'ARK-0530'
                },
                {
                    id: 'adu113',
                    parent: 'adu11',
                    text: 'ARK-0560'
                },
                {
                    id: 'adu114',
                    parent: 'adu11',
                    text: 'ARK-0580'
                },
                {
                    id: 'adu115',
                    parent: 'adu11',
                    text: 'ARK-0590'
                },
                {
                    id: 'adu121',
                    parent: 'adu12',
                    text: 'CAL-0680'
                },
                {
                    id: 'adu131',
                    parent: 'adu13',
                    text: 'MNN-2710'
                },
                {
                    id: 'adu132',
                    parent: 'adu13',
                    text: 'MNN-2720'
                },
                {
                    id: 'adu133',
                    parent: 'adu13',
                    text: 'MNN-2740'
                },
                {
                    id: 'adu134',
                    parent: 'adu13',
                    text: 'MNN-2750'
                },
                {
                    id: 'adu135',
                    parent: 'adu13',
                    text: 'MNN-2740'
                },
                {
                    id: 'adu136',
                    parent: 'adu13',
                    text: 'MNN-2770'
                },
                {
                    id: 'adu141',
                    parent: 'adu14',
                    text: 'FLA-1210'
                },
                {
                    id: 'adu141',
                    parent: 'adu14',
                    text: 'FLA-1250'
                },
                {
                    id: 'adu151',
                    parent: 'adu15',
                    text: 'TNN-4710'
                },
                {
                    id: 'adu152',
                    parent: 'adu15',
                    text: 'TNN-4730'
                },
                {
                    id: 'adu153',
                    parent: 'adu15',
                    text: 'TNN-4730'
                },
                {
                    id: 'adu154',
                    parent: 'adu15',
                    text: 'TNN-4740'
                }
            ];
        angular.copy(vm.originalData, vm.treeData);
        vm.treeData = [];
        vm.reCreateTree = function () {
            vm.ignoreChanges = true;
            angular.copy(this.originalData, this.treeData);
            vm.treeConfig.version++;
        };
        vm.simulateAsyncData = function () {
            vm.promise = $timeout(function () {
                vm.treeData.push({ id: (newId++).toString(), parent: vm.treeData[0].id, text: 'Async Loaded' });
            }, 3000);
        };
        vm.addNewNode = function () {
            vm.treeData.push({ id: (newId++).toString(), parent: vm.newNode.parent, text: vm.newNode.text });
        };
        vm.treeInstanceDemo = function () {
            var selectedNode = vm.treeInstance.jstree(true).get_selected();
            //toaster.pop('info', 'Tree Instance Method Called',  selectedNode.length > 0 ? 'Selected node id is ' + selectedNode : 'None of the nodes are selected');
        };
        vm.setNodeType = function () {
            var item = _.findWhere(this.treeData, { id: this.selectedNode });
            item.type = this.newType;
            //toaster.pop('success', 'Node Type Changed', 'Changed the type of node ' + this.selectedNode);
        };
        vm.readyCB = function () {
            $timeout(function () {
                vm.ignoreChanges = false;
                //toaster.pop('success', 'JS Tree Ready', 'Js Tree issued the ready event')
            });
        };
        this.createCB = function (e, item) {
            //$timeout(function() {toaster.pop('success', 'Node Added', 'Added new node with the text ' + item.node.text)});
        };
        this.applyModelChanges = function () {
            return !vm.ignoreChanges;
        };
        /*************************************************************************/
        function onInit() {
        }
        function selectCustomLocation(customLocation) {
            vm.selectedCustomLocation = customLocation;
            vm.onSelectCustomLocation({ customLocation: vm.selectedCustomLocation });
        }
    }
})();


/***/ }),

/***/ "./src/app/ngjs/underscore/underscore.module.ts":
/*!******************************************************!*\
  !*** ./src/app/ngjs/underscore/underscore.module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function () {
    angular
        .module('heroApp.underscore', []);
}());


/***/ }),

/***/ "./src/app/ngjs/underscore/underscore.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngjs/underscore/underscore.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function () {
    angular
        .module('heroApp.underscore')
        .factory('underscore', underscore);
    underscore.$inject = ['$window'];
    function underscore($window) {
        return $window._;
    }
}());


/***/ }),

/***/ "./src/app/ngx/app-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ngx/app-routing.module.ts ***!
  \*******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/ngx/app.module.ts":
/*!***********************************!*\
  !*** ./src/app/ngx/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/ngx/app-routing.module.ts");
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/upgrade/static */ "./node_modules/@angular/upgrade/fesm2015/static.js");
/* harmony import */ var _ngjs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../ngjs/index */ "./src/app/ngjs/index.ts");






/** start: REQUIRE ZONE for angularjs
 * Add angularjs files since they aren't yet fully ES6 modules
 * we use requirejs as module loader
 */
// srequire('../../ngjs/editable-field');
/**
 * end: REQUIRE ZONE for angularjs
 */
let AppModule = class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, [_ngjs_index__WEBPACK_IMPORTED_MODULE_5__["heroAppModule"].name], { strictDi: true });
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_4__["UpgradeModule"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
        // AppComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_4__["UpgradeModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: []
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_ngx_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/ngx/app.module */ "./src/app/ngx/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/upgrade/static */ "./node_modules/@angular/upgrade/fesm2015/static.js");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_6__["setAngularJSGlobal"])(angular__WEBPACK_IMPORTED_MODULE_5__);
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_ngx_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\HeroesHybridApproach\HeroesHybridApproach\common\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
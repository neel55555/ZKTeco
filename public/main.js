(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-log/user-log.component */ "./src/app/user-log/user-log.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-user/single-user.component */ "./src/app/single-user/single-user.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device/device.component */ "./src/app/device/device.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'user-log', component: _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_2__["UserLogComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'user/:badgenumber', component: _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_4__["SingleUserComponent"] },
    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"] },
    { path: 'device', component: _device_device_component__WEBPACK_IMPORTED_MODULE_6__["DeviceComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <app-navbar></app-navbar>\r\n  <app-sidebar></app-sidebar>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-log/user-log.component */ "./src/app/user-log/user-log.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./single-user/single-user.component */ "./src/app/single-user/single-user.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./device/device.component */ "./src/app/device/device.component.ts");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./global.service */ "./src/app/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_log_user_log_component__WEBPACK_IMPORTED_MODULE_5__["UserLogComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_12__["SingleUserComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_14__["ReportComponent"],
                _device_device_component__WEBPACK_IMPORTED_MODULE_15__["DeviceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _global_service__WEBPACK_IMPORTED_MODULE_16__["GlobalService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/departments.service.ts":
/*!****************************************!*\
  !*** ./src/app/departments.service.ts ***!
  \****************************************/
/*! exports provided: DepartmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return DepartmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.service */ "./src/app/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DepartmentsService = /** @class */ (function () {
    function DepartmentsService(http, global) {
        this.http = http;
        this.global = global;
    }
    DepartmentsService.prototype.getDepartments = function () {
        return this.http.get(this.global.domain + '/api/department');
    };
    DepartmentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], DepartmentsService);
    return DepartmentsService;
}());



/***/ }),

/***/ "./src/app/device.service.ts":
/*!***********************************!*\
  !*** ./src/app/device.service.ts ***!
  \***********************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.service */ "./src/app/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceService = /** @class */ (function () {
    function DeviceService(http, global) {
        this.http = http;
        this.global = global;
    }
    DeviceService.prototype.getDevices = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.http.get(this.global.domain + '/api/device');
    };
    DeviceService.prototype.getDeviceData = function () {
        return this.http.get(this.global.domain + '/api/device/get-data');
    };
    DeviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/device/device.component.css":
/*!*********************************************!*\
  !*** ./src/app/device/device.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/device/device.component.html":
/*!**********************************************!*\
  !*** ./src/app/device/device.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Devices</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item active\">Devices</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      \n      <!-- /.row -->\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Devices</h3>\n\n              \n            </div>\n            <!-- /.card-header -->\n            <div class=\"card-body table-responsive p-0\">\n              <table class=\"table table-bordered\">\n                <tr>\n                  <th>No.</th>\n                  <th>IP</th>\n                  <th>POST</th>\n                  <th>Serial Number</th>\n                </tr>\n                <tr *ngFor=\"let device of devices\">\n                  <td>1</td>\n                  <td>{{device.ip}}</td>\n                  <td>{{device.port}}</td>\n                  <td>{{device.serial_number}}</td>\n                </tr>\n              </table>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                \n                <button class=\"btn btn-md btn-success btn-250\" (click)=getData()>\n                  <div [ngClass]=\"{'loader': true, 'is-hidden': isLoaderHidden}\" ></div>\n                  <span [ngClass] = \"{'is-hidden': !isLoaderHidden}\" [innerHTML]=\"buttonInnerContent\"></span>\n                </button>\n              </div>\n            </div>\n            <!-- /.card-body -->\n          </div>\n\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <form class=\"\">\n\n                <div class=\"form-group\">\n                  <div>IP:</div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-laptop\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" data-inputmask=\"'alias': 'ip'\" data-mask>\n                  </div>\n                  <!-- /.input group -->\n                </div>\n                  \n                <div class=\"form-group\">\n                  <div>PORT:</div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-laptop\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" data-inputmask=\"'alias': 'digit'\" data-mask>\n                  </div>\n                  <!-- /.input group -->\n                </div>\n              </form>\n            </div>\n          </div>\n          <!-- /.card -->\n        </div>\n      </div><!-- /.row -->\n    </div><!-- /.container-fluid -->\n  </section>\n  <!-- /.content -->\n</div>\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/device/device.component.ts":
/*!********************************************!*\
  !*** ./src/app/device/device.component.ts ***!
  \********************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../device.service */ "./src/app/device.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(_deviceService) {
        this._deviceService = _deviceService;
        this.isLoaderHidden = true;
        this.isCheckmarkHidden = true;
        this.buttonInnerContent = "GET DATA";
        this.isDataProcessing = false;
    }
    DeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._deviceService.getDevices().subscribe(function (data) { return _this.devices = data; });
    };
    DeviceComponent.prototype.getData = function () {
        var _this = this;
        if (this.isDataProcessing) {
            return false;
        }
        ;
        this.isDataProcessing = true;
        this.isLoaderHidden = false;
        this._deviceService.getDeviceData().subscribe(function (data) {
            if (data.status == 'SUCCESS') {
                _this.buttonInnerContent = '<i class="fa fa-check fa-2x"></i>';
                _this.isLoaderHidden = true;
                setTimeout(function () {
                    _this.buttonInnerContent = "GET DATA";
                    _this.isDataProcessing = false;
                }, 3000);
            }
            ;
        });
    };
    DeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.component.html */ "./src/app/device/device.component.html"),
            styles: [__webpack_require__(/*! ./device.component.css */ "./src/app/device/device.component.css")]
        }),
        __metadata("design:paramtypes", [_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"]])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n  <strong>Copyright &copy; 2018 <a href=\"#\">Pakiza Fabrics Collection</a>.</strong>\r\n  All rights reserved.\r\n  <div class=\"float-right d-none d-sm-inline-block\">\r\n    <b>Version</b> 1.0.0-alpha\r\n  </div>\r\n</footer>\r\n\r\n<!-- Control Sidebar -->\r\n<aside class=\"control-sidebar control-sidebar-dark\">\r\n    <div class=\"p-3\"><h5>Customize AdminLTE</h5><hr class=\"mb-2\"><h6>Navbar Variants</h6><div class=\"d-flex\"><div class=\"d-flex flex-wrap mb-3\"><div class=\"bg-primary elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-info elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-success elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-danger elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-warning elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-white elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-gray-light elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div></div></div><div class=\"mb-4\"><input type=\"checkbox\" value=\"1\" checked=\"checked\" class=\"mr-1\"><span>Navbar border</span></div><h6>Dark Sidebar Variants</h6><div class=\"d-flex\"></div><div class=\"d-flex flex-wrap mb-3\"><div class=\"bg-primary elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-warning elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-info elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-danger elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-success elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div></div><h6>Light Sidebar Variants</h6><div class=\"d-flex\"></div><div class=\"d-flex flex-wrap mb-3\"><div class=\"bg-primary elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-warning elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-info elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-danger elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-success elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div></div><h6>Brand Logo Variants</h6><div class=\"d-flex\"></div><div class=\"d-flex flex-wrap mb-3\"><div class=\"bg-primary elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-info elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-success elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-danger elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-warning elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-white elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><div class=\"bg-gray-light elevation-2\" style=\"width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;\"></div><a href=\"javascript:void(0)\">clear</a></div></div>\r\n</aside>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/global.service.ts":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.domain = 'http://192.168.1.98:85';
    }
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<nav class=\"main-header navbar navbar-expand bg-success navbar-light border-bottom\">\r\n    <!-- Left navbar links -->\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\r\n      </li>\r\n      <li class=\"nav-item d-none d-sm-inline-block\">\r\n        <a href=\"index3.html\" class=\"nav-link\">Home</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <!-- SEARCH FORM \r\n    <form class=\"form-inline ml-3\">\r\n      <div class=\"input-group input-group-sm\">\r\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-navbar\" type=\"submit\">\r\n            <i class=\"fa fa-search\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    -->\r\n\r\n    <!-- Right navbar links -->\r\n    <!--\r\n    <ul class=\"navbar-nav ml-auto\">\r\n       \r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\">\r\n          <i class=\"fa fa-comments-o\"></i>\r\n          <span class=\"badge badge-danger navbar-badge\">3</span>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            \r\n            <div class=\"media\">\r\n              <img src=\"dist/img/user1-128x128.jpg\" alt=\"User Avatar\" class=\"img-size-50 mr-3 img-circle\">\r\n              <div class=\"media-body\">\r\n                <h3 class=\"dropdown-item-title\">\r\n                  Brad Diesel\r\n                  <span class=\"float-right text-sm text-danger\"><i class=\"fa fa-star\"></i></span>\r\n                </h3>\r\n                <p class=\"text-sm\">Call me whenever you can...</p>\r\n                <p class=\"text-sm text-muted\"><i class=\"fa fa-clock-o mr-1\"></i> 4 Hours Ago</p>\r\n              </div>\r\n            </div>\r\n             \r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            \r\n            <div class=\"media\">\r\n              <img src=\"dist/img/user8-128x128.jpg\" alt=\"User Avatar\" class=\"img-size-50 img-circle mr-3\">\r\n              <div class=\"media-body\">\r\n                <h3 class=\"dropdown-item-title\">\r\n                  John Pierce\r\n                  <span class=\"float-right text-sm text-muted\"><i class=\"fa fa-star\"></i></span>\r\n                </h3>\r\n                <p class=\"text-sm\">I got your message bro</p>\r\n                <p class=\"text-sm text-muted\"><i class=\"fa fa-clock-o mr-1\"></i> 4 Hours Ago</p>\r\n              </div>\r\n            </div>\r\n             \r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            \r\n            <div class=\"media\">\r\n              <img src=\"dist/img/user3-128x128.jpg\" alt=\"User Avatar\" class=\"img-size-50 img-circle mr-3\">\r\n              <div class=\"media-body\">\r\n                <h3 class=\"dropdown-item-title\">\r\n                  Nora Silvester\r\n                  <span class=\"float-right text-sm text-warning\"><i class=\"fa fa-star\"></i></span>\r\n                </h3>\r\n                <p class=\"text-sm\">The subject goes here</p>\r\n                <p class=\"text-sm text-muted\"><i class=\"fa fa-clock-o mr-1\"></i> 4 Hours Ago</p>\r\n              </div>\r\n            </div>\r\n            \r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item dropdown-footer\">See All Messages</a>\r\n        </div>\r\n      </li>\r\n      \r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\">\r\n          <i class=\"fa fa-bell-o\"></i>\r\n          <span class=\"badge badge-warning navbar-badge\">15</span>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\r\n          <span class=\"dropdown-item dropdown-header\">15 Notifications</span>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            <i class=\"fa fa-envelope mr-2\"></i> 4 new messages\r\n            <span class=\"float-right text-muted text-sm\">3 mins</span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            <i class=\"fa fa-users mr-2\"></i> 8 friend requests\r\n            <span class=\"float-right text-muted text-sm\">12 hours</span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            <i class=\"fa fa-file mr-2\"></i> 3 new reports\r\n            <span class=\"float-right text-muted text-sm\">2 days</span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item dropdown-footer\">See All Notifications</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-widget=\"control-sidebar\" data-slide=\"true\" href=\"#\"><i\r\n            class=\"fa fa-th-large\"></i></a>\r\n      </li>\r\n    </ul>-->\r\n  </nav>\r\n  <!-- /.navbar -->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/report.service.ts":
/*!***********************************!*\
  !*** ./src/app/report.service.ts ***!
  \***********************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.service */ "./src/app/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = /** @class */ (function () {
    function ReportService(http, global) {
        this.http = http;
        this.global = global;
        this.selectedDate = '';
        this.selectedDepartment = 0;
        this.selectedUser = 0;
    }
    ReportService.prototype.getReport = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        var queryString = jquery__WEBPACK_IMPORTED_MODULE_2__["param"]({
            "date": this.selectedDate,
            "uid": this.selectedUser,
            "department": this.selectedDepartment
        });
        return this.http.get(this.global.domain + '/api/log?' + queryString);
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col-sm-6\">\r\n          <h1>Report</h1>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <ol class=\"breadcrumb float-sm-right\">\r\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n            <li class=\"breadcrumb-item active\">Report</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.container-fluid -->\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"container-fluid\">\r\n      <!-- /.row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              \r\n                <form class=\"form-inline pull-right\">\r\n\r\n                  \r\n\r\n                  <div class=\"form-group mx-sm-2 mb-2\">\r\n                    <div class=\"input-group input-group-sm\" style=\"width: 205px;\">\r\n                      <select [(ngModel)]=\"department\" (change)=\"onDepartmentChange()\" name=\"department\" class=\"form-control\">\r\n                        <option value=\"0\">All Departments</option>\r\n                        <option *ngFor=\"let department of departments\" value=\"{{department.id}}\">{{department.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group mx-sm-2 mb-2\">\r\n                    <div class=\"input-group input-group-sm\" style=\"width: 205px;\">\r\n                      <select name=\"user\" [(ngModel)]=\"user\" class=\"form-control\" (change)=\"onUserChange()\">\r\n                          <option value=\"0\">All Employees</option>\r\n                          <option *ngFor=\"let user of users\" value=\"{{user.id}}\">{{user.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"form-group mx-sm-2 mb-2\">\r\n                    <div class=\"input-group input-group-sm\" style=\"width: 205px;\">\r\n                      <input readonly type=\"text\" name=\"date\" [maxDate]=\"maxDate\" #drp=\"bsDaterangepicker\" bsDaterangepicker [(ngModel)]=\"date\" (bsValueChange)=\"onDateValueChange()\" [bsConfig]=\"{ rangeInputFormat: 'DD/MM/YYYY' }\"  class=\"form-control float-right\" placeholder=\"Date\" autocomplete=\"off\">\r\n                      <div class=\"input-group-append\">\r\n                        <button type=\"submit\" (click)=\"drp.toggle()\" class=\"btn btn-default\"><i class=\"fa fa-calendar\"></i></button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group mx-sm-2 mb-2\">\r\n                    <div class=\"input-group input-group-sm\">\r\n                      <button class=\"btn btn-success btn-sm\" style=\"width: 200px\">DOWNLOAD AS PDF</button>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </form>\r\n              \r\n            </div>\r\n            <!-- /.card-header -->\r\n            <div class=\"card-body table-responsive p-0\">\r\n              <table class=\"table table-bordered\">\r\n                <tr>\r\n                  \r\n                  <th>Date</th>\r\n                  <th>Name</th>\r\n                  <th>Department</th>\r\n                  <th>In time</th>\r\n                  <th>Out time</th>\r\n                  <th>Status</th>\r\n                </tr>\r\n                <tr *ngFor=\"let report of reports; index as SLN\">\r\n                  \r\n                  <td>{{report.date}}</td>\r\n                  <td>{{report.name}}</td>\r\n                  <td>{{report.department_name}}</td>\r\n                  <td>{{report.in_time}}</td>\r\n                  <td>{{report.out_time}}</td>\r\n                  <td>\r\n                    <span class=\"badge badge-success\" *ngIf=\"(report.status=='NORMAL')\">{{report.status}}</span>\r\n                    <span class=\"badge badge-danger\" *ngIf=\"(report.status=='ABSENT')\">{{report.status}}</span>\r\n                    <span class=\"badge badge-warning\" *ngIf=\"report.status=='LATE'\">{{report.status}}</span>\r\n                    <span class=\"badge badge-warning\" *ngIf=\"report.status=='LATE AND EARLY'\">{{report.status}}</span>\r\n                    <span class=\"badge badge-warning\" *ngIf=\"report.status=='EARLY'\">{{report.status}}</span>\r\n                    <span class=\"badge badge-success\" *ngIf=\"report.status=='WEEKEND'\">{{report.status}}</span>\r\n                  </td>\r\n                </tr>\r\n                \r\n              </table>\r\n            </div>\r\n            <!-- /.card-body -->\r\n          </div>\r\n          <!-- /.card -->\r\n        </div>\r\n      </div><!-- /.row -->\r\n    </div><!-- /.container-fluid -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _departments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../departments.service */ "./src/app/departments.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report.service */ "./src/app/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportComponent = /** @class */ (function () {
    function ReportComponent(_departmentsService, _userService, _reportService) {
        this._departmentsService = _departmentsService;
        this._userService = _userService;
        this._reportService = _reportService;
        this.dateTime = new Date();
        this.date = [new Date(), new Date()];
        this.dateRange = '';
        this.departments = [];
        this.department = 0;
        this.users = [];
        this.user = 0;
        this.userName = 'Select a user';
        this.reports = [];
        this.maxDate = new Date();
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._departmentsService.getDepartments().subscribe(function (data) { return _this.departments = data; });
    };
    ReportComponent.prototype.onDepartmentChange = function () {
        var _this = this;
        this.user = 0;
        this._userService.department = this.department;
        this._userService.getUserByDept().subscribe(function (data) { return _this.users = data; });
        this._reportService.selectedDate = this.dateRange;
        this._reportService.selectedDepartment = this.department;
        this._reportService.selectedUser = this.user;
        this._reportService.getReport().subscribe(function (data) { return _this.reports = data[0]._embedded.attendance; });
    };
    ReportComponent.prototype.onUserChange = function () {
        var _this = this;
        console.log("change detected");
        var currentClass = this;
        if (this.user != 0) {
            var found = this.users.find(function (element) {
                return element.id == currentClass.user;
            });
            this.userName = found.name;
        }
        ;
        console.log(this.user);
        this._reportService.selectedDate = this.dateRange;
        this._reportService.selectedDepartment = this.department;
        this._reportService.selectedUser = this.user;
        this._reportService.getReport().subscribe(function (data) { return _this.reports = data[0]._embedded.attendance; });
    };
    ReportComponent.prototype.onDateValueChange = function () {
        var _this = this;
        setTimeout(function () {
            var date1 = _this.date[0];
            var date2 = _this.date[1];
            var month1 = date1.getMonth() + 1;
            var month2 = date2.getMonth() + 1;
            var dateRangeFrom = date1.getDate() + '-' + month1 + '-' + date1.getFullYear();
            var dateRangeTo = date2.getDate() + '-' + month2 + '-' + date2.getFullYear();
            _this.dateRange = dateRangeFrom + '.' + dateRangeTo;
            _this._reportService.selectedDate = _this.dateRange;
            _this._reportService.selectedDepartment = _this.department;
            _this._reportService.selectedUser = _this.user;
            _this._reportService.getReport().subscribe(function (data) { return _this.reports = data[0]._embedded.attendance; });
        }, 300);
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_departments_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentsService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Sidebar Container -->\r\n<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\r\n  <!-- Brand Logo -->\r\n  <a href=\"index3.html\" class=\"brand-link\" style=\"padding-left: 20px\">\r\n    <span style=\"opacity: .8\">PFC </span>\r\n    <span class=\"brand-text font-weight-light\">ATTENDANCE</span>\r\n  </a>\r\n\r\n  <!-- Sidebar -->\r\n  <div class=\"sidebar\">\r\n    <!-- Sidebar user panel (optional) \r\n    <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\r\n      <div class=\"image\">\r\n        <img src=\"../assets/img/46.png\" class=\"img-circle elevation-2\" alt=\"User Image\">\r\n      </div>\r\n      <div class=\"info\">\r\n        <a href=\"#\" class=\"d-block\">PFC</a>\r\n      </div>\r\n    </div>\r\n    -->\r\n\r\n    <!-- Sidebar Menu -->\r\n    <nav class=\"mt-2\">\r\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n        <!-- Add icons to the links using the .nav-icon class\r\n              with font-awesome or any other icon font library -->\r\n        <li class=\"nav-item has-treeview\">\r\n          <a routerLink=\"/device\" class=\"nav-link\">\r\n            <i class=\"nav-icon fa fa-desktop\"></i>\r\n            <p>\r\n              Devices\r\n              <i class=\"fa fa-angle-left right\"></i>\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item has-treeview\">\r\n          <a routerLink=\"/user\" class=\"nav-link\">\r\n            <i class=\"nav-icon fa fa-users\"></i>\r\n            <p>\r\n              Employees\r\n              <i class=\"fa fa-angle-left right\"></i>\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item has-treeview\">\r\n          <a routerLink=\"/report\" class=\"nav-link\">\r\n            <i class=\"nav-icon fa fa-book\"></i>\r\n            <p>\r\n              Reports\r\n              <i class=\"fa fa-angle-left right\"></i>\r\n            </p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!-- /.sidebar-menu -->\r\n  </div>\r\n  <!-- /.sidebar -->\r\n</aside>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/single-user/single-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/single-user/single-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-user/single-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-user/single-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col-sm-6\">\r\n          <h1>Simple Tables</h1>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <ol class=\"breadcrumb float-sm-right\">\r\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n            <li class=\"breadcrumb-item active\">Simple Tables</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.container-fluid -->\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"container-fluid\">\r\n      \r\n      <!-- /.row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h3 class=\"card-title\">Responsive Hover Table</h3>\r\n\r\n              <div class=\"card-tools\">\r\n                <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                  <input type=\"text\" name=\"table_search\" class=\"form-control float-right\" placeholder=\"Search\">\r\n\r\n                  <div class=\"input-group-append\">\r\n                    <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /.card-header -->\r\n            <div class=\"card-body table-responsive p-0\">\r\n              <table class=\"table table-hover\">\r\n                <tr>\r\n                  <th>ID</th>\r\n                  <th>User</th>\r\n                  <th>Date</th>\r\n                  <th>Status</th>\r\n                  <th>Reason</th>\r\n                </tr>\r\n                <tr>\r\n                  <td>1</td>\r\n                  <td>Lorem ipsum</td>\r\n                  <td>11-7-2014</td>\r\n                  <td><span class=\"tag tag-success\">Approved</span></td>\r\n                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <!-- /.card-body -->\r\n          </div>\r\n          <!-- /.card -->\r\n        </div>\r\n      </div><!-- /.row -->\r\n    </div><!-- /.container-fluid -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/single-user/single-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-user/single-user.component.ts ***!
  \******************************************************/
/*! exports provided: SingleUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserComponent", function() { return SingleUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleUserComponent = /** @class */ (function () {
    function SingleUserComponent() {
    }
    SingleUserComponent.prototype.ngOnInit = function () {
    };
    SingleUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-user',
            template: __webpack_require__(/*! ./single-user.component.html */ "./src/app/single-user/single-user.component.html"),
            styles: [__webpack_require__(/*! ./single-user.component.css */ "./src/app/single-user/single-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleUserComponent);
    return SingleUserComponent;
}());



/***/ }),

/***/ "./src/app/user-log.service.ts":
/*!*************************************!*\
  !*** ./src/app/user-log.service.ts ***!
  \*************************************/
/*! exports provided: UserLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogService", function() { return UserLogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.service */ "./src/app/global.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLogService = /** @class */ (function () {
    function UserLogService(http, global) {
        this.http = http;
        this.global = global;
        this.selectedDate = '10-7-2018';
        this.selectedDepartment = 0;
    }
    UserLogService.prototype.getUserLog = function () {
        var queryString = jquery__WEBPACK_IMPORTED_MODULE_3__["param"]({
            "date": this.selectedDate,
            "department": this.selectedDepartment
        });
        return this.http.get(this.global.domain + '/api/user-log?' + queryString);
    };
    UserLogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], UserLogService);
    return UserLogService;
}());



/***/ }),

/***/ "./src/app/user-log/user-log.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-log/user-log.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-log/user-log.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-log/user-log.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col-sm-6\">\r\n            <h1>Simple Tables</h1>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <ol class=\"breadcrumb float-sm-right\">\r\n              <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n              <li class=\"breadcrumb-item active\">Simple Tables</li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div><!-- /.container-fluid -->\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <div class=\"container-fluid\">\r\n        \r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h3 class=\"card-title\">Employees Attendance</h3>\r\n\r\n                <div class=\"card-tools\">\r\n                  <form class=\"form-inline\">\r\n\r\n                    <div class=\"form-group mb-2\">\r\n                      <div class=\"input-group input-group-sm\">\r\n                        <select [(ngModel)]=\"department\" (change)=\"departmentValueOnChange()\" name=\"department\" class=\"form-control\">\r\n                            <option value=\"0\">Select Department</option>\r\n                          <option *ngFor=\"let department of departments\" value=\"{{department.id}}\">{{department.name}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group mx-sm-3 mb-2\">\r\n                      <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                        <input type=\"text\" name=\"date\" bsDatepicker [(ngModel)]=\"date\" (bsValueChange)=\"dateValueOnChange()\" #dpMDY=\"bsDatepicker\" [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" class=\"form-control float-right\" placeholder=\"Date\" autocomplete=\"off\">\r\n\r\n                        <div class=\"input-group-append\">\r\n                          <button type=\"submit\" (click)=\"dpMDY.toggle()\" class=\"btn btn-default\"><i class=\"fa fa-calendar\"></i></button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <!-- /.card-header -->\r\n              <div class=\"card-body table-responsive p-0\">\r\n                <table class=\"table table-hover\">\r\n                  <tr>\r\n                    <th>SL No.</th>\r\n                    <th>ID</th>\r\n                    <th>Name</th>\r\n                    <th>Department</th>\r\n                    <th>In Time</th>\r\n                    <th>Out Time</th>\r\n                  </tr>\r\n                  <tr *ngFor = \"let userLog of userLogs; index as SLN\">\r\n                    <td>{{SLN+1}}</td>\r\n                    <td>{{userLog.badgenumber}}</td>\r\n                    <td>{{userLog.name}}</td>\r\n                    <td>{{userLog.department_name}}</td>\r\n                    <td>{{userLog.in_time}}</td>\r\n                    <td>{{userLog.out_time}}</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <!-- /.card-body -->\r\n            </div>\r\n            <!-- /.card -->\r\n          </div>\r\n        </div><!-- /.row -->\r\n      </div><!-- /.container-fluid -->\r\n    </section>\r\n    <!-- /.content -->\r\n</div>\r\n  <!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/user-log/user-log.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-log/user-log.component.ts ***!
  \************************************************/
/*! exports provided: UserLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogComponent", function() { return UserLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-log.service */ "./src/app/user-log.service.ts");
/* harmony import */ var _departments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../departments.service */ "./src/app/departments.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLogComponent = /** @class */ (function () {
    function UserLogComponent(_userLogService, _departmentsService) {
        this._userLogService = _userLogService;
        this._departmentsService = _departmentsService;
        this.userLogs = [];
        this.dateTime = new Date();
        this.date = this.dateTime.getDate() + '-' + (this.dateTime.getMonth() + 1) + '-' + this.dateTime.getFullYear();
        this.departments = [];
        this.department = 0;
    }
    UserLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userLogService.getUserLog().subscribe(function (data) { return _this.userLogs = data; });
        this._departmentsService.getDepartments().subscribe(function (data) { return _this.departments = data; });
    };
    UserLogComponent.prototype.dateValueOnChange = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.date);
            _this._userLogService.selectedDate = _this.date;
            _this._userLogService.getUserLog().subscribe(function (data) { return _this.userLogs = data; });
        }, 300);
    };
    UserLogComponent.prototype.departmentValueOnChange = function () {
        var _this = this;
        console.log('change', this.department);
        this._userLogService.selectedDepartment = this.department;
        this._userLogService.getUserLog().subscribe(function (data) { return _this.userLogs = data; });
    };
    UserLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-log',
            template: __webpack_require__(/*! ./user-log.component.html */ "./src/app/user-log/user-log.component.html"),
            styles: [__webpack_require__(/*! ./user-log.component.css */ "./src/app/user-log/user-log.component.css")]
        }),
        __metadata("design:paramtypes", [_user_log_service__WEBPACK_IMPORTED_MODULE_1__["UserLogService"], _departments_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentsService"]])
    ], UserLogComponent);
    return UserLogComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.service */ "./src/app/global.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, global) {
        this.http = http;
        this.global = global;
        this.department = 0;
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.global.domain + '/api/user');
    };
    UserService.prototype.getUserByDept = function () {
        var queryString = jquery__WEBPACK_IMPORTED_MODULE_3__["param"]({
            "department": this.department
        });
        return this.http.get(this.global.domain + '/api/user?' + queryString);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col-sm-6\">\r\n          <h1>Employees</h1>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <ol class=\"breadcrumb float-sm-right\">\r\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n            <li class=\"breadcrumb-item active\">Employees</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.container-fluid -->\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"container-fluid\">\r\n      \r\n      <!-- /.row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h3 class=\"card-title\">Employees</h3>\r\n\r\n              <div class=\"card-tools\">\r\n                <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                  <input type=\"text\" name=\"table_search\" class=\"form-control float-right\" placeholder=\"Search\">\r\n\r\n                  <div class=\"input-group-append\">\r\n                    <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /.card-header -->\r\n            <div class=\"card-body table-responsive p-0\">\r\n              <table class=\"table table-bordered\">\r\n                <tr>\r\n                  <th>SL No.</th>\r\n                  <th>ID</th>\r\n                  <th>User</th>\r\n                  <th>Department</th>\r\n                </tr>\r\n                <tr *ngFor=\"let user of users; index as SLN\">\r\n                  <td>{{SLN+1}}</td>\r\n                  <td>{{user.id}}</td>\r\n                  <td>{{user.name}}</td>\r\n                  <td>{{user.department.name}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <!-- /.card-body -->\r\n          </div>\r\n          <!-- /.card -->\r\n        </div>\r\n      </div><!-- /.row -->\r\n    </div><!-- /.container-fluid -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (data) { return _this.users = data; });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\XAMPP\htdocs\ZK\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
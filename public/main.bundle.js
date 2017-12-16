webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/component/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_register_register_component__ = __webpack_require__("../../../../../src/app/component/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_home_home_component__ = __webpack_require__("../../../../../src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_profile_profile_component__ = __webpack_require__("../../../../../src/app/component/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_mm_creation_mm_creation_component__ = __webpack_require__("../../../../../src/app/component/mm-creation/mm-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_strategy_strategy_component__ = __webpack_require__("../../../../../src/app/component/strategy/strategy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_creator_service__ = __webpack_require__("../../../../../src/app/services/creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_project_manager_project_manager_component__ = __webpack_require__("../../../../../src/app/component/project-manager/project-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_strategy_manager_strategy_manager_component__ = __webpack_require__("../../../../../src/app/component/strategy-manager/strategy-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_admin_page_admin_page_component__ = __webpack_require__("../../../../../src/app/component/admin-page/admin-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_admin_func_service__ = __webpack_require__("../../../../../src/app/services/admin-func.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__component_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__component_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__component_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__component_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_15__component_mm_creation_mm_creation_component__["a" /* MmCreationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'strategy', component: __WEBPACK_IMPORTED_MODULE_16__component_strategy_strategy_component__["a" /* StrategyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project-manager', component: __WEBPACK_IMPORTED_MODULE_18__component_project_manager_project_manager_component__["a" /* ProjectManagerComponent */] },
    { path: 'strategy-manager', component: __WEBPACK_IMPORTED_MODULE_19__component_strategy_manager_strategy_manager_component__["a" /* StrategyManagerComponent */] },
    { path: 'admin-page', component: __WEBPACK_IMPORTED_MODULE_20__component_admin_page_admin_page_component__["a" /* AdminPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_mm_creation_mm_creation_component__["a" /* MmCreationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_strategy_strategy_component__["a" /* StrategyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_project_manager_project_manager_component__["a" /* ProjectManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_strategy_manager_strategy_manager_component__["a" /* StrategyManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_admin_page_admin_page_component__["a" /* AdminPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17__services_creator_service__["a" /* CreatorService */], __WEBPACK_IMPORTED_MODULE_21__services_admin_func_service__["a" /* AdminFuncService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/admin-page/admin-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/admin-page/admin-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/admin-page/admin-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_creator_service__ = __webpack_require__("../../../../../src/app/services/creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminPageComponent = (function () {
    function AdminPageComponent(authService, router, creator, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.creator = creator;
        this.flashMessage = flashMessage;
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) { _this.user = profile.user; }, function (err) { console.log(err); return false; });
    };
    AdminPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__("../../../../../src/app/component/admin-page/admin-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_creator_service__["a" /* CreatorService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <p class=\"lead\">The content of the main page will be as soon as possible.</p>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/component/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* Form Style */\r\n.form-horizontal{\r\n    background: #fff;\r\n    padding-bottom: 40px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n}\r\n.form-horizontal .heading{\r\n    display: block;\r\n    font-size: 35px;\r\n    font-weight: 700;\r\n    padding: 35px 0;\r\n    border-bottom: 1px solid #f0f0f0;\r\n    margin-bottom: 30px;\r\n}\r\n.form-horizontal .form-group{\r\n    padding: 0 40px;\r\n    margin: 0 0 25px 0;\r\n    position: relative;\r\n}\r\n.form-horizontal .form-control{\r\n    background: #f0f0f0;\r\n    border: none;\r\n    border-radius: 20px;\r\n    box-shadow: none;\r\n    padding: 0 20px 0 45px;\r\n    height: 40px;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus{\r\n    background: #e0e0e0;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n}\r\n.form-horizontal .form-group i{\r\n    position: absolute;\r\n    top: 12px;\r\n    left: 60px;\r\n    font-size: 17px;\r\n    color: #c8c8c8;\r\n    transition : all 0.5s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus + i{\r\n    color: #00b4ef;\r\n}\r\n.form-horizontal .fa-question-circle{\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 12px;\r\n    right: 60px;\r\n    font-size: 20px;\r\n    color: #808080;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n.form-horizontal .fa-question-circle:hover{\r\n    color: #000;\r\n}\r\n.form-horizontal .main-checkbox{\r\n    float: left;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: #11a3fc;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin: 5px 0 0 5px;\r\n    border: 1px solid #11a3fc;\r\n}\r\n.form-horizontal .main-checkbox label{\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n}\r\n.form-horizontal .main-checkbox label:after{\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 5px;\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 4px;\r\n    border: 3px solid #fff;\r\n    border-top: none;\r\n    border-right: none;\r\n    background: transparent;\r\n    opacity: 0;\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]{\r\n    visibility: hidden;\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{\r\n    opacity: 1;\r\n}\r\n.form-horizontal .text{\r\n    float: left;\r\n    margin-left: 7px;\r\n    line-height: 20px;\r\n    padding-top: 5px;\r\n    text-transform: capitalize;\r\n}\r\n.form-horizontal .btn{\r\n    float: right;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: #00b4ef;\r\n    border-radius: 30px;\r\n    padding: 10px 25px;\r\n    border: none;\r\n    text-transform: capitalize;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n@media only screen and (max-width: 479px){\r\n    .form-horizontal .form-group{\r\n        padding: 0 25px;\r\n    }\r\n    .form-horizontal .form-group i{\r\n        left: 45px;\r\n    }\r\n    .form-horizontal .btn{\r\n        padding: 10px 20px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<script src=\"login.component.ts\"></script><br>-->\n<!--<h2 class=\"page-header\">Login</h2>-->\n<!--<form (submit)=\"onLoginSubmit()\">-->\n<!--<div class=\"form-group\">-->\n<!--<label>Username</label>-->\n<!--<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label>Password</label>-->\n<!--<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">-->\n<!--</div>-->\n<!--<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">-->\n<!--</form>-->\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <script src=\"login.component.ts\"></script>\n            <br>\n            <form (submit)=\"onLoginSubmit()\" class=\"form-horizontal\">\n                <span class=\"heading\">Login</span>\n                <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"E-mail\">\n                </div>\n                <div class=\"form-group help\">\n                    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Password\">\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-default\">Enter</button>\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/component/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/mm-creation/mm-creation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/mm-creation/mm-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>Creation of your marketing move</h1>\n  <p class=\"lead\">Lets create your marketing move. First of all, you need to fill in the information about.\n      Then you need to choose a strategy or create your own. After all it will be sent to our administrator\n  to be confirmed or refused. Please be patient.</p>\n\n\n    <script src=\"mm-creation.component.ts\"></script><br>\n    <form (submit)=\"onMMCreation()\">\n        <div class=\"form-group\">\n            <label>Name of the project</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label>What goal do you want to achieve?</label>\n            <input type=\"text\" [(ngModel)]=\"goal\" name=\"goal\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label>Desription</label>\n            <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label>What is the approximate duration of the project (days)?</label>\n            <input type=\"text\" [(ngModel)]=\"duration\" name=\"duration\" class=\"form-control\">\n        </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\">\n    </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/mm-creation/mm-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_creator_service__ = __webpack_require__("../../../../../src/app/services/creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MmCreationComponent = (function () {
    function MmCreationComponent(creator, router) {
        this.creator = creator;
        this.router = router;
        this.timeCompleted = '0';
    }
    MmCreationComponent.prototype.ngOnInit = function () {
    };
    MmCreationComponent.prototype.onMMCreation = function () {
        var user_id = localStorage.getItem('user_id');
        var project = {
            user: user_id,
            strategy: null,
            name: this.name,
            goal: this.goal,
            description: this.description,
            duration: this.duration,
            timeCompleted: this.timeCompleted,
            isConfirmed: false,
            isActive: false,
            createdDate: new Date()
        };
        this.creator.sendProjectData(project);
        this.router.navigate(['/strategy'], { queryParams: { creator: true } });
    };
    MmCreationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mm-creation',
            template: __webpack_require__("../../../../../src/app/component/mm-creation/mm-creation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/mm-creation/mm-creation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_creator_service__["a" /* CreatorService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], MmCreationComponent);
    return MmCreationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Market Manager</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n            aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/create']\">Create project</a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/strategy']\">Create strategy</a>\n            </li>\n            <!-- <li  *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n               <a class=\"nav-link\" [routerLink]=\"['/admin-page']\">AdminPage</a>\n             </li>-->\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n            </li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n            </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.projectsBlock{\r\n    display: inline-block;\r\n    box-sizing: content-box;\r\n    float: left;\r\n    z-index: auto;\r\n    width: 25%;\r\n    height: 30%;\r\n    min-height: 100px;\r\n    position: static;\r\n    cursor: default;\r\n    opacity: 0.78;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    overflow: hidden;\r\n    border: 1px solid;\r\n    border-radius: 16px;\r\n    font: normal 16px/1 Georgia, serif;\r\n    color: rgba(29,56,135,1);\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    background: linear-gradient(180deg, rgb(146, 255, 255) 0, rgba(234,242,220,1) 100%);\r\n    background-repeat: repeat-x;\r\n    background-position: 50% 50%;\r\n    background-origin: padding-box;\r\n    background-clip: border-box;\r\n    background-size: auto auto;\r\n    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;\r\n    text-shadow: 0 0 9px rgba(155,154,226,1) ;\r\n    transition: none;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n    -webkit-transform-origin: 50% 50% 0;\r\n    transform-origin: 50% 50% 0;\r\n}\r\n\r\n\r\n.strategiesBlock{\r\n    display: inline-block;\r\n    box-sizing: content-box;\r\n    float: left;\r\n    z-index: auto;\r\n    width: 25%;\r\n    height: 30%;\r\n    min-height: 100px;\r\n    position: static;\r\n    cursor: default;\r\n    opacity: 0.78;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    overflow: hidden;\r\n    border: 1px solid;\r\n    border-radius: 16px;\r\n    font: normal 16px/1 Georgia, serif;\r\n    color: rgba(29,56,135,1);\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    background: linear-gradient(180deg, rgb(95, 255, 72) 0, rgba(234,242,220,1) 100%);\r\n    background-repeat: repeat-x;\r\n    background-position: 50% 50%;\r\n    background-origin: padding-box;\r\n    background-clip: border-box;\r\n    background-size: auto auto;\r\n    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;\r\n    text-shadow: 0 0 9px rgba(155,154,226,1) ;\r\n    transition: none;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n    -webkit-transform-origin: 50% 50% 0;\r\n    transform-origin: 50% 50% 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-12\">\n    <div *ngIf=\"user\">\n\n        <div class=\"projects\" style=\"position:relative\">\n            <h4 align=\"center\" style=\"font-family: Calibri\">Your projects</h4>\n            <div *ngFor=\"let project of projects\">\n                <div class=\"projectsBlock\">\n                    <div class=\"row\">\n                        <div class=\"col-md-10\">\n                            <h4>{{project.name}}</h4>\n                            <hr style=\"width: 100%\">\n                        </div>\n\n                        <div class=\"col-md-2\">\n                            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProject(project._id)\">X\n                            </button>\n                        </div>\n                        <div class=\"col-md-10\">\n                            <h6>Status:{{getStatus(project.isActive)}}</h6>\n                            <h6>Date:{{getDate(project.createdDate)}}</h6>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"projectInfo(project)\">>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"strategies\" style=\"position:relative; clear:left;\">\n        <h4 align=\"center\" style=\"font-family: Calibri\">Your strategies</h4>\n        <div *ngFor=\"let strategy of strategies\">\n            <div class=\"strategiesBlock\">\n                <div class=\"row\">\n                    <div class=\"col-md-10\">\n                        <h4>{{strategy.name}}</h4>\n                        <hr style=\"width: 100%\">\n                    </div>\n\n                    <div class=\"col-md-2\">\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteStrategy(strategy._id)\">\n                            X\n                        </button>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <h6>Project:{{strategy.project}}</h6>\n                        <h6>Status:{{getStatus(strategy.isActive)}}</h6>\n                        <h6>Date:{{getDate(strategy.createdDate)}}</h6>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"strategyInfo(strategy)\">>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_creator_service__ = __webpack_require__("../../../../../src/app/services/creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(authService, router, creator, flashMessage, activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.creator = creator;
        this.flashMessage = flashMessage;
        this.activatedRoute = activatedRoute;
        this.getProjects();
        this.getStrategies();
        this.createDummyProgress();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.getProjects = function () {
        var _this = this;
        this.creator.getProjectsByUser().subscribe(function (data) {
            if (data.success) {
                _this.projects = data.projects;
            }
            else {
                _this.flashMessage.show('Something went wrong while getting the projects', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    ProfileComponent.prototype.getStrategies = function () {
        var _this = this;
        this.creator.getStrategyByUser().subscribe(function (data) {
            if (data.success) {
                _this.strategies = data.strategies;
            }
            else {
                _this.flashMessage.show('Something went wrong while getting the strategies', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    ProfileComponent.prototype.projectInfo = function (project) {
        this.creator.sendProjectInfo(project);
        this.router.navigate(['/project-manager']);
    };
    ProfileComponent.prototype.strategyInfo = function (strategy) {
        this.creator.sendStrategyInfo(strategy);
        this.router.navigate(['/strategy-manager']);
    };
    ProfileComponent.prototype.deleteProject = function (project) {
        var _this = this;
        this.creator.deleteProject(project).subscribe(function (data) {
            //why it is not working?
            if (data.success) {
                _this.flashMessage.show('Project was deleted', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong while deleting the project', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
        this.flashMessage.show('Project was deleted', { cssClass: 'alert-success', timeout: 3000 });
        //this.router.navigate(['/profile']);
        location.reload();
        //this.getProjects();
    };
    ProfileComponent.prototype.deleteStrategy = function (strategy) {
        var _this = this;
        this.creator.deleteStrategy(strategy).subscribe(function (data) {
            //why it is not working?
            if (data.success) {
                _this.flashMessage.show('Strategy was deleted', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong while deleting the strategy', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
        this.flashMessage.show('Strategy was deleted', { cssClass: 'alert-success', timeout: 3000 });
        location.reload();
    };
    ProfileComponent.prototype.getStatus = function (status) {
        return this.creator.getStatus(status);
    };
    ProfileComponent.prototype.getDate = function (date) {
        return this.creator.getDate(date);
    };
    ProfileComponent.prototype.getDateForProgress = function (date) {
        return this.creator.getDateForProgress(date);
    };
    ProfileComponent.prototype.sendProjectData = function (project) {
        //todo sending of a current project and getting it from the project manager
    };
    ProfileComponent.prototype.createDummyProgress = function () {
        var _this = this;
        var dummyProgress = setTimeout(function () { return _this.dummyProgressFunc(); }, 1000);
        //let dummyProgress = setInterval(()=>this.dummyProgressFunc(),5000);
    };
    ProfileComponent.prototype.dummyProgressFunc = function () {
        var _this = this;
        for (var _i = 0, _a = this.strategies; _i < _a.length; _i++) {
            var strategy = _a[_i];
            var testValue = +strategy.initialData + Math.floor(Math.random() * (100 - 10)) + "";
            var testName = this.getDateForProgress(Date.now()) + "";
            strategy.progress[testName.toString()] = testValue;
            this.creator.strategyProgressUpdate(strategy, strategy.progress).subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                }
                else {
                    _this.flashMessage.show('Something went wrong while changing the progress', {
                        cssClass: 'alert-danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/component/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/profile/profile.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_creator_service__["a" /* CreatorService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/project-manager/project-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".strategiesBlock{\r\n    display: inline-block;\r\n    box-sizing: content-box;\r\n    float: left;\r\n    z-index: auto;\r\n    width: 38%;\r\n    height: 30%;\r\n    min-height: 100px;\r\n    position: static;\r\n    cursor: default;\r\n    opacity: 0.78;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    overflow: hidden;\r\n    border: 1px solid;\r\n    border-radius: 16px;\r\n    font: normal 16px/1 Georgia, serif;\r\n    color: rgba(29,56,135,1);\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    background: linear-gradient(180deg, rgb(255, 232, 32) 0, rgba(234,242,220,1) 100%);\r\n    background-repeat: repeat-x;\r\n    background-position: 50% 50%;\r\n    background-origin: padding-box;\r\n    background-clip: border-box;\r\n    background-size: auto auto;\r\n    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;\r\n    text-shadow: 0 0 9px rgba(155,154,226,1) ;\r\n    transition: none;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n    -webkit-transform-origin: 50% 50% 0;\r\n    transform-origin: 50% 50% 0;\r\n}\r\n\r\n.infoBlock{\r\n    display: inline-block;\r\n    box-sizing: content-box;\r\n\r\n    z-index: auto;\r\n    width: 90%;\r\n    height:80%;\r\n    min-height: 200px;\r\n    position: static;\r\n    cursor: default;\r\n    opacity: 0.78;\r\n    margin: 11px;\r\n    padding: 20px;\r\n    overflow: hidden;\r\n    border: 2px solid;\r\n    border-radius: 10px;\r\n    font: normal 16px/1 Georgia, serif;\r\n    color: rgba(29,56,135,1);\r\n    text-align: left;\r\n    text-overflow: ellipsis;\r\n    background: linear-gradient(180deg, rgb(223, 255, 255) 0, rgba(234,242,220,1) 100%);\r\n    background-repeat: repeat-x;\r\n    background-position: 50% 50%;\r\n    background-origin: padding-box;\r\n    background-clip: border-box;\r\n    background-size: auto auto;\r\n    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;\r\n    text-shadow: 0 0 9px rgba(155,154,226,1) ;\r\n    transition: none;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n    -webkit-transform-origin: 50% 50% 0;\r\n    transform-origin: 50% 50% 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/project-manager/project-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10px;\">\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <h4 align=\"center\" style=\"font-family: Calibri\">Project info</h4>\n            <p></p>\n            <div class=\"infoBlock\">\n                <h6>Name:</h6> {{project.name}}<p></p>\n                <h6>Description: </h6>{{project.description}}<p></p>\n                <h6>Date: </h6> {{getDate(project.createdDate)}}<p></p>\n                <h6>Status: </h6> {{getStatusProject(project.isActive)}}!\n                <button type=\"button\" class=\"btn btn-warning btn-sm\"\n                        (click)=\"changeProjectStatus(project._id,project.isActive)\">\n                    Change\n                </button>\n                <h6>Duration: </h6> {{project.duration}}days <p></p>\n\n                <div class=\"\">\n                    <h4 align=\"center\" style=\"font-family: Calibri\">Progress</h4>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped progress-bar-animated\"\n                             role=\"progressbar\" aria-valuenow=\"23\" aria-valuemin=\"0\"\n                             aria-valuemax=\"100\" style=\"width:23%\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-8\">\n            <div class=\"strategies\" style=\"position:relative; clear:left;\">\n                <h4 align=\"center\" style=\"font-family: Calibri\">Related strategy</h4>\n                <div *ngFor=\"let strategy of strategies\">\n                    <div class=\"strategiesBlock\">\n                        <div class=\"row\">\n                            <div class=\"col-md-10\">\n                                <h4>{{strategy.name}}</h4>\n                                <hr style=\"width: 100%\">\n                            </div>\n\n                            <div class=\"col-md-2\">\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"\n                                        (click)=\"deleteStrategy(strategy._id)\">\n                                    X\n                                </button>\n\n                            </div>\n                            <div class=\"col-md-10\">\n                                <h6>Status:{{getStatusStrategy(strategy.isActive)}}</h6>\n                                <h6>Date:{{getDate(strategy.createdDate)}}</h6>\n                            </div>\n                            <div class=\"col-md-2\">\n                                <button type=\"button\" class=\"btn btn-success btn-sm\"\n                                        (click)=\"strategyInfo(strategy)\">>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/component/project-manager/project-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_creator_service__ = __webpack_require__("../../../../../src/app/services/creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectManagerComponent = (function () {
    function ProjectManagerComponent(creator, flashMessage, router) {
        this.creator = creator;
        this.flashMessage = flashMessage;
        this.router = router;
        this.project = this.creator.getProjectInfo();
        this.getStrategies();
    }
    ProjectManagerComponent.prototype.ngOnInit = function () {
    };
    ProjectManagerComponent.prototype.getStatusProject = function (status) {
        if (status) {
            return "The project is active now!";
        }
        return "The project is disabled now!";
    };
    ProjectManagerComponent.prototype.getStatusStrategy = function (status) {
        return this.creator.getStatus(status);
    };
    ProjectManagerComponent.prototype.getDate = function (date) {
        return this.creator.getDate(date);
    };
    ProjectManagerComponent.prototype.getStrategies = function () {
        var _this = this;
        this.creator.getStrategyByProject(this.project.name).subscribe(function (data) {
            if (data.success) {
                _this.strategies = data.strategies;
            }
            else {
                _this.flashMessage.show('Something went wrong while getting the strategies', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    ProjectManagerComponent.prototype.changeProjectStatus = function (project, status) {
        var _this = this;
        this.creator.changeProjectStatus(project, status).subscribe(function (data) {
            if (data.success) {
                console.log(data);
            }
            else {
                _this.flashMessage.show('Something went wrong while changing the status', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    ProjectManagerComponent.prototype.changeStrategyStatus = function (strategy, status) {
        var _this = this;
        this.creator.changeStrategyStatus(strategy, status).subscribe(function (data) {
            if (data.success) {
                console.log(data);
            }
            else {
                _this.flashMessage.show('Something went wrong while changing the status', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    ProjectManagerComponent.prototype.strategyInfo = function (strategy) {
        this.creator.sendStrategyInfo(strategy);
        this.router.navigate(['/strategy-manager']);
    };
    ProjectManagerComponent.prototype.getCompletedPart = function () {
        return "25%";
    };
    ProjectManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-manager',
            template: __webpack_require__("../../../../../src/app/component/project-manager/project-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/project-manager/project-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_creator_service__["a" /* CreatorService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProjectManagerComponent);
    return ProjectManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* Form Style */\r\n.form-horizontal{\r\n    background: #fff;\r\n    padding-bottom: 40px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n}\r\n.form-horizontal .heading{\r\n    display: block;\r\n    font-size: 35px;\r\n    font-weight: 700;\r\n    padding: 35px 0;\r\n    border-bottom: 1px solid #f0f0f0;\r\n    margin-bottom: 30px;\r\n}\r\n.form-horizontal .form-group{\r\n    padding: 0 40px;\r\n    margin: 0 0 25px 0;\r\n    position: relative;\r\n}\r\n.form-horizontal .form-control{\r\n    background: #f0f0f0;\r\n    border: none;\r\n    border-radius: 20px;\r\n    box-shadow: none;\r\n    padding: 0 20px 0 45px;\r\n    height: 40px;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus{\r\n    background: #e0e0e0;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n}\r\n.form-horizontal .form-group i{\r\n    position: absolute;\r\n    top: 12px;\r\n    left: 60px;\r\n    font-size: 17px;\r\n    color: #c8c8c8;\r\n    transition : all 0.5s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus + i{\r\n    color: #00b4ef;\r\n}\r\n.form-horizontal .fa-question-circle{\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 12px;\r\n    right: 60px;\r\n    font-size: 20px;\r\n    color: #808080;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n.form-horizontal .fa-question-circle:hover{\r\n    color: #000;\r\n}\r\n.form-horizontal .main-checkbox{\r\n    float: left;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: #11a3fc;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin: 5px 0 0 5px;\r\n    border: 1px solid #11a3fc;\r\n}\r\n.form-horizontal .main-checkbox label{\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n}\r\n.form-horizontal .main-checkbox label:after{\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 5px;\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 4px;\r\n    border: 3px solid #fff;\r\n    border-top: none;\r\n    border-right: none;\r\n    background: transparent;\r\n    opacity: 0;\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]{\r\n    visibility: hidden;\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{\r\n    opacity: 1;\r\n}\r\n.form-horizontal .text{\r\n    float: left;\r\n    margin-left: 7px;\r\n    line-height: 20px;\r\n    padding-top: 5px;\r\n    text-transform: capitalize;\r\n}\r\n.form-horizontal .btn{\r\n    float: right;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: #00b4ef;\r\n    border-radius: 30px;\r\n    padding: 10px 25px;\r\n    border: none;\r\n    text-transform: capitalize;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n@media only screen and (max-width: 479px){\r\n    .form-horizontal .form-group{\r\n        padding: 0 25px;\r\n    }\r\n    .form-horizontal .form-group i{\r\n        left: 45px;\r\n    }\r\n    .form-horizontal .btn{\r\n        padding: 10px 20px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<br>-->\r\n<!--<h2 class=\"page-header\">Register</h2>-->\r\n<!--<form (submit)=\"onRegisterSubmit()\">-->\r\n<!--<div class=\"form-group\">-->\r\n<!--<label>Name</label>-->\r\n<!--<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group\">-->\r\n<!--<label>Username</label>-->\r\n<!--<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group\">-->\r\n<!--<label>Email</label>-->\r\n<!--<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group\">-->\r\n<!--<label>Password</label>-->\r\n<!--<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">-->\r\n<!--</div>-->\r\n<!--<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">-->\r\n<!--</form>-->\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <script src=\"register.component.ts\"></script>\r\n            <br>\r\n            <form (submit)=\"onRegisterSubmit()\" class=\"form-horizontal\">\r\n                <span class=\"heading\">Register</span>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\"\r\n                           placeholder=\"Username\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"E-mail\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"\r\n                           placeholder=\"Password\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" style=\"text-align: center\" class=\"btn btn-default center-block\">Register\r\n                    </button>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            isAdmin: false
        };
        //required validation
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Email validation
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please enter a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/component/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/strategy-manager/strategy-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".infoBlock{\r\n    display: inline-block;\r\n    box-sizing: content-box;\r\n\r\n    z-index: auto;\r\n    width: 80%;\r\n    height:100%;\r\n    min-height: 300px;\r\n    position: static;\r\n    cursor: default;\r\n    opacity: 0.78;\r\n    margin: 0px;\r\n    padding: 20px;\r\n    overflow: hidden;\r\n    border: 2px solid;\r\n    border-radius: 10px;\r\n    font: normal 16px/1 Georgia, serif;\r\n    color: rgba(29,56,135,1);\r\n    text-align: left;\r\n    text-overflow: ellipsis;\r\n    background: linear-gradient(180deg, rgb(223, 255, 255) 0, rgba(234,242,220,1) 100%);\r\n    background-repeat: repeat-x;\r\n    background-position: 50% 50%;\r\n    background-origin: padding-box;\r\n    background-clip: border-box;\r\n    background-size: auto auto;\r\n    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;\r\n    text-shadow: 0 0 9px rgba(155,154,226,1) ;\r\n    transition: none;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n    -webkit-transform-origin: 50% 50% 0;\r\n    transform-origin: 50% 50% 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/strategy-manager/strategy-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10px;\">\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <div class=\"infoBlock\">\n                <h4 align=\"center\" style=\"font-family: Calibri\">Strategy info</h4>\n                <p></p>\n                <h6>Name:</h6> {{strategy.name}}<p></p>\n                <h6>Description: </h6>{{strategy.description}}<p></p>\n                <h6>Date: </h6> {{getDate(strategy.createdDate)}}<p></p>\n                <h6>Type of strategy: </h6> {{strategy.type}}<p></p>\n                <h6>Status: </h6> {{getStatusStrategy(strategy.isActive)}}!\n                <button type=\"button\" class=\"btn btn-warning btn-sm\"\n                        (click)=\"changeStrategyStatus(strategy._id,strategy.isActive)\">\n                    Change\n                </button>\n                <h6>Duration: </h6> {{strategy.duration}}hours <p></p>\n\n                <div class=\"\">\n                    <h4 align=\"center\" style=\"font-family: Calibri\">Progress</h4>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\"\n                             aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-8\">\n            <h4 align=\"center\" style=\"font-family: Calibri\">Process of the strategy</h4>\n\n            <div class=\"row\">\n                <div style=\"display: block;\">\n                    <canvas baseChart width=\"800\" height=\"250\"\n                            [datasets]=\"lineChartData\"\n                            [labels]=\"lineChartLabels\"\n                            [options]=\"lineChartOptions\"\n                            [colors]=\"lineChartColors\"\n                            [legend]=\"lineChartLegend\"\n                            [chartType]=\"lineChartType\"\n                            (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n            </div>\n\n            <h4 align=\"center\" style=\"font-family: Calibri\">Parameters that were used in the strategy</h4>\n            <div *ngFor=\"let parameter of parameters\">\n                &#8226; {{parameter}}\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/component/strategy-manager/strategy-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_creator_service__ = __webpack_require__("../../../../../src/app/services/creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StrategyManagerComponent = (function () {
    function StrategyManagerComponent(creator, flashMessage, router) {
        this.creator = creator;
        this.flashMessage = flashMessage;
        this.router = router;
        this.progressArray = this.diagramBuilderData();
        this.intervalArray = this.diagramBuilderInterval();
        this.label = this.diagramBuilderLabel();
        this.parameters = [];
        this.lineChartData = [
            { data: this.progressArray, label: this.label }
        ];
        this.lineChartLabels = this.intervalArray;
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.getParameters();
    }
    StrategyManagerComponent.prototype.ngOnInit = function () {
    };
    StrategyManagerComponent.prototype.changeStrategyStatus = function (strategy, status) {
        var _this = this;
        this.creator.changeStrategyStatus(strategy, status).subscribe(function (data) {
            if (data.success) {
                console.log(data);
            }
            else {
                _this.flashMessage.show('Something went wrong while changing the status', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    StrategyManagerComponent.prototype.getStatusStrategy = function (status) {
        if (status) {
            return "The strategy is active now";
        }
        return "The strategy is disabled now";
    };
    StrategyManagerComponent.prototype.getDate = function (date) {
        return this.creator.getDate(date);
    };
    StrategyManagerComponent.prototype.getTrackingPoint = function () {
        if (this.strategy.trackingPoint === "Amount of income") {
            return "($).";
        }
        return " customers.";
    };
    StrategyManagerComponent.prototype.getCurrentData = function () {
        return this.strategy.progress['sales'];
    };
    StrategyManagerComponent.prototype.diagramBuilderData = function () {
        var dataArray = [];
        this.strategy = this.creator.getStrategyInfo();
        for (var name_1 in this.strategy.progress) {
            dataArray.push(this.strategy.progress[name_1]);
        }
        return dataArray;
    };
    StrategyManagerComponent.prototype.diagramBuilderInterval = function () {
        var intervalArray = [];
        this.strategy = this.creator.getStrategyInfo();
        for (var name_2 in this.strategy.progress) {
            intervalArray.push(name_2);
        }
        return intervalArray;
    };
    StrategyManagerComponent.prototype.diagramBuilderLabel = function () {
        this.strategy = this.creator.getStrategyInfo();
        return this.strategy.trackingPoint;
    };
    StrategyManagerComponent.prototype.getParameters = function () {
        for (var i in this.strategy.parameters) {
            this.parameters.push(i.concat(" : ", this.strategy.parameters[i]));
        }
    };
    StrategyManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-strategy-manager',
            template: __webpack_require__("../../../../../src/app/component/strategy-manager/strategy-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/strategy-manager/strategy-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_creator_service__["a" /* CreatorService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], StrategyManagerComponent);
    return StrategyManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/strategy/strategy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projectContent{\r\n    width:30%;\r\n    height:100%;\r\n    float:left;\r\n    padding-left:0%;\r\n}\r\n\r\n.selectWrapper {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border: 1px solid #bbb;\r\n    border-radius: 2px;\r\n    background:#FFFFFF url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%3E%3Cpath%20d%3D%22M4.33%208.5L0%201L8.66%201z%22%20fill%3D%22%2300AEA9%22%2F%3E%3C%2Fsvg%3E') right 13px center no-repeat;\r\n}\r\n\r\n.selectWrapper select {\r\n    padding: 12px 40px 12px 20px;\r\n    font-size: 18px;\r\n    line-height: 30px;\r\n    width: 100%;\r\n    border: none;\r\n    box-shadow: none;\r\n    background: transparent;\r\n    background-image: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    -moz-appearance: none;\r\n    text-indent: 0.01px;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.wrapperBlock{\r\n}\r\n.firstBlock{\r\n  position: absolute;\r\n    margin:0 0 0 0;\r\n}\r\n.secondBlock{\r\n    position: absolute;\r\n    margin:0 0 0 0;\r\n    display: none;\r\n}\r\n\r\n.thirdBlock{\r\n    position: absolute;\r\n    margin:0 0 0 0;\r\n    display: none;\r\n}\r\n\r\n.fourthBlock{\r\n    position: absolute;\r\n    margin:0 0 0 0;\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/strategy/strategy.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js\"></script>\n<div class=\"container\">\n    <div *ngIf=\"user\">\n\n    <h1>Your strategy</h1>\n    <p class=\"lead\">Here you can create a strategy for your projects</p>\n\n    <script src=\"strategy.component.ts\"></script>\n    <br>\n    <form (submit)=\"onStrategyCreation()\">\n\n        <div class=\"firstBlock\" id=\"firstBlock\">\n\n            <div class=\"projectElector\">\n                <div *ngIf=\"isCreator\">\n                    <div class=\"row\">\n                        <div class=\"row-8\">\n                            <h4>Chosen project: {{createdProject.name}}</h4>\n                        </div>\n                        <div class=\"row-4\">\n                            <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"changeProject()\">Back</button>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"!isCreator\">\n                    <div class=\"projectContent\">\n                        <label>Choose project</label>\n                    </div>\n                    <select class=\"form-control\" #curProject (change)=\"changeCurrentProject(curProject.value)\">\n                        <option>Choose project</option>\n                        <option *ngFor=\"let project of projects\" [value]=\"project.name\">{{project.name}}</option>\n                    </select>\n                </div>\n                <br>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Name of the strategy</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Describe the strategy</label>\n                <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>What is the approximate duration of the strategy (hours)?</label>\n                <input type=\"text\" [(ngModel)]=\"duration\" name=\"duration\" class=\"form-control\">\n            </div>\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"changeBlock('firstBlock','secondBlock')\">Next\n                step\n            </button>\n        </div>\n\n        <div class=\"secondBlock\" id=\"secondBlock\">\n            <div class=\"form-group\">\n                <label>What do you want to track?</label>\n                <select class=\"form-control\" #trackingPoint (change)=\"changeTrackingPoint(trackingPoint.value)\">\n                    <option>Amount of income</option>\n                    <option>Amount of customers</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label>Please, enter an initial data that was before applying the strategy (customers/money for a\n                    day)</label>\n                <input type=\"text\" [(ngModel)]=\"initialData\" name=\"initialData\" class=\"form-control\">\n            </div>\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"changeBlock('secondBlock','thirdBlock')\">Next\n                step\n            </button>\n        </div>\n\n        <div class=\"thirdBlock\" id=\"thirdBlock\">\n            <div class=\"form-group\">\n                <label>What kind of strategy is it?</label>\n                <select class=\"form-control\" #strategy (change)=\"changeStrategyType(strategy.value)\">\n                    <option>Advertisement</option>\n                    <option>Environment</option>\n                    <option>Promotions</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label>Do you want to use our devices such as cameras and sensors?</label>\n                <select class=\"form-control\" #IoT (change)=\"changeIoTDevices(IoT.value)\">\n                    <option>Do not use</option>\n                    <option>Cameras</option>\n                    <option>Sensors</option>\n                    <option>Both of them</option>\n                </select>\n            </div>\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"changeBlock('thirdBlock','fourthBlock')\">Next\n                step\n            </button>\n        </div>\n\n        <div class=\"fourthBlock\" id=\"fourthBlock\">\n            <label>You have chosen a next type of strategy: <b>{{type}}</b>.</label><br>\n            <label>Here you can enter parameters that you want to apply with your current strategy</label>\n            <br>\n            <div class=\"row\">\n                <div class=\"col-3\">\n                    <h6>Name of parameter: </h6>\n                </div>\n                <div class=\"col-2\">\n                    <input type=\"text\" [(ngModel)]=\"parameterName\" id=\"parameterName\" name=\"parameterName\"\n                           class=\"form-control\">\n                </div>\n                <div class=\"col-3\">\n                    <h6>Value of parameter: </h6>\n                </div>\n                <div class=\"col-2\">\n                    <input type=\"text\" [(ngModel)]=\"parameterValue\" id=\"parameterValue\" name=\"parameterValue\"\n                           class=\"form-control\">\n                </div>\n                <div class=\"col-2\">\n                    <button type=\"button\" class=\"btn btn-primary btn-warning\" (click)=\"addParameter()\">+</button>\n                </div>\n            </div>\n            <table>\n                <tr>\n                    <th><h5>Parameters:</h5></th>\n                </tr>\n                <tr *ngFor='let parameter of parametersArray'>\n                    <td>&#8226;{{parameter}}</td>\n                </tr>\n            </table>\n            <br>\n\n\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\">\n        </div>\n\n    </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/strategy/strategy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_creator_service__ = __webpack_require__("../../../../../src/app/services/creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StrategyComponent = (function () {
    function StrategyComponent(creator, flashMessage, router, authService, route) {
        var _this = this;
        this.creator = creator;
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.user = localStorage.getItem('user_id');
        this.timeCompleted = '0';
        this.progress = {};
        this.isActive = false;
        //page parameters
        this.isCreator = false;
        //parameters
        this.parameterName = '';
        this.parameterValue = '';
        this.parameters = {};
        this.parametersArray = [];
        this.route.queryParams.subscribe(function (params) {
            _this.isCreator = params['creator'] || false;
        });
    }
    StrategyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.route.queryParams.subscribe(function (params) {
            _this.isCreator = params['creator'] || false;
        });
    };
    StrategyComponent.prototype.onStrategyCreation = function () {
        if (this.isCreator) {
            this.strategyToNewProject();
        }
        else {
            this.strategyToExistedProject();
        }
    };
    StrategyComponent.prototype.strategyToNewProject = function () {
        var _this = this;
        var project = this.creator.getProjectDataAndSetStrategy(this.description);
        this.progress[this.creator.getDateForProgress(Date.now()) + ""] = this.initialData;
        var strategy = {
            project: project.name,
            user: this.user,
            name: this.name,
            description: this.description,
            duration: this.duration,
            timeCompleted: this.timeCompleted,
            trackingPoint: this.trackingPoint,
            initialData: this.initialData,
            type: this.type,
            iotTech: { 'iot': this.iotTech },
            parameters: this.parameters,
            progress: this.progress,
            isActive: this.isActive,
            createdDate: Date.now(),
        };
        this.creator.saveStrategy(strategy).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Strategy created', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong while creating a strategy', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
        this.creator.saveProject(project).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Project created', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['profile']);
            }
            else {
                _this.flashMessage.show('Something went wrong while creating a project', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    StrategyComponent.prototype.strategyToExistedProject = function () {
        var _this = this;
        this.progress[this.creator.getDateForProgress(Date.now()) + ""] = this.initialData;
        var strategy = {
            project: this.projectSelector,
            user: this.user,
            name: this.name,
            description: this.description,
            duration: this.duration,
            timeCompleted: this.timeCompleted,
            trackingPoint: this.trackingPoint,
            initialData: this.initialData,
            type: this.type,
            iotTech: { 'iot': this.iotTech },
            parameters: this.parameters,
            progress: this.progress,
            isActive: this.isActive,
            createdDate: Date.now(),
        };
        //console.log(strategy);
        this.creator.saveStrategy(strategy).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Strategy created', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong while creating a strategy', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    };
    StrategyComponent.prototype.changeProject = function () {
        this.router.navigate(['/create'], { queryParams: { changer: true } });
    };
    StrategyComponent.prototype.changeBlock = function (toHideBlock, toShowBlock) {
        document.getElementById(toHideBlock).style.display = 'none';
        document.getElementById(toShowBlock).style.display = 'block';
    };
    StrategyComponent.prototype.changeCurrentProject = function (value) {
        this.projectSelector = value;
    };
    StrategyComponent.prototype.changeTrackingPoint = function (value) {
        this.trackingPoint = value;
    };
    StrategyComponent.prototype.changeStrategyType = function (value) {
        this.type = value;
    };
    StrategyComponent.prototype.changeIoTDevices = function (value) {
        this.iotTech = value;
    };
    StrategyComponent.prototype.addParameter = function () {
        var name = this.parameterName;
        this.parameters[name] = this.parameterValue;
        var tempRes = "".concat(this.parameterName, " : ", this.parameterValue);
        this.parametersArray.push(tempRes);
        this.parameterName = '';
        this.parameterValue = '';
        // for(let i in this.parameters){
        //    console.log(i);
        //    console.log(this.parameters[i]);
        // }
    };
    StrategyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-strategy',
            template: __webpack_require__("../../../../../src/app/component/strategy/strategy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/strategy/strategy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_creator_service__["a" /* CreatorService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], StrategyComponent);
    return StrategyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/admin-func.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminFuncService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creator_service__ = __webpack_require__("../../../../../src/app/services/creator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminFuncService = (function () {
    function AdminFuncService(creator) {
        this.creator = creator;
    }
    AdminFuncService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__creator_service__["a" /* CreatorService */]])
    ], AdminFuncService);
    return AdminFuncService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user_id', user.id);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.getCurrentUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/creator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatorService = (function () {
    function CreatorService(http) {
        this.http = http;
    }
    //Transfer data
    CreatorService.prototype.sendProjectData = function (project) {
        this.project = project;
    };
    CreatorService.prototype.getProjectDataAndSetStrategy = function (strategy) {
        this.project.strategy = strategy;
        return this.project;
    };
    CreatorService.prototype.getProject = function () {
        return this.project;
    };
    //Creators
    CreatorService.prototype.saveStrategy = function (strategy) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/saveStrategy', strategy, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CreatorService.prototype.saveProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('projects/saveProject', project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Getters
    CreatorService.prototype.getProjectsByUser = function () {
        var user = { "user": localStorage.getItem('user_id') };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('projects/getProjectsByUserId', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CreatorService.prototype.getStrategyByProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var projectName = { "project": project };
        headers.append('Content-Type', 'application/json');
        return this.http.post('getStrategiesByProjectId', projectName, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CreatorService.prototype.getStrategyByUser = function () {
        var user = { "user": localStorage.getItem('user_id') };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/getStrategiesByUserId', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Delete
    CreatorService.prototype.deleteProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var project_id = { "project": project };
        headers.append('Content-Type', 'application/json');
        return this.http.post('projects/deleteProject', project_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CreatorService.prototype.deleteStrategy = function (strategy) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var strategy_id = { "strategy": strategy };
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/deleteStrategy', strategy_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CreatorService.prototype.changeProjectStatus = function (project, status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var projectChanger = { "project": project, "changeTo": !status };
        headers.append('Content-Type', 'application/json');
        return this.http.post('projects/changeStatus', projectChanger, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CreatorService.prototype.changeStrategyStatus = function (strategy, status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var strategyChanger = { "strategy": strategy, "changeTo": !status };
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/changeStatus', strategyChanger, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Manager
    CreatorService.prototype.sendProjectInfo = function (project) {
        this.project = project;
    };
    CreatorService.prototype.sendStrategyInfo = function (strategy) {
        this.strategy = strategy;
    };
    CreatorService.prototype.getProjectInfo = function () {
        return this.project;
    };
    CreatorService.prototype.getStrategyInfo = function () {
        return this.strategy;
    };
    CreatorService.prototype.getDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).format("DD/MM/YYYY HH:mm:ss");
    };
    CreatorService.prototype.getDateForProgress = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).format("DD/MM HH:mm");
    };
    CreatorService.prototype.getStatus = function (status) {
        if (status) {
            return "active";
        }
        return "disabled";
    };
    CreatorService.prototype.strategyProgressUpdate = function (strategy, progress) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var strategyChanger = { "strategy": strategy, "progress": progress };
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/changeProgress', strategyChanger, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CreatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CreatorService);
    return CreatorService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined
            || user.password == undefined || user.password == undefined) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
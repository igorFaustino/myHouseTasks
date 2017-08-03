webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top {\n\tmargin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"container-fluid\">\n\t<div class=\"container-fluid top\">\n\t\t<ngx-flash-messages></ngx-flash-messages>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tasklist_tasklist_component__ = __webpack_require__("../../../../../src/app/components/tasklist/tasklist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_shoplist_shoplist_component__ = __webpack_require__("../../../../../src/app/components/shoplist/shoplist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_select_select_component__ = __webpack_require__("../../../../../src/app/components/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_list_list_component__ = __webpack_require__("../../../../../src/app/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_shoplist_service__ = __webpack_require__("../../../../../src/app/services/shoplist.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular modules






// My components













// services






var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]], children: [
            { path: 'shoplist', redirectTo: 'shoplist/select', pathMatch: 'full' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
            { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_13__components_tasklist_tasklist_component__["a" /* TasklistComponent */] },
            {
                path: 'shoplist', component: __WEBPACK_IMPORTED_MODULE_14__components_shoplist_shoplist_component__["a" /* ShoplistComponent */], children: [
                    { path: 'select', component: __WEBPACK_IMPORTED_MODULE_17__components_select_select_component__["a" /* SelectComponent */] },
                    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_18__components_list_list_component__["a" /* ListComponent */] }
                ]
            }
        ]
    },
    { path: '**', redirectTo: 'dashboard' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_tasklist_tasklist_component__["a" /* TasklistComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_shoplist_shoplist_component__["a" /* ShoplistComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_select_select_component__["a" /* SelectComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_list_list_component__["a" /* ListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_flash_messages__["a" /* FlashMessagesModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_22__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_23__services_select_service__["a" /* SelectService */],
            __WEBPACK_IMPORTED_MODULE_24__services_shoplist_service__["a" /* ShoplistService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-2\">\n\t\t<sidebar></sidebar>\n\t</div>\n\t<div class=\"col-md-10\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"jumbotron\">\n\t<div class=\"container text-center \">\n\t\t<ul class=\"list-inline\">\n\t\t\t<li><p>Sistema MyHouseTask</p></li>\n\t\t</ul>\n\t\t<p>Criado por Igor Neves Faustino, todo o codigo está disponivel no <a href=\"\">Github</a></p>\n\t</div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"jumbotron jumbotron-fluid text-center\">\n\t\t<h2>Home</h2>\n\t</div>\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row text-center margin\">\n\t\t\t<div class=\"col-md-6 margin\">\n\t\t\t\t<h4>Lista de tarefas</h4>\n\t\t\t\t<div class=\"container text-justify margin\">\n\t\t\t\t\t<p>Organize seu dia e seus afazeres com nossa lista de tarefas!<br>Para acessar a lista de tarefas basta selecionar a opção no menu ao lado ou clicar no botão a baixo.</p>\n\t\t\t\t</div>\n\t\t\t\t<a class=\"btn btn-outline-primary btn-lg\" [routerLink]=\"['tasks']\" >Lista de tarefas</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 margin\">\n\t\t\t\t<h4>Lista de compras</h4>\n\t\t\t\t<div class=\"container text-justify margin\">\n\t\t\t\t\t<p>Monte sua lista de compras e salve um preset com seus itens preferido.<br>Para acessar a lista de compras basta selecionar a opção no menu ao lado ou clicar no botão a baixo.</p>\n\t\t\t\t</div>\n\t\t\t\t<a class=\"btn btn-outline-primary btn-lg\" [routerLink]=\"['shoplist']\" >Lista de compras</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".remove-btn{\n\tpadding-top: 2px;\n\tpadding-bottom: 2px;\n\tpadding-left: 8px;\n\tpadding-right: 8px;\n}\n\n.bought {\n\ttext-decoration: line-through;\n\tcolor: #888888; \n}\n\n.btn-margin {\n\tmargin-right: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<input type=\"text\" name=\"listName\" [(ngModel)]=\"list.name\" (input)=\"onNameImput()\" class=\"form-control form-control-lg form\" placeholder=\"Nome da lista\" >\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<form (submit)=\"addItem()\" >\n\t\t\t\t<div class=\"row container-fluid\">\n\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t<input type=\"text\" name=\"newItem\" class=\"form-control form-control-lg form\" placeholder=\"Adicionar item\" [(ngModel)]=\"newItem\" autofocus>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<input type=\"number\" min=\"1\" name=\"qtd\" class=\"form-control form-control-lg form\" placeholder=\"qtd\" [(ngModel)]=\"qtd\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t<button class=\"btn btn-outline-primary btn-lg form\" [disabled]=\"!newItem || !qtd\" >add!</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div class=\"row margin\">\n\t\t<div class=\"col-md-4\" *ngFor=\"let item of list.itens\" >\n\t\t\t<div class=\"container\" [ngClass]=\"{'bought': item.isBought}\" >\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<input (click)=\"updateItem(item.name)\" type=\"checkbox\" name=\"buy\" class=\"form-control\" [(ngModel)]=\"item.isBought\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-5 text-center\">\n\t\t\t\t\t\t{{ item.name }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 text-center\">\n\t\t\t\t\t\t<input type=\"number\" name=\"qtd\" min=\"1\" class=\"form-control\" placeholder=\"qtd\" [(ngModel)]=\"item.qtd\" (change)=\"onQtdInput()\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<button (click)=\"removeItem(item.name)\" class=\"btn btn-outline-danger remove-btn\">x</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex float-right margin\">\n\t\t<button *ngIf=\"boughtItens > 0\" type=\"button\" class=\"btn btn-outline-primary btn-margin\" (click)=\"unselectAll()\" >Desmarcar todos!</button>\n\t\t\n\t\t<!-- Button trigger modal  -->\n\t\t<button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">Deletar lista!</button>\n\t</div>\n\n\t<!-- modal -->\n\t<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5 class=\"modal-title\">Deletar esta lista?</h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body text-justify\">\n\t\t\t\t\t<p>Tem certeza que deseja deletar esta lista de compras?</p>\n\t\t\t\t\t<p>Todo o conteudo será perdido</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Cancelar</button>\n\t\t\t\t\t<button (click)=\"delete()\" type=\"button\" class=\"btn btn-outline-danger\" data-dismiss=\"modal\">Deletar</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shoplist_service__ = __webpack_require__("../../../../../src/app/services/shoplist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComponent = (function () {
    function ListComponent(selectService, shoplistService, router, flashMessagesServices) {
        this.selectService = selectService;
        this.shoplistService = shoplistService;
        this.router = router;
        this.flashMessagesServices = flashMessagesServices;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = {};
        this.newItem = null;
        this.qtd = null;
        // load list
        if (this.selectService.getSelectOp() != "" && this.selectService.getSelectOp() != undefined) {
            this.shoplistService.getList(this.selectService.getSelectOp()).subscribe(function (list) {
                _this.list = list;
                _this.setBoughtItens(list);
            });
        }
        else {
            var count = 0;
            this.shoplistService.getLists().subscribe(function (lists) {
                for (var i = lists.length - 1; i >= 0; i--) {
                    if (lists[i].name) {
                        if (lists[i].name.indexOf('new list') == 0) {
                            count++;
                        }
                    }
                }
                if (count == 0) {
                    var newName = "new list";
                }
                else {
                    var newName = 'new list(' + count + ')';
                }
                var newList = {
                    name: newName,
                    itens: []
                };
                _this.shoplistService.addList(newList).subscribe(function (msg) {
                    if (msg.success) {
                        _this.list = msg.shopList;
                    }
                    else {
                        _this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', { classes: ['alert', 'alert-danger', 'text-center'] });
                        _this.selectService.cleanSelect();
                        _this.router.navigateByUrl('/dashboard/shoplist');
                    }
                });
            });
        }
    };
    ListComponent.prototype.setBoughtItens = function (list) {
        this.boughtItens = 0;
        for (var task = list.itens.length - 1; task >= 0; task--) {
            if (list.itens[task].isBought) {
                this.boughtItens++;
            }
        }
    };
    ListComponent.prototype.onNameImput = function () {
        this.shoplistService.updateList(this.list).subscribe();
    };
    ListComponent.prototype.addItem = function () {
        for (var i = this.list.itens.length - 1; i >= 0; i--) {
            if (this.list.itens[i].name == this.newItem) {
                this.flashMessagesServices.show('Item já está cadastrado!', { classes: ['alert', 'alert-danger', 'text-center'] });
                return false;
            }
        }
        var newItem = {
            name: this.newItem,
            isBought: false,
            qtd: this.qtd
        };
        this.list.itens.push(newItem);
        this.newItem = null;
        this.qtd = null;
        this.shoplistService.updateList(this.list).subscribe();
    };
    ListComponent.prototype.updateItem = function (name) {
        var i = this.list.itens.length - 1;
        while (i > 0 && this.list.itens[i].name != name) {
            i--;
        }
        if (this.list.itens[i].name == name) {
            this.list.itens[i].isBought = !this.list.itens[i].isBought;
            if (this.list.itens[i].isBought) {
                this.boughtItens++;
            }
            else {
                this.boughtItens--;
            }
        }
        this.shoplistService.updateList(this.list).subscribe();
    };
    ListComponent.prototype.onQtdInput = function () {
        this.shoplistService.updateList(this.list).subscribe();
    };
    ListComponent.prototype.removeItem = function (name) {
        this.list.itens = this.list.itens.filter(function (item) {
            return item.name != name;
        });
        this.shoplistService.updateList(this.list).subscribe();
        this.selectService.cleanSelect();
    };
    ListComponent.prototype.delete = function () {
        var _this = this;
        this.shoplistService.deleteList(this.list._id).subscribe(function (msg) {
            if (msg.success) {
                _this.flashMessagesServices.show('Lista de compras deletada', { classes: ['alert', 'alert-success', 'text-center'] });
            }
            else {
                _this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', { classes: ['alert', 'alert-danger', 'text-center'] });
            }
        });
        this.selectService.cleanSelect();
        this.router.navigateByUrl('/dashboard/shoplist');
    };
    ListComponent.prototype.unselectAll = function () {
        this.boughtItens = 0;
        for (var i = this.list.itens.length - 1; i >= 0; i--) {
            if (this.list.itens[i].isBought) {
                this.list.itens[i].isBought = false;
            }
        }
        this.shoplistService.updateList(this.list).subscribe();
    };
    ListComponent.prototype.setNewName = function () {
        var count = 0;
        this.shoplistService.getLists().subscribe(function (lists) {
            for (var i = lists.length - 1; i >= 0; i--) {
                if (lists[i].name) {
                    if (lists[i].name.indexOf('Nova Lista') != -1) {
                        count++;
                    }
                }
            }
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_select_service__["a" /* SelectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shoplist_service__["a" /* ShoplistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shoplist_service__["a" /* ShoplistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _d || Object])
], ListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\n\tmargin-top: 50px;\n\tmargin-bottom: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\n\t<h2 class=\"text-center\" >Login</h2>\n\t<!-- <div class=\"margin\"><ngx-flash-messages></ngx-flash-messages></div> -->\n\t<form class=\"margin\" (submit)=\"onLoginSubmit()\">\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" id=\"username\" placeholder=\"username\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" placeholder=\"senha\">\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t<button class=\"btn btn-outline-success btn-lg\">Entrar</button>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(validateService, authservice, router, flashMessageService) {
        this.validateService = validateService;
        this.authservice = authservice;
        this.router = router;
        this.flashMessageService = flashMessageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        // validate login
        if (!this.validateService.validateLogin(user)) {
            return false;
        }
        this.authservice.login(user).subscribe(function (data) {
            if (data.success) {
                _this.authservice.storeUserData(data.token, data.User);
                _this.flashMessageService.show('Login realizado com sucesso', { classes: ['alert', 'alert-success', 'text-center'] });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessageService.show(data.msg, { classes: ['alert', 'alert-danger', 'text-center'],
                    timeout: 4000
                });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded navbar-inverse bg-inverse\">\n\t<div>\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n\t\t<a class=\"navbar-brand\" routerLink=\"/dashboard\">MyHouseTasks</a>\n\t</div>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n\t\t<ul class=\"nav navbar-nav mr-auto\">\n\t\t</ul>\n\t\t<div class=\"my-2 my-lg-0\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" routerLinkActive = \"active\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" routerLinkActive = \"active\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" routerLinkActive = \"active\">\n\t\t\t\t\t<a class=\"nav-link\" (click)=onLogoutClick() [routerLink]=\"['/login']\">Logout</a>\n\t\t\t\t</li>\n\t\t\t</ul>\t\n\t\t</div>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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
    function NavbarComponent(validateService, authService, router, flashMessagesServices) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessagesServices = flashMessagesServices;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesServices.show('Usuario desconectado', { classes: ['alert', 'alert-info', 'text-center'] });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user\">\n\t<h2 class=\"margin text-center\">Profile</h2>\n\t<form class=\"margin\" (submit)=\"onUpdateSubmit()\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"name\">Nome:</label>\t\n\t\t\t<input [(ngModel)]=\"updatedUser.name\" class=\"form-control\" type=\"text\" id=\"name\" name=\"name\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"username\">Username:</label>\n\t\t\t<input [(ngModel)]=\"updatedUser.username\" class=\"form-control\" type=\"text\" id=\"username\" name=\"username\">\n\t\t</div>\n\t\t<div class=\"form-group\" [ngClass]=\"{'has-danger': validateEmail == false && user.email != updatedUser.email, 'has-success': validateEmail && user.email != updatedUser.email}\" >\n\t\t\t<label for=\"username\">Email:</label>\n\t\t\t\t<input (input)=\"onKeyUpEmail($event)\" class=\"form-control\" type=\"email\" [(ngModel)]=\"updatedUser.email\" name=\"email\" id=\"email\" placeholder=\"Email\">\n\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"validateEmail == false\">Por favor utilize um email valido!</div>\n\t\t</div>\n\t\t<div *ngIf=\"user.name != updatedUser.name || user.username != updatedUser.username || user.email != updatedUser.email\" class=\"d-flex justify-content-center margin\">\n\t\t\t<button *ngIf=\"validateEmail\" class=\"btn btn-lg btn-outline-success\" >Atualizar</button>\n\t\t\t<button *ngIf=\"!validateEmail\" class=\"btn btn-lg btn-outline-danger\" disabled >Atualizar</button>\n\t\t</div>\n\t</form>\n\t<hr class=\"margin\">\n\t<h5 class=\"text-center\">Atualizar informações de segurança</h5>\n\t<form class=\"margin\" (submit)=\"onPasswordSubmit()\">\n\t\t<!-- password -->\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"newPassword\">Nova senha:</label>\n\t\t\t<input (input)=\"onKeyUpPassword($event)\" class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" name=\"newPassword\" id=\"newPassword\" placeholder=\"Senha\">\n\t\t</div>\n\t\t<!-- confirm password -->\n\t\t<div class=\"form-group\" [ngClass]=\"{'has-danger': validatePassword == false && password, 'has-success': validatePassword && confirmPassword != undefined && password}\">\n\t\t\t<label for=\"confirmPassword\">Confirmar senha:</label>\n\t\t\t<input (input)=\"onKeyUpPassword($event)\" class=\"form-control\" type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"confirmar senha\">\n\t\t\t<div class=\"form-control-feedback\" *ngIf=\"validatePassword == false && password\">Senhas são diferentes!</div>\n\t\t</div>\n\t\t<div *ngIf=\"password\" class=\"d-flex justify-content-center margin\">\n\t\t\t<button *ngIf=\"validatePassword\" class=\"btn btn-lg btn-outline-success\" >Atualizar</button>\n\t\t\t<button *ngIf=\"!validatePassword\" class=\"btn btn-lg btn-outline-danger\" disabled >Atualizar</button>\n\t\t</div>\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    function ProfileComponent(authService, validateService, router, flashMessagesServices) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessagesServices = flashMessagesServices;
        this.validatePassword = false;
        this.validateEmail = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.updatedUser = Object.assign({}, _this.user);
        });
    };
    // validate email
    ProfileComponent.prototype.onKeyUpEmail = function (event) {
        if (!this.validateService.validateEmail(this.updatedUser.email)) {
            this.validateEmail = false;
        }
        else {
            this.validateEmail = true;
        }
    };
    ProfileComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var updatedUser = {
            _id: this.updatedUser._id,
            name: this.updatedUser.name,
            email: this.updatedUser.email,
            username: this.updatedUser.username
        };
        this.authService.updateUser(updatedUser).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesServices.show('Usuario atualizado com sucesso!', { classes: ['alert', 'alert-success', 'text-center'] });
                _this.authService.storeUser(updatedUser);
                _this.user = updatedUser;
            }
            else {
                _this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', { classes: ['alert', 'alert-danger', 'text-center'] });
            }
        });
    };
    ProfileComponent.prototype.onPasswordSubmit = function () {
        var _this = this;
        if (this.confirmPassword != this.password) {
            return false;
        }
        var newPassword = {
            password: this.password
        };
        this.authService.updatePassword(this.updatedUser._id, newPassword).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesServices.show('Usuario atualizado com sucesso!', { classes: ['alert', 'alert-success', 'text-center'] });
                _this.authService.storeUser(_this.updatedUser);
                _this.user = _this.updatedUser;
                _this.password = undefined;
                _this.confirmPassword = undefined;
            }
            else {
                _this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', { classes: ['alert', 'alert-danger', 'text-center'] });
            }
        });
    };
    ProfileComponent.prototype.onKeyUpPassword = function (event) {
        if (!this.validateService.validatePassword(this.password, this.confirmPassword)) {
            this.validatePassword = false;
        }
        else {
            this.validatePassword = true;
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\n\tmargin-top: 50px;\n\tmargin-bottom: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin container\">\n\t<h2 class=\"text-center\">Cadastrar Usuario</h2>\n\t<form (submit)=\"onRegisterSubmit()\" class=\"margin\">\n\t\t<!-- name -->\n\t\t<div class=\"form-group\" [ngClass]=\"{'has-danger': validateAllFields == false && name == undefined}\">\n\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" placeholder=\"Nome do usuario\">\n\t\t</div>\n\t\t<!-- username -->\n\t\t<div class=\"form-group\" [ngClass]=\"{'has-danger': validateAllFields == false && username == undefined}\">\n\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" id=\"username\" placeholder=\"Username\">\n\t\t</div>\n\t\t<!-- email -->\n\t\t<div class=\"form-group\" [ngClass]=\"{'has-danger': validateEmail == false || (validateAllFields == false && email == undefined), 'has-success': validateEmail}\" >\n\t\t\t<input (input)=\"onKeyUpEmail($event)\" (keyup)=\"onKeyUpConfirmEmail($event)\" class=\"form-control\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\">\n\t\t\t<div class=\"form-control-feedback\" *ngIf=\"validateEmail == false\">Por favor utilize um email valido!</div>\n\t\t</div>\n\t\t<!-- confirm email -->\n\t\t<div class=\"form-group\" [ngClass]=\"{'has-danger': validateConfirmEmail == false || (validateAllFields == false && confirmEmail == undefined), 'has-success': validateConfirmEmail}\" >\n\t\t\t<input (input)=\"onKeyUpConfirmEmail($event)\" class=\"form-control\" type=\"email\" [(ngModel)]=\"confirmEmail\" name=\"confirmEmail\" id=\"confirmEmail\" placeholder=\"Confirmar email\">\n\t\t\t<div class=\"form-control-feedback\" *ngIf=\"validateConfirmEmail == false\">Emails são diferentes!</div>\n\t\t</div>\n\t\t<!-- password -->\n\t\t<div class=\"form-group\" [ngClass]=\"{'has-success': validatePassword && password != undefined, 'has-danger': validateAllFields == false && password == undefined}\">\n\t\t\t<input (input)=\"onKeyUpPassword($event)\" class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" placeholder=\"Senha\">\n\t\t</div>\n\t\t<!-- confirm password -->\n\t\t<div class=\"form-group\" [ngClass]=\"{'has-danger': validatePassword == false || (validateAllFields == false && confirmPassword == undefined), 'has-success': validatePassword && confirmPassword != undefined}\">\n\t\t\t<input (input)=\"onKeyUpPassword($event)\" class=\"form-control\" type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"confirmar senha\">\n\t\t\t<div class=\"form-control-feedback\" *ngIf=\"validatePassword == false\">Senhas são diferentes!</div>\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t<button class=\"btn btn-outline-success btn-lg\">Cadastrar</button>\n\t\t</div>\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    function RegisterComponent(validateService, authService, router, flashMessagesServices) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessagesServices = flashMessagesServices;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // validate email
    RegisterComponent.prototype.onKeyUpEmail = function (event) {
        if (!this.validateService.validateEmail(this.email)) {
            this.validateEmail = false;
        }
        else {
            this.validateEmail = true;
        }
    };
    // validate confirmEmail
    RegisterComponent.prototype.onKeyUpConfirmEmail = function (event) {
        if (!this.validateService.validateConfirmEmail(this.email, this.confirmEmail)) {
            this.validateConfirmEmail = false;
        }
        else {
            this.validateConfirmEmail = true;
        }
    };
    // validate password
    RegisterComponent.prototype.onKeyUpPassword = function (event) {
        if (!this.validateService.validatePassword(this.password, this.confirmPassword)) {
            this.validatePassword = false;
        }
        else {
            this.validatePassword = true;
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            confirmEmail: this.confirmEmail,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        // require fields
        if (!this.validateService.validateRegister(user)) {
            this.validateAllFields = false;
            this.flashMessagesServices.show('Por favor preencha todos os campos!', { classes: ['alert', 'alert-danger', 'text-center'] });
        }
        else {
            this.validateAllFields = true;
        }
        // return if something is wrong...
        if (!this.validateAllFields || !this.validatePassword || !this.validateEmail || !this.validateConfirmEmail) {
            return false;
        }
        // register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesServices.show('Usuario registrado com sucesso!', { classes: ['alert', 'alert-success', 'text-center'] });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', { classes: ['alert', 'alert-danger', 'text-center'] });
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/select/select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select{\n\tbox-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n\t<form (submit) = \"onSelectSubmit()\" >\n\t\t<select class=\"form-control form-control-lg select\" [(ngModel)]=\"select\" name=\"select\">\n\t\t\t<option value=\"\" >Nova lista</option>\n\t\t\t<option *ngFor=\"let list of lists\" value=\"{{ list._id }}\" >{{ list.name }}</option>\n\t\t</select>\n\t\t<div class=\"d-flex justify-content-center margin\">\n\t\t\t<button class=\"btn btn-outline-success btn-lg\" >Selecionar</button>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shoplist_service__ = __webpack_require__("../../../../../src/app/services/shoplist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectComponent = (function () {
    function SelectComponent(selectService, shoplistService, router) {
        this.selectService = selectService;
        this.shoplistService = shoplistService;
        this.router = router;
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.select = "";
        this.setLists();
    };
    SelectComponent.prototype.onSelectSubmit = function () {
        this.selectService.setSelectOp(this.select);
        this.router.navigateByUrl('/dashboard/shoplist/list');
    };
    SelectComponent.prototype.setLists = function () {
        var _this = this;
        this.shoplistService.getLists().subscribe(function (lists) {
            _this.lists = lists;
        });
    };
    return SelectComponent;
}());
SelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-select',
        template: __webpack_require__("../../../../../src/app/components/select/select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/select/select.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_select_service__["a" /* SelectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shoplist_service__["a" /* ShoplistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shoplist_service__["a" /* ShoplistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SelectComponent);

var _a, _b, _c;
//# sourceMappingURL=select.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shoplist/shoplist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shoplist/shoplist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"jumbotron jumbotron-fluid text-center\">\n\t\t<h2>Lista de compras</h2>\n\t</div>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shoplist/shoplist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoplistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoplistComponent = (function () {
    function ShoplistComponent(selectService) {
        this.selectService = selectService;
    }
    ShoplistComponent.prototype.ngOnInit = function () {
    };
    return ShoplistComponent;
}());
ShoplistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shoplist',
        template: __webpack_require__("../../../../../src/app/components/shoplist/shoplist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shoplist/shoplist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_select_service__["a" /* SelectService */]) === "function" && _a || Object])
], ShoplistComponent);

var _a;
//# sourceMappingURL=shoplist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\n\tmargin-top: 60px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light flex-column\">\n\t<ul class=\"navbar-nav\">\n\t  <li class=\"nav-item\">\n\t    <a class=\"nav-link\" [routerLink]=\"['tasks']\">Lista de tarefas</a>\n\t  </li>\n\t  <li class=\"nav-item\">\n\t    <a class=\"nav-link\" [routerLink]=\"['shoplist']\">Lista de compras</a>\n\t  </li>\n\t</ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tasklist/tasklist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-task{\n\tbox-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\n}\n\n.checkbox{\n\tmargin: auto;\n}\n\n.tasks{\n\tpadding-top: 12px;\n\tpadding-bottom: 12px;\n\tborder: 1px solid #D9D9D9;\n\ttext-align: center;\n}\n\n.task-complete {\n\ttext-decoration: line-through;\n\tcolor: #888888; \n}\n\n#clean {\n\tmargin-top: 15px;\n\tmargin-bottom: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tasklist/tasklist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"jumbotron jumbotron-fluid text-center\">\n\t\t<h2>Lista de Tarefas</h2>\n\t</div>\n\t<div class=\"container-fluid\">\n\t\t<form (submit)=\"addTask()\" >\t\n\t\t\t<div class=\"input-group input-group-lg\">\n\t\t\t\t<input  [(ngModel)]=\"newTitle\" type=\"text\" class=\"form-control new-task\" placeholder=\"Adicionar tarefa!\" name=\"newTask\">\n\t\t\t\t<span class=\"input-group-btn\" >\n\t\t\t\t\t<button *ngIf=\"newTitle != '' && newTitle != undefined\" class=\"btn btn-secondary new-task\">Add!</button>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t\t<div  *ngFor=\"let task of tasks\" class=\"tasks\">\n\t\t\t<div class=\"row\" [ngClass]=\"{'task-complete': task.isComplete}\">\n\t\t\t\t<div class=\"col-sm-1 checkbox\">\n\t\t\t\t\t<input (click)=\"onCheck($event, task)\" type=\"checkbox\" name=\"isComplete\" [(ngModel)]=\"task.isComplete\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t\t{{ task.title }}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"completeTask > 0\" class=\"d-flex float-right margin\">\n\t\t\t<button (click)=\"clean()\" class=\"btn btn-outline-danger\" id=\"clean\">Limpar</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tasklist/tasklist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasklistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasklistComponent = (function () {
    function TasklistComponent(taskService, flashMessagesService) {
        this.taskService = taskService;
        this.flashMessagesService = flashMessagesService;
    }
    TasklistComponent.prototype.setTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.setCompletedTasks(_this.tasks);
        });
    };
    TasklistComponent.prototype.setCompletedTasks = function (tasks) {
        this.completeTask = 0;
        for (var task = tasks.length - 1; task >= 0; task--) {
            if (tasks[task].isComplete) {
                this.completeTask++;
            }
        }
    };
    TasklistComponent.prototype.ngOnInit = function () {
        this.setTasks();
    };
    TasklistComponent.prototype.addTask = function () {
        var _this = this;
        var newTask = {
            title: this.newTitle,
            isComplete: false
        };
        this.newTitle = "";
        this.taskService.addTask(newTask).subscribe(function (res) {
            if (res.success) {
                _this.tasks.push(res.task);
            }
            else {
                _this.flashMessagesService.show('Algo de errado não está certo... porfavor tente novamente!', { classes: ['alert', 'alert-danger', 'text-center'] });
            }
        });
    };
    TasklistComponent.prototype.updateTask = function (task) {
        var updatedTask = {
            _id: task._id,
            title: task.title,
            isComplete: !task.isComplete
        };
        this.taskService.updateTask(updatedTask).subscribe(function (res) { });
    };
    TasklistComponent.prototype.onCheck = function (event, task) {
        if (!task.isComplete)
            this.completeTask++;
        else {
            this.completeTask--;
        }
        this.updateTask(task);
    };
    TasklistComponent.prototype.clean = function () {
        var _this = this;
        this.completeTask = 0;
        for (var task = 0; task < this.tasks.length; ++task) {
            if (this.tasks[task].isComplete) {
                this.taskService.deleteTask(this.tasks[task]._id).subscribe(function (res) {
                    if (!res.success) {
                        _this.flashMessagesService.show('Algo de errado não está certo... porfavor tente novamente!', { classes: ['alert', 'alert-danger', 'text-center'] });
                        return false;
                    }
                });
            }
        }
        this.tasks = this.tasks.filter(function (task) {
            return !task.isComplete;
        });
    };
    return TasklistComponent;
}());
TasklistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tasklist',
        template: __webpack_require__("../../../../../src/app/components/tasklist/tasklist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tasklist/tasklist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object])
], TasklistComponent);

var _a, _b;
//# sourceMappingURL=tasklist.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
        return this.http.post('http://localhost:5000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost:5000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.storeUser = function (updatedUser) {
        localStorage.setItem('user', JSON.stringify(updatedUser));
        this.user = updatedUser;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.updateUser = function (updatedUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:5000/users/update', updatedUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatePassword = function (id, updatedPassword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.put('http://localhost:5000/users/update/' + id, updatedPassword, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/select.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectService = (function () {
    function SelectService() {
    }
    SelectService.prototype.setSelectOp = function (value) {
        localStorage.setItem('list', value);
    };
    SelectService.prototype.getSelectOp = function () {
        return localStorage.getItem('list');
    };
    SelectService.prototype.cleanSelect = function () {
        localStorage.removeItem('list');
    };
    return SelectService;
}());
SelectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SelectService);

//# sourceMappingURL=select.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shoplist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoplistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoplistService = (function () {
    function ShoplistService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ShoplistService.prototype.getLists = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        return this.http.get('http://localhost:5000/api/lists', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ShoplistService.prototype.getList = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        return this.http.get('http://localhost:5000/api/list/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ShoplistService.prototype.addList = function (newList) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/list', newList, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ShoplistService.prototype.deleteList = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete('http://localhost:5000/api/list/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ShoplistService.prototype.updateList = function (updatedList) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:5000/api/list', updatedList, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ShoplistService;
}());
ShoplistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ShoplistService);

var _a, _b;
//# sourceMappingURL=shoplist.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = (function () {
    function TaskService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    TaskService.prototype.getTasks = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        return this.http.get('http://localhost:5000/api/tasks', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.addTask = function (newTask) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/task', newTask, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.deleteTask = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete('http://localhost:5000/api/task/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.updateTask = function (updatedTask) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:5000/api/task', updatedTask, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return TaskService;
}());
TaskService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], TaskService);

var _a, _b;
//# sourceMappingURL=task.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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
        if (user.name == undefined || user.username ==
            undefined || user.email == undefined || user.password ==
            undefined || user.confirmPassword == undefined || user.confirmEmail == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePassword = function (password, confirmPassword) {
        if (password == confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateConfirmEmail = function (email, confirmEmail) {
        if (email == confirmEmail) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
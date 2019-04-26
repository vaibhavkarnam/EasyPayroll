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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _services_employee_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/employee.service.client */ "./src/app/services/employee.service.client.ts");
/* harmony import */ var _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-edit/employee-edit.component */ "./src/app/employee-edit/employee-edit.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"],
                _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeEditComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [
                _services_employee_service_client__WEBPACK_IMPORTED_MODULE_8__["EmployeeServiceClient"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-edit/employee-edit.component */ "./src/app/employee-edit/employee-edit.component.ts");




var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeComponent"] },
    { path: 'employee/:employeeId', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeComponent"] },
    { path: 'employee-edit', component: _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeEditComponent"] },
    { path: 'employee-edit/:employeeId', component: _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeEditComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/employee-edit/employee-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-edit/employee-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#body {\n  padding-top: 70px;\n  padding-bottom: 300px;\n}\n\n\n.tags li {\n  margin: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZWRpdC9lbXBsb3llZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOzs7QUFHQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWVkaXQvZW1wbG95ZWUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvZHkge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwMHB4O1xufVxuXG5cbi50YWdzIGxpIHtcbiAgbWFyZ2luOiAzcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/employee-edit/employee-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/employee-edit/employee-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <img src=\"assets/payroll.png\" width=\"40px\" style=\"border-radius: 20%; margin-right : 20px\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">Payroll</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\">Employee List\n          </a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container post-employee-container\" id=\"body\">\n  <form #postemployeeForm=\"ngForm\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n\n        <div class=\"form-group\">\n          <div class=\"col-xs-6\">\n            <label for=\"employee_name\">\n              <h5>Employee Name</h5>\n            </label>\n            <input type=\"text\" class=\"form-control\" name=\"employee_name\" [(ngModel)]=\"employee_name\" id=\"employee_name\"\n                   placeholder=\"employee name\" title=\"enter the name of the employee.\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-6\">\n            <label for=\"employee_description\">\n              <h5>Employee Bio</h5>\n            </label>\n            <textarea class=\"form-control\" placeholder=\"Bio\" style=\"height:250px\" name=\"employee_description\"\n                      [(ngModel)]=\"employee_bio\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-xs-6\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <label for=\"employee_dept\">\n                  <h5>Department</h5>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <input class=\"form-control\" name=\"employee_dept\" [(ngModel)]=\"employee_department\"\n                       placeholder=\"Department\"\n                       title=\"enter the Department\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-xs-6\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <label for=\"employee_designation\">\n                  <h5>Designation</h5>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <input class=\"form-control\" name=\"employee_designation\" [(ngModel)]=\"employee_designation\"\n                       placeholder=\"Designation\"\n                       title=\"enter the Designation\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-xs-6\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <label for=\"employee_salary\">\n                  <h5>Salary</h5>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <input class=\"form-control\" name=\"employee_salary\" [(ngModel)]=\"employee_salary\" placeholder=\"Salary\"\n                       title=\"enter the gross pay\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-xs-6\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <label for=\"employee_health\">\n                  <h5>Health insurance premium</h5>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <input class=\"form-control\" name=\"employee_health\" [(ngModel)]=\"employee_healthPremium\"\n                       placeholder=\"Health insurance premium\"\n                       title=\"enter the Health insurance premium\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-6\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <label for=\"employee_LifeIns\">\n                  <h5>Life insurance premium</h5>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <input class=\"form-control\" name=\"employee_LifeIns\" [(ngModel)]=\"employee_lifePremium\"\n                       placeholder=\"Life insurance premium\"\n                       title=\"enter the Life insurance premium\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-6\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <label for=\"employee_Retirementplan\">\n                  <h5>Retirement plan(401K)</h5>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <input class=\"form-control\" name=\"employee_Retirementplan\" [(ngModel)]=\"employee_retirementPlan\"\n                       placeholder=\"Retirement plan\"\n                       title=\"enter the Retirement plan\">\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"col-xs-6\">\n          <div class=\"form-group text-center\">\n            <label for=\"img-upload\">\n              <h4>Photo</h4>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"img\" class=\"form-control btn\" placeholder=\"Photo url\" name=\"img-upload\"\n                   id=\"img-upload\">\n            <img src=\"{{img}}\" alt=\"photo preview\" width=\"300px\"\n                 style=\"margin-top: 62px; margin-bottom: 22px; border-radius:10%\"/>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6\">\n          <div *ngIf=\"!editemployee\" class=\"form-group text-center\">\n            <label for=\"employee_email\">\n              <h4>Email Id</h4>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"employee_emailId\" class=\"form-control btn\" placeholder=\"Email Id\"\n                   name=\"img-upload\"\n                   id=\"employee_email\">\n          </div>\n        </div>\n\n        <div class=\"col-xs-6\">\n          <div class=\"form-group text-center\">\n            <label for=\"phone\">\n              <h4>Phone</h4>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"employee_phone\" class=\"form-control btn\" placeholder=\"Phone no\" name=\"phone\"\n                   id=\"phone\">\n          </div>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <div class=\"col-xs-6\">\n          </div>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <div class=\"col-xs-6\">\n          </div>\n        </div>\n\n        <br/>\n\n        <div class=\"col-xs-12\">\n          <br/>\n          <button id=\"postEvent\" type=\"submit\" *ngIf=\"!editemployee\" class=\"btn btn-block btn-lg btn-success\"\n                  (click)=\"postEmployee()\"> Add Employee\n          </button>\n          <button id=\"updateEvent\" type=\"submit\" *ngIf=\"editemployee\" class=\"btn btn-block btn-lg btn-success\"\n                  (click)=\"updateEmployee()\"> Update\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/employee-edit/employee-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-edit/employee-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/employee.service.client */ "./src/app/services/employee.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(router, activatedRoute, employeeService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
    }
    EmployeeEditComponent.prototype.updateEmployee = function () {
        var _this = this;
        console.log('inside updateemployee');
        var toUpdateemployee = {
            employee_name: this.employee_name,
            employee_bio: this.employee_bio,
            employee_department: this.employee_department,
            img_path: this.img,
            employee_designation: this.employee_designation,
            employee_salary: this.employee_salary,
            employee_healthPremium: this.employee_healthPremium,
            employee_lifePremium: this.employee_lifePremium,
            employee_retirementPlan: this.employee_retirementPlan,
            employee_phone: this.employee_phone,
        };
        this.employeeService.updateEmployee(this.employeeId, toUpdateemployee)
            .then(function (employee) {
            _this.router.navigate(['employee/' + _this.employeeId]);
        });
    };
    EmployeeEditComponent.prototype.postEmployee = function () {
        var _this = this;
        var toCreateEmployee = {
            employee_name: this.employee_name,
            employee_bio: this.employee_bio,
            employee_department: this.employee_department,
            img_path: this.img,
            employee_salary: this.employee_salary,
            employee_healthPremium: this.employee_healthPremium,
            employee_lifePremium: this.employee_lifePremium,
            employee_retirementPlan: this.employee_retirementPlan,
            employee_phone: this.employee_phone,
            employee_designation: this.employee_designation,
            employee_emailId: this.employee_emailId,
            employee_takeHomeSalary: 0
        };
        this.employeeService.createEmployee(toCreateEmployee)
            .then(function (event) {
            console.log(event);
            _this.router.navigate(['home']);
        });
    };
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.employeeId = params['employeeId'];
        });
        if (this.employeeId) {
            this.editemployee = true;
            this.employeeService.findEmployee(this.employeeId)
                .then(function (employee) {
                _this.employee_name = employee.employee_name;
                _this.employee_bio = employee.employee_bio;
                _this.employee_department = employee.employee_department;
                _this.employee_designation = employee.employee_designation;
                _this.employee_salary = employee.employee_salary;
                _this.employee_healthPremium = employee.employee_healthPremium;
                _this.employee_lifePremium = employee.employee_lifePremium;
                _this.employee_retirementPlan = employee.employee_retirementPlan;
                _this.img = employee.img_path;
                _this.employee_emailId = employee.employee_emailId;
                _this.employee_phone = employee.employee_phone;
            });
        }
    };
    EmployeeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/employee-edit/employee-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_employee_service_client__WEBPACK_IMPORTED_MODULE_1__["EmployeeServiceClient"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".numberCircle {\n  width: 50px;\n  line-height: 50px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 20px;\n  border: 2px solid #666;\n}\n\nbody {\n}\n\n.emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff;\n}\n\n.profile-img {\n  text-align: center;\n}\n\n.profile-img img {\n  width: 80%;\n  height: 100%;\n  border-radius: 10%;\n}\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8;\n}\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0;\n}\n\n.profile-head h5 {\n  color: #333;\n}\n\n.profile-head h6 {\n  color: #0062cc;\n}\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer;\n}\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%;\n}\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%;\n}\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none;\n}\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc;\n}\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%;\n}\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%;\n}\n\n.profile-work li {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px;\n  margin: 5px;\n\n}\n\n.profile-work ul {\n  list-style: none;\n}\n\n.profile-tab label {\n  font-weight: 600;\n}\n\n.profile-tab p {\n  font-weight: 600;\n  color: #008080;\n}\n\n.bookmarked p {\n  color: #818182;\n}\n\n.bookmarked img {\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsTUFBTTtBQUNSOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUdBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtYmVyQ2lyY2xlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjY2O1xufVxuXG5ib2R5IHtcbn1cblxuLmVtcC1wcm9maWxlIHtcbiAgcGFkZGluZzogMyU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltZyBpbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLnByb2ZpbGUtaW1nIC5maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAtMjAlO1xuICB3aWR0aDogNzAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZDogIzIxMjUyOWI4O1xufVxuXG4ucHJvZmlsZS1pbWcgLmZpbGUgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5wcm9maWxlLWhlYWQgaDUge1xuICBjb2xvcjogIzMzMztcbn1cblxuLnByb2ZpbGUtaGVhZCBoNiB7XG4gIGNvbG9yOiAjMDA2MmNjO1xufVxuXG4ucHJvZmlsZS1lZGl0LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAyJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2lsZS1yYXRpbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODE4MTgyO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnByb2lsZS1yYXRpbmcgc3BhbiB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDYyY2M7XG59XG5cbi5wcm9maWxlLXdvcmsge1xuICBwYWRkaW5nOiAxNCU7XG4gIG1hcmdpbi10b3A6IC0xNSU7XG59XG5cbi5wcm9maWxlLXdvcmsgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MTgxODI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLnByb2ZpbGUtd29yayBsaSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHg7XG5cbn1cblxuLnByb2ZpbGUtd29yayB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5wcm9maWxlLXRhYiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9maWxlLXRhYiBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDgwODA7XG59XG5cblxuLmJvb2ttYXJrZWQgcCB7XG4gIGNvbG9yOiAjODE4MTgyO1xufVxuXG4uYm9va21hcmtlZCBpbWcge1xuICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <img src=\"./assets/payroll.png\" width=\"40px\" style=\"border-radius: 20%; margin-right : 20px\">\n    <a class=\"navbar-brand\" routerLink=\"../../home\">EasyPayroll</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"../../home\">Employee List\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"../../organization\">Add Employee</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container emp-profile\">\n\n  <form method=\"post\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-img\">\n          <img src=\"{{employee.img_path}}\" alt=\"\"/>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"profile-head\">\n          <h4>\n            {{employee.employee_name}}\n          </h4>\n          <h5>\n            {{employee.employee_designation}}\n          </h5>\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                 aria-selected=\"true\">About</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <a class=\"btn profile-edit-btn\" (click)=\"editProfile()\">\n          <i class=\"far fa-edit\"></i> Edit Employee </a>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Name</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_name}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Email</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_emailId}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Phone</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_phone}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Department</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_department}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Bio</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_bio}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Salary</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_salary}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Health insurance premium</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_healthPremium}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Life insurance premium</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_lifePremium}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Retirement plan (401k) </label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_retirementPlan}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label>Take Home Salary</label>\n              </div>\n              <div class=\"col-md-9\">\n                <p>{{employee.employee_takeHomeSalary}}</p>\n              </div>\n            </div>\n          </div>\n          <br/>\n        </div>\n      </div>\n    </div>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">Copyright &copy;EasyPayroll 2019</p>\n  </div>\n  <!-- /.container -->\n</footer>\n"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/employee.service.client */ "./src/app/services/employee.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, activatedRoute, router) {
        var _this = this;
        this.employeeService = employeeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.editProfile = function () {
            _this.router.navigate(['employee-edit/' + _this.employeeId]);
        };
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.employeeId = params['employeeId'];
        });
        console.log(this.employeeId);
        this.employeeService.findEmployee(this.employeeId)
            .then(function (employee) {
            console.log(employee);
            _this.employee = employee;
            console.log(_this.employee);
        });
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_service_client__WEBPACK_IMPORTED_MODULE_1__["EmployeeServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myBtn {\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  background-color: red;\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 4px;\n}\n\n#myBtn:hover {\n  background-color: #555;\n}\n\nspan {\n  margin: 5px;\n}\n\nli {\n  margin: 5px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215QnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI215QnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuc3BhbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5saSB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<script src=\"../employee/employee.component.spec.ts\"></script>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <img src=\"./assets/payroll.png\" width=\"40px\" style=\"border-radius: 20%; margin-right : 20px\">\n    <a class=\"navbar-brand\" routerLink=\"../home\">EasyPayroll</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"../employee-edit\">Add Employee</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\" style=\"padding-top: 56px;\">\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n\n      <br/>\n\n      <div>\n        <button class=\"btn btn-info dropdown-toggle \" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\">\n          Filter\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">All</a>\n          <a class=\"dropdown-item\" href=\"#\">Relevant</a>\n          <a class=\"dropdown-item\" href=\"#\">Upcoming</a>\n        </div>\n      </div>\n\n      <br/>\n\n\n      <div class=\"card mb-4\" *ngFor=\"let employee of employees\">\n\n        <img class=\"card-img-top\" src=\"{{employee.img_path}}\" style=\" width: 100%;\n    height: 15vw;\n    object-fit: cover;\" alt=\"Card image cap\">\n\n\n        <div class=\"card card-body\">\n\n          <h4 class=\"card-title\">{{employee.employee_name}}</h4>\n          <h6 class=\"card-text\">{{employee.employee_designation}}</h6>\n          <h6 class=\"card-text\">Department: {{employee.employee_department}}</h6>\n          <h6 class=\"card-text\">Salary: {{employee.employee_salary}}</h6>\n          <div>\n            <button type=\"button\" class=\" btn-block btn btn-primary\" (click)=\"viewEmployee(employee._id)\">Details\n              &rarr;\n            </button>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <!--\n    <div class=\"col-md-4\">\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Search by Title </h5>\n        <div class=\"card-body\">\n\n          <div class=\"input-group\">\n            <input [(ngModel)]=\"this.word\" type=\"text\" class=\"form-control\" placeholder=\"Input the word to search\">\n            <span class=\"input-group-btn\">\n                <button (click)=\"search()\" class=\"btn btn-secondary\" type=\"button\">Go</button>\n              </span>\n          </div>\n          <hr/>\n          <span>\n          Search results for:  <i> word </i> <i class=\"btn btn-sm btn-outline-danger fa fa-times d-flex float-right\"\n                                                style=\"margin-right: 15px;\"> </i>\n          </span>\n        </div>\n\n      </div>\n\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Search by Date</h5>\n        <div class=\"card-body\">\n          <div class=\"input-group\">\n            <input [(ngModel)]=\"this.word\" type=\"text\" class=\"form-control\" placeholder=\"Input the word to search\">\n            <span class=\"input-group-btn\">\n                <button (click)=\"search()\" class=\"btn btn-secondary\" type=\"button\">Go</button>\n              </span>\n          </div>\n          <hr/>\n          <span>\n          Search results for:  <i> word </i> <i class=\"btn btn-sm btn-outline-danger fa fa-times d-flex float-right\"\n                                                style=\"margin-right: 15px;\"> </i>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Search by Tags</h5>\n        <div class=\"card-body\">\n          <div class=\"input-group\">\n            <input [(ngModel)]=\"this.word\" type=\"text\" class=\"form-control\" placeholder=\"Input the word to search\">\n            <span class=\"input-group-btn\">\n                <button (click)=\"search()\" class=\"btn btn-secondary\" type=\"button\">Go</button>\n              </span>\n          </div>\n          <hr/>\n          <span>\n          Search results for:  <i> word </i> <i class=\"btn btn-sm btn-outline-danger fa fa-times d-flex float-right\"\n                                                style=\"margin-right: 15px;\"> </i>\n          </span>\n        </div>\n      </div>\n    </div>\n-->\n\n  </div>\n</div>\n\n<button (click)=\"topFunction()\" id=\"myBtn\" title=\"Go to top\">Top ↑</button>\n\n<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">@EasyPayroll 2019</p>\n  </div>\n  <!-- /.container -->\n</footer>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employee_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/employee.service.client */ "./src/app/services/employee.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, employeeService) {
        var _this = this;
        this.router = router;
        this.employeeService = employeeService;
        this.employees = [];
        this.viewEmployee = function (employeeId) {
            //console.log(employeeId);
            _this.router.navigate(['/employee/' + employeeId]);
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.findAllEmployees()
            .then(function (employees) {
            console.log(employees);
            _this.employees = employees;
        });
    };
    HomeComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_employee_service_client__WEBPACK_IMPORTED_MODULE_2__["EmployeeServiceClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/employee.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/employee.service.client.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeServiceClient", function() { return EmployeeServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'http://localhost:4000';
var EmployeeServiceClient = /** @class */ (function () {
    function EmployeeServiceClient() {
    }
    EmployeeServiceClient.prototype.findEmployee = function (employeeId) {
        return fetch(HOST + '/api/payroll/employee/' + employeeId, {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    EmployeeServiceClient.prototype.createEmployee = function (toCreateemployee) {
        return fetch(HOST + '/api/payroll/employee', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toCreateemployee)
        })
            .then(function (response) {
            return response.json();
        });
    };
    EmployeeServiceClient.prototype.updateEmployee = function (employeeId, employee) {
        return fetch(HOST + '/api/payroll/employee/' + employeeId + '/update', {
            body: JSON.stringify(employee),
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    EmployeeServiceClient.prototype.findAllEmployees = function () {
        return fetch(HOST + '/api/payroll/employee')
            .then(function (response) {
            return response.json();
        });
    };
    EmployeeServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EmployeeServiceClient);
    return EmployeeServiceClient;
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

module.exports = __webpack_require__(/*! /Users/vaibhavkarnam/Downloads/EasyPayroll/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
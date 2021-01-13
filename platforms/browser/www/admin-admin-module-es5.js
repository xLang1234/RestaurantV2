(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Admin Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <section class=\"ion-text-center ion-margin-bottom\">\n\n    <h1 style=\"font-size:1.4em\" no-margin>Welcome<br></h1>\n  </section>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card class=\"ion-text-center ion-padding\" (click)=\"addFoodMenu();\" color=\"primary\">\n          <ion-icon name=\"person\"></ion-icon>\n          <h2>Add Menu</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card class=\"ion-text-center ion-padding\" (click)=\"editFoodMenu();\" color=\"primary\">\n          <ion-icon name=\"people\"></ion-icon>\n          <h2>Edit Menu</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card class=\"ion-text-center ion-padding\" (click)=\"deleteFoodMenu();\" color=\"primary\">\n          <ion-icon name=\"settings\"></ion-icon>\n          <h2>Delete Menu</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card class=\"ion-text-center ion-padding\"  color=\"primary\">\n          <ion-icon name=\"list\"></ion-icon>\n          <h2>Filler 1</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card class=\"ion-text-center ion-padding\"  color=\"primary\">\n          <ion-icon name=\"add\"></ion-icon>\n          <h2>Filler 2</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n          <ion-card class=\"ion-text-center ion-padding\"  color=\"primary\">\n            <ion-icon name=\"calendar\"></ion-icon>\n            <h2>Filler 3</h2>\n          </ion-card>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/admin/admin-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminPageRoutingModule */

    /***/
    function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function () {
        return AdminPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin.page */
      "./src/app/admin/admin.page.ts");

      var routes = [{
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
      }];

      var AdminPageRoutingModule = function AdminPageRoutingModule() {
        _classCallCheck(this, AdminPageRoutingModule);
      };

      AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admin/admin.module.ts":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminPageModule */

    /***/
    function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPageModule", function () {
        return AdminPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-routing.module */
      "./src/app/admin/admin-routing.module.ts");
      /* harmony import */


      var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin.page */
      "./src/app/admin/admin.page.ts");

      var AdminPageModule = function AdminPageModule() {
        _classCallCheck(this, AdminPageModule);
      };

      AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"]],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
      })], AdminPageModule);
      /***/
    },

    /***/
    "./src/app/admin/admin.page.scss":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminAdminPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/admin/admin.page.ts":
    /*!*************************************!*\
      !*** ./src/app/admin/admin.page.ts ***!
      \*************************************/

    /*! exports provided: AdminPage */

    /***/
    function srcAppAdminAdminPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPage", function () {
        return AdminPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminPage = /*#__PURE__*/function () {
        function AdminPage(router) {
          _classCallCheck(this, AdminPage);

          this.router = router;
        }

        _createClass(AdminPage, [{
          key: "addFoodMenu",
          value: function addFoodMenu() {
            this.router.navigate(['/add-food']);
          }
        }, {
          key: "deleteFoodMenu",
          value: function deleteFoodMenu() {
            this.router.navigate(['/delete-food']);
          }
        }, {
          key: "editFoodMenu",
          value: function editFoodMenu() {
            this.router.navigate(['/edit-food']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminPage;
      }();

      AdminPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin.page.scss */
        "./src/app/admin/admin.page.scss"))["default"]]
      })], AdminPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map
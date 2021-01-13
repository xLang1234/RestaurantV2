(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-food-delete-food-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-food/delete-food.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-food/delete-food.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDeleteFoodDeleteFoodPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>deleteFood</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/delete-food/delete-food-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/delete-food/delete-food-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: DeleteFoodPageRoutingModule */

    /***/
    function srcAppDeleteFoodDeleteFoodRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteFoodPageRoutingModule", function () {
        return DeleteFoodPageRoutingModule;
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


      var _delete_food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./delete-food.page */
      "./src/app/delete-food/delete-food.page.ts");

      var routes = [{
        path: '',
        component: _delete_food_page__WEBPACK_IMPORTED_MODULE_3__["DeleteFoodPage"]
      }];

      var DeleteFoodPageRoutingModule = function DeleteFoodPageRoutingModule() {
        _classCallCheck(this, DeleteFoodPageRoutingModule);
      };

      DeleteFoodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DeleteFoodPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/delete-food/delete-food.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/delete-food/delete-food.module.ts ***!
      \***************************************************/

    /*! exports provided: DeleteFoodPageModule */

    /***/
    function srcAppDeleteFoodDeleteFoodModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteFoodPageModule", function () {
        return DeleteFoodPageModule;
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


      var _delete_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./delete-food-routing.module */
      "./src/app/delete-food/delete-food-routing.module.ts");
      /* harmony import */


      var _delete_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./delete-food.page */
      "./src/app/delete-food/delete-food.page.ts");

      var DeleteFoodPageModule = function DeleteFoodPageModule() {
        _classCallCheck(this, DeleteFoodPageModule);
      };

      DeleteFoodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _delete_food_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeleteFoodPageRoutingModule"]],
        declarations: [_delete_food_page__WEBPACK_IMPORTED_MODULE_6__["DeleteFoodPage"]]
      })], DeleteFoodPageModule);
      /***/
    },

    /***/
    "./src/app/delete-food/delete-food.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/delete-food/delete-food.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDeleteFoodDeleteFoodPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1mb29kL2RlbGV0ZS1mb29kLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/delete-food/delete-food.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/delete-food/delete-food.page.ts ***!
      \*************************************************/

    /*! exports provided: DeleteFoodPage */

    /***/
    function srcAppDeleteFoodDeleteFoodPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteFoodPage", function () {
        return DeleteFoodPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DeleteFoodPage = /*#__PURE__*/function () {
        function DeleteFoodPage() {
          _classCallCheck(this, DeleteFoodPage);
        }

        _createClass(DeleteFoodPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeleteFoodPage;
      }();

      DeleteFoodPage.ctorParameters = function () {
        return [];
      };

      DeleteFoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-food',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./delete-food.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-food/delete-food.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./delete-food.page.scss */
        "./src/app/delete-food/delete-food.page.scss"))["default"]]
      })], DeleteFoodPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=delete-food-delete-food-module-es5.js.map
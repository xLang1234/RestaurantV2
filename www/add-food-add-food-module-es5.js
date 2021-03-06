(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-food-add-food-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/add-food/add-food.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-food/add-food.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAddFoodAddFoodPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>addFood</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-item>\n      <ion-label>Company Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.companyName\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Food Menu</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.foodMenu\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Food</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.food\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Details</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.details\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Price</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"data.price\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Image</ion-label>\n      <ion-button (click)=\"getImage()\">\n        Image Upload\n      </ion-button>\n    </ion-item>\n    \n    <img [src]=\"imageSrc\">\n    <img [src]=\"imageJpeg\">\n\n    <ion-button type=\"submit\" (click)=\"addFoodMenu()\">\n      Add Food Item\n    </ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/add-food/add-food-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/add-food/add-food-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddFoodPageRoutingModule */

    /***/
    function srcAppAddFoodAddFoodRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddFoodPageRoutingModule", function () {
        return AddFoodPageRoutingModule;
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


      var _add_food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-food.page */
      "./src/app/add-food/add-food.page.ts");

      var routes = [{
        path: '',
        component: _add_food_page__WEBPACK_IMPORTED_MODULE_3__["AddFoodPage"]
      }];

      var AddFoodPageRoutingModule = function AddFoodPageRoutingModule() {
        _classCallCheck(this, AddFoodPageRoutingModule);
      };

      AddFoodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddFoodPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/add-food/add-food.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/add-food/add-food.module.ts ***!
      \*********************************************/

    /*! exports provided: AddFoodPageModule */

    /***/
    function srcAppAddFoodAddFoodModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddFoodPageModule", function () {
        return AddFoodPageModule;
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


      var _add_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-food-routing.module */
      "./src/app/add-food/add-food-routing.module.ts");
      /* harmony import */


      var _add_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-food.page */
      "./src/app/add-food/add-food.page.ts");

      var AddFoodPageModule = function AddFoodPageModule() {
        _classCallCheck(this, AddFoodPageModule);
      };

      AddFoodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_food_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddFoodPageRoutingModule"]],
        declarations: [_add_food_page__WEBPACK_IMPORTED_MODULE_6__["AddFoodPage"]]
      })], AddFoodPageModule);
      /***/
    },

    /***/
    "./src/app/add-food/add-food.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/add-food/add-food.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAddFoodAddFoodPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1mb29kL2FkZC1mb29kLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/add-food/add-food.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/add-food/add-food.page.ts ***!
      \*******************************************/

    /*! exports provided: AddFoodPage */

    /***/
    function srcAppAddFoodAddFoodPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddFoodPage", function () {
        return AddFoodPage;
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


      var _services_foodmenu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/foodmenu.service */
      "./src/app/services/foodmenu.service.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AddFoodPage = /*#__PURE__*/function () {
        function AddFoodPage(foodMenuService, camera, router) {
          _classCallCheck(this, AddFoodPage);

          this.foodMenuService = foodMenuService;
          this.camera = camera;
          this.router = router;
          this.data = {};
          this.imageSrc = "";
        }

        _createClass(AddFoodPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addFoodMenu",
          value: function addFoodMenu() {
            console.log(this.data);
            this.data.id = Date.now();
            this.data.image = this.imageSrc;
            this.foodMenuService.addFoodItem(this.data);
            this.router.navigate(['/admin']);
          }
        }, {
          key: "getImage",
          value: function getImage() {
            var _this = this;

            var cameraOptions = {
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              quality: 100,
              targetWidth: 1000,
              targetHeight: 1000,
              encodingType: this.camera.EncodingType.JPEG,
              correctOrientation: true
            };
            this.camera.getPicture(cameraOptions).then(function (file_uri) {
              return _this.imageSrc = "data:image/jpeg;base64," + file_uri;
            }, function (err) {
              return console.log(err);
            });
          }
        }]);

        return AddFoodPage;
      }();

      AddFoodPage.ctorParameters = function () {
        return [{
          type: _services_foodmenu_service__WEBPACK_IMPORTED_MODULE_2__["FoodmenuService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AddFoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-food',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-food.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/add-food/add-food.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-food.page.scss */
        "./src/app/add-food/add-food.page.scss"))["default"]]
      })], AddFoodPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-food-add-food-module-es5.js.map
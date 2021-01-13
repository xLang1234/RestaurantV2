(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Company Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"food.companyName\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Food Menu</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"food.foodMenu\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Food</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"food.food\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"food.name\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Details</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"food.details\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Price</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"food.price\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Image</ion-label>\n    <ion-button (click)=\"getImage()\">\n      Image Upload\n    </ion-button>\n  </ion-item>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"update()\">\n    Update\n  </ion-button>\n\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"delete(food.id)\">\n    Delete\n  </ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/detail/detail-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/detail/detail-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: DetailPageRoutingModule */

    /***/
    function srcAppDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
        return DetailPageRoutingModule;
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


      var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail.page */
      "./src/app/detail/detail.page.ts");

      var routes = [{
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
      }];

      var DetailPageRoutingModule = function DetailPageRoutingModule() {
        _classCallCheck(this, DetailPageRoutingModule);
      };

      DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/detail/detail.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/detail/detail.module.ts ***!
      \*****************************************/

    /*! exports provided: DetailPageModule */

    /***/
    function srcAppDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
        return DetailPageModule;
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


      var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detail-routing.module */
      "./src/app/detail/detail-routing.module.ts");
      /* harmony import */


      var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail.page */
      "./src/app/detail/detail.page.ts");

      var DetailPageModule = function DetailPageModule() {
        _classCallCheck(this, DetailPageModule);
      };

      DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
      })], DetailPageModule);
      /***/
    },

    /***/
    "./src/app/detail/detail.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/detail/detail.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/detail/detail.page.ts":
    /*!***************************************!*\
      !*** ./src/app/detail/detail.page.ts ***!
      \***************************************/

    /*! exports provided: DetailPage */

    /***/
    function srcAppDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
        return DetailPage;
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


      var _services_foodmenu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/foodmenu.service */
      "./src/app/services/foodmenu.service.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

      var DetailPage = /*#__PURE__*/function () {
        function DetailPage(route, foodMenuService, camera, router) {
          var _this = this;

          _classCallCheck(this, DetailPage);

          this.route = route;
          this.foodMenuService = foodMenuService;
          this.camera = camera;
          this.router = router;
          this.foodId = this.route.snapshot.params.id;
          this.food = {};
          this.imageSrc = "";
          console.log(this.foodId);
          this.foodMenuService.getFoodById(parseInt(this.foodId)).subscribe(function (x) {
            _this.food = x[0];
          });
        }

        _createClass(DetailPage, [{
          key: "getImage",
          value: function getImage() {
            var _this2 = this;

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
              return _this2.food.image = "data:image/jpeg;base64," + file_uri;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "update",
          value: function update() {
            this.foodMenuService.updateFoodItem(this.food);
            this.router.navigate(['/admin']);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            this.foodMenuService.deleteFoodById(id);
            this.router.navigate(['/admin']);
          }
        }]);

        return DetailPage;
      }();

      DetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_foodmenu_service__WEBPACK_IMPORTED_MODULE_3__["FoodmenuService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail.page.scss */
        "./src/app/detail/detail.page.scss"))["default"]]
      })], DetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=detail-detail-module-es5.js.map
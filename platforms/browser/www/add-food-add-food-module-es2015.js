(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-food-add-food-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-food/add-food.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-food/add-food.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>addFood</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-item>\n      <ion-label>Company Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.companyName\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Food Menu</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.foodMenu\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Food</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.food\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Details</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"data.details\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Price</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"data.price\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Image</ion-label>\n      <ion-button (click)=\"getImage()\">\n        Image Upload\n      </ion-button>\n    </ion-item>\n\n    \n\n    <ion-button type=\"submit\" (click)=\"addFoodMenu()\">\n      Add Food Item\n    </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-food/add-food-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-food/add-food-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddFoodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodPageRoutingModule", function() { return AddFoodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-food.page */ "./src/app/add-food/add-food.page.ts");




const routes = [
    {
        path: '',
        component: _add_food_page__WEBPACK_IMPORTED_MODULE_3__["AddFoodPage"]
    }
];
let AddFoodPageRoutingModule = class AddFoodPageRoutingModule {
};
AddFoodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddFoodPageRoutingModule);



/***/ }),

/***/ "./src/app/add-food/add-food.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-food/add-food.module.ts ***!
  \*********************************************/
/*! exports provided: AddFoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodPageModule", function() { return AddFoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-food-routing.module */ "./src/app/add-food/add-food-routing.module.ts");
/* harmony import */ var _add_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-food.page */ "./src/app/add-food/add-food.page.ts");







let AddFoodPageModule = class AddFoodPageModule {
};
AddFoodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_food_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddFoodPageRoutingModule"]
        ],
        declarations: [_add_food_page__WEBPACK_IMPORTED_MODULE_6__["AddFoodPage"]]
    })
], AddFoodPageModule);



/***/ }),

/***/ "./src/app/add-food/add-food.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-food/add-food.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1mb29kL2FkZC1mb29kLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-food/add-food.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-food/add-food.page.ts ***!
  \*******************************************/
/*! exports provided: AddFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodPage", function() { return AddFoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_foodmenu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/foodmenu.service */ "./src/app/services/foodmenu.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");




let AddFoodPage = class AddFoodPage {
    constructor(foodMenuService, camera) {
        this.foodMenuService = foodMenuService;
        this.camera = camera;
        this.data = {};
    }
    ngOnInit() {
        console.log(this.foodMenuService.getAllFoodItems().subscribe(doc => {
            console.log(doc);
        }));
    }
    addFoodMenu() {
        console.log(this.data);
        this.data.id = Date.now();
        this.foodMenuService.addFoodItem(this.data);
    }
    getImage() {
        let cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        console.log(cameraOptions);
        this.camera.getPicture(cameraOptions)
            .then(file_uri => this.imageSrc = file_uri, err => console.log(err));
    }
};
AddFoodPage.ctorParameters = () => [
    { type: _services_foodmenu_service__WEBPACK_IMPORTED_MODULE_2__["FoodmenuService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] }
];
AddFoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-food',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-food.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-food/add-food.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-food.page.scss */ "./src/app/add-food/add-food.page.scss")).default]
    })
], AddFoodPage);



/***/ }),

/***/ "./src/app/services/foodmenu.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/foodmenu.service.ts ***!
  \**********************************************/
/*! exports provided: FoodmenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodmenuService", function() { return FoodmenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let FoodmenuService = class FoodmenuService {
    constructor(firestore) {
        this.firestore = firestore;
        this.collectionName = "foodItem";
    }
    addFoodItem(foodItem) {
        return this.firestore.collection(this.collectionName).add(foodItem).then(doc => { });
    }
    getAllFoodItems() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            console.log(this.firestore.collection(this.collectionName));
            this.firestore.collection("/" + this.collectionName).get().subscribe(data => {
                var allData = [];
                data.forEach(function (doc) {
                    allData.push(doc);
                });
                observer.next(allData);
            });
        });
        // return ;
    }
    updateFoodItem(foodItem) {
        const ref = this.firestore.collection(this.collectionName).doc(foodItem.id);
        ref.update(foodItem);
    }
};
FoodmenuService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FoodmenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FoodmenuService);



/***/ })

}]);
//# sourceMappingURL=add-food-add-food-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-transaction-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction/transaction.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction/transaction.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title >McDonald's - Menu</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"openCart()\" #cart>\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-item-sliding    >\n    <ion-item class=\"no-padding\">\n      <ion-label>\n        <h2>Order List!</h2>\n      </ion-label>\n      <!-- <p>Order List</p> -->\n    </ion-item>\n    <ion-item class=\"no-padding\"*ngFor=\"let tran of transactions\">\n      \n      <ion-label>\n        <h2>Order No. {{tran.index}}</h2>\n        <p>{{ tran.details}}</p>\n      </ion-label>\n      <ion-button fill=\"clear\" >\n        {{tran.price}}\n      </ion-button>\n    </ion-item>\n\n    \n   \n  </ion-item-sliding>\n\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/transaction/transaction-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/transaction/transaction-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TransactionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageRoutingModule", function() { return TransactionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction.page */ "./src/app/transaction/transaction.page.ts");




const routes = [
    {
        path: '',
        component: _transaction_page__WEBPACK_IMPORTED_MODULE_3__["TransactionPage"]
    }
];
let TransactionPageRoutingModule = class TransactionPageRoutingModule {
};
TransactionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionPageRoutingModule);



/***/ }),

/***/ "./src/app/transaction/transaction.module.ts":
/*!***************************************************!*\
  !*** ./src/app/transaction/transaction.module.ts ***!
  \***************************************************/
/*! exports provided: TransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-routing.module */ "./src/app/transaction/transaction-routing.module.ts");
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction.page */ "./src/app/transaction/transaction.page.ts");







let TransactionPageModule = class TransactionPageModule {
};
TransactionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionPageRoutingModule"]
        ],
        declarations: [_transaction_page__WEBPACK_IMPORTED_MODULE_6__["TransactionPage"]]
    })
], TransactionPageModule);



/***/ }),

/***/ "./src/app/transaction/transaction.page.scss":
/*!***************************************************!*\
  !*** ./src/app/transaction/transaction.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/transaction/transaction.page.ts":
/*!*************************************************!*\
  !*** ./src/app/transaction/transaction.page.ts ***!
  \*************************************************/
/*! exports provided: TransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPage", function() { return TransactionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




let TransactionPage = class TransactionPage {
    constructor(loadingCtl, toastCtrl, firestore) {
        this.loadingCtl = loadingCtl;
        this.toastCtrl = toastCtrl;
        this.firestore = firestore;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getTransactions();
    }
    getTransactions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = this.loadingCtl.create({
                message: "Please wait ..."
            });
            (yield loader).present();
            try {
                this.firestore.collection("transactions")
                    .snapshotChanges()
                    .subscribe(data => {
                    this.transactions = data.map(e => {
                        console.log(e);
                        return {
                            id: e.payload.doc.id,
                            title: e.payload.doc.get('title'),
                            details: e.payload.doc.get('details'),
                            price: e.payload.doc.get('price'),
                            index: e.payload.newIndex + 1
                        };
                    });
                });
                console.log(this.transactions);
                (yield loader).dismiss();
            }
            catch (error) {
                this.showToast(error);
            }
        });
    }
    showToast(message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000
        }).then(toastData => toastData.present());
    }
};
TransactionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
TransactionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transaction.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction/transaction.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transaction.page.scss */ "./src/app/transaction/transaction.page.scss")).default]
    })
], TransactionPage);



/***/ })

}]);
//# sourceMappingURL=transaction-transaction-module-es2015.js.map
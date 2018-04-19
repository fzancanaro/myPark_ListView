webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListParksJsonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListParksJsonPage = /** @class */ (function () {
    function ListParksJsonPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.getData();
    }
    ListParksJsonPage.prototype.getData = function () {
        var _this = this;
        var url = 'https://jsonplaceholder.typicode.com/photos';
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.items = result;
        });
    };
    ListParksJsonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-parks-json',template:/*ion-inline-start:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/list-parks-json/list-parks-json.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>List of Parks</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let item of items">\n    <img [src]="item.thumbnailUrl" />\n    <ion-card-content>\n      <ion-card-title>\n        {{item.title}}\n      </ion-card-title>\n      <p>\n        This is just a test.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/list-parks-json/list-parks-json.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ListParksJsonPage);
    return ListParksJsonPage;
}());

//# sourceMappingURL=list-parks-json.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/list-parks-detail/list-parks-detail.module": [
		279,
		1
	],
	"../pages/list-parks-json/list-parks-json.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places_list_places_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_parks_json_list_parks_json__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_parks_detail_list_parks_detail__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(app, navCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.speakers = [];
    }
    HomePage.prototype.ionViewDidLoad = function () { };
    HomePage.prototype.goToPlacesListPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__places_list_places_list__["a" /* PlacesListPage */], item);
    };
    HomePage.prototype.goToListParksJsonPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_parks_json_list_parks_json__["a" /* ListParksJsonPage */], item);
    };
    HomePage.prototype.goToListParksDetailPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_parks_detail_list_parks_detail__["a" /* ListParksDetailPage */], item);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>This page is the Home page</p>\n  <br/>\n  <p>cards with categories</p>\n  <button ion-button color="secondary" (click)="goToPlacesListPage()">Click here to check list of parks\n  </button>\n  <br/>\n  <button ion-button color="secondary" (click)="goToListParksJsonPage()">Click here to check diferent list from json\n  </button>\n\n  <button ion-button color="secondary" (click)="goToListParksDetailPage()">Detail page\n  </button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places_detail_places_detail__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesListPage = /** @class */ (function () {
    function PlacesListPage(app, navCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.speakers = [];
    }
    PlacesListPage.prototype.ionViewDidLoad = function () {
    };
    PlacesListPage.prototype.goToDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__places_detail_places_detail__["a" /* PlacesDetailPage */], item);
    };
    PlacesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places-list',template:/*ion-inline-start:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/places-list/places-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Parks</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-card-header>\n    Prince Alfred Park\n  </ion-card-header>\n  <ion-card (click)="goToDetail(null)">\n    <img src="assets/img/Prince-Alfred-Park.jpg" />\n\n\n  </ion-card>\n  <ion-card-header>\n    Victoria Park\n  </ion-card-header>\n  <ion-card (click)="goToDetail(null)">\n    <img src="assets/img/Victoria-Park-Pool.jpg" />\n\n\n  </ion-card>\n  <ion-card-header>\n    Clovelly Outdoor Gym\n  </ion-card-header>\n  <ion-card (click)="goToDetail(null)">\n    <img src="assets/img/Clovelly-Outdoor-Gym.jpg" />\n\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/places-list/places-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PlacesListPage);
    return PlacesListPage;
}());

//# sourceMappingURL=places-list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacesDetailPage = /** @class */ (function () {
    function PlacesDetailPage(navParams, app) {
        this.navParams = navParams;
        this.app = app;
        this.place = navParams.data;
    }
    PlacesDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places-detail',template:/*ion-inline-start:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/places-detail/places-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Park Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n  <!-- share icon -->\n  <ion-fab top right edge>\n    <button ion-fab color="danger">\n      <ion-icon name="md-share"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <button ion-fab>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-vimeo"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n  <!-- first card with photo, park name and address -->\n  <ion-card class="adv-map">\n    <div style="position: relative">\n      <img src="assets/img/SydneyPark.jpg">\n    </div>\n    <ion-item>\n      <h2>Sydney Park</h2>\n      <p>416 Sydney Park Rd, Alexandria NSW 2015</p>\n    </ion-item>\n    <!-- second card with map, and information how far is the park -->\n  </ion-card>\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'star\'></ion-icon>\n        Favorite\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'information-circle\'></ion-icon>\n        Review\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'search\'></ion-icon>\n        Search\n      </button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'map\'></ion-icon>\n        Map\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-card class="adv-map">\n    <div style="position: relative">\n      <img src="assets/img/advance-card-map-paris.png">\n    </div>\n\n    <ion-item actions>\n      <span ion-text item-start color="secondary" class="item-bold">26 min</span>\n      <span ion-text item-start color="subtle">(8.1 mi)</span>\n      <button ion-button color="secondary" clear item-end icon-start>\n        <ion-icon name=\'navigate\'></ion-icon>\n        Start\n      </button>\n    </ion-item>\n\n  </ion-card>\n\n  <ion-list no-border>\n\n    <ion-list-header>\n      Facilities\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'car\' item-start></ion-icon>\n      Car Parking\n      <ion-note item-end>\n        Free\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Gym\n      </ion-label>\n      <ion-icon name=\'body\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'leaf\' item-start></ion-icon>\n      Picnic Table\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'hand\' item-start></ion-icon>\n      Toilets\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-list>\n\n    <ion-list-header>\n      Permissions\n    </ion-list-header>\n\n    <ion-item>\n      Facilities\n      <ion-icon name=\'color-wand\' item-start></ion-icon>\n      <ion-note item-end>5</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Quidditch Practice\n      </ion-label>\n      <ion-icon name=\'brush\' item-start></ion-icon>\n      <ion-note item-end>5</ion-note>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon name=\'wine\' item-start></ion-icon>\n      Mead Drinking\n      <ion-note item-end>no</ion-note>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      phohibitios\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'paw\' item-start></ion-icon>\n      Unleashed Dogs\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'wineglass\' item-start></ion-icon>\n      Drink\n      <ion-note item-end>not allow</ion-note>\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/places-detail/places-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], PlacesDetailPage);
    return PlacesDetailPage;
}());

//# sourceMappingURL=places-detail.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_places_list_places_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_places_detail_places_detail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_parks_json_list_parks_json__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_parks_detail_list_parks_detail__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_places_list_places_list__["a" /* PlacesListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_parks_json_list_parks_json__["a" /* ListParksJsonPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_parks_detail_list_parks_detail__["a" /* ListParksDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_places_detail_places_detail__["a" /* PlacesDetailPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/list-parks-detail/list-parks-detail.module#ListParksDetailPageModule', name: 'ListParksDetailPage', segment: 'list-parks-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-parks-json/list-parks-json.module#ListParksJsonPageModule', name: 'ListParksJsonPage', segment: 'list-parks-json', priority: 'low', defaultHistory: [] }
                    ]
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_parks_json_list_parks_json__["a" /* ListParksJsonPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_places_list_places_list__["a" /* PlacesListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_parks_detail_list_parks_detail__["a" /* ListParksDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_places_detail_places_detail__["a" /* PlacesDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListParksDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListParksDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListParksDetailPage = /** @class */ (function () {
    function ListParksDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListParksDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListParksDetailPage');
    };
    ListParksDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-parks-detail',template:/*ion-inline-start:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/list-parks-detail/list-parks-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Park Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n  <ion-fab top right edge>\n    <button ion-fab color="danger">\n      <ion-icon name="md-share"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <button ion-fab>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-vimeo"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card class="adv-map">\n    <div style="position: relative">\n      <img src="assets/img/SydneyPark.jpg">\n    </div>\n    <ion-item>\n      <h2>Sydney Park</h2>\n      <p>416 Sydney Park Rd, Alexandria NSW 2015</p>\n    </ion-item>\n    <!-- <ion-item actions>\n      <span ion-text item-start color="secondary" class="item-bold">18 min</span>\n      <span ion-text item-start color="subtle">(2.6 mi)</span>\n      <button ion-button color="primary" clear item-end icon-start>\n        <ion-icon name=\'navigate\'></ion-icon>\n        Start\n      </button>\n    </ion-item> -->\n\n  </ion-card>\n\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'star\'></ion-icon>\n        Favorite\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'search\'></ion-icon>\n        Search\n      </button>\n    </ion-col>\n\n    <ion-col text-right>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'map\'></ion-icon>\n        Map\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-card class="adv-map">\n    <div style="position: relative">\n      <img src="assets/img/advance-card-map-paris.png">\n    </div>\n\n    <ion-item actions>\n      <span ion-text item-start color="secondary" class="item-bold">26 min</span>\n      <span ion-text item-start color="subtle">(8.1 mi)</span>\n      <button ion-button color="secondary" clear item-end icon-start>\n        <ion-icon name=\'navigate\'></ion-icon>\n        Start\n      </button>\n    </ion-item>\n\n  </ion-card>\n\n  <ion-list no-border>\n\n    <ion-list-header>\n      Activities\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'car\' item-start></ion-icon>\n      Car Parking\n      <ion-note item-end>\n        Free\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Gym\n      </ion-label>\n      <ion-icon name=\'body\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'leaf\' item-start></ion-icon>\n      Picnic Table\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'hand\' item-start></ion-icon>\n      Toilets\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-list>\n\n    <ion-list-header>\n      Permissions\n    </ion-list-header>\n\n    <ion-item>\n      Facilities\n      <ion-icon name=\'color-wand\' item-start></ion-icon>\n      <ion-note item-end>5</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Quidditch Practice\n      </ion-label>\n      <ion-icon name=\'brush\' item-start></ion-icon>\n      <ion-note item-end>5</ion-note>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon name=\'wine\' item-start></ion-icon>\n      Mead Drinking\n      <ion-note item-end>no</ion-note>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      phohibitios\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'paw\' item-start></ion-icon>\n      Unleashed Dogs\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'wineglass\' item-start></ion-icon>\n      Drink\n      <ion-note item-end>not allow</ion-note>\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/fzancanaro/Documents/ionicTemplate/testTemplate/testTemplate/src/pages/list-parks-detail/list-parks-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListParksDetailPage);
    return ListParksDetailPage;
}());

//# sourceMappingURL=list-parks-detail.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map
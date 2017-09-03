"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var AboutComponent = (function () {
    function AboutComponent(appservice) {
        this.appservice = appservice;
    }
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsOENBQTRDO0FBVTVDO0lBQ0Usd0JBQW1CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7SUFDeEMsQ0FBQztJQUZVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7eUNBRThCLHdCQUFVO09BRDdCLGNBQWMsQ0FHMUI7SUFBRCxxQkFBQztDQUhELEFBR0MsSUFBQTtBQUhZLHdDQUFjIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFib3V0JyxcbiAgdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhYm91dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwc2VydmljZTpBcHBTZXJ2aWNlKSB7XG4gIH1cbn1cbiJdfQ==

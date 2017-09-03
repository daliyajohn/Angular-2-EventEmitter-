"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var about_module_1 = require("./main/about/about.module");
var home_module_1 = require("./main/home/home.module");
var shared_module_1 = require("./shared/shared.module");
var app_service_1 = require("./app.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, about_module_1.AboutModule, home_module_1.HomeModule, shared_module_1.SharedModule.forRoot()],
            declarations: [app_component_1.AppComponent],
            providers: [
                app_service_1.AppService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUUxRCxzQ0FBMkM7QUFDM0MsaURBQStDO0FBQy9DLDJEQUF3RDtBQUV4RCwwREFBd0Q7QUFDeEQsdURBQXFEO0FBQ3JELHdEQUFzRDtBQUN0RCw2Q0FBMkM7QUFXM0M7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQVRyQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLGlCQUFVLEVBQUUscUNBQWdCLEVBQUUsMEJBQVcsRUFBRSx3QkFBVSxFQUFFLDRCQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkcsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUU7Z0JBQ1Qsd0JBQVU7YUFDWDtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQTFCLEFBQTBCLElBQUE7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBYm91dE1vZHVsZSB9IGZyb20gJy4vbWFpbi9hYm91dC9hYm91dC5tb2R1bGUnO1xuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vbWFpbi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgQXBwUm91dGluZ01vZHVsZSwgQWJvdXRNb2R1bGUsIEhvbWVNb2R1bGUsIFNoYXJlZE1vZHVsZS5mb3JSb290KCldLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBcHBTZXJ2aWNlXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=

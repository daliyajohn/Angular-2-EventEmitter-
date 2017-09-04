"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var shared_module_1 = require("../shared/shared.module");
var name_list_service_1 = require("../shared/name-list/name-list.service");
var main_component_1 = require("./main.component");
var main_routing_module_1 = require("./main-routing.module");
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, main_routing_module_1.MainRoutingModule],
            declarations: [home_component_1.HomeComponent, about_component_1.AboutComponent, main_component_1.MainComponent],
            exports: [home_component_1.HomeComponent, about_component_1.AboutComponent, main_component_1.MainComponent],
            providers: [name_list_service_1.NameListService]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluL21haW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQseURBQXVEO0FBQ3ZELDJFQUF3RTtBQUN4RSxtREFBaUQ7QUFDakQsNkRBQTBEO0FBUTFEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFOdEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsNEJBQVksRUFBRSx1Q0FBaUIsQ0FBQztZQUMxQyxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGdDQUFjLEVBQUUsOEJBQWEsQ0FBQztZQUM1RCxPQUFPLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGdDQUFjLEVBQUUsOEJBQWEsQ0FBQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1NBQzdCLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUEzQixBQUEyQixJQUFBO0FBQWQsZ0NBQVUiLCJmaWxlIjoiYXBwL21haW4vbWFpbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL21haW4tcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBNYWluUm91dGluZ01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnQsIEFib3V0Q29tcG9uZW50LCBNYWluQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0hvbWVDb21wb25lbnQsIEFib3V0Q29tcG9uZW50LCBNYWluQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluTW9kdWxlIHsgfSJdfQ==

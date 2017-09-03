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
var home_routing_module_1 = require("./home/home-routing.module");
var shared_module_1 = require("../shared/shared.module");
var name_list_service_1 = require("../shared/name-list/name-list.service");
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [home_routing_module_1.HomeRoutingModule, shared_module_1.SharedModule],
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent],
            providers: [name_list_service_1.NameListService]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluL21haW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHdEQUFzRDtBQUV0RCxrRUFBK0Q7QUFFL0QseURBQXVEO0FBQ3ZELDJFQUF3RTtBQVF4RTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBTnRCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHVDQUFpQixFQUFFLDRCQUFZLENBQUM7WUFDMUMsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQTNCLEFBQTJCLElBQUE7QUFBZCxnQ0FBVSIsImZpbGUiOiJhcHAvbWFpbi9tYWluLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbSG9tZVJvdXRpbmdNb2R1bGUsIFNoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTWFpbk1vZHVsZSB7IH0iXX0=

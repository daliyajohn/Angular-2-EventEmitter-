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
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            declarations: [home_component_1.HomeComponent, about_component_1.AboutComponent, main_component_1.MainComponent],
            exports: [home_component_1.HomeComponent, about_component_1.AboutComponent],
            providers: [name_list_service_1.NameListService]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluL21haW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQseURBQXVEO0FBQ3ZELDJFQUF3RTtBQUN4RSxtREFBaUQ7QUFRakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQU50QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLDhCQUFhLEVBQUUsZ0NBQWMsRUFBRSw4QkFBYSxDQUFDO1lBQzVELE9BQU8sRUFBRSxDQUFDLDhCQUFhLEVBQUUsZ0NBQWMsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1NBQzdCLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUEzQixBQUEyQixJQUFBO0FBQWQsZ0NBQVUiLCJmaWxlIjoiYXBwL21haW4vbWFpbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnQsIE1haW5Db21wb25lbnRdLFxuICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtOYW1lTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Nb2R1bGUgeyB9Il19

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
var MainComponent = (function () {
    function MainComponent(appservice) {
        this.appservice = appservice;
    }
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-main',
            templateUrl: 'main.component.html',
            styleUrls: ['main.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDhDQUE0QztBQVU1QztJQUNFLHVCQUFtQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO0lBQ3hDLENBQUM7SUFGVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO3lDQUU4Qix3QkFBVTtPQUQ3QixhQUFhLENBR3pCO0lBQUQsb0JBQUM7Q0FIRCxBQUdDLElBQUE7QUFIWSxzQ0FBYSIsImZpbGUiOiJhcHAvbWFpbi9tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uL2FwcC5zZXJ2aWNlJztcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbWFpbicsXG4gIHRlbXBsYXRlVXJsOiAnbWFpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtYWluLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGFwcHNlcnZpY2U6QXBwU2VydmljZSkge1xuICB9XG59XG4iXX0=

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
var main_service_1 = require("./main.service");
var MainComponent = (function () {
    function MainComponent(mainservice) {
        var _this = this;
        this.mainservice = mainservice;
        this.mainservice.step.subscribe(function (obj) {
            if (obj === 2) {
                _this.value = 2;
            }
        });
    }
    MainComponent.prototype.setPage3 = function (value) {
        this.mainservice.step.emit(2);
    };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-main',
            templateUrl: 'main.component.html',
            styleUrls: ['main.component.css']
        }),
        __metadata("design:paramtypes", [main_service_1.MainService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE2QztBQVk3QztJQUVFLHVCQUFtQixXQUF1QjtRQUExQyxpQkFPQztRQVBrQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQzdCLFVBQUMsR0FBUTtZQUNQLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxnQ0FBUSxHQUFSLFVBQVMsS0FBUztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQVpVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7eUNBRytCLDBCQUFXO09BRi9CLGFBQWEsQ0FhekI7SUFBRCxvQkFBQztDQWJELEFBYUMsSUFBQTtBQWJZLHNDQUFhIiwiZmlsZSI6ImFwcC9tYWluL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYWluU2VydmljZSB9IGZyb20gJy4vbWFpbi5zZXJ2aWNlJztcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbiBzZXRQYWdlMyh2YWx1ZTphbnkpIHtcbiAgICB0aGlzLm1haW5zZXJ2aWNlLnN0ZXAuZW1pdCgyKTtcbiAgfWVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbWFpbicsXG4gIHRlbXBsYXRlVXJsOiAnbWFpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtYWluLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcbiAgcHVibGljIHZhbHVlOmFueTtcbiAgY29uc3RydWN0b3IocHVibGljIG1haW5zZXJ2aWNlOk1haW5TZXJ2aWNlKSB7XG4gICAgdGhpcy5tYWluc2VydmljZS5zdGVwLnN1YnNjcmliZShcbiAgICAgIChvYmo6IGFueSkgPT4ge1xuICAgICAgICBpZiAob2JqID09PSAyKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IDI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbiAgc2V0UGFnZTModmFsdWU6YW55KSB7XG4gICAgdGhpcy5tYWluc2VydmljZS5zdGVwLmVtaXQoMik7XG4gIH1cbn1cbiJdfQ==

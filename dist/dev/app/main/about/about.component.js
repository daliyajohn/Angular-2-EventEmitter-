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
var app_service_1 = require("../../app.service");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxpREFBK0M7QUFVL0M7SUFDRSx3QkFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUN4QyxDQUFDO0lBRlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQzt5Q0FFOEIsd0JBQVU7T0FEN0IsY0FBYyxDQUcxQjtJQUFELHFCQUFDO0NBSEQsQUFHQyxJQUFBO0FBSFksd0NBQWMiLCJmaWxlIjoiYXBwL21haW4vYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwLnNlcnZpY2UnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGFwcHNlcnZpY2U6QXBwU2VydmljZSkge1xuICB9XG59XG4iXX0=

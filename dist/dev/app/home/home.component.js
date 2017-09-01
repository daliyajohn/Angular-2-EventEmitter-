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
var name_list_service_1 = require("../shared/name-list/name-list.service");
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = '';
        this.names = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    HomeComponent.prototype.getNames = function () {
        var _this = this;
        this.nameListService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.addName = function () {
        this.names.push(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }),
        __metadata("design:paramtypes", [name_list_service_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF3RTtBQVd4RTtJQVlFLHVCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFWbkQsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQVUsRUFBRSxDQUFDO0lBUW9DLENBQUM7SUFLdkQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBS0QsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7YUFDdkIsU0FBUyxDQUNSLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLEVBQzNCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQ3hDLENBQUM7SUFDTixDQUFDO0lBTUQsK0JBQU8sR0FBUDtRQUVFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQXpDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO3lDQWFvQyxtQ0FBZTtPQVp4QyxhQUFhLENBMkN6QjtJQUFELG9CQUFDO0NBM0NELEFBMkNDLElBQUE7QUEzQ1ksc0NBQWEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIG5hbWVzOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXG4gICAqIE5hbWVMaXN0U2VydmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldE5hbWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHRoZSBuYW1lTGlzdFNlcnZpY2Ugb2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0TmFtZXMoKSB7XG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0KClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIG5hbWVzID0+IHRoaXMubmFtZXMgPSBuYW1lcyxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2hlcyBhIG5ldyBuYW1lIG9udG8gdGhlIG5hbWVzIGFycmF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgKi9cbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBpbXBsZW1lbnQgbmFtZUxpc3RTZXJ2aWNlLnBvc3RcbiAgICB0aGlzLm5hbWVzLnB1c2godGhpcy5uZXdOYW1lKTtcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuIl19

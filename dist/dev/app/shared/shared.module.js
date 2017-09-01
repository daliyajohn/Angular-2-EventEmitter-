"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var toolbar_component_1 = require("./toolbar/toolbar.component");
var navbar_component_1 = require("./navbar/navbar.component");
var name_list_service_1 = require("./name-list/name-list.service");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [name_list_service_1.NameListService]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            declarations: [toolbar_component_1.ToolbarComponent, navbar_component_1.NavbarComponent],
            exports: [toolbar_component_1.ToolbarComponent, navbar_component_1.NavbarComponent,
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUUvQyxpRUFBK0Q7QUFDL0QsOERBQTREO0FBQzVELG1FQUFnRTtBQVloRTtJQUFBO0lBT0EsQ0FBQztxQkFQWSxZQUFZO0lBQ2hCLG9CQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBTlUsWUFBWTtRQU54QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHFCQUFZLENBQUM7WUFDckMsWUFBWSxFQUFFLENBQUMsb0NBQWdCLEVBQUUsa0NBQWUsQ0FBQztZQUNqRCxPQUFPLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxrQ0FBZTtnQkFDekMscUJBQVksRUFBRSxtQkFBVyxFQUFFLHFCQUFZLENBQUM7U0FDM0MsQ0FBQztPQUNXLFlBQVksQ0FPeEI7SUFBRCxtQkFBQzs7Q0FQRCxBQU9DLElBQUE7QUFQWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4vbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlJztcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUb29sYmFyQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG9vbGJhckNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LFxuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtOYW1lTGlzdFNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl19

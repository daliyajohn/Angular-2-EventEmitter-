"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var seed_config_1 = require("./seed.config");
var ProjectConfig = (function (_super) {
    __extends(ProjectConfig, _super);
    function ProjectConfig() {
        var _this = _super.call(this) || this;
        _this.PROJECT_TASKS_DIR = path_1.join(process.cwd(), _this.TOOLS_DIR, 'tasks', 'project');
        _this.NPM_DEPENDENCIES = _this.NPM_DEPENDENCIES.slice();
        _this.APP_ASSETS = [];
        _this.ROLLUP_INCLUDE_DIR = _this.ROLLUP_INCLUDE_DIR.slice();
        _this.ROLLUP_NAMED_EXPORTS = _this.ROLLUP_NAMED_EXPORTS.slice();
        return _this;
    }
    return ProjectConfig;
}(seed_config_1.SeedConfig));
exports.ProjectConfig = ProjectConfig;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy9jb25maWcvcHJvamVjdC5jb25maWcudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS9kYWxpeWEvQzI3MkQ3RkU3MkQ3RjU1Ri9HaXRodWIgcHJvamVjdHMvQW5ndWxhci0yLUV2ZW50RW1pdHRlci0vdG9vbHMvY29uZmlnL3Byb2plY3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUU1Qiw2Q0FBMkM7QUFPM0M7SUFBbUMsaUNBQVU7SUFJM0M7UUFBQSxZQUNFLGlCQUFPLFNBOENSO1FBakRELHVCQUFpQixHQUFHLFdBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFXMUUsS0FBSSxDQUFDLGdCQUFnQixHQUNoQixLQUFJLENBQUMsZ0JBQWdCLFFBR3pCLENBQUM7UUFHRixLQUFJLENBQUMsVUFBVSxHQUFHLEVBR2pCLENBQUM7UUFFRixLQUFJLENBQUMsa0JBQWtCLEdBQ2xCLEtBQUksQ0FBQyxrQkFBa0IsUUFFM0IsQ0FBQztRQUVGLEtBQUksQ0FBQyxvQkFBb0IsR0FDcEIsS0FBSSxDQUFDLG9CQUFvQixRQUU3QixDQUFDOztJQWtCSixDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBckRELENBQW1DLHdCQUFVLEdBcUQ1QztBQXJEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgU2VlZENvbmZpZyB9IGZyb20gJy4vc2VlZC5jb25maWcnO1xuLy8gaW1wb3J0IHsgRXh0ZW5kUGFja2FnZXMgfSBmcm9tICcuL3NlZWQuY29uZmlnLmludGVyZmFjZXMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgZXh0ZW5kcyB0aGUgYmFzaWMgc2VlZCBjb25maWd1cmF0aW9uLCBhbGxvd2luZyBmb3IgcHJvamVjdCBzcGVjaWZpYyBvdmVycmlkZXMuIEEgZmV3IGV4YW1wbGVzIGNhbiBiZSBmb3VuZFxuICogYmVsb3cuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q29uZmlnIGV4dGVuZHMgU2VlZENvbmZpZyB7XG5cbiAgUFJPSkVDVF9UQVNLU19ESVIgPSBqb2luKHByb2Nlc3MuY3dkKCksIHRoaXMuVE9PTFNfRElSLCAndGFza3MnLCAncHJvamVjdCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gdGhpcy5BUFBfVElUTEUgPSAnUHV0IG5hbWUgb2YgeW91ciBhcHAgaGVyZSc7XG4gICAgLy8gdGhpcy5HT09HTEVfQU5BTFlUSUNTX0lEID0gJ1lvdXIgc2l0ZSdzIElEJztcblxuICAgIC8qIEVuYWJsZSB0eXBlbGVzcyBjb21waWxlciBydW5zIChmYXN0ZXIpIGJldHdlZW4gdHlwZWQgY29tcGlsZXIgcnVucy4gKi9cbiAgICAvLyB0aGlzLlRZUEVEX0NPTVBJTEVfSU5URVJWQUwgPSA1O1xuXG4gICAgLy8gQWRkIGBOUE1gIHRoaXJkLXBhcnR5IGxpYnJhcmllcyB0byBiZSBpbmplY3RlZC9idW5kbGVkLlxuICAgIHRoaXMuTlBNX0RFUEVOREVOQ0lFUyA9IFtcbiAgICAgIC4uLnRoaXMuTlBNX0RFUEVOREVOQ0lFUyxcbiAgICAgIC8vIHtzcmM6ICdqcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzJywgaW5qZWN0OiAnbGlicyd9LFxuICAgICAgLy8ge3NyYzogJ2xvZGFzaC9sb2Rhc2gubWluLmpzJywgaW5qZWN0OiAnbGlicyd9LFxuICAgIF07XG5cbiAgICAvLyBBZGQgYGxvY2FsYCB0aGlyZC1wYXJ0eSBsaWJyYXJpZXMgdG8gYmUgaW5qZWN0ZWQvYnVuZGxlZC5cbiAgICB0aGlzLkFQUF9BU1NFVFMgPSBbXG4gICAgICAvLyB7c3JjOiBgJHt0aGlzLkFQUF9TUkN9L3lvdXItcGF0aC10by1saWIvbGlicy9qcXVlcnktdWkuanNgLCBpbmplY3Q6IHRydWUsIHZlbmRvcjogZmFsc2V9XG4gICAgICAvLyB7c3JjOiBgJHt0aGlzLkNTU19TUkN9L3BhdGgtdG8tbGliL3Rlc3QtbGliLmNzc2AsIGluamVjdDogdHJ1ZSwgdmVuZG9yOiBmYWxzZX0sXG4gICAgXTtcblxuICAgIHRoaXMuUk9MTFVQX0lOQ0xVREVfRElSID0gW1xuICAgICAgLi4udGhpcy5ST0xMVVBfSU5DTFVERV9ESVIsXG4gICAgICAvLydub2RlX21vZHVsZXMvbW9tZW50LyoqJ1xuICAgIF07XG5cbiAgICB0aGlzLlJPTExVUF9OQU1FRF9FWFBPUlRTID0gW1xuICAgICAgLi4udGhpcy5ST0xMVVBfTkFNRURfRVhQT1JUUyxcbiAgICAgIC8veydub2RlX21vZHVsZXMvaW1tdXRhYmxlL2Rpc3QvaW1tdXRhYmxlLmpzJzogWyAnTWFwJyBdfSxcbiAgICBdO1xuXG4gICAgLy8gQWRkIHBhY2thZ2VzIChlLmcuIG5nMi10cmFuc2xhdGUpXG4gICAgLy8gbGV0IGFkZGl0aW9uYWxQYWNrYWdlczogRXh0ZW5kUGFja2FnZXNbXSA9IFt7XG4gICAgLy8gICBuYW1lOiAnbmcyLXRyYW5zbGF0ZScsXG4gICAgLy8gICAvLyBQYXRoIHRvIHRoZSBwYWNrYWdlJ3MgYnVuZGxlXG4gICAgLy8gICBwYXRoOiAnbm9kZV9tb2R1bGVzL25nMi10cmFuc2xhdGUvYnVuZGxlcy9uZzItdHJhbnNsYXRlLnVtZC5qcydcbiAgICAvLyB9XTtcbiAgICAvL1xuICAgIC8vIHRoaXMuYWRkUGFja2FnZXNCdW5kbGVzKGFkZGl0aW9uYWxQYWNrYWdlcyk7XG5cbiAgICAvKiBBZGQgcHJveHkgbWlkZGxld2FyZSAqL1xuICAgIC8vIHRoaXMuUFJPWFlfTUlERExFV0FSRSA9IFtcbiAgICAvLyAgIHJlcXVpcmUoJ2h0dHAtcHJveHktbWlkZGxld2FyZScpKCcvYXBpJywgeyB3czogZmFsc2UsIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMycgfSlcbiAgICAvLyBdO1xuXG4gICAgLyogQWRkIHRvIG9yIG92ZXJyaWRlIE5QTSBtb2R1bGUgY29uZmlndXJhdGlvbnM6ICovXG4gICAgLy8gdGhpcy5QTFVHSU5fQ09ORklHU1snYnJvd3Nlci1zeW5jJ10gPSB7IGdob3N0TW9kZTogZmFsc2UgfTtcbiAgfVxuXG59XG4iXX0=
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
var gulp = require("gulp");
var path_1 = require("path");
var assets_task_1 = require("../assets_task");
var config_1 = require("../../config");
module.exports = (function (_super) {
    __extends(BuildAssetsTask, _super);
    function BuildAssetsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuildAssetsTask.prototype.run = function (done) {
        var paths = [
            path_1.join(config_1.default.APP_SRC, '**'),
            path_1.join(config_1.default.NPM_BASE, '@angular', 'service-worker', 'bundles', 'worker-basic.js'),
            '!' + path_1.join(config_1.default.APP_SRC, '**', '*.ts'),
            '!' + path_1.join(config_1.default.APP_SRC, '**', '*.scss'),
            '!' + path_1.join(config_1.default.APP_SRC, '**', '*.sass')
        ].concat(config_1.default.TEMP_FILES.map(function (p) { return '!' + p; }));
        return gulp.src(paths)
            .pipe(gulp.dest(config_1.default.APP_DEST));
    };
    return BuildAssetsTask;
}(assets_task_1.AssetsTask));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9zZWVkL2J1aWxkLmFzc2V0cy5kZXYudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS9kYWxpeWEvQzI3MkQ3RkU3MkQ3RjU1Ri9HaXRodWIgcHJvamVjdHMvQW5ndWxhci0yLUV2ZW50RW1pdHRlci0vdG9vbHMvdGFza3Mvc2VlZC9idWlsZC5hc3NldHMuZGV2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkJBQTZCO0FBQzdCLDZCQUE0QjtBQUU1Qiw4Q0FBNEM7QUFDNUMsdUNBQWtDO0FBTWxDO0lBQ2dDLG1DQUFVO0lBQXhDOztJQWFBLENBQUM7SUFaQyw2QkFBRyxHQUFILFVBQUksSUFBUztRQUNYLElBQUksS0FBSyxHQUFhO1lBQ3BCLFdBQUksQ0FBQyxnQkFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7WUFDMUIsV0FBSSxDQUFDLGdCQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUM7WUFDakYsR0FBRyxHQUFHLFdBQUksQ0FBQyxnQkFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLEdBQUcsR0FBRyxXQUFJLENBQUMsZ0JBQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztZQUMxQyxHQUFHLEdBQUcsV0FBSSxDQUFDLGdCQUFNLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7U0FDckMsQ0FBQyxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFiRCxDQUE4Qix3QkFBVSxHQWF0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGd1bHAgZnJvbSAnZ3VscCc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IEFzc2V0c1Rhc2sgfSBmcm9tICcuLi9hc3NldHNfdGFzayc7XG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbi8qKlxuICogRXhlY3V0ZXMgdGhlIGJ1aWxkIHByb2Nlc3MsIGNvcHlpbmcgdGhlIGFzc2V0cyBsb2NhdGVkIGluIGBzcmMvY2xpZW50YCBvdmVyIHRvIHRoZSBhcHByb3ByaWF0ZVxuICogYGRpc3QvZGV2YCBkaXJlY3RvcnkuXG4gKi9cbmV4cG9ydCA9XG4gIGNsYXNzIEJ1aWxkQXNzZXRzVGFzayBleHRlbmRzIEFzc2V0c1Rhc2sge1xuICAgIHJ1bihkb25lOiBhbnkpIHtcbiAgICAgIGxldCBwYXRoczogc3RyaW5nW10gPSBbXG4gICAgICAgIGpvaW4oQ29uZmlnLkFQUF9TUkMsICcqKicpLFxuICAgICAgICBqb2luKENvbmZpZy5OUE1fQkFTRSwgJ0Bhbmd1bGFyJywgJ3NlcnZpY2Utd29ya2VyJywgJ2J1bmRsZXMnLCAnd29ya2VyLWJhc2ljLmpzJyksXG4gICAgICAgICchJyArIGpvaW4oQ29uZmlnLkFQUF9TUkMsICcqKicsICcqLnRzJyksXG4gICAgICAgICchJyArIGpvaW4oQ29uZmlnLkFQUF9TUkMsICcqKicsICcqLnNjc3MnKSxcbiAgICAgICAgJyEnICsgam9pbihDb25maWcuQVBQX1NSQywgJyoqJywgJyouc2FzcycpXG4gICAgICAgICAgICBdLmNvbmNhdChDb25maWcuVEVNUF9GSUxFUy5tYXAoKHApID0+IHsgcmV0dXJuICchJyArIHA7IH0pKTtcblxuICAgICAgcmV0dXJuIGd1bHAuc3JjKHBhdGhzKVxuICAgICAgICAucGlwZShndWxwLmRlc3QoQ29uZmlnLkFQUF9ERVNUKSk7XG4gICAgfVxuICB9O1xuIl19
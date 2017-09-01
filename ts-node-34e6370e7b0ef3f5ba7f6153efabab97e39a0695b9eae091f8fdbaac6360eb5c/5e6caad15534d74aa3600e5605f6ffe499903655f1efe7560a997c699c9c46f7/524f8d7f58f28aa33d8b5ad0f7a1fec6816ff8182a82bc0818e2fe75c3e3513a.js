"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulpLoadPlugins = require("gulp-load-plugins");
var path_1 = require("path");
var runSequence = require("run-sequence");
var config_1 = require("../../config");
var code_change_tools_1 = require("./code_change_tools");
var utils_1 = require("../../utils");
var plugins = gulpLoadPlugins();
function watch(taskname, root) {
    if (root === void 0) { root = config_1.default.APP_SRC; }
    return function () {
        var paths = [
            path_1.join(root, '**')
        ].concat(config_1.default.TEMP_FILES.map(function (p) { return '!' + p; }));
        if (config_1.default.EXTRA_WATCH_PATHS) {
            paths = paths.concat(config_1.default.EXTRA_WATCH_PATHS.map(function (p) {
                return path_1.join(p, '**');
            }));
        }
        plugins.watch(paths, function (e) {
            code_change_tools_1.changeFileManager.addFile(e.path);
            setTimeout(function () {
                runSequence(taskname, function () {
                    code_change_tools_1.changeFileManager.clear();
                    utils_1.notifyLiveReload(e);
                });
            }, 100);
        });
    };
}
exports.watch = watch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy91dGlscy9zZWVkL3dhdGNoLnRzIiwic291cmNlcyI6WyIvbWVkaWEvZGFsaXlhL0MyNzJEN0ZFNzJEN0Y1NUYvR2l0aHViIHByb2plY3RzL0FuZ3VsYXItMi1FdmVudEVtaXR0ZXItL3Rvb2xzL3V0aWxzL3NlZWQvd2F0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBcUQ7QUFDckQsNkJBQTRCO0FBQzVCLDBDQUE0QztBQUU1Qyx1Q0FBa0M7QUFDbEMseURBQXdEO0FBQ3hELHFDQUErQztBQUUvQyxJQUFNLE9BQU8sR0FBUSxlQUFlLEVBQUUsQ0FBQztBQU12QyxlQUFzQixRQUFnQixFQUFFLElBQTZCO0lBQTdCLHFCQUFBLEVBQUEsT0FBZSxnQkFBTSxDQUFDLE9BQU87SUFDbkUsTUFBTSxDQUFDO1FBQ0wsSUFBSSxLQUFLLEdBQWE7WUFDcEIsV0FBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7U0FDakIsQ0FBQyxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUc1RCxFQUFFLENBQUMsQ0FBQyxnQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxXQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBQyxDQUFNO1lBQzFCLHFDQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFNbEMsVUFBVSxDQUFDO2dCQUVULFdBQVcsQ0FBQyxRQUFRLEVBQUU7b0JBQ3BCLHFDQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMxQix3QkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7WUFFTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7QUE5QkQsc0JBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZ3VscExvYWRQbHVnaW5zIGZyb20gJ2d1bHAtbG9hZC1wbHVnaW5zJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIHJ1blNlcXVlbmNlIGZyb20gJ3J1bi1zZXF1ZW5jZSc7XG5cbmltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IGNoYW5nZUZpbGVNYW5hZ2VyIH0gZnJvbSAnLi9jb2RlX2NoYW5nZV90b29scyc7XG5pbXBvcnQgeyBub3RpZnlMaXZlUmVsb2FkIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBwbHVnaW5zID0gPGFueT5ndWxwTG9hZFBsdWdpbnMoKTtcblxuLyoqXG4gKiBXYXRjaGVzIHRoZSB0YXNrIHdpdGggdGhlIGdpdmVuIHRhc2tuYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhc2tuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRhc2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaCh0YXNrbmFtZTogc3RyaW5nLCByb290OiBzdHJpbmcgPSBDb25maWcuQVBQX1NSQykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBwYXRoczogc3RyaW5nW10gPSBbXG4gICAgICBqb2luKHJvb3QsICcqKicpXG4gICAgXS5jb25jYXQoQ29uZmlnLlRFTVBfRklMRVMubWFwKChwKSA9PiB7IHJldHVybiAnIScgKyBwOyB9KSk7XG5cbiAgICAvLyB3YXRjaGVzIGZvciB1c2VyIGRlZmluZWQgcGF0aHMgdG8gdHJpZ2dlciBjb21waWxhdGlvblxuICAgIGlmIChDb25maWcuRVhUUkFfV0FUQ0hfUEFUSFMpIHtcbiAgICAgIHBhdGhzID0gcGF0aHMuY29uY2F0KENvbmZpZy5FWFRSQV9XQVRDSF9QQVRIUy5tYXAoKHApID0+IHtcbiAgICAgICAgcmV0dXJuIGpvaW4ocCwgJyoqJyk7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcGx1Z2lucy53YXRjaChwYXRocywgKGU6IGFueSkgPT4ge1xuICAgICAgY2hhbmdlRmlsZU1hbmFnZXIuYWRkRmlsZShlLnBhdGgpO1xuXG5cbiAgICAgIC8vIFJlc29sdmVzIGlzc3VlIGluIEludGVsbGlKIGFuZCBvdGhlciBJREVzL3RleHQgZWRpdG9ycyB3aGljaFxuICAgICAgLy8gc2F2ZSBtdWx0aXBsZSBmaWxlcyBhdCBvbmNlLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21nZWNoZXYvYW5ndWxhci1zZWVkL2lzc3Vlcy8xNjE1IGZvciBtb3JlIGRldGFpbHMuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBydW5TZXF1ZW5jZSh0YXNrbmFtZSwgKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZUZpbGVNYW5hZ2VyLmNsZWFyKCk7XG4gICAgICAgICAgbm90aWZ5TGl2ZVJlbG9hZChlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG4gIH07XG59XG4iXX0=
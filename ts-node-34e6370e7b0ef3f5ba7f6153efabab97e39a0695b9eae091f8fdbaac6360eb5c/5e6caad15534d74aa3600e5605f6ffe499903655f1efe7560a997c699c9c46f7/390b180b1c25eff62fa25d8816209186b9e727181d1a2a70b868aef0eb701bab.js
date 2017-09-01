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
var gulpLoadPlugins = require("gulp-load-plugins");
var merge = require("merge-stream");
var util = require("gulp-util");
var path_1 = require("path");
var config_1 = require("../../config");
var utils_1 = require("../../utils");
var typescript_task_1 = require("../typescript_task");
var plugins = gulpLoadPlugins();
var typedBuildCounter = config_1.default.TYPED_COMPILE_INTERVAL;
module.exports = (function (_super) {
    __extends(BuildJsDev, _super);
    function BuildJsDev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuildJsDev.prototype.run = function () {
        var tsProject;
        var typings = gulp.src([config_1.default.TOOLS_DIR + '/manual_typings/**/*.d.ts']);
        var src = [
            path_1.join(config_1.default.APP_SRC, '**/*.ts'),
            '!' + path_1.join(config_1.default.APP_SRC, '**/*.spec.ts'),
            '!' + path_1.join(config_1.default.APP_SRC, '**/*.e2e-spec.ts'),
            '!' + path_1.join(config_1.default.APP_SRC, "**/" + config_1.default.NG_FACTORY_FILE + ".ts")
        ];
        var projectFiles = gulp.src(src);
        var result;
        var isFullCompile = true;
        if (typedBuildCounter < config_1.default.TYPED_COMPILE_INTERVAL) {
            isFullCompile = false;
            tsProject = utils_1.makeTsProject({ isolatedModules: true });
            projectFiles = projectFiles.pipe(plugins.cached());
            util.log('Performing typeless TypeScript compile.');
        }
        else {
            tsProject = utils_1.makeTsProject();
            projectFiles = merge(typings, projectFiles);
        }
        result = projectFiles
            .pipe(plugins.plumber())
            .pipe(plugins.sourcemaps.init())
            .pipe(tsProject())
            .on('error', function () {
            typedBuildCounter = config_1.default.TYPED_COMPILE_INTERVAL;
        });
        if (isFullCompile) {
            typedBuildCounter = 0;
        }
        else {
            typedBuildCounter++;
        }
        return (result.js
            .pipe(plugins.sourcemaps.write())
            .pipe(plugins.template(new utils_1.TemplateLocalsBuilder()
            .withStringifiedSystemConfigDev()
            .build(), config_1.default.TEMPLATE_CONFIG))
            .pipe(gulp.dest(config_1.default.APP_DEST)));
    };
    return BuildJsDev;
}(typescript_task_1.TypeScriptTask));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9zZWVkL2J1aWxkLmpzLmRldi50cyIsInNvdXJjZXMiOlsiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9zZWVkL2J1aWxkLmpzLmRldi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJCQUE2QjtBQUM3QixtREFBcUQ7QUFDckQsb0NBQXNDO0FBQ3RDLGdDQUFrQztBQUNsQyw2QkFBZ0Q7QUFFaEQsdUNBQWtDO0FBQ2xDLHFDQUFtRTtBQUNuRSxzREFBb0Q7QUFFcEQsSUFBTSxPQUFPLEdBQVEsZUFBZSxFQUFFLENBQUM7QUFFdkMsSUFBSSxpQkFBaUIsR0FBRyxnQkFBTSxDQUFDLHNCQUFzQixDQUFDO0FBTXREO0lBQWtDLDhCQUFjO0lBQXZDOztJQTZEVCxDQUFDO0lBNURDLHdCQUFHLEdBQUg7UUFDRSxJQUFJLFNBQWMsQ0FBQztRQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQU0sQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksR0FBRyxHQUFHO1lBQ1IsV0FBSSxDQUFDLGdCQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztZQUMvQixHQUFHLEdBQUcsV0FBSSxDQUFDLGdCQUFNLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztZQUMxQyxHQUFHLEdBQUcsV0FBSSxDQUFDLGdCQUFNLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDO1lBQzlDLEdBQUcsR0FBRyxXQUFJLENBQUMsZ0JBQU0sQ0FBQyxPQUFPLEVBQUUsUUFBTSxnQkFBTSxDQUFDLGVBQWUsUUFBSyxDQUFDO1NBQzlELENBQUM7UUFFRixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksTUFBVyxDQUFDO1FBQ2hCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUd6QixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxnQkFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUN0RCxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLFNBQVMsR0FBRyxxQkFBYSxDQUFDLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckQsWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLFNBQVMsR0FBRyxxQkFBYSxFQUFFLENBQUM7WUFDNUIsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELE1BQU0sR0FBRyxZQUFZO2FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2pCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDWCxpQkFBaUIsR0FBRyxnQkFBTSxDQUFDLHNCQUFzQixDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBRUwsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNsQixpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04saUJBQWlCLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRUQsTUFBTSxDQUFDLENBQ0wsTUFBTSxDQUFDLEVBQUU7YUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQVFoQyxJQUFJLENBQ0gsT0FBTyxDQUFDLFFBQVEsQ0FDZCxJQUFJLDZCQUFxQixFQUFFO2FBQ3hCLDhCQUE4QixFQUFFO2FBQ2hDLEtBQUssRUFBRSxFQUNWLGdCQUFNLENBQUMsZUFBZSxDQUN2QixDQUNGO2FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTdEUSxDQUF5QixnQ0FBYyxHQTZEOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBndWxwIGZyb20gJ2d1bHAnO1xuaW1wb3J0ICogYXMgZ3VscExvYWRQbHVnaW5zIGZyb20gJ2d1bHAtbG9hZC1wbHVnaW5zJztcbmltcG9ydCAqIGFzIG1lcmdlIGZyb20gJ21lcmdlLXN0cmVhbSc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ2d1bHAtdXRpbCc7XG5pbXBvcnQgeyBqb2luIC8qLCBzZXAsIHJlbGF0aXZlKi8gfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgbWFrZVRzUHJvamVjdCwgVGVtcGxhdGVMb2NhbHNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFRhc2sgfSBmcm9tICcuLi90eXBlc2NyaXB0X3Rhc2snO1xuXG5jb25zdCBwbHVnaW5zID0gPGFueT5ndWxwTG9hZFBsdWdpbnMoKTtcblxubGV0IHR5cGVkQnVpbGRDb3VudGVyID0gQ29uZmlnLlRZUEVEX0NPTVBJTEVfSU5URVJWQUw7IC8vIEFsd2F5cyBzdGFydCB3aXRoIHRoZSB0eXBlZCBidWlsZC5cblxuLyoqXG4gKiBFeGVjdXRlcyB0aGUgYnVpbGQgcHJvY2VzcywgdHJhbnNwaWxpbmcgdGhlIFR5cGVTY3JpcHQgZmlsZXMgKGV4Y2VwdCB0aGUgc3BlYyBhbmQgZTJlLXNwZWMgZmlsZXMpIGZvciB0aGUgZGV2ZWxvcG1lbnRcbiAqIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgPSBjbGFzcyBCdWlsZEpzRGV2IGV4dGVuZHMgVHlwZVNjcmlwdFRhc2sge1xuICBydW4oKSB7XG4gICAgbGV0IHRzUHJvamVjdDogYW55O1xuICAgIGxldCB0eXBpbmdzID0gZ3VscC5zcmMoW0NvbmZpZy5UT09MU19ESVIgKyAnL21hbnVhbF90eXBpbmdzLyoqLyouZC50cyddKTtcbiAgICBsZXQgc3JjID0gW1xuICAgICAgam9pbihDb25maWcuQVBQX1NSQywgJyoqLyoudHMnKSxcbiAgICAgICchJyArIGpvaW4oQ29uZmlnLkFQUF9TUkMsICcqKi8qLnNwZWMudHMnKSxcbiAgICAgICchJyArIGpvaW4oQ29uZmlnLkFQUF9TUkMsICcqKi8qLmUyZS1zcGVjLnRzJyksXG4gICAgICAnIScgKyBqb2luKENvbmZpZy5BUFBfU1JDLCBgKiovJHtDb25maWcuTkdfRkFDVE9SWV9GSUxFfS50c2ApXG4gICAgXTtcblxuICAgIGxldCBwcm9qZWN0RmlsZXMgPSBndWxwLnNyYyhzcmMpO1xuICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICBsZXQgaXNGdWxsQ29tcGlsZSA9IHRydWU7XG5cbiAgICAvLyBPbmx5IGRvIGEgdHlwZWQgYnVpbGQgZXZlcnkgWCBidWlsZHMsIG90aGVyd2lzZSBkbyBhIHR5cGVsZXNzIGJ1aWxkIHRvIHNwZWVkIHRoaW5ncyB1cFxuICAgIGlmICh0eXBlZEJ1aWxkQ291bnRlciA8IENvbmZpZy5UWVBFRF9DT01QSUxFX0lOVEVSVkFMKSB7XG4gICAgICBpc0Z1bGxDb21waWxlID0gZmFsc2U7XG4gICAgICB0c1Byb2plY3QgPSBtYWtlVHNQcm9qZWN0KHsgaXNvbGF0ZWRNb2R1bGVzOiB0cnVlIH0pO1xuICAgICAgcHJvamVjdEZpbGVzID0gcHJvamVjdEZpbGVzLnBpcGUocGx1Z2lucy5jYWNoZWQoKSk7XG4gICAgICB1dGlsLmxvZygnUGVyZm9ybWluZyB0eXBlbGVzcyBUeXBlU2NyaXB0IGNvbXBpbGUuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRzUHJvamVjdCA9IG1ha2VUc1Byb2plY3QoKTtcbiAgICAgIHByb2plY3RGaWxlcyA9IG1lcmdlKHR5cGluZ3MsIHByb2plY3RGaWxlcyk7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gcHJvamVjdEZpbGVzXG4gICAgICAucGlwZShwbHVnaW5zLnBsdW1iZXIoKSlcbiAgICAgIC5waXBlKHBsdWdpbnMuc291cmNlbWFwcy5pbml0KCkpXG4gICAgICAucGlwZSh0c1Byb2plY3QoKSlcbiAgICAgIC5vbignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHR5cGVkQnVpbGRDb3VudGVyID0gQ29uZmlnLlRZUEVEX0NPTVBJTEVfSU5URVJWQUw7XG4gICAgICB9KTtcblxuICAgIGlmIChpc0Z1bGxDb21waWxlKSB7XG4gICAgICB0eXBlZEJ1aWxkQ291bnRlciA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVkQnVpbGRDb3VudGVyKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHJlc3VsdC5qc1xuICAgICAgICAucGlwZShwbHVnaW5zLnNvdXJjZW1hcHMud3JpdGUoKSlcbiAgICAgICAgLy8gVXNlIGZvciBkZWJ1Z2dpbmcgd2l0aCBXZWJzdG9ybS9JbnRlbGxpSlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWdlY2hldi9hbmd1bGFyLXNlZWQvaXNzdWVzLzEyMjBcbiAgICAgICAgLy8gICAgLnBpcGUocGx1Z2lucy5zb3VyY2VtYXBzLndyaXRlKCcuJywge1xuICAgICAgICAvLyAgICAgIGluY2x1ZGVDb250ZW50OiBmYWxzZSxcbiAgICAgICAgLy8gICAgICBzb3VyY2VSb290OiAoZmlsZTogYW55KSA9PlxuICAgICAgICAvLyAgICAgICAgcmVsYXRpdmUoZmlsZS5wYXRoLCBDb25maWcuUFJPSkVDVF9ST09UICsgJy8nICsgQ29uZmlnLkFQUF9TUkMpLnJlcGxhY2Uoc2VwLCAnLycpICsgJy8nICsgQ29uZmlnLkFQUF9TUkNcbiAgICAgICAgLy8gICAgfSkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHBsdWdpbnMudGVtcGxhdGUoXG4gICAgICAgICAgICBuZXcgVGVtcGxhdGVMb2NhbHNCdWlsZGVyKClcbiAgICAgICAgICAgICAgLndpdGhTdHJpbmdpZmllZFN5c3RlbUNvbmZpZ0RldigpXG4gICAgICAgICAgICAgIC5idWlsZCgpLFxuICAgICAgICAgICAgQ29uZmlnLlRFTVBMQVRFX0NPTkZJR1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAucGlwZShndWxwLmRlc3QoQ29uZmlnLkFQUF9ERVNUKSlcbiAgICApO1xuICB9XG59O1xuIl19
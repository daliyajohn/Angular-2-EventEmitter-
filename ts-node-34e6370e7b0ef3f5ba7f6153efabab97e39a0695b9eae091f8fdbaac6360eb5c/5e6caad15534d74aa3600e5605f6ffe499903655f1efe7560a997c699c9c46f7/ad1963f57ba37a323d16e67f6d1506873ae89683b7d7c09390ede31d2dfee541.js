"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulpLoadPlugins = require("gulp-load-plugins");
var path_1 = require("path");
var config_1 = require("../../config");
var plugins = gulpLoadPlugins();
var tsProjects = {};
function makeTsProject(options, pathToTsConfig, projectName) {
    if (options === void 0) { options = {}; }
    if (pathToTsConfig === void 0) { pathToTsConfig = config_1.default.APP_SRC; }
    if (projectName === void 0) { projectName = config_1.default.APP_PROJECTNAME; }
    var optionsHash = JSON.stringify(options);
    if (!tsProjects[optionsHash]) {
        var config = Object.assign({
            typescript: require('typescript')
        }, options);
        tsProjects[optionsHash] =
            plugins.typescript.createProject(path_1.join(pathToTsConfig, projectName), config);
    }
    return tsProjects[optionsHash];
}
exports.makeTsProject = makeTsProject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy91dGlscy9zZWVkL3RzcHJvamVjdC50cyIsInNvdXJjZXMiOlsiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy91dGlscy9zZWVkL3RzcHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFxRDtBQUNyRCw2QkFBNEI7QUFHNUIsdUNBQWtDO0FBRWxDLElBQU0sT0FBTyxHQUFRLGVBQWUsRUFBRSxDQUFDO0FBRXZDLElBQUksVUFBVSxHQUFRLEVBQUUsQ0FBQztBQU16Qix1QkFBOEIsT0FBeUIsRUFBRSxjQUF1QyxFQUFFLFdBQW9DO0lBQXhHLHdCQUFBLEVBQUEsWUFBeUI7SUFBRSwrQkFBQSxFQUFBLGlCQUF5QixnQkFBTSxDQUFDLE9BQU87SUFBRSw0QkFBQSxFQUFBLGNBQWMsZ0JBQU0sQ0FBQyxlQUFlO0lBQ3BJLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDekIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDbEMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNaLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDckIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBVkQsc0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBndWxwTG9hZFBsdWdpbnMgZnJvbSAnZ3VscC1sb2FkLXBsdWdpbnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHRzID0gcmVxdWlyZSgnZ3VscC10eXBlc2NyaXB0L3JlbGVhc2UvbWFpbicpO1xuXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmNvbnN0IHBsdWdpbnMgPSA8YW55Pmd1bHBMb2FkUGx1Z2lucygpO1xuXG5sZXQgdHNQcm9qZWN0czogYW55ID0ge307XG5cbi8qKlxuICogQ3JlYXRlcyBhIFR5cGVTY3JpcHQgcHJvamVjdCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zIHVzaW5nIHRoZSBndWxwIHR5cGVzY3JpcHQgcGx1Z2luLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgYWRkaXRpb25hbCBvcHRpb25zIGZvciB0aGUgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVRzUHJvamVjdChvcHRpb25zOiB0cy5TZXR0aW5ncyA9IHt9LCBwYXRoVG9Uc0NvbmZpZzogc3RyaW5nID0gQ29uZmlnLkFQUF9TUkMsIHByb2plY3ROYW1lID0gQ29uZmlnLkFQUF9QUk9KRUNUTkFNRSkge1xuICBsZXQgb3B0aW9uc0hhc2ggPSBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgaWYgKCF0c1Byb2plY3RzW29wdGlvbnNIYXNoXSkge1xuICAgIGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHR5cGVzY3JpcHQ6IHJlcXVpcmUoJ3R5cGVzY3JpcHQnKVxuICAgIH0sIG9wdGlvbnMpO1xuICAgIHRzUHJvamVjdHNbb3B0aW9uc0hhc2hdID1cbiAgICAgIHBsdWdpbnMudHlwZXNjcmlwdC5jcmVhdGVQcm9qZWN0KGpvaW4ocGF0aFRvVHNDb25maWcsIHByb2plY3ROYW1lKSwgY29uZmlnKTtcbiAgfVxuICByZXR1cm4gdHNQcm9qZWN0c1tvcHRpb25zSGFzaF07XG59XG4iXX0=
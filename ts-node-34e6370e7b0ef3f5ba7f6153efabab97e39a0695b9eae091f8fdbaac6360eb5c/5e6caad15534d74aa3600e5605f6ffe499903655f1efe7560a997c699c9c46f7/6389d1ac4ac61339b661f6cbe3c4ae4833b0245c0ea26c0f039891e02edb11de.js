"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("gulp-util");
var path_1 = require("path");
var rimraf = require("rimraf");
var config_1 = require("../../config");
function clean(paths) {
    return function (done) {
        var pathsToClean;
        if (paths instanceof Array) {
            pathsToClean = paths;
        }
        else {
            pathsToClean = [paths];
        }
        var promises = pathsToClean.map(function (p) {
            return new Promise(function (resolve) {
                var relativePath = path_1.relative(config_1.default.PROJECT_ROOT, p);
                if (relativePath.startsWith('..')) {
                    util.log(util.colors.bgRed.white("Cannot remove files outside the project root but tried \"" + path_1.normalize(p) + "\""));
                    process.exit(1);
                }
                else {
                    rimraf(p, function (e) {
                        if (e) {
                            util.log('Clean task failed with', e);
                        }
                        else {
                            util.log('Deleted', util.colors.yellow(p || '-'));
                        }
                        resolve();
                    });
                }
            });
        });
        Promise.all(promises).then(function () { return (done || (function () { return 1; }))(); })
            .catch(function (e) { return util.log(util.colors.red("Error while removing files \"" + [].concat(paths).join(', ') + "\", " + e)); });
    };
}
exports.clean = clean;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy91dGlscy9zZWVkL2NsZWFuLnRzIiwic291cmNlcyI6WyIvbWVkaWEvZGFsaXlhL0MyNzJEN0ZFNzJEN0Y1NUYvR2l0aHViIHByb2plY3RzL0FuZ3VsYXItMi1FdmVudEVtaXR0ZXItL3Rvb2xzL3V0aWxzL3NlZWQvY2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBa0M7QUFDbEMsNkJBQTJDO0FBQzNDLCtCQUFpQztBQUVqQyx1Q0FBa0M7QUFNbEMsZUFBc0IsS0FBc0I7SUFDMUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtRQUNULElBQUksWUFBc0IsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQixZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLFlBQVksR0FBRyxDQUFTLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUN4QixJQUFNLFlBQVksR0FBVyxlQUFRLENBQUMsZ0JBQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyw4REFBMkQsZ0JBQVMsQ0FBQyxDQUFDLENBQUMsT0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDOUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQUEsQ0FBQzt3QkFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELENBQUM7d0JBQ0QsT0FBTyxFQUFFLENBQUM7b0JBQ1osQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFNLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQzthQUNwRCxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGtDQUErQixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBTSxDQUFHLENBQUMsQ0FBQyxFQUE5RixDQUE4RixDQUFDLENBQUM7SUFDaEgsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQTlCRCxzQkE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJ2d1bHAtdXRpbCc7XG5pbXBvcnQgeyByZWxhdGl2ZSwgbm9ybWFsaXplIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyByaW1yYWYgZnJvbSAncmltcmFmJztcblxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuXG4vKipcbiAqIENsZWFucyB0aGUgZ2l2ZW4gcGF0aChzKSB1c2luZyBgcmltcmFmYC5cbiAqIEBwYXJhbSB7c3RyaW5nIG9yIHN0cmluZ1tdfSBwYXRocyAtIFRoZSBwYXRoIG9yIGxpc3Qgb2YgcGF0aHMgdG8gY2xlYW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbihwYXRoczogc3RyaW5nfHN0cmluZ1tdKTogKGRvbmU6ICgpID0+IHZvaWQpID0+IHZvaWQge1xuICByZXR1cm4gZG9uZSA9PiB7XG4gICAgbGV0IHBhdGhzVG9DbGVhbjogc3RyaW5nW107XG4gICAgaWYgKHBhdGhzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHBhdGhzVG9DbGVhbiA9IHBhdGhzO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoc1RvQ2xlYW4gPSBbPHN0cmluZz5wYXRoc107XG4gICAgfVxuXG4gICAgbGV0IHByb21pc2VzID0gcGF0aHNUb0NsZWFuLm1hcChwID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoOiBzdHJpbmcgPSByZWxhdGl2ZShDb25maWcuUFJPSkVDVF9ST09ULCBwKTtcbiAgICAgICAgaWYgKHJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKCcuLicpKSB7XG4gICAgICAgICAgdXRpbC5sb2codXRpbC5jb2xvcnMuYmdSZWQud2hpdGUoYENhbm5vdCByZW1vdmUgZmlsZXMgb3V0c2lkZSB0aGUgcHJvamVjdCByb290IGJ1dCB0cmllZCBcIiR7bm9ybWFsaXplKHApfVwiYCkpO1xuICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByaW1yYWYocCwgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICB1dGlsLmxvZygnQ2xlYW4gdGFzayBmYWlsZWQgd2l0aCcsIGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXRpbC5sb2coJ0RlbGV0ZWQnLCB1dGlsLmNvbG9ycy55ZWxsb3cocCB8fCAnLScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4gKGRvbmUgfHwgKCgpID0+IDEpKSgpKVxuICAgICAgLmNhdGNoKGUgPT4gdXRpbC5sb2codXRpbC5jb2xvcnMucmVkKGBFcnJvciB3aGlsZSByZW1vdmluZyBmaWxlcyBcIiR7W10uY29uY2F0KHBhdGhzKS5qb2luKCcsICcpfVwiLCAke2V9YCkpKTtcbiAgfTtcbn1cblxuIl19
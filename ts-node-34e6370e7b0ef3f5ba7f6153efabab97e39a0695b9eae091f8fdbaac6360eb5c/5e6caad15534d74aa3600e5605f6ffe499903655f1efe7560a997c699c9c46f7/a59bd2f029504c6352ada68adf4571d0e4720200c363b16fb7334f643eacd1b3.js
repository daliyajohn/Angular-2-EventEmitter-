"use strict";
var gulp = require("gulp");
var gulp_1 = require("@angular/service-worker/build/gulp");
var config_1 = require("../../config");
var path_1 = require("path");
module.exports = function () {
    return gulp.src([path_1.join(config_1.default.APP_SRC, 'ngsw-manifest.json')])
        .pipe(gulp_1.gulpAddStaticFiles(gulp.src([
        path_1.join(config_1.default.APP_DEST, '**', '*'),
        '!' + path_1.join(config_1.default.APP_DEST, 'ngsw-manifest.json')
    ], { nodir: true })))
        .pipe(gulp.dest(config_1.default.APP_DEST));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9zZWVkL3N3Lm1hbmlmZXN0LnN0YXRpYy50cyIsInNvdXJjZXMiOlsiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9zZWVkL3N3Lm1hbmlmZXN0LnN0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkJBQTZCO0FBQzdCLDJEQUF3RTtBQUN4RSx1Q0FBa0M7QUFDbEMsNkJBQTRCO0FBRTVCLGlCQUFTO0lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFJLENBQUMsZ0JBQU0sQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzFELElBQUksQ0FBQyx5QkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2hDLFdBQUksQ0FBQyxnQkFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQ2hDLEdBQUcsR0FBRyxXQUFJLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUM7S0FDbEQsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGd1bHAgZnJvbSAnZ3VscCc7XG5pbXBvcnQgeyBndWxwQWRkU3RhdGljRmlsZXMgfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlci9idWlsZC9ndWxwJztcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuZXhwb3J0ID0gKCkgPT4ge1xuICByZXR1cm4gZ3VscC5zcmMoW2pvaW4oQ29uZmlnLkFQUF9TUkMsICduZ3N3LW1hbmlmZXN0Lmpzb24nKV0pXG4gICAgLnBpcGUoZ3VscEFkZFN0YXRpY0ZpbGVzKGd1bHAuc3JjKFtcbiAgICAgIGpvaW4oQ29uZmlnLkFQUF9ERVNULCAnKionLCAnKicpLFxuICAgICAgJyEnICsgam9pbihDb25maWcuQVBQX0RFU1QsICduZ3N3LW1hbmlmZXN0Lmpzb24nKVxuICAgIF0sIHsgbm9kaXI6IHRydWUgfSkpKVxuICAgIC5waXBlKGd1bHAuZGVzdChDb25maWcuQVBQX0RFU1QpKTtcbn07XG4iXX0=
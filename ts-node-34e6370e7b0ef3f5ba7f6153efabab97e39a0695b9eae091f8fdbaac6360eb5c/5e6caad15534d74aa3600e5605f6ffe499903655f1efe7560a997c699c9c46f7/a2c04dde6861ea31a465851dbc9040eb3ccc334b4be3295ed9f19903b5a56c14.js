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
var fs_1 = require("fs");
var runSequence = require("run-sequence");
var gulp = require("gulp");
var util = require("gulp-util");
var isstream = require("isstream");
var path_1 = require("path");
var tildify = require("tildify");
var code_change_tools_1 = require("./code_change_tools");
var task_1 = require("../../tasks/task");
function loadTasks(path) {
    util.log('Loading tasks folder', util.colors.yellow(path));
    readDir(path, function (taskname) { return registerTask(taskname, path); });
}
exports.loadTasks = loadTasks;
function validateTasks(tasks) {
    return Object.keys(tasks)
        .map(function (taskName) {
        if (!tasks[taskName] ||
            !Array.isArray(tasks[taskName]) ||
            tasks[taskName].some(function (t) { return typeof t !== 'string'; })) {
            return taskName;
        }
        return null;
    }).filter(function (taskName) { return !!taskName; });
}
function registerTasks(tasks) {
    Object.keys(tasks)
        .forEach(function (t) {
        gulp.task(t, function (done) { return runSequence.apply(null, tasks[t].concat([done])); });
    });
}
function getInvalidTaskErrorMessage(invalid, file) {
    var error = "Invalid configuration in \"" + file + ". ";
    if (invalid.length === 1) {
        error += 'Task';
    }
    else {
        error += 'Tasks';
    }
    error += " " + invalid.map(function (t) { return "\"" + t + "\""; }).join(', ') + " do not have proper format.";
    return error;
}
function loadCompositeTasks(seedTasksFile, projectTasksFile) {
    var seedTasks;
    var projectTasks;
    try {
        seedTasks = JSON.parse(fs_1.readFileSync(seedTasksFile).toString());
        projectTasks = JSON.parse(fs_1.readFileSync(projectTasksFile).toString());
    }
    catch (e) {
        util.log('Cannot load the task configuration files: ' + e.toString());
        return;
    }
    [[seedTasks, seedTasksFile], [projectTasks, projectTasksFile]]
        .forEach(function (_a) {
        var tasks = _a[0], file = _a[1];
        var invalid = validateTasks(tasks);
        if (invalid.length) {
            var errorMessage = getInvalidTaskErrorMessage(invalid, file);
            util.log(util.colors.red(errorMessage));
            process.exit(1);
        }
    });
    var mergedTasks = Object.assign({}, seedTasks, projectTasks);
    registerTasks(mergedTasks);
}
exports.loadCompositeTasks = loadCompositeTasks;
function normalizeTask(task, taskName) {
    if (task instanceof task_1.Task) {
        return task;
    }
    if (task.prototype && task.prototype instanceof task_1.Task) {
        return new task();
    }
    if (typeof task === 'function') {
        return new (function (_super) {
            __extends(AnonTask, _super);
            function AnonTask() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AnonTask.prototype.run = function (done) {
                if (task.length > 0) {
                    return task(done);
                }
                var taskReturnedValue = task();
                if (isstream(taskReturnedValue)) {
                    return taskReturnedValue;
                }
                done();
            };
            return AnonTask;
        }(task_1.Task));
    }
    throw new Error(taskName + ' should be instance of the class ' +
        'Task, a function or a class which extends Task.');
}
function registerTask(taskname, path) {
    var TASK = path_1.join(path, taskname);
    util.log('Registering task', util.colors.yellow(tildify(TASK)));
    gulp.task(taskname, function (done) {
        var task = normalizeTask(require(TASK), TASK);
        if (code_change_tools_1.changeFileManager.pristine || task.shallRun(code_change_tools_1.changeFileManager.lastChangedFiles)) {
            var result = task.run(done, code_change_tools_1.changeFileManager.lastChangedFiles);
            if (result && typeof result.catch === 'function') {
                result.catch(function (e) {
                    util.log("Error while running \"" + TASK + "\"", e);
                });
            }
            return result;
        }
        else {
            done();
        }
    });
}
function readDir(root, cb) {
    if (!fs_1.existsSync(root)) {
        return;
    }
    walk(root);
    function walk(path) {
        var files = fs_1.readdirSync(path);
        for (var i = 0; i < files.length; i += 1) {
            var file = files[i];
            var curPath = path_1.join(path, file);
            if (fs_1.lstatSync(curPath).isFile() && /\.ts$/.test(file)) {
                var taskname = file.replace(/\.ts$/, '');
                cb(taskname);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy91dGlscy9zZWVkL3Rhc2tzX3Rvb2xzLnRzIiwic291cmNlcyI6WyIvbWVkaWEvZGFsaXlhL0MyNzJEN0ZFNzJEN0Y1NUYvR2l0aHViIHByb2plY3RzL0FuZ3VsYXItMi1FdmVudEVtaXR0ZXItL3Rvb2xzL3V0aWxzL3NlZWQvdGFza3NfdG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEseUJBQXNFO0FBQ3RFLDBDQUE0QztBQUM1QywyQkFBNkI7QUFDN0IsZ0NBQWtDO0FBQ2xDLG1DQUFxQztBQUNyQyw2QkFBNEI7QUFDNUIsaUNBQW1DO0FBRW5DLHlEQUF3RDtBQUN4RCx5Q0FBd0M7QUFNeEMsbUJBQTBCLElBQVk7SUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQSxRQUFRLElBQUksT0FBQSxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUhELDhCQUdDO0FBRUQsdUJBQXVCLEtBQVU7SUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3RCLEdBQUcsQ0FBQyxVQUFDLFFBQWdCO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNuQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQXJCLENB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QUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3pDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLE9BQU8sR0FBRyxXQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLGNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGlzdHNTeW5jLCBsc3RhdFN5bmMsIHJlYWRGaWxlU3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBydW5TZXF1ZW5jZSBmcm9tICdydW4tc2VxdWVuY2UnO1xuaW1wb3J0ICogYXMgZ3VscCBmcm9tICdndWxwJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnZ3VscC11dGlsJztcbmltcG9ydCAqIGFzIGlzc3RyZWFtIGZyb20gJ2lzc3RyZWFtJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIHRpbGRpZnkgZnJvbSAndGlsZGlmeSc7XG5cbmltcG9ydCB7IGNoYW5nZUZpbGVNYW5hZ2VyIH0gZnJvbSAnLi9jb2RlX2NoYW5nZV90b29scyc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vLi4vdGFza3MvdGFzayc7XG5cbi8qKlxuICogTG9hZHMgdGhlIHRhc2tzIHdpdGhpbiB0aGUgZ2l2ZW4gcGF0aC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggdG8gbG9hZCB0aGUgdGFza3MgZnJvbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUYXNrcyhwYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgdXRpbC5sb2coJ0xvYWRpbmcgdGFza3MgZm9sZGVyJywgdXRpbC5jb2xvcnMueWVsbG93KHBhdGgpKTtcbiAgcmVhZERpcihwYXRoLCB0YXNrbmFtZSA9PiByZWdpc3RlclRhc2sodGFza25hbWUsIHBhdGgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUYXNrcyh0YXNrczogYW55KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0YXNrcylcbiAgICAubWFwKCh0YXNrTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgaWYgKCF0YXNrc1t0YXNrTmFtZV0gfHxcbiAgICAgICAgIUFycmF5LmlzQXJyYXkodGFza3NbdGFza05hbWVdKSB8fFxuICAgICAgICB0YXNrc1t0YXNrTmFtZV0uc29tZSgodDogYW55KSA9PiB0eXBlb2YgdCAhPT0gJ3N0cmluZycpKSB7XG4gICAgICAgICByZXR1cm4gdGFza05hbWU7XG4gICAgICAgfVxuICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pLmZpbHRlcigodGFza05hbWU6IHN0cmluZykgPT4gISF0YXNrTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVGFza3ModGFza3M6IGFueSkge1xuICBPYmplY3Qua2V5cyh0YXNrcylcbiAgICAuZm9yRWFjaCgodDogc3RyaW5nKSA9PiB7XG4gICAgICBndWxwLnRhc2sodCwgKGRvbmU6IGFueSkgPT4gcnVuU2VxdWVuY2UuYXBwbHkobnVsbCwgWy4uLnRhc2tzW3RdLCBkb25lXSkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbnZhbGlkVGFza0Vycm9yTWVzc2FnZShpbnZhbGlkOiBzdHJpbmdbXSwgZmlsZTogc3RyaW5nKSB7XG4gIGxldCBlcnJvciA9IGBJbnZhbGlkIGNvbmZpZ3VyYXRpb24gaW4gXCIke2ZpbGV9LiBgO1xuICBpZiAoaW52YWxpZC5sZW5ndGggPT09IDEpIHtcbiAgICBlcnJvciArPSAnVGFzayc7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3IgKz0gJ1Rhc2tzJztcbiAgfVxuICBlcnJvciArPSBgICR7aW52YWxpZC5tYXAoKHQ6IGFueSkgPT4gYFwiJHt0fVwiYCkuam9pbignLCAnKX0gZG8gbm90IGhhdmUgcHJvcGVyIGZvcm1hdC5gO1xuICByZXR1cm4gZXJyb3I7XG59XG5cbi8qKlxuICogRGVmaW5lcyBjb21wbGV4LCBjb21wb3NpdGUgdGFza3MuIFRoZSBjb21wb3NpdGUgdGFza3NcbiAqIGFyZSBzaW1wbHkgYSBjb21wb3NpdGlvbiBvZiBhbm90aGVyIHRhc2tzLlxuICogRWFjaCBjb21wb3NpdGUgdGFza3MgaGFzIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICpcbiAqIFwiY29tcG9zaXRlX3Rhc2tcIjogW1widGFzazFcIiwgXCJ0YXNrMlwiXVxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCB0aGUgZm9ybWF0IHNob3VsZCBiZSBmbGF0LCB3aXRoIG5vIG5lc3RpbmcuXG4gKlxuICogVGhlIGV4aXN0aW5nIGNvbXBvc2l0ZSB0YXNrcyBhcmUgZGVmaW5lZCBpblxuICogXCJ0b29scy9jb25maWcvc2VlZC50YXNrcy5qc29uXCIgYW5kIGNhbiBiZSBvdmVycmlkZW4gYnlcbiAqIGVkaXRpbmcgdGhlIGNvbXBvc2l0ZSB0YXNrcyBwcm9qZWN0IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogQnkgZGVmYXVsdCBpdCBpcyBsb2NhdGVkIGluOiBcInRvb2xzL2NvbmZpZy9wcm9qZWN0LnRhc2tzLmpzb25cIi5cbiAqXG4gKiBPdmVycmlkZSBleGlzdGluZyB0YXNrcyBieSBzaW1wbHkgcHJvdmlkaW5nIGEgdGFza1xuICogbmFtZSBhbmQgYSBsaXN0IG9mIHRhc2tzIHRoYXQgdGhpcyB0YXNrIGhvdWxkIGV4ZWN1dGUuXG4gKlxuICogRm9yIGluc3RhbmNlOlxuICogYGBgXG4gKiB7XG4gKiAgXCJ0ZXN0XCI6IFtcbiAqICAgIFwiYnVpbGQudGVzdFwiLFxuICogICAgXCJtb2NoYS5ydW5cIlxuICogIF1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGUgdGFza3MgZG8gbm90IHN1cHBvcnQgbmVzdGVkIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29tcG9zaXRlVGFza3Moc2VlZFRhc2tzRmlsZTogc3RyaW5nLCBwcm9qZWN0VGFza3NGaWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgbGV0IHNlZWRUYXNrczogYW55O1xuICBsZXQgcHJvamVjdFRhc2tzOiBhbnk7XG4gIHRyeSB7XG4gICAgc2VlZFRhc2tzID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMoc2VlZFRhc2tzRmlsZSkudG9TdHJpbmcoKSk7XG4gICAgcHJvamVjdFRhc2tzID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocHJvamVjdFRhc2tzRmlsZSkudG9TdHJpbmcoKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB1dGlsLmxvZygnQ2Fubm90IGxvYWQgdGhlIHRhc2sgY29uZmlndXJhdGlvbiBmaWxlczogJyArIGUudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFtbc2VlZFRhc2tzLCBzZWVkVGFza3NGaWxlXSwgW3Byb2plY3RUYXNrcywgcHJvamVjdFRhc2tzRmlsZV1dXG4gICAgLmZvckVhY2goKFt0YXNrcywgZmlsZV06IFtzdHJpbmcsIHN0cmluZ10pID0+IHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSB2YWxpZGF0ZVRhc2tzKHRhc2tzKTtcbiAgICAgIGlmIChpbnZhbGlkLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBnZXRJbnZhbGlkVGFza0Vycm9yTWVzc2FnZShpbnZhbGlkLCBmaWxlKTtcbiAgICAgICAgdXRpbC5sb2codXRpbC5jb2xvcnMucmVkKGVycm9yTWVzc2FnZSkpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIGNvbnN0IG1lcmdlZFRhc2tzID0gT2JqZWN0LmFzc2lnbih7fSwgc2VlZFRhc2tzLCBwcm9qZWN0VGFza3MpO1xuICByZWdpc3RlclRhc2tzKG1lcmdlZFRhc2tzKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVGFzayh0YXNrOiBhbnksIHRhc2tOYW1lOiBzdHJpbmcpIHtcbiAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrKSB7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgaWYgKHRhc2sucHJvdG90eXBlICYmIHRhc2sucHJvdG90eXBlIGluc3RhbmNlb2YgVGFzaykge1xuICAgIHJldHVybiBuZXcgdGFzaygpO1xuICB9XG4gIGlmICh0eXBlb2YgdGFzayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgY2xhc3MgQW5vblRhc2sgZXh0ZW5kcyBUYXNrIHtcbiAgICAgIHJ1bihkb25lOiBhbnkpIHtcbiAgICAgICAgaWYgKHRhc2subGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0YXNrKGRvbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFza1JldHVybmVkVmFsdWUgPSB0YXNrKCk7XG4gICAgICAgIGlmIChpc3N0cmVhbSh0YXNrUmV0dXJuZWRWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFza1JldHVybmVkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IodGFza05hbWUgKyAnIHNob3VsZCBiZSBpbnN0YW5jZSBvZiB0aGUgY2xhc3MgJyArXG4gICAgJ1Rhc2ssIGEgZnVuY3Rpb24gb3IgYSBjbGFzcyB3aGljaCBleHRlbmRzIFRhc2suJyk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIHRoZSB0YXNrIGJ5IHRoZSBnaXZlbiB0YXNrbmFtZSBhbmQgcGF0aC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YXNrbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB0YXNrLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggICAgIC0gVGhlIHBhdGggb2YgdGhlIHRhc2suXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyVGFzayh0YXNrbmFtZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgVEFTSyA9IGpvaW4ocGF0aCwgdGFza25hbWUpO1xuICB1dGlsLmxvZygnUmVnaXN0ZXJpbmcgdGFzaycsIHV0aWwuY29sb3JzLnllbGxvdyh0aWxkaWZ5KFRBU0spKSk7XG5cbiAgZ3VscC50YXNrKHRhc2tuYW1lLCAoZG9uZTogYW55KSA9PiB7XG4gICAgY29uc3QgdGFzayA9IG5vcm1hbGl6ZVRhc2socmVxdWlyZShUQVNLKSwgVEFTSyk7XG5cbiAgICBpZiAoY2hhbmdlRmlsZU1hbmFnZXIucHJpc3RpbmUgfHwgdGFzay5zaGFsbFJ1bihjaGFuZ2VGaWxlTWFuYWdlci5sYXN0Q2hhbmdlZEZpbGVzKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGFzay5ydW4oZG9uZSwgY2hhbmdlRmlsZU1hbmFnZXIubGFzdENoYW5nZWRGaWxlcyk7XG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQuY2F0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0LmNhdGNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgICB1dGlsLmxvZyhgRXJyb3Igd2hpbGUgcnVubmluZyBcIiR7VEFTS31cImAsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlYWRzIHRoZSBmaWxlcyBpbiB0aGUgZ2l2ZW4gcm9vdCBkaXJlY3RvcnkgYW5kIGV4ZWN1dGVzIHRoZSBnaXZlbiBjYWxsYmFjayBwZXIgZm91bmQgZmlsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIHJvb3QgLSBUaGUgcm9vdCBkaXJlY3RvcnkgdG8gcmVhZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiICAgLSBUaGUgY2FsbGJhY2sgdG8gZXhlY3V0ZSBwZXIgZm91bmQgZmlsZS5cbiAqL1xuZnVuY3Rpb24gcmVhZERpcihyb290OiBzdHJpbmcsIGNiOiAodGFza25hbWU6IHN0cmluZykgPT4gdm9pZCkge1xuICBpZiAoIWV4aXN0c1N5bmMocm9vdCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB3YWxrKHJvb3QpO1xuXG4gIGZ1bmN0aW9uIHdhbGsocGF0aDogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVzID0gcmVhZGRpclN5bmMocGF0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgIGxldCBjdXJQYXRoID0gam9pbihwYXRoLCBmaWxlKTtcbiAgICAgIGlmIChsc3RhdFN5bmMoY3VyUGF0aCkuaXNGaWxlKCkgJiYgL1xcLnRzJC8udGVzdChmaWxlKSkge1xuICAgICAgICBsZXQgdGFza25hbWUgPSBmaWxlLnJlcGxhY2UoL1xcLnRzJC8sICcnKTtcbiAgICAgICAgY2IodGFza25hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
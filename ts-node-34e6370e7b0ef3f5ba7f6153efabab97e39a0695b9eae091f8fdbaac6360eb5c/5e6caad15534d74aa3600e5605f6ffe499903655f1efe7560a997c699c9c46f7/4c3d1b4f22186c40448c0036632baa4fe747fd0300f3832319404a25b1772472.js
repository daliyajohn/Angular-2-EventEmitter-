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
var task_1 = require("./task");
var AssetsTask = (function (_super) {
    __extends(AssetsTask, _super);
    function AssetsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssetsTask.prototype.shallRun = function (files) {
        return files.reduce(function (a, f) {
            return a || (!f.endsWith('.css') && !f.endsWith('.sass') &&
                !f.endsWith('.scss') && !f.endsWith('.ts'));
        }, false);
    };
    return AssetsTask;
}(task_1.Task));
exports.AssetsTask = AssetsTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9hc3NldHNfdGFzay50cyIsInNvdXJjZXMiOlsiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9hc3NldHNfdGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFFOUI7SUFBeUMsOEJBQUk7SUFBN0M7O0lBT0EsQ0FBQztJQU5DLDZCQUFRLEdBQVIsVUFBUyxLQUFlO1FBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQVBELENBQXlDLFdBQUksR0FPNUM7QUFQcUIsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFzc2V0c1Rhc2sgZXh0ZW5kcyBUYXNrIHtcbiAgc2hhbGxSdW4oZmlsZXM6IFN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIGZpbGVzLnJlZHVjZSgoYSwgZikgPT4ge1xuICAgICAgcmV0dXJuIGEgfHwgKCFmLmVuZHNXaXRoKCcuY3NzJykgJiYgIWYuZW5kc1dpdGgoJy5zYXNzJykgJiZcbiAgICAgICAhZi5lbmRzV2l0aCgnLnNjc3MnKSAmJiAhZi5lbmRzV2l0aCgnLnRzJykpO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuIl19
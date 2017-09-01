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
var config_1 = require("../config");
var CssTask = (function (_super) {
    __extends(CssTask, _super);
    function CssTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssTask.prototype.shallRun = function (files) {
        return config_1.default.ENABLE_SCSS || files.some(function (f) {
            return f.endsWith('.css') || f.endsWith('.sass') || f.endsWith('.scss');
        });
    };
    return CssTask;
}(task_1.Task));
exports.CssTask = CssTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9jc3NfdGFzay50cyIsInNvdXJjZXMiOlsiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy9jc3NfdGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsb0NBQStCO0FBRS9CO0lBQXNDLDJCQUFJO0lBQTFDOztJQU9BLENBQUM7SUFMQywwQkFBUSxHQUFSLFVBQVMsS0FBZTtRQUN0QixNQUFNLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDdkMsT0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFSCxjQUFDO0FBQUQsQ0FBQyxBQVBELENBQXNDLFdBQUksR0FPekM7QUFQcUIsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENzc1Rhc2sgZXh0ZW5kcyBUYXNrIHtcblxuICBzaGFsbFJ1bihmaWxlczogU3RyaW5nW10pIHtcbiAgICByZXR1cm4gQ29uZmlnLkVOQUJMRV9TQ1NTIHx8IGZpbGVzLnNvbWUoZiA9PlxuICAgICAgZi5lbmRzV2l0aCgnLmNzcycpIHx8IGYuZW5kc1dpdGgoJy5zYXNzJykgfHwgZi5lbmRzV2l0aCgnLnNjc3MnKSk7XG4gIH1cblxufVxuIl19
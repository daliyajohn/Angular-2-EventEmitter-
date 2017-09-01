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
var TypeScriptTask = (function (_super) {
    __extends(TypeScriptTask, _super);
    function TypeScriptTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeScriptTask.prototype.shallRun = function (files) {
        return files.reduce(function (a, f) {
            return a || f.endsWith('.ts');
        }, false);
    };
    return TypeScriptTask;
}(task_1.Task));
exports.TypeScriptTask = TypeScriptTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy90YXNrcy90eXBlc2NyaXB0X3Rhc2sudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS9kYWxpeWEvQzI3MkQ3RkU3MkQ3RjU1Ri9HaXRodWIgcHJvamVjdHMvQW5ndWxhci0yLUV2ZW50RW1pdHRlci0vdG9vbHMvdGFza3MvdHlwZXNjcmlwdF90YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUU5QjtJQUE2QyxrQ0FBSTtJQUFqRDs7SUFNQSxDQUFDO0lBTEMsaUNBQVEsR0FBUixVQUFTLEtBQWU7UUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTZDLFdBQUksR0FNaEQ7QUFOcUIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFR5cGVTY3JpcHRUYXNrIGV4dGVuZHMgVGFzayB7XG4gIHNoYWxsUnVuKGZpbGVzOiBTdHJpbmdbXSkge1xuICAgIHJldHVybiBmaWxlcy5yZWR1Y2UoKGEsIGYpID0+IHtcbiAgICAgIHJldHVybiBhIHx8IGYuZW5kc1dpdGgoJy50cycpO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuIl19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var browserSync = require("browser-sync");
var config_1 = require("../../config");
var ChangeFileManager = (function () {
    function ChangeFileManager() {
        this._files = [];
        this._pristine = true;
    }
    Object.defineProperty(ChangeFileManager.prototype, "lastChangedFiles", {
        get: function () {
            return this._files.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeFileManager.prototype, "pristine", {
        get: function () {
            return this._pristine;
        },
        enumerable: true,
        configurable: true
    });
    ChangeFileManager.prototype.addFile = function (file) {
        this._pristine = false;
        this._files.push(file);
    };
    ChangeFileManager.prototype.addFiles = function (files) {
        var _this = this;
        files.forEach(function (f) { return _this.addFile(f); });
    };
    ChangeFileManager.prototype.clear = function () {
        this._files = [];
    };
    return ChangeFileManager;
}());
exports.changeFileManager = new ChangeFileManager();
var runServer = function () {
    browserSync.init(config_1.default.getPluginConfig('browser-sync'));
};
var listen = function () {
    runServer();
};
exports.listen = listen;
var changed = function (files) {
    if (!(files instanceof Array)) {
        files = [files];
    }
    browserSync.reload(files);
};
exports.changed = changed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy91dGlscy9zZWVkL2NvZGVfY2hhbmdlX3Rvb2xzLnRzIiwic291cmNlcyI6WyIvbWVkaWEvZGFsaXlhL0MyNzJEN0ZFNzJEN0Y1NUYvR2l0aHViIHByb2plY3RzL0FuZ3VsYXItMi1FdmVudEVtaXR0ZXItL3Rvb2xzL3V0aWxzL3NlZWQvY29kZV9jaGFuZ2VfdG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBNEM7QUFHNUMsdUNBQWtDO0FBRWxDO0lBQUE7UUFDVSxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFzQjNCLENBQUM7SUFwQkMsc0JBQUksK0NBQWdCO2FBQXBCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBUTthQUFaO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLEtBQWU7UUFBeEIsaUJBRUM7UUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUFFVSxRQUFBLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztBQUt2RCxJQUFJLFNBQVMsR0FBRztJQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUM7QUFLRixJQUFJLE1BQU0sR0FBRztJQUNYLFNBQVMsRUFBRSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBWU8sd0JBQU07QUFQZixJQUFJLE9BQU8sR0FBRyxVQUFDLEtBQVU7SUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRWUsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBicm93c2VyU3luYyBmcm9tICdicm93c2VyLXN5bmMnO1xuLy8gaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5jbGFzcyBDaGFuZ2VGaWxlTWFuYWdlciB7XG4gIHByaXZhdGUgX2ZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIF9wcmlzdGluZSA9IHRydWU7XG5cbiAgZ2V0IGxhc3RDaGFuZ2VkRmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVzLnNsaWNlKCk7XG4gIH1cblxuICBnZXQgcHJpc3RpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXN0aW5lO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuICAgIHRoaXMuX2ZpbGVzLnB1c2goZmlsZSk7XG4gIH1cblxuICBhZGRGaWxlcyhmaWxlczogc3RyaW5nW10pIHtcbiAgICBmaWxlcy5mb3JFYWNoKGYgPT4gdGhpcy5hZGRGaWxlKGYpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX2ZpbGVzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGxldCBjaGFuZ2VGaWxlTWFuYWdlciA9IG5ldyBDaGFuZ2VGaWxlTWFuYWdlcigpO1xuXG4vKipcbiAqIEluaXRpYWxpc2VzIEJyb3dzZXJTeW5jIHdpdGggdGhlIGNvbmZpZ3VyYXRpb24gZGVmaW5lZCBpbiBzZWVkLmNvbmZpZy50cyAob3IgaWYgb3ZlcnJpZGVuOiBwcm9qZWN0LmNvbmZpZy50cykuXG4gKi9cbmxldCBydW5TZXJ2ZXIgPSAoKSA9PiB7XG4gIGJyb3dzZXJTeW5jLmluaXQoQ29uZmlnLmdldFBsdWdpbkNvbmZpZygnYnJvd3Nlci1zeW5jJykpO1xufTtcblxuLyoqXG4gKiBSdW5zIEJyb3dzZXJTeW5jIGFzIHRoZSBsaXN0ZW5pbmcgcHJvY2VzcyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5sZXQgbGlzdGVuID0gKCkgPT4ge1xuICBydW5TZXJ2ZXIoKTtcbn07XG5cbi8qKlxuICogUHJvdmlkZXMgYSBmbGFnIHRvIG1hcmsgd2hpY2ggZmlsZXMgaGF2ZSBjaGFuZ2VkIGFuZCByZWxvYWRzIEJyb3dzZXJTeW5jIGFjY29yZGluZ2x5LlxuICovXG5sZXQgY2hhbmdlZCA9IChmaWxlczogYW55KSA9PiB7XG4gIGlmICghKGZpbGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgZmlsZXMgPSBbZmlsZXNdO1xuICB9XG4gIGJyb3dzZXJTeW5jLnJlbG9hZChmaWxlcyk7XG59O1xuXG5leHBvcnQgeyBsaXN0ZW4sIGNoYW5nZWQgfTtcbiJdfQ==
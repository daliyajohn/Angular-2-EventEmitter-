"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("gulp-util");
var yargs_1 = require("yargs");
var path_1 = require("path");
var config_1 = require("../../config");
var TemplateLocalsBuilder = (function () {
    function TemplateLocalsBuilder() {
        this.stringifySystemConfigDev = false;
        this.stringifyEnvConfig = true;
    }
    TemplateLocalsBuilder.prototype.withStringifiedSystemConfigDev = function () {
        this.stringifySystemConfigDev = true;
        return this;
    };
    TemplateLocalsBuilder.prototype.withoutStringifiedEnvConfig = function () {
        this.stringifyEnvConfig = false;
        return this;
    };
    TemplateLocalsBuilder.prototype.build = function () {
        var configEnvName = yargs_1.argv['env-config'] || yargs_1.argv['config-env'] || 'dev';
        var configPath = config_1.default.getPluginConfig('environment-config');
        var envOnlyConfig = this.getConfig(configPath, configEnvName);
        var baseConfig = this.getConfig(configPath, 'base');
        var packageJSON = require('../../../package.json');
        var versionJSON = { VERSION: packageJSON.version };
        if (!envOnlyConfig) {
            throw new Error(configEnvName + ' is an invalid configuration name');
        }
        var envConfig = Object.assign({}, baseConfig, envOnlyConfig, versionJSON);
        var locals = Object.assign({}, config_1.default, { ENV_CONFIG: this.stringifyEnvConfig ? JSON.stringify(envConfig) : envConfig });
        if (this.stringifySystemConfigDev) {
            Object.assign(locals, { SYSTEM_CONFIG_DEV: JSON.stringify(config_1.default.SYSTEM_CONFIG_DEV) });
        }
        return locals;
    };
    TemplateLocalsBuilder.prototype.getConfig = function (path, env) {
        var configPath = path_1.join(path, env);
        var config;
        try {
            config = JSON.parse(JSON.stringify(require(configPath)));
        }
        catch (e) {
            config = null;
            util.log(util.colors.red(e.message));
        }
        return config;
    };
    return TemplateLocalsBuilder;
}());
exports.TemplateLocalsBuilder = TemplateLocalsBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy91dGlscy9zZWVkL3RlbXBsYXRlX2xvY2Fscy50cyIsInNvdXJjZXMiOlsiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy91dGlscy9zZWVkL3RlbXBsYXRlX2xvY2Fscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdDQUFrQztBQUNsQywrQkFBNkI7QUFDN0IsNkJBQTRCO0FBRTVCLHVDQUFrQztBQU9sQztJQUFBO1FBQ1UsNkJBQXdCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLHVCQUFrQixHQUFHLElBQUksQ0FBQztJQStDcEMsQ0FBQztJQTdDQyw4REFBOEIsR0FBOUI7UUFDRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsMkRBQTJCLEdBQTNCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUdELHFDQUFLLEdBQUw7UUFDRSxJQUFNLGFBQWEsR0FBRyxZQUFJLENBQUMsWUFBWSxDQUFDLElBQUksWUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUN4RSxJQUFNLFVBQVUsR0FBRyxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2hFLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JELElBQU0sV0FBVyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLEdBQUcsbUNBQW1DLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDM0IsZ0JBQU0sRUFDTixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FDaEYsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLHlDQUFTLEdBQWpCLFVBQWtCLElBQVksRUFBRSxHQUFXO1FBQ3pDLElBQU0sVUFBVSxHQUFHLFdBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxNQUFXLENBQUM7UUFDaEIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQztBQWpEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJ2d1bHAtdXRpbCc7XG5pbXBvcnQgeyBhcmd2IH0gZnJvbSAneWFyZ3MnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbi8qKlxuICogQnVpbGRzIGFuIG9iamVjdCBjb25zaXN0aW5nIG9mIHRoZSBiYXNlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgY29uZmcvc2VlZC5jb25maWcudHMsIHRoZSBhZGRpdGlvbmFsXG4gKiBwcm9qZWN0IHNwZWNpZmljIG92ZXJyaWRlcyBhcyBkZWZpbmVkIGluIGNvbmZpZy9wcm9qZWN0LmNvbmZpZy50cyBhbmQgaW5jbHVkaW5nIHRoZSBiYXNlIGVudmlyb25tZW50IGNvbmZpZyBhcyBkZWZpbmVkIGluIGVudi9iYXNlLnRzXG4gKiBhbmQgdGhlIGVudmlyb25tZW50IHNwZWNpZmljIG92ZXJyaWRlcyAoZm9yIGluc3RhbmNlIGlmIGVudj1kZXYgdGhlbiBhcyBkZWZpbmVkIGluIGVudi9kZXYudHMpLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVMb2NhbHNCdWlsZGVyIHtcbiAgcHJpdmF0ZSBzdHJpbmdpZnlTeXN0ZW1Db25maWdEZXYgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdHJpbmdpZnlFbnZDb25maWcgPSB0cnVlO1xuXG4gIHdpdGhTdHJpbmdpZmllZFN5c3RlbUNvbmZpZ0RldigpIHtcbiAgICB0aGlzLnN0cmluZ2lmeVN5c3RlbUNvbmZpZ0RldiA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgd2l0aG91dFN0cmluZ2lmaWVkRW52Q29uZmlnKCkge1xuICAgIHRoaXMuc3RyaW5naWZ5RW52Q29uZmlnID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG4gIGJ1aWxkKCkge1xuICAgIGNvbnN0IGNvbmZpZ0Vudk5hbWUgPSBhcmd2WydlbnYtY29uZmlnJ10gfHwgYXJndlsnY29uZmlnLWVudiddIHx8ICdkZXYnO1xuICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBDb25maWcuZ2V0UGx1Z2luQ29uZmlnKCdlbnZpcm9ubWVudC1jb25maWcnKTtcbiAgICBjb25zdCBlbnZPbmx5Q29uZmlnID0gdGhpcy5nZXRDb25maWcoY29uZmlnUGF0aCwgY29uZmlnRW52TmFtZSk7XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKGNvbmZpZ1BhdGgsICdiYXNlJyk7XG4gICAgY29uc3QgcGFja2FnZUpTT04gPSByZXF1aXJlKCcuLi8uLi8uLi9wYWNrYWdlLmpzb24nKTtcbiAgICBjb25zdCB2ZXJzaW9uSlNPTiA9IHsgVkVSU0lPTiA6IHBhY2thZ2VKU09OLnZlcnNpb24gfTtcblxuICAgIGlmICghZW52T25seUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbmZpZ0Vudk5hbWUgKyAnIGlzIGFuIGludmFsaWQgY29uZmlndXJhdGlvbiBuYW1lJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW52Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZUNvbmZpZywgZW52T25seUNvbmZpZywgdmVyc2lvbkpTT04pO1xuICAgIGxldCBsb2NhbHMgPSBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgQ29uZmlnLFxuICAgICAgeyBFTlZfQ09ORklHOiB0aGlzLnN0cmluZ2lmeUVudkNvbmZpZyA/IEpTT04uc3RyaW5naWZ5KGVudkNvbmZpZykgOiBlbnZDb25maWcgfVxuICAgICk7XG4gICAgaWYgKHRoaXMuc3RyaW5naWZ5U3lzdGVtQ29uZmlnRGV2KSB7XG4gICAgICBPYmplY3QuYXNzaWduKGxvY2Fscywge1NZU1RFTV9DT05GSUdfREVWOiBKU09OLnN0cmluZ2lmeShDb25maWcuU1lTVEVNX0NPTkZJR19ERVYpfSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbHM7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZyhwYXRoOiBzdHJpbmcsIGVudjogc3RyaW5nKSB7XG4gICAgY29uc3QgY29uZmlnUGF0aCA9IGpvaW4ocGF0aCwgZW52KTtcbiAgICBsZXQgY29uZmlnOiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmZpZyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVxdWlyZShjb25maWdQYXRoKSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbmZpZyA9IG51bGw7XG4gICAgICB1dGlsLmxvZyh1dGlsLmNvbG9ycy5yZWQoZS5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxufVxuIl19
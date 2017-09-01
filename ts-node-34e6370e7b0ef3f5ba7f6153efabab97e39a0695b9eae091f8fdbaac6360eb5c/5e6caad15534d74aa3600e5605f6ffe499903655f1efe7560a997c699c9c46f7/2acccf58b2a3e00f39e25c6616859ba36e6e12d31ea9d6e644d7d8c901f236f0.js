"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var slash = require("slash");
var yargs_1 = require("yargs");
exports.BUILD_TYPES = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};
exports.SME_OUTPUT_FORMATS = {
    HTML: 'html',
    JSON: 'json',
    TSV: 'tsv'
};
var SeedConfig = (function () {
    function SeedConfig() {
        this.PORT = yargs_1.argv['port'] || 5555;
        this.PROJECT_ROOT = path_1.join(__dirname, '../..');
        this.BUILD_TYPE = getBuildType();
        this.PRESERVE_SOURCE_MAPS = yargs_1.argv['preserve-source-maps'] || false;
        this.SME_OUT_FORMAT = getSmeOutFormat();
        this.SME_DIR = 'sme';
        this.DEBUG = yargs_1.argv['debug'] || false;
        this.DOCS_PORT = yargs_1.argv['docs-port'] || 4003;
        this.COVERAGE_PORT = yargs_1.argv['coverage-port'] || 4004;
        this.COVERAGE_DIR = 'coverage_js';
        this.COVERAGE_TS_DIR = 'coverage';
        this.APP_BASE = yargs_1.argv['base'] || '/';
        this.NPM_BASE = slash(path_1.join('.', this.APP_BASE, 'node_modules/'));
        this.TYPED_COMPILE_INTERVAL = 0;
        this.BOOTSTRAP_DIR = yargs_1.argv['app'] || 'app';
        this.APP_CLIENT = yargs_1.argv['client'] || 'client';
        this.BOOTSTRAP_MODULE = this.BOOTSTRAP_DIR + "/main";
        this.BOOTSTRAP_PROD_MODULE = this.BOOTSTRAP_DIR + "/" + 'main';
        this.NG_FACTORY_FILE = 'main-prod';
        this.BOOTSTRAP_FACTORY_PROD_MODULE = this.BOOTSTRAP_DIR + "/" + this
            .NG_FACTORY_FILE;
        this.APP_TITLE = 'Welcome to angular-seed!';
        this.GOOGLE_ANALYTICS_ID = 'UA-XXXXXXXX-X';
        this.APP_SRC = "src/" + this.APP_CLIENT;
        this.APP_PROJECTNAME = 'tsconfig.json';
        this.ASSETS_SRC = this.APP_SRC + "/assets";
        this.CSS_SRC = this.APP_SRC + "/css";
        this.E2E_SRC = 'src/e2e';
        this.SCSS_SRC = this.APP_SRC + "/scss";
        this.TOOLS_DIR = 'tools';
        this.SEED_TASKS_DIR = path_1.join(process.cwd(), this.TOOLS_DIR, 'tasks', 'seed');
        this.SEED_COMPOSITE_TASKS = path_1.join(process.cwd(), this.TOOLS_DIR, 'config', 'seed.tasks.json');
        this.PROJECT_COMPOSITE_TASKS = path_1.join(process.cwd(), this.TOOLS_DIR, 'config', 'project.tasks.json');
        this.DOCS_DEST = 'docs';
        this.DIST_DIR = 'dist';
        this.DEV_DEST = this.DIST_DIR + "/dev";
        this.PROD_DEST = this.DIST_DIR + "/prod";
        this.E2E_DEST = this.DIST_DIR + "/e2e";
        this.LOCALE_DEST = this.DIST_DIR + "/locale";
        this.TMP_DIR = this.DIST_DIR + "/tmp";
        this.APP_DEST = this.BUILD_TYPE === exports.BUILD_TYPES.DEVELOPMENT
            ? this.DEV_DEST
            : this.PROD_DEST;
        this.CSS_DEST = this.APP_DEST + "/css";
        this.JS_DEST = this.APP_DEST + "/js";
        this.VERSION = appVersion();
        this.CSS_BUNDLE_NAME = 'main';
        this.JS_PROD_SHIMS_BUNDLE = 'shims.js';
        this.JS_PROD_APP_BUNDLE = 'app.js';
        this.VERSION_NPM = '2.14.2';
        this.VERSION_NODE = '4.0.0';
        this.ENABLE_SCSS = ['true', '1'].indexOf(("" + process.env.ENABLE_SCSS).toLowerCase()) !== -1 ||
            yargs_1.argv['scss'] ||
            false;
        this.FORCE_TSLINT_EMIT_ERROR = !!process.env.FORCE_TSLINT_EMIT_ERROR;
        this.EXTRA_WATCH_PATHS = [];
        this.TEMPLATE_CONFIG = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            variable: ''
        };
        this.NPM_DEPENDENCIES = [
            { src: 'core-js/client/shim.min.js', inject: 'shims' },
            { src: 'zone.js/dist/zone.js', inject: 'libs' },
            {
                src: 'zone.js/dist/long-stack-trace-zone.js',
                inject: 'libs',
                buildType: exports.BUILD_TYPES.DEVELOPMENT
            },
            { src: 'intl/dist/Intl.min.js', inject: 'shims' },
            {
                src: 'systemjs/dist/system.src.js',
                inject: 'shims',
                buildType: exports.BUILD_TYPES.DEVELOPMENT
            },
            {
                src: '.tmp/Rx.min.js',
                inject: 'libs',
                buildType: exports.BUILD_TYPES.DEVELOPMENT
            }
        ];
        this.APP_ASSETS = [];
        this.TEMP_FILES = ['**/*___jb_tmp___', '**/*~'];
        this.ROLLUP_INCLUDE_DIR = ['node_modules/**'];
        this.ROLLUP_NAMED_EXPORTS = [];
        this.SYSTEM_CONFIG_DEV = {
            paths: (_a = {},
                _a[this.BOOTSTRAP_MODULE] = "" + this.APP_BASE + this.BOOTSTRAP_MODULE,
                _a['@angular/animations'] = 'node_modules/@angular/animations/bundles/animations.umd.js',
                _a['@angular/platform-browser/animations'] = 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
                _a['@angular/common'] = 'node_modules/@angular/common/bundles/common.umd.js',
                _a['@angular/compiler'] = 'node_modules/@angular/compiler/bundles/compiler.umd.js',
                _a['@angular/core'] = 'node_modules/@angular/core/bundles/core.umd.js',
                _a['@angular/forms'] = 'node_modules/@angular/forms/bundles/forms.umd.js',
                _a['@angular/http'] = 'node_modules/@angular/http/bundles/http.umd.js',
                _a['@angular/platform-browser'] = 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                _a['@angular/platform-browser-dynamic'] = 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                _a['@angular/router'] = 'node_modules/@angular/router/bundles/router.umd.js',
                _a['@angular/animations/browser'] = 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
                _a['@angular/common/testing'] = 'node_modules/@angular/common/bundles/common-testing.umd.js',
                _a['@angular/compiler/testing'] = 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
                _a['@angular/core/testing'] = 'node_modules/@angular/core/bundles/core-testing.umd.js',
                _a['@angular/http/testing'] = 'node_modules/@angular/http/bundles/http-testing.umd.js',
                _a['@angular/platform-browser/testing'] = 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
                _a['@angular/platform-browser-dynamic/testing'] = 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
                _a['@angular/router/testing'] = 'node_modules/@angular/router/bundles/router-testing.umd.js',
                _a['app/'] = this.APP_BASE + "app/",
                _a['dist/dev/'] = '/base/dist/dev/',
                _a[''] = 'node_modules/',
                _a),
            packages: (_b = {},
                _b[this.BOOTSTRAP_DIR] = {
                    defaultExtension: 'js'
                },
                _b)
        };
        this.SYSTEM_CONFIG = this.SYSTEM_CONFIG_DEV;
        this.SYSTEM_BUILDER_CONFIG = {
            defaultJSExtensions: true,
            base: this.PROJECT_ROOT,
            packageConfigPaths: [
                path_1.join('node_modules', '*', 'package.json'),
                path_1.join('node_modules', '@angular', '*', 'package.json')
            ],
            paths: (_c = {},
                _c[path_1.join(this.TMP_DIR, this.BOOTSTRAP_DIR, '*')] = this.TMP_DIR + "/" + this
                    .BOOTSTRAP_DIR + "/*",
                _c['@angular/platform-browser/animations'] = 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
                _c['@angular/animations/browser'] = 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
                _c['dist/tmp/node_modules/*'] = 'dist/tmp/node_modules/*',
                _c['node_modules/*'] = 'node_modules/*',
                _c['*'] = 'node_modules/*',
                _c),
            packages: {
                '@angular/animations': {
                    main: 'bundles/animations.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/common': {
                    main: 'bundles/common.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/compiler': {
                    main: 'bundles/compiler.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/core/testing': {
                    main: 'bundles/core-testing.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/core': {
                    main: 'bundles/core.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/forms': {
                    main: 'bundles/forms.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/http': {
                    main: 'bundles/http.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/platform-browser': {
                    main: 'bundles/platform-browser.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/platform-browser-dynamic': {
                    main: 'bundles/platform-browser-dynamic.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/router': {
                    main: 'bundles/router.umd.js',
                    defaultExtension: 'js'
                },
                '@angular/service-worker': {
                    main: 'bundles/service-worker.umd.js',
                    defaultExtension: 'js'
                },
                rxjs: {
                    main: 'Rx.js',
                    defaultExtension: 'js'
                }
            }
        };
        this.BROWSER_LIST = [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ];
        this.COLOR_GUARD_WHITE_LIST = [];
        this.PROXY_MIDDLEWARE = [];
        this.PLUGIN_CONFIGS = {};
        this.QUERY_STRING_GENERATOR = function () {
            return Date.now().toString();
        };
        var _a, _b, _c;
    }
    Object.defineProperty(SeedConfig.prototype, "DEPENDENCIES", {
        get: function () {
            return normalizeDependencies(this.NPM_DEPENDENCIES.filter(filterDependency.bind(null, this.BUILD_TYPE))).concat(this._APP_ASSETS.filter(filterDependency.bind(null, this.BUILD_TYPE)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeedConfig.prototype, "_APP_ASSETS", {
        get: function () {
            return this.APP_ASSETS.concat([
                {
                    src: this.CSS_SRC + "/" + this
                        .CSS_BUNDLE_NAME + "." + this.getInjectableStyleExtension(),
                    inject: true,
                    vendor: false
                }
            ]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeedConfig.prototype, "_PLUGIN_CONFIGS", {
        get: function () {
            var defaults = {
                'browser-sync': {
                    middleware: [
                        require('connect-history-api-fallback')({
                            index: this.APP_BASE + "index.html"
                        })
                    ].concat(this.PROXY_MIDDLEWARE),
                    port: this.PORT,
                    startPath: this.APP_BASE,
                    open: yargs_1.argv['b'] ? false : true,
                    injectChanges: false,
                    server: {
                        baseDir: this.DIST_DIR + "/empty/",
                        routes: (_a = {},
                            _a["" + this.APP_BASE + this.APP_SRC] = this.APP_SRC,
                            _a["" + this.APP_BASE + this.APP_DEST] = this.APP_DEST,
                            _a[this.APP_BASE + "node_modules"] = 'node_modules',
                            _a["" + this.APP_BASE.replace(/\/$/, '')] = this.APP_DEST,
                            _a)
                    }
                },
                'environment-config': path_1.join(this.PROJECT_ROOT, this.TOOLS_DIR, 'env'),
                'gulp-sass': {
                    includePaths: ['./node_modules/']
                },
                'gulp-concat-css': {
                    targetFile: this.CSS_BUNDLE_NAME + ".css",
                    options: {
                        rebaseUrls: false
                    }
                }
            };
            this.mergeObject(defaults, this.PLUGIN_CONFIGS);
            return defaults;
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    SeedConfig.prototype.getKarmaReporters = function () {
        return {
            preprocessors: {
                'dist/**/!(*spec|index|*.module|*.routes).js': ['coverage']
            },
            reporters: ['mocha', 'coverage', 'karma-remap-istanbul'],
            coverageReporter: {
                dir: this.COVERAGE_DIR + '/',
                reporters: [
                    { type: 'json', subdir: '.', file: 'coverage-final.json' },
                    { type: 'html', subdir: '.' }
                ]
            },
            remapIstanbulReporter: {
                reports: {
                    html: this.COVERAGE_TS_DIR
                }
            }
        };
    };
    SeedConfig.prototype.mergeObject = function (target, source) {
        var deepExtend = require('deep-extend');
        deepExtend(target, source);
    };
    SeedConfig.prototype.getPluginConfig = function (pluginKey) {
        if (this._PLUGIN_CONFIGS[pluginKey]) {
            return this._PLUGIN_CONFIGS[pluginKey];
        }
        return null;
    };
    SeedConfig.prototype.getInjectableStyleExtension = function () {
        return this.BUILD_TYPE === exports.BUILD_TYPES.PRODUCTION && this.ENABLE_SCSS
            ? 'scss'
            : 'css';
    };
    SeedConfig.prototype.addPackageBundles = function (pack) {
        if (pack.path) {
            this.SYSTEM_CONFIG_DEV.paths[pack.name] = pack.path;
            this.SYSTEM_BUILDER_CONFIG.paths[pack.name] = pack.path;
        }
        if (pack.packageMeta) {
            this.SYSTEM_CONFIG_DEV.packages[pack.name] = pack.packageMeta;
            this.SYSTEM_BUILDER_CONFIG.packages[pack.name] = pack.packageMeta;
        }
    };
    SeedConfig.prototype.addPackagesBundles = function (packs) {
        var _this = this;
        packs.forEach(function (pack) {
            _this.addPackageBundles(pack);
        });
    };
    SeedConfig.prototype.getRollupNamedExports = function () {
        var namedExports = {};
        this.ROLLUP_NAMED_EXPORTS.map(function (namedExport) {
            namedExports = Object.assign(namedExports, namedExport);
        });
        return namedExports;
    };
    return SeedConfig;
}());
exports.SeedConfig = SeedConfig;
function normalizeDependencies(deps) {
    deps
        .filter(function (d) { return !/\*/.test(d.src); })
        .forEach(function (d) { return (d.src = require.resolve(d.src)); });
    return deps;
}
exports.normalizeDependencies = normalizeDependencies;
function filterDependency(type, d) {
    var t = d.buildType || d.env;
    d.buildType = t;
    if (!t) {
        d.buildType = Object.keys(exports.BUILD_TYPES).map(function (k) { return exports.BUILD_TYPES[k]; });
    }
    if (!(d.buildType instanceof Array)) {
        d.env = [d.buildType];
    }
    return d.buildType.indexOf(type) >= 0;
}
function appVersion() {
    var pkg = require('../../package.json');
    return pkg.version;
}
function getBuildType() {
    var type = (yargs_1.argv['build-type'] || yargs_1.argv['env'] || '').toLowerCase();
    var base = yargs_1.argv['_'];
    var prodKeyword = !!base
        .filter(function (o) { return o.indexOf(exports.BUILD_TYPES.PRODUCTION) >= 0; })
        .pop();
    if ((base && prodKeyword) || type === exports.BUILD_TYPES.PRODUCTION) {
        return exports.BUILD_TYPES.PRODUCTION;
    }
    else {
        return exports.BUILD_TYPES.DEVELOPMENT;
    }
}
function getSmeOutFormat() {
    var format = (yargs_1.argv['sme-out-format'] || '').toUpperCase();
    return exports.SME_OUTPUT_FORMATS[format] || exports.SME_OUTPUT_FORMATS.HTML;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21lZGlhL2RhbGl5YS9DMjcyRDdGRTcyRDdGNTVGL0dpdGh1YiBwcm9qZWN0cy9Bbmd1bGFyLTItRXZlbnRFbWl0dGVyLS90b29scy9jb25maWcvc2VlZC5jb25maWcudHMiLCJzb3VyY2VzIjpbIi9tZWRpYS9kYWxpeWEvQzI3MkQ3RkU3MkQ3RjU1Ri9HaXRodWIgcHJvamVjdHMvQW5ndWxhci0yLUV2ZW50RW1pdHRlci0vdG9vbHMvY29uZmlnL3NlZWQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTRCO0FBQzVCLDZCQUErQjtBQUMvQiwrQkFBNkI7QUE2QmhCLFFBQUEsV0FBVyxHQUFjO0lBQ3BDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFVBQVUsRUFBRSxNQUFNO0NBQ25CLENBQUM7QUFNVyxRQUFBLGtCQUFrQixHQUFrQztJQUMvRCxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEtBQUs7Q0FDWCxDQUFDO0FBY0Y7SUFBQTtRQU1FLFNBQUksR0FBRyxZQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO1FBSzVCLGlCQUFZLEdBQUcsV0FBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQU14QyxlQUFVLEdBQUcsWUFBWSxFQUFFLENBQUM7UUFNNUIseUJBQW9CLEdBQUcsWUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksS0FBSyxDQUFDO1FBTTdELG1CQUFjLEdBQUcsZUFBZSxFQUFFLENBQUM7UUFLbkMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQU9oQixVQUFLLEdBQUcsWUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQztRQU8vQixjQUFTLEdBQUcsWUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQztRQU90QyxrQkFBYSxHQUFHLFlBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUM7UUFNOUMsaUJBQVksR0FBRyxhQUFhLENB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LENBQUM7SUFDakMsQ0FBQztBQUNILENBQUM7QUFFRDtJQUNFLElBQUksTUFBTSxHQUFHLENBQUMsWUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUQsTUFBTSxDQUFDLDBCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLDBCQUFrQixDQUFDLElBQUksQ0FBQztBQUMvRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgc2xhc2ggZnJvbSAnc2xhc2gnO1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3lhcmdzJztcblxuaW1wb3J0IHtcbiAgQnVpbGRUeXBlLFxuICBFeHRlbmRQYWNrYWdlcyxcbiAgSW5qZWN0YWJsZURlcGVuZGVuY3ksXG4gIFNvdXJjZU1hcEV4cGxvcmVyT3V0cHV0Rm9ybWF0XG59IGZyb20gJy4vc2VlZC5jb25maWcuaW50ZXJmYWNlcyc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqIERPIE5PVCBDSEFOR0UgKioqKioqKioqKioqKioqKioqKioqKioqXG4gKlxuICogRE8gTk9UIG1ha2UgYW55IGNoYW5nZXMgaW4gdGhpcyBmaWxlIGJlY2F1c2UgaXQgd2lsbFxuICogbWFrZSB5b3VyIG1pZ3JhdGlvbiB0byBuZXdlciB2ZXJzaW9ucyBvZiB0aGUgc2VlZCBoYXJkZXIuXG4gKlxuICogWW91ciBhcHBsaWNhdGlvbi1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBzaG91bGQgYmVcbiAqIGluIHByb2plY3QuY29uZmlnLnRzLiBJZiB5b3UgbmVlZCB0byBjaGFuZ2UgYW55IHRhc2tzXG4gKiBmcm9tIFwiLi90YXNrc1wiIG92ZXJ3cml0ZSB0aGVtIGJ5IGNyZWF0aW5nIGEgdGFzayB3aXRoIHRoZVxuICogc2FtZSBuYW1lIGluIFwiLi9wcm9qZWN0c1wiLiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiB0YWtlIGFcbiAqIGxvb2sgYXQgdGhlIGRvY3VtZW50YXRpb246XG4gKlxuICogMSkgaHR0cHM6Ly9naXRodWIuY29tL21nZWNoZXYvYW5ndWxhci1zZWVkL3RyZWUvbWFzdGVyL3Rvb2xzXG4gKiAyKSBodHRwczovL2dpdGh1Yi5jb20vbWdlY2hldi9hbmd1bGFyLXNlZWQvd2lraVxuICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBUaGUgZW51bWVyYXRpb24gb2YgYXZhaWxhYmxlIGVudmlyb25tZW50cy5cbiAqIEB0eXBlIHtFbnZpcm9ubWVudHN9XG4gKi9cbmV4cG9ydCBjb25zdCBCVUlMRF9UWVBFUzogQnVpbGRUeXBlID0ge1xuICBERVZFTE9QTUVOVDogJ2RldicsXG4gIFBST0RVQ1RJT046ICdwcm9kJ1xufTtcblxuLyoqXG4gKiBUaGUgZW51bWVyYXRpb24gb2YgYXZhaWxhYmxlIHNvdXJjZS1tYXAtZXhwbG9yZXIgb3V0cHV0IGZvcm1hdHMuXG4gKiBAdHlwZSB7U291cmNlTWFwRXhwbG9yZXJPdXRwdXRGb3JtYXRzfVxuICovXG5leHBvcnQgY29uc3QgU01FX09VVFBVVF9GT1JNQVRTOiBTb3VyY2VNYXBFeHBsb3Jlck91dHB1dEZvcm1hdCA9IHtcbiAgSFRNTDogJ2h0bWwnLFxuICBKU09OOiAnanNvbicsXG4gIFRTVjogJ3Rzdidcbn07XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBiYXNpYyBjb25maWd1cmF0aW9uIG9mIHRoZSBzZWVkLlxuICogSXQgcHJvdmlkZXMgdGhlIGZvbGxvd2luZzpcbiAqIC0gQ29uc3RhbnRzIGZvciBkaXJlY3RvcmllcywgcG9ydHMsIHZlcnNpb25zIGV0Yy5cbiAqIC0gSW5qZWN0YWJsZSBOUE0gZGVwZW5kZW5jaWVzXG4gKiAtIEluamVjdGFibGUgYXBwbGljYXRpb24gYXNzZXRzXG4gKiAtIFRlbXBvcmFyeSBlZGl0b3IgZmlsZXMgdG8gYmUgaWdub3JlZCBieSB0aGUgd2F0Y2hlciBhbmQgYXNzZXQgYnVpbGRlclxuICogLSBTeXN0ZW1KUyBjb25maWd1cmF0aW9uXG4gKiAtIEF1dG9wcmVmaXhlciBjb25maWd1cmF0aW9uXG4gKiAtIEJyb3dzZXJTeW5jIGNvbmZpZ3VyYXRpb25cbiAqIC0gVXRpbGl0aWVzXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWVkQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBwb3J0IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiB3aWxsIHJ1bi5cbiAgICogVGhlIGRlZmF1bHQgcG9ydCBpcyBgNTU1NWAsIHdoaWNoIGNhbiBiZSBvdmVycmlkZW4gYnkgdGhlICBgLS1wb3J0YCBmbGFnIHdoZW4gcnVubmluZyBgbnBtIHN0YXJ0YC5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIFBPUlQgPSBhcmd2Wydwb3J0J10gfHwgNTU1NTtcblxuICAvKipcbiAgICogVGhlIHJvb3QgZm9sZGVyIG9mIHRoZSBwcm9qZWN0ICh1cCB0d28gbGV2ZWxzIGZyb20gdGhlIGN1cnJlbnQgZGlyZWN0b3J5KS5cbiAgICovXG4gIFBST0pFQ1RfUk9PVCA9IGpvaW4oX19kaXJuYW1lLCAnLi4vLi4nKTtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgYnVpbGQgdHlwZS5cbiAgICogVGhlIGRlZmF1bHQgYnVpbGQgdHlwZSBpcyBgZGV2YCwgd2hpY2ggY2FuIGJlIG92ZXJyaWRlbiBieSB0aGUgYC0tYnVpbGQtdHlwZSBkZXZ8cHJvZGAgZmxhZyB3aGVuIHJ1bm5pbmcgYG5wbSBzdGFydGAuXG4gICAqL1xuICBCVUlMRF9UWVBFID0gZ2V0QnVpbGRUeXBlKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBmbGFnIHRvIGRldGVybWluZSBwcmVzZXJ2aW5nIHNvdXJjZSBtYXBzIG9uIGJ1aWxkIG9yIG5vdC5cbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYCwgd2hpY2ggY2FuIGJlIG92ZXJyaWRlbiBieSB0aGUgYC0tcHJlc2VydmUtc291cmNlLW1hcHNgIGZsYWcgd2hlbiBydW5uaW5nIGBucG0gc3RhcnRgLlxuICAgKi9cbiAgUFJFU0VSVkVfU09VUkNFX01BUFMgPSBhcmd2WydwcmVzZXJ2ZS1zb3VyY2UtbWFwcyddIHx8IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzb3VyY2UtbWFwLWV4cGxvcmVyIG91dHB1dCBmb3JtYXQuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGBodG1sYCwgd2hpY2ggY2FuIGJlIG92ZXJyaWRlbiBieSB0aGUgYC0tc21lLW91dC1mb3JtYXQgaHRtbHxqc29ufHRzdmAgZmxhZyB3aGVuIHJ1bm5pbmcgYG5wbSBydW4gc21lYC5cbiAgICovXG4gIFNNRV9PVVRfRk9STUFUID0gZ2V0U21lT3V0Rm9ybWF0KCk7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNvdXJjZS1tYXAtZXhwbG9yZXIgb3V0cHV0IGZvbGRlci5cbiAgICovXG4gIFNNRV9ESVIgPSAnc21lJztcblxuICAvKipcbiAgICogVGhlIGZsYWcgZm9yIHRoZSBkZWJ1ZyBvcHRpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLCB3aGljaCBjYW4gYmUgb3ZlcnJpZGVuIGJ5IHRoZSBgLS1kZWJ1Z2AgZmxhZyB3aGVuIHJ1bm5pbmcgYG5wbSBzdGFydGAuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgREVCVUcgPSBhcmd2WydkZWJ1ZyddIHx8IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9ydCB3aGVyZSB0aGUgZG9jdW1lbnRhdGlvbiBhcHBsaWNhdGlvbiB3aWxsIHJ1bi5cbiAgICogVGhlIGRlZmF1bHQgZG9jcyBwb3J0IGlzIGA0MDAzYCwgd2hpY2ggY2FuIGJlIG92ZXJyaWRlbiBieSB0aGUgYC0tZG9jcy1wb3J0YCBmbGFnIHdoZW4gcnVubmluZyBgbnBtIHN0YXJ0YC5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIERPQ1NfUE9SVCA9IGFyZ3ZbJ2RvY3MtcG9ydCddIHx8IDQwMDM7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3J0IHdoZXJlIHRoZSB1bml0IHRlc3QgY292ZXJhZ2UgcmVwb3J0IGFwcGxpY2F0aW9uIHdpbGwgcnVuLlxuICAgKiBUaGUgZGVmYXVsdCBjb3ZlcmFnZSBwb3J0IGlzIGA0MDA0YCwgd2hpY2ggY2FuIGJ5IG92ZXJyaWRlbiBieSB0aGUgYC0tY292ZXJhZ2UtcG9ydGAgZmxhZyB3aGVuIHJ1bm5pbmcgYG5wbSBzdGFydGAuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBDT1ZFUkFHRV9QT1JUID0gYXJndlsnY292ZXJhZ2UtcG9ydCddIHx8IDQwMDQ7XG5cbiAgLyoqXG4gICogVGhlIHBhdGggdG8gdGhlIGNvdmVyYWdlIG91dHB1dFxuICAqIE5COiB0aGlzIG11c3QgbWF0Y2ggd2hhdCBpcyBjb25maWd1cmVkIGluIC4va2FybWEuY29uZi5qc1xuICAqL1xuICBDT1ZFUkFHRV9ESVIgPSAnY292ZXJhZ2VfanMnO1xuICBDT1ZFUkFHRV9UU19ESVIgPSAnY292ZXJhZ2UnO1xuXG4gIC8qKlxuICAgKiBUaGUgcGF0aCBmb3IgdGhlIGJhc2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGF0IHJ1bnRpbWUuXG4gICAqIFRoZSBkZWZhdWx0IHBhdGggaXMgYmFzZWQgb24gdGhlIGVudmlyb25tZW50ICcvJyxcbiAgICogd2hpY2ggY2FuIGJlIG92ZXJyaWRlbiBieSB0aGUgYC0tYmFzZWAgZmxhZyB3aGVuIHJ1bm5pbmcgYG5wbSBzdGFydGAuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBBUFBfQkFTRSA9IGFyZ3ZbJ2Jhc2UnXSB8fCAnLyc7XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIHBhdGggb2Ygbm9kZSBtb2R1bGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgTlBNX0JBU0UgPSBzbGFzaChqb2luKCcuJywgdGhpcy5BUFBfQkFTRSwgJ25vZGVfbW9kdWxlcy8nKSk7XG5cbiAgLyoqXG4gICAqIFRoZSBidWlsZCBpbnRlcnZhbCB3aGljaCB3aWxsIGZvcmNlIHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHBlcmZvcm0gYSB0eXBlZCBjb21waWxlIHJ1bi5cbiAgICogQmV0d2VlbiB0aGUgdHlwZWQgcnVucywgYSB0eXBlbGVzcyBjb21waWxlIGlzIHJ1biwgd2hpY2ggaXMgdHlwaWNhbGx5IG11Y2ggZmFzdGVyLlxuICAgKiBGb3IgZXhhbXBsZSwgaWYgc2V0IHRvIDUsIHRoZSBpbml0aWFsIGNvbXBpbGUgd2lsbCBiZSB0eXBlZCwgZm9sbG93ZWQgYnkgNSB0eXBlbGVzcyBydW5zLFxuICAgKiB0aGVuIGFub3RoZXIgdHlwZWQgcnVuLCBhbmQgc28gb24uXG4gICAqIElmIGEgY29tcGlsZSBlcnJvciBpcyBlbmNvdW50ZXJlZCwgdGhlIGJ1aWxkIHdpbGwgdXNlIHR5cGVkIGNvbXBpbGF0aW9uIHVudGlsIHRoZSBlcnJvciBpcyByZXNvbHZlZC5cbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgYDBgLCBtZWFuaW5nIHR5cGVkIGNvbXBpbGF0aW9uIHdpbGwgYWx3YXlzIGJlIHBlcmZvcm1lZC5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIFRZUEVEX0NPTVBJTEVfSU5URVJWQUwgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0b3J5IHdoZXJlIHRoZSBib290c3RyYXAgZmlsZSBpcyBsb2NhdGVkLlxuICAgKiBUaGUgZGVmYXVsdCBkaXJlY3RvcnkgaXMgYGFwcGAuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBCT09UU1RSQVBfRElSID0gYXJndlsnYXBwJ10gfHwgJ2FwcCc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGNsaWVudCBmaWxlcyBhcmUgbG9jYXRlZC5cbiAgICogVGhlIGRlZmF1bHQgZGlyZWN0b3J5IGlzIGBjbGllbnRgLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQVBQX0NMSUVOVCA9IGFyZ3ZbJ2NsaWVudCddIHx8ICdjbGllbnQnO1xuXG4gIC8qKlxuICAgKiBUaGUgYm9vdHN0cmFwIGZpbGUgdG8gYmUgdXNlZCB0byBib290IHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEJPT1RTVFJBUF9NT0RVTEUgPSBgJHt0aGlzLkJPT1RTVFJBUF9ESVJ9L21haW5gO1xuXG4gIEJPT1RTVFJBUF9QUk9EX01PRFVMRSA9IGAke3RoaXMuQk9PVFNUUkFQX0RJUn0vYCArICdtYWluJztcblxuICBOR19GQUNUT1JZX0ZJTEUgPSAnbWFpbi1wcm9kJztcblxuICBCT09UU1RSQVBfRkFDVE9SWV9QUk9EX01PRFVMRSA9IGAke3RoaXMuQk9PVFNUUkFQX0RJUn0vJHt0aGlzXG4gICAgLk5HX0ZBQ1RPUllfRklMRX1gO1xuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdGl0bGUgb2YgdGhlIGFwcGxpY2F0aW9uIGFzIHVzZWQgaW4gdGhlIGA8dGl0bGU+YCB0YWcgb2YgdGhlXG4gICAqIGBpbmRleC5odG1sYC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEFQUF9USVRMRSA9ICdXZWxjb21lIHRvIGFuZ3VsYXItc2VlZCEnO1xuXG4gIC8qKlxuICAgKiBUcmFja2luZyBJRC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEdPT0dMRV9BTkFMWVRJQ1NfSUQgPSAnVUEtWFhYWFhYWFgtWCc7XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGZvbGRlciBvZiB0aGUgYXBwbGljYXRpb25zIHNvdXJjZSBmaWxlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEFQUF9TUkMgPSBgc3JjLyR7dGhpcy5BUFBfQ0xJRU5UfWA7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBUeXBlU2NyaXB0IHByb2plY3QgZmlsZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQVBQX1BST0pFQ1ROQU1FID0gJ3RzY29uZmlnLmpzb24nO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIG9mIHRoZSBhcHBsaWNhdGlvbnMgYXNzZXQgZmlsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBBU1NFVFNfU1JDID0gYCR7dGhpcy5BUFBfU1JDfS9hc3NldHNgO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIG9mIHRoZSBhcHBsaWNhdGlvbnMgY3NzIGZpbGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQ1NTX1NSQyA9IGAke3RoaXMuQVBQX1NSQ30vY3NzYDtcblxuICAvKipcbiAgICogVGhlIGZvbGRlciBvZiB0aGUgZTJlIHNwZWNzIGFuZCBmcmFtZXdvcmtcbiAgICovXG4gIEUyRV9TUkMgPSAnc3JjL2UyZSc7XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xkZXIgb2YgdGhlIGFwcGxpY2F0aW9ucyBzY3NzIGZpbGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgU0NTU19TUkMgPSBgJHt0aGlzLkFQUF9TUkN9L3Njc3NgO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0b3J5IG9mIHRoZSBhcHBsaWNhdGlvbnMgdG9vbHNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIFRPT0xTX0RJUiA9ICd0b29scyc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rvcnkgb2YgdGhlIHRhc2tzIHByb3ZpZGVkIGJ5IHRoZSBzZWVkLlxuICAgKi9cbiAgU0VFRF9UQVNLU19ESVIgPSBqb2luKHByb2Nlc3MuY3dkKCksIHRoaXMuVE9PTFNfRElSLCAndGFza3MnLCAnc2VlZCcpO1xuXG4gIC8qKlxuICAgKiBTZWVkIHRhc2tzIHdoaWNoIGFyZSBjb21wb3NpdGlvbiBvZiBvdGhlciB0YXNrcy5cbiAgICovXG4gIFNFRURfQ09NUE9TSVRFX1RBU0tTID0gam9pbihcbiAgICBwcm9jZXNzLmN3ZCgpLFxuICAgIHRoaXMuVE9PTFNfRElSLFxuICAgICdjb25maWcnLFxuICAgICdzZWVkLnRhc2tzLmpzb24nXG4gICk7XG5cbiAgLyoqXG4gICAqIFByb2plY3QgdGFza3Mgd2hpY2ggYXJlIGNvbXBvc2l0aW9uIG9mIG90aGVyIHRhc2tzXG4gICAqIGFuZCBhaW0gdG8gb3ZlcnJpZGUgdGhlIHRhc2tzIGRlZmluZWQgaW5cbiAgICogU0VFRF9DT01QT1NJVEVfVEFTS1MuXG4gICAqL1xuICBQUk9KRUNUX0NPTVBPU0lURV9UQVNLUyA9IGpvaW4oXG4gICAgcHJvY2Vzcy5jd2QoKSxcbiAgICB0aGlzLlRPT0xTX0RJUixcbiAgICAnY29uZmlnJyxcbiAgICAncHJvamVjdC50YXNrcy5qc29uJ1xuICApO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVzdGluYXRpb24gZm9sZGVyIGZvciB0aGUgZ2VuZXJhdGVkIGRvY3VtZW50YXRpb24uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBET0NTX0RFU1QgPSAnZG9jcyc7XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGZvbGRlciBmb3IgYnVpbHQgZmlsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBESVNUX0RJUiA9ICdkaXN0JztcblxuICAvKipcbiAgICogVGhlIGZvbGRlciBmb3IgYnVpbHQgZmlsZXMgaW4gdGhlIGBkZXZgIGVudmlyb25tZW50LlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgREVWX0RFU1QgPSBgJHt0aGlzLkRJU1RfRElSfS9kZXZgO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIGZvciB0aGUgYnVpbHQgZmlsZXMgaW4gdGhlIGBwcm9kYCBlbnZpcm9ubWVudC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIFBST0RfREVTVCA9IGAke3RoaXMuRElTVF9ESVJ9L3Byb2RgO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIGZvciB0aGUgYnVpbHQgZmlsZXMgb2YgdGhlIGUyZS1zcGVjcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEUyRV9ERVNUID0gYCR7dGhpcy5ESVNUX0RJUn0vZTJlYDtcblxuICAvKipcbiAgICogVGhlIGZvbGRlciBmb3IgdGhlIGJ1aWx0IHRyYW5zbGF0aW9uIGZpbGUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBMT0NBTEVfREVTVCA9IGAke3RoaXMuRElTVF9ESVJ9L2xvY2FsZWA7XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xkZXIgZm9yIHRlbXBvcmFyeSBmaWxlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIFRNUF9ESVIgPSBgJHt0aGlzLkRJU1RfRElSfS90bXBgO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIGZvciB0aGUgYnVpbHQgZmlsZXMsIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBBUFBfREVTVCA9IHRoaXMuQlVJTERfVFlQRSA9PT0gQlVJTERfVFlQRVMuREVWRUxPUE1FTlRcbiAgICA/IHRoaXMuREVWX0RFU1RcbiAgICA6IHRoaXMuUFJPRF9ERVNUO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sZGVyIGZvciB0aGUgYnVpbHQgQ1NTIGZpbGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nc31cbiAgICovXG4gIENTU19ERVNUID0gYCR7dGhpcy5BUFBfREVTVH0vY3NzYDtcblxuICAvKipcbiAgICogVGhlIGZvbGRlciBmb3IgdGhlIGJ1aWx0IEphdmFTY3JpcHQgZmlsZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBKU19ERVNUID0gYCR7dGhpcy5BUFBfREVTVH0vanNgO1xuXG4gIC8qKlxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgYXBwbGljYXRpb24gYXMgZGVmaW5lZCBpbiB0aGUgYHBhY2thZ2UuanNvbmAuXG4gICAqL1xuICBWRVJTSU9OID0gYXBwVmVyc2lvbigpO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYnVuZGxlIGZpbGUgdG8gaW5jbHVkZXMgYWxsIENTUyBmaWxlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIENTU19CVU5ETEVfTkFNRSA9ICdtYWluJztcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGJ1bmRsZSBmaWxlIHRvIGluY2x1ZGUgYWxsIEphdmFTY3JpcHQgc2hpbXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBKU19QUk9EX1NISU1TX0JVTkRMRSA9ICdzaGltcy5qcyc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBidW5kbGUgZmlsZSB0byBpbmNsdWRlIGFsbCBKYXZhU2NyaXB0IGFwcGxpY2F0aW9uIGZpbGVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgSlNfUFJPRF9BUFBfQlVORExFID0gJ2FwcC5qcyc7XG5cbiAgLyoqXG4gICAqIFRoZSByZXF1aXJlZCBOUE0gdmVyc2lvbiB0byBydW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgVkVSU0lPTl9OUE0gPSAnMi4xNC4yJztcblxuICAvKipcbiAgICogVGhlIHJlcXVpcmVkIE5vZGVKUyB2ZXJzaW9uIHRvIHJ1biB0aGUgYXBwbGljYXRpb24uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBWRVJTSU9OX05PREUgPSAnNC4wLjAnO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgU0NTUyBzdHlsZXNoZWV0IGNvbXBpbGF0aW9uLlxuICAgKiBTZXQgRU5BQkxFX1NDU1MgZW52aXJvbm1lbnQgdmFyaWFibGUgdG8gJ3RydWUnIG9yICcxJ1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEVOQUJMRV9TQ1NTID0gWyd0cnVlJywgJzEnXS5pbmRleE9mKFxuICAgIGAke3Byb2Nlc3MuZW52LkVOQUJMRV9TQ1NTfWAudG9Mb3dlckNhc2UoKVxuICApICE9PSAtMSB8fFxuICAgIGFyZ3ZbJ3Njc3MnXSB8fFxuICAgIGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdHNsaW50IGVtaXQgZXJyb3IgYnkgc2V0dGluZyBlbnYgdmFyaWFibGUgRk9SQ0VfVFNMSU5UX0VNSVRfRVJST1JcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBGT1JDRV9UU0xJTlRfRU1JVF9FUlJPUiA9ICEhcHJvY2Vzcy5lbnYuRk9SQ0VfVFNMSU5UX0VNSVRfRVJST1I7XG5cbiAgLyoqXG4gICAqIEV4dHJhIHBhdGhzIGZvciB0aGUgZ3VscCBwcm9jZXNzIHRvIHdhdGNoIGZvciB0byB0cmlnZ2VyIGNvbXBpbGF0aW9uLlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqL1xuICBFWFRSQV9XQVRDSF9QQVRIUzogc3RyaW5nW10gPSBbXTtcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgdGVtcGxhdGUgY29uZmlnLlxuICAgKi9cbiAgVEVNUExBVEVfQ09ORklHID0ge1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZGV0ZWN0IGBkYXRhYCBwcm9wZXJ0eSB2YWx1ZXMgdG8gYmUgSFRNTC1lc2NhcGVkLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIF8udGVtcGxhdGVTZXR0aW5nc1xuICAgICAqIEB0eXBlIHtSZWdFeHB9XG4gICAgICovXG4gICAgZXNjYXBlOiAvPCUtKFtcXHNcXFNdKz8pJT4vZyxcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZGV0ZWN0IGNvZGUgdG8gYmUgZXZhbHVhdGVkLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIF8udGVtcGxhdGVTZXR0aW5nc1xuICAgICAqIEB0eXBlIHtSZWdFeHB9XG4gICAgICovXG4gICAgZXZhbHVhdGU6IC88JShbXFxzXFxTXSs/KSU+L2csXG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGRldGVjdCBgZGF0YWAgcHJvcGVydHkgdmFsdWVzIHRvIGluamVjdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBfLnRlbXBsYXRlU2V0dGluZ3NcbiAgICAgKiBAdHlwZSB7UmVnRXhwfVxuICAgICAqL1xuICAgIGludGVycG9sYXRlOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gcmVmZXJlbmNlIHRoZSBkYXRhIG9iamVjdCBpbiB0aGUgdGVtcGxhdGUgdGV4dC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBfLnRlbXBsYXRlU2V0dGluZ3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHZhcmlhYmxlOiAnJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBOUE0gZGVwZW5kY2llcyB0byBiZSBpbmplY3RlZCBpbiB0aGUgYGluZGV4Lmh0bWxgLlxuICAgKiBAdHlwZSB7SW5qZWN0YWJsZURlcGVuZGVuY3lbXX1cbiAgICovXG4gIE5QTV9ERVBFTkRFTkNJRVM6IEluamVjdGFibGVEZXBlbmRlbmN5W10gPSBbXG4gICAgeyBzcmM6ICdjb3JlLWpzL2NsaWVudC9zaGltLm1pbi5qcycsIGluamVjdDogJ3NoaW1zJyB9LFxuICAgIHsgc3JjOiAnem9uZS5qcy9kaXN0L3pvbmUuanMnLCBpbmplY3Q6ICdsaWJzJyB9LFxuICAgIHtcbiAgICAgIHNyYzogJ3pvbmUuanMvZGlzdC9sb25nLXN0YWNrLXRyYWNlLXpvbmUuanMnLFxuICAgICAgaW5qZWN0OiAnbGlicycsXG4gICAgICBidWlsZFR5cGU6IEJVSUxEX1RZUEVTLkRFVkVMT1BNRU5UXG4gICAgfSxcbiAgICB7IHNyYzogJ2ludGwvZGlzdC9JbnRsLm1pbi5qcycsIGluamVjdDogJ3NoaW1zJyB9LFxuICAgIHtcbiAgICAgIHNyYzogJ3N5c3RlbWpzL2Rpc3Qvc3lzdGVtLnNyYy5qcycsXG4gICAgICBpbmplY3Q6ICdzaGltcycsXG4gICAgICBidWlsZFR5cGU6IEJVSUxEX1RZUEVTLkRFVkVMT1BNRU5UXG4gICAgfSxcbiAgICAvLyBUZW1wb3JhcnkgZml4LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvOTM1OVxuICAgIHtcbiAgICAgIHNyYzogJy50bXAvUngubWluLmpzJyxcbiAgICAgIGluamVjdDogJ2xpYnMnLFxuICAgICAgYnVpbGRUeXBlOiBCVUlMRF9UWVBFUy5ERVZFTE9QTUVOVFxuICAgIH1cbiAgXTtcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgbG9jYWwgZmlsZXMgdG8gYmUgaW5qZWN0ZWQgaW4gdGhlIGBpbmRleC5odG1sYC5cbiAgICogQHR5cGUge0luamVjdGFibGVEZXBlbmRlbmN5W119XG4gICAqL1xuICBBUFBfQVNTRVRTOiBJbmplY3RhYmxlRGVwZW5kZW5jeVtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIGVkaXRvciB0ZW1wb3JhcnkgZmlsZXMgdG8gaWdub3JlIGluIHdhdGNoZXIgYW5kIGFzc2V0IGJ1aWxkZXIuXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICovXG4gIFRFTVBfRklMRVM6IHN0cmluZ1tdID0gWycqKi8qX19famJfdG1wX19fJywgJyoqLyp+J107XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgZGlyZWN0b3JpZXMgdG8gaW5jbHVkZSBpbiBjb21tb25qc1xuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqL1xuICBST0xMVVBfSU5DTFVERV9ESVI6IHN0cmluZ1tdID0gWydub2RlX21vZHVsZXMvKionXTtcblxuICAvKipcbiAgKiBMaXN0IG9mIG5hbWVkIGV4cG9ydCBPYmplY3Qga2V5IHZhbHVlIHBhaXJzXG4gICoga2V5OiBkZXBlbmRlbmNpZSBmaWxlXG4gICogdmFsdWU6IGV4cG9ydGVkIE9iamVjdHNcbiAgKi9cbiAgUk9MTFVQX05BTUVEX0VYUE9SVFM6IGFueVtdID0gW107XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFycmF5IG9mIGluamVjdGFibGUgZGVwZW5kZW5jaWVzIChucG0gZGVwZW5kZW5jaWVzIGFuZCBhc3NldHMpLlxuICAgKiBAcmV0dXJuIHtJbmplY3RhYmxlRGVwZW5kZW5jeVtdfSBUaGUgYXJyYXkgb2YgbnBtIGRlcGVuZGVuY2llcyBhbmQgYXNzZXRzLlxuICAgKi9cbiAgZ2V0IERFUEVOREVOQ0lFUygpOiBJbmplY3RhYmxlRGVwZW5kZW5jeVtdIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGVwZW5kZW5jaWVzKFxuICAgICAgdGhpcy5OUE1fREVQRU5ERU5DSUVTLmZpbHRlcihmaWx0ZXJEZXBlbmRlbmN5LmJpbmQobnVsbCwgdGhpcy5CVUlMRF9UWVBFKSlcbiAgICApLmNvbmNhdChcbiAgICAgIHRoaXMuX0FQUF9BU1NFVFMuZmlsdGVyKGZpbHRlckRlcGVuZGVuY3kuYmluZChudWxsLCB0aGlzLkJVSUxEX1RZUEUpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgU3lzdGVtSlMgZm9yIHRoZSBgZGV2YCBlbnZpcm9ubWVudC5cbiAgICogQHR5cGUge2FueX1cbiAgICovXG4gIFNZU1RFTV9DT05GSUdfREVWOiBhbnkgPSB7XG4gICAgcGF0aHM6IHtcbiAgICAgIFt0aGlzLkJPT1RTVFJBUF9NT0RVTEVdOiBgJHt0aGlzLkFQUF9CQVNFfSR7dGhpcy5CT09UU1RSQVBfTU9EVUxFfWAsXG4gICAgICAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc6XG4gICAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvYW5pbWF0aW9ucy9idW5kbGVzL2FuaW1hdGlvbnMudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnOlxuICAgICAgICAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWFuaW1hdGlvbnMudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9jb21tb24nOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9idW5kbGVzL2NvbW1vbi51bWQuanMnLFxuICAgICAgJ0Bhbmd1bGFyL2NvbXBpbGVyJzpcbiAgICAgICAgJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvY29yZSc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9mb3Jtcyc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvYnVuZGxlcy9mb3Jtcy51bWQuanMnLFxuICAgICAgJ0Bhbmd1bGFyL2h0dHAnOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic6XG4gICAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnOlxuICAgICAgICAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy51bWQuanMnLFxuICAgICAgJ0Bhbmd1bGFyL3JvdXRlcic6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcycsXG4gICAgICAnQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyJzpcbiAgICAgICAgJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9hbmltYXRpb25zL2J1bmRsZXMvYW5pbWF0aW9ucy1icm93c2VyLnVtZC5qcycsXG5cbiAgICAgICdAYW5ndWxhci9jb21tb24vdGVzdGluZyc6XG4gICAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL2J1bmRsZXMvY29tbW9uLXRlc3RpbmcudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9jb21waWxlci90ZXN0aW5nJzpcbiAgICAgICAgJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLXRlc3RpbmcudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnOlxuICAgICAgICAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLXRlc3RpbmcudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9odHRwL3Rlc3RpbmcnOlxuICAgICAgICAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLXRlc3RpbmcudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3Rlc3RpbmcnOlxuICAgICAgICAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLXRlc3RpbmcudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvdGVzdGluZyc6XG4gICAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLXRlc3RpbmcudW1kLmpzJyxcbiAgICAgICdAYW5ndWxhci9yb3V0ZXIvdGVzdGluZyc6XG4gICAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLXRlc3RpbmcudW1kLmpzJyxcblxuICAgICAgJ2FwcC8nOiBgJHt0aGlzLkFQUF9CQVNFfWFwcC9gLFxuICAgICAgLy8gRm9yIHRlc3QgY29uZmlnXG4gICAgICAnZGlzdC9kZXYvJzogJy9iYXNlL2Rpc3QvZGV2LycsXG4gICAgICAnJzogJ25vZGVfbW9kdWxlcy8nLFxuICAgIH0sXG4gICAgcGFja2FnZXM6IHtcbiAgICAgIFt0aGlzLkJPT1RTVFJBUF9ESVJdOiB7XG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIG9mIFN5c3RlbUpTIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogUGVyIGRlZmF1bHQsIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBgZGV2YCBlbnZpcm9ubWVudCB3aWxsIGJlIHVzZWQuXG4gICAqIEB0eXBlIHthbnl9XG4gICAqL1xuICBTWVNURU1fQ09ORklHOiBhbnkgPSB0aGlzLlNZU1RFTV9DT05GSUdfREVWO1xuXG4gIC8qKlxuICAgKiBUaGUgc3lzdGVtIGJ1aWxkZXIgY29uZmlndXJhdGlvbiBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAqIEB0eXBlIHthbnl9XG4gICAqL1xuICBTWVNURU1fQlVJTERFUl9DT05GSUc6IGFueSA9IHtcbiAgICBkZWZhdWx0SlNFeHRlbnNpb25zOiB0cnVlLFxuICAgIGJhc2U6IHRoaXMuUFJPSkVDVF9ST09ULFxuICAgIHBhY2thZ2VDb25maWdQYXRoczogW1xuICAgICAgam9pbignbm9kZV9tb2R1bGVzJywgJyonLCAncGFja2FnZS5qc29uJyksXG4gICAgICBqb2luKCdub2RlX21vZHVsZXMnLCAnQGFuZ3VsYXInLCAnKicsICdwYWNrYWdlLmpzb24nKVxuICAgICAgLy8gZm9yIG90aGVyIG1vZHVsZXMgbGlrZSBAbmd4LXRyYW5zbGF0ZSB0aGUgcGFja2FnZS5qc29uIHBhdGggbmVlZHMgdG8gdXBkYXRlZCBoZXJlXG4gICAgICAvLyBvdGhlcndpc2UgbnBtIHJ1biBidWlsZC5wcm9kIHdvdWxkIGZhaWxcbiAgICAgIC8vIGpvaW4oJ25vZGVfbW9kdWxlcycsICdAbmd4LXRyYW5zbGF0ZScsICcqJywgJ3BhY2thZ2UuanNvbicpXG4gICAgXSxcbiAgICBwYXRoczoge1xuICAgICAgLy8gTm90ZSB0aGF0IGZvciBtdWx0aXBsZSBhcHBzIHRoaXMgY29uZmlndXJhdGlvbiBuZWVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgIC8vIFlvdSB3aWxsIGhhdmUgdG8gaW5jbHVkZSBlbnRyaWVzIGZvciBlYWNoIGluZGl2aWR1YWwgYXBwbGljYXRpb24gaW5cbiAgICAgIC8vIGBzcmMvY2xpZW50YC5cbiAgICAgIFtqb2luKHRoaXMuVE1QX0RJUiwgdGhpcy5CT09UU1RSQVBfRElSLCAnKicpXTogYCR7dGhpcy5UTVBfRElSfS8ke3RoaXNcbiAgICAgICAgLkJPT1RTVFJBUF9ESVJ9LypgLFxuICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc6XG4gICAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXItYW5pbWF0aW9ucy51bWQuanMnLFxuICAgICAgJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3Nlcic6XG4gICAgICAgICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvYW5pbWF0aW9ucy9idW5kbGVzL2FuaW1hdGlvbnMtYnJvd3Nlci51bWQuanMnLFxuICAgICAgJ2Rpc3QvdG1wL25vZGVfbW9kdWxlcy8qJzogJ2Rpc3QvdG1wL25vZGVfbW9kdWxlcy8qJyxcbiAgICAgICdub2RlX21vZHVsZXMvKic6ICdub2RlX21vZHVsZXMvKicsXG4gICAgICAnKic6ICdub2RlX21vZHVsZXMvKidcbiAgICB9LFxuICAgIHBhY2thZ2VzOiB7XG4gICAgICAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc6IHtcbiAgICAgICAgbWFpbjogJ2J1bmRsZXMvYW5pbWF0aW9ucy51bWQuanMnLFxuICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnXG4gICAgICB9LFxuICAgICAgJ0Bhbmd1bGFyL2NvbW1vbic6IHtcbiAgICAgICAgbWFpbjogJ2J1bmRsZXMvY29tbW9uLnVtZC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvY29tcGlsZXInOiB7XG4gICAgICAgIG1haW46ICdidW5kbGVzL2NvbXBpbGVyLnVtZC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJzoge1xuICAgICAgICBtYWluOiAnYnVuZGxlcy9jb3JlLXRlc3RpbmcudW1kLmpzJyxcbiAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xuICAgICAgfSxcbiAgICAgICdAYW5ndWxhci9jb3JlJzoge1xuICAgICAgICBtYWluOiAnYnVuZGxlcy9jb3JlLnVtZC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvZm9ybXMnOiB7XG4gICAgICAgIG1haW46ICdidW5kbGVzL2Zvcm1zLnVtZC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvaHR0cCc6IHtcbiAgICAgICAgbWFpbjogJ2J1bmRsZXMvaHR0cC51bWQuanMnLFxuICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnXG4gICAgICB9LFxuICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInOiB7XG4gICAgICAgIG1haW46ICdidW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzJyxcbiAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xuICAgICAgfSxcbiAgICAgICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnOiB7XG4gICAgICAgIG1haW46ICdidW5kbGVzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy51bWQuanMnLFxuICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnXG4gICAgICB9LFxuICAgICAgJ0Bhbmd1bGFyL3JvdXRlcic6IHtcbiAgICAgICAgbWFpbjogJ2J1bmRsZXMvcm91dGVyLnVtZC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInOiB7XG4gICAgICAgIG1haW46ICdidW5kbGVzL3NlcnZpY2Utd29ya2VyLnVtZC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH0sXG4gICAgICByeGpzOiB7XG4gICAgICAgIG1haW46ICdSeC5qcycsXG4gICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBBdXRvcHJlZml4ZXIgY29uZmlndXJhdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBCUk9XU0VSX0xJU1QgPSBbXG4gICAgJ2llID49IDEwJyxcbiAgICAnaWVfbW9iID49IDEwJyxcbiAgICAnZmYgPj0gMzAnLFxuICAgICdjaHJvbWUgPj0gMzQnLFxuICAgICdzYWZhcmkgPj0gNycsXG4gICAgJ29wZXJhID49IDIzJyxcbiAgICAnaW9zID49IDcnLFxuICAgICdhbmRyb2lkID49IDQuNCcsXG4gICAgJ2JiID49IDEwJ1xuICBdO1xuXG4gIC8qKlxuICAgKiBXaGl0ZSBsaXN0IGZvciBDU1MgY29sb3IgZ3VhcmRcbiAgICogQHR5cGUge1tzdHJpbmcsIHN0cmluZ11bXX1cbiAgICovXG4gIENPTE9SX0dVQVJEX1dISVRFX0xJU1Q6IFtzdHJpbmcsIHN0cmluZ11bXSA9IFtdO1xuXG4gIC8qKlxuICAqIEJyb3dzZXItc3luYyBtaWRkbGV3YXJlIGNvbmZpZ3VyYXRpb25zIGFycmF5LlxuICAqIEB0eXBlIHtBcnJheX1cbiAgKi9cbiAgUFJPWFlfTUlERExFV0FSRTogYW55W10gPSBbXTtcblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbnMgZm9yIE5QTSBtb2R1bGUgY29uZmlndXJhdGlvbnMuIEFkZCB0byBvciBvdmVycmlkZSBpbiBwcm9qZWN0LmNvbmZpZy50cy5cbiAgICogQHR5cGUge2FueX1cbiAgICovXG4gIFBMVUdJTl9DT05GSUdTOiBhbnkgPSB7fTtcblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBzdHJpbmcgd2hpY2ggc2hvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIFVSTHMgaW4gZGV2IG1vZGUuXG4gICAqL1xuICBRVUVSWV9TVFJJTkdfR0VORVJBVE9SID0gKCkgPT4ge1xuICAgIHJldHVybiBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJyYXkgb2YgaW5qZWN0YWJsZSBkZXBlbmRlbmNpZXMgKHRoZSBsaXN0IG9mIGxvY2FsIGZpbGVzIHRvIGJlIGluamVjdGVkIGluIHRoZSBgaW5kZXguaHRtbGApLlxuICAgKiBAcmV0dXJuIHtJbmplY3RhYmxlRGVwZW5kZW5jeVtdfVxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgX0FQUF9BU1NFVFMoKTogSW5qZWN0YWJsZURlcGVuZGVuY3lbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnRoaXMuQVBQX0FTU0VUUyxcbiAgICAgIHtcbiAgICAgICAgc3JjOiBgJHt0aGlzLkNTU19TUkN9LyR7dGhpc1xuICAgICAgICAgIC5DU1NfQlVORExFX05BTUV9LiR7dGhpcy5nZXRJbmplY3RhYmxlU3R5bGVFeHRlbnNpb24oKX1gLFxuICAgICAgICBpbmplY3Q6IHRydWUsXG4gICAgICAgIHZlbmRvcjogZmFsc2VcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBOUE0gbW9kdWxlIGNvbmZpZ3VyYXRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgX1BMVUdJTl9DT05GSUdTKCk6IGFueSB7XG4gICAgLyoqXG4gICAgICogVGhlIEJyb3dzZXJTeW5jIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqIFRoZSBkZWZhdWx0IG9wZW4gYmVoYXZpb3IgaXMgdG8gb3BlbiB0aGUgYnJvd3Nlci4gVG8gcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIG9wZW5pbmcgdXNlIHRoZSBgLS1iYCAgZmxhZyB3aGVuXG4gICAgICogcnVubmluZyBgbnBtIHN0YXJ0YCAodGVzdGVkIHdpdGggc2VydmUuZGV2KS5cbiAgICAgKiBFeGFtcGxlOiBgbnBtIHN0YXJ0IC0tIC0tYmBcbiAgICAgKiBAcmV0dXJuIHthbnl9XG4gICAgICovXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ2Jyb3dzZXItc3luYyc6IHtcbiAgICAgICAgbWlkZGxld2FyZTogW1xuICAgICAgICAgIHJlcXVpcmUoJ2Nvbm5lY3QtaGlzdG9yeS1hcGktZmFsbGJhY2snKSh7XG4gICAgICAgICAgICBpbmRleDogYCR7dGhpcy5BUFBfQkFTRX1pbmRleC5odG1sYFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIC4uLnRoaXMuUFJPWFlfTUlERExFV0FSRVxuICAgICAgICBdLFxuICAgICAgICBwb3J0OiB0aGlzLlBPUlQsXG4gICAgICAgIHN0YXJ0UGF0aDogdGhpcy5BUFBfQkFTRSxcbiAgICAgICAgb3BlbjogYXJndlsnYiddID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICBpbmplY3RDaGFuZ2VzOiBmYWxzZSxcbiAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgYmFzZURpcjogYCR7dGhpcy5ESVNUX0RJUn0vZW1wdHkvYCxcbiAgICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICAgIFtgJHt0aGlzLkFQUF9CQVNFfSR7dGhpcy5BUFBfU1JDfWBdOiB0aGlzLkFQUF9TUkMsXG4gICAgICAgICAgICBbYCR7dGhpcy5BUFBfQkFTRX0ke3RoaXMuQVBQX0RFU1R9YF06IHRoaXMuQVBQX0RFU1QsXG4gICAgICAgICAgICBbYCR7dGhpcy5BUFBfQkFTRX1ub2RlX21vZHVsZXNgXTogJ25vZGVfbW9kdWxlcycsXG4gICAgICAgICAgICBbYCR7dGhpcy5BUFBfQkFTRS5yZXBsYWNlKC9cXC8kLywgJycpfWBdOiB0aGlzLkFQUF9ERVNUXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyBOb3RlOiB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgbG9jYXRpb24gb2YgdGhlIGZpbGVcbiAgICAgICdlbnZpcm9ubWVudC1jb25maWcnOiBqb2luKHRoaXMuUFJPSkVDVF9ST09ULCB0aGlzLlRPT0xTX0RJUiwgJ2VudicpLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvcHRpb25zIHRvIHBhc3MgdG8gZ3VscC1zYXNzIChhbmQgdGhlbiB0byBub2RlLXNhc3MpLlxuICAgICAgICogUmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3Mjb3B0aW9uc1xuICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgJ2d1bHAtc2Fzcyc6IHtcbiAgICAgICAgaW5jbHVkZVBhdGhzOiBbJy4vbm9kZV9tb2R1bGVzLyddXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvcHRpb25zIHRvIHBhc3MgdG8gZ3VscC1jb25jYXQtY3NzXG4gICAgICAgKiBSZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJpb2Nhc2NpYXJvL2d1bHAtY29uY2F0LWNzc1xuICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgJ2d1bHAtY29uY2F0LWNzcyc6IHtcbiAgICAgICAgdGFyZ2V0RmlsZTogYCR7dGhpcy5DU1NfQlVORExFX05BTUV9LmNzc2AsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICByZWJhc2VVcmxzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubWVyZ2VPYmplY3QoZGVmYXVsdHMsIHRoaXMuUExVR0lOX0NPTkZJR1MpO1xuXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEthcm1hIHJlcG9ydGVyIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGdldEthcm1hUmVwb3J0ZXJzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXByb2Nlc3NvcnM6IHtcbiAgICAgICAgJ2Rpc3QvKiovISgqc3BlY3xpbmRleHwqLm1vZHVsZXwqLnJvdXRlcykuanMnOiBbJ2NvdmVyYWdlJ11cbiAgICAgIH0sXG4gICAgICByZXBvcnRlcnM6IFsnbW9jaGEnLCAnY292ZXJhZ2UnLCAna2FybWEtcmVtYXAtaXN0YW5idWwnXSxcbiAgICAgIGNvdmVyYWdlUmVwb3J0ZXI6IHtcbiAgICAgICAgZGlyOiB0aGlzLkNPVkVSQUdFX0RJUiArICcvJyxcbiAgICAgICAgcmVwb3J0ZXJzOiBbXG4gICAgICAgICAgeyB0eXBlOiAnanNvbicsIHN1YmRpcjogJy4nLCBmaWxlOiAnY292ZXJhZ2UtZmluYWwuanNvbicgfSxcbiAgICAgICAgICB7IHR5cGU6ICdodG1sJywgc3ViZGlyOiAnLicgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgcmVtYXBJc3RhbmJ1bFJlcG9ydGVyOiB7XG4gICAgICAgIHJlcG9ydHM6IHtcbiAgICAgICAgICBodG1sOiB0aGlzLkNPVkVSQUdFX1RTX0RJUlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBtZXJnZSBzb3VyY2Ugb250byB0YXJnZXQuXG4gICAqIEBwYXJhbSB7YW55fSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3QgKHRvIHJlY2VpdmUgdmFsdWVzIGZyb20gc291cmNlKVxuICAgKiBAcGFyYW0ge2FueX0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0ICh0byBiZSBtZXJnZWQgb250byB0YXJnZXQpXG4gICAqL1xuICBtZXJnZU9iamVjdCh0YXJnZXQ6IGFueSwgc291cmNlOiBhbnkpIHtcbiAgICBjb25zdCBkZWVwRXh0ZW5kID0gcmVxdWlyZSgnZGVlcC1leHRlbmQnKTtcbiAgICBkZWVwRXh0ZW5kKHRhcmdldCwgc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NhdGUgYSBwbHVnaW4gY29uZmlndXJhdGlvbiBvYmplY3QgYnkgcGx1Z2luIGtleS5cbiAgICogQHBhcmFtIHthbnl9IHBsdWdpbktleSBUaGUgb2JqZWN0IGtleSB0byBsb29rIHVwIGluIFBMVUdJTl9DT05GSUdTLlxuICAgKi9cbiAgZ2V0UGx1Z2luQ29uZmlnKHBsdWdpbktleTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodGhpcy5fUExVR0lOX0NPTkZJR1NbcGx1Z2luS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX1BMVUdJTl9DT05GSUdTW3BsdWdpbktleV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0SW5qZWN0YWJsZVN0eWxlRXh0ZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLkJVSUxEX1RZUEUgPT09IEJVSUxEX1RZUEVTLlBST0RVQ1RJT04gJiYgdGhpcy5FTkFCTEVfU0NTU1xuICAgICAgPyAnc2NzcydcbiAgICAgIDogJ2Nzcyc7XG4gIH1cblxuICBhZGRQYWNrYWdlQnVuZGxlcyhwYWNrOiBFeHRlbmRQYWNrYWdlcykge1xuICAgIGlmIChwYWNrLnBhdGgpIHtcbiAgICAgIHRoaXMuU1lTVEVNX0NPTkZJR19ERVYucGF0aHNbcGFjay5uYW1lXSA9IHBhY2sucGF0aDtcbiAgICAgIHRoaXMuU1lTVEVNX0JVSUxERVJfQ09ORklHLnBhdGhzW3BhY2submFtZV0gPSBwYWNrLnBhdGg7XG4gICAgfVxuXG4gICAgaWYgKHBhY2sucGFja2FnZU1ldGEpIHtcbiAgICAgIHRoaXMuU1lTVEVNX0NPTkZJR19ERVYucGFja2FnZXNbcGFjay5uYW1lXSA9IHBhY2sucGFja2FnZU1ldGE7XG4gICAgICB0aGlzLlNZU1RFTV9CVUlMREVSX0NPTkZJRy5wYWNrYWdlc1twYWNrLm5hbWVdID0gcGFjay5wYWNrYWdlTWV0YTtcbiAgICB9XG4gIH1cblxuICBhZGRQYWNrYWdlc0J1bmRsZXMocGFja3M6IEV4dGVuZFBhY2thZ2VzW10pIHtcbiAgICBwYWNrcy5mb3JFYWNoKChwYWNrOiBFeHRlbmRQYWNrYWdlcykgPT4ge1xuICAgICAgdGhpcy5hZGRQYWNrYWdlQnVuZGxlcyhwYWNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICogQ29udmVydCBuYW1lZCByb2xsdXAgYXJyYXkgdG8gb2JqZWN0XG4gKi9cbiAgZ2V0Um9sbHVwTmFtZWRFeHBvcnRzKCkge1xuICAgIGxldCBuYW1lZEV4cG9ydHMgPSB7fTtcbiAgICB0aGlzLlJPTExVUF9OQU1FRF9FWFBPUlRTLm1hcChuYW1lZEV4cG9ydCA9PiB7XG4gICAgICBuYW1lZEV4cG9ydHMgPSBPYmplY3QuYXNzaWduKG5hbWVkRXhwb3J0cywgbmFtZWRFeHBvcnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBuYW1lZEV4cG9ydHM7XG4gIH1cbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBgZGVwc2AgdG8gc2tpcCBnbG9icy5cbiAqIEBwYXJhbSB7SW5qZWN0YWJsZURlcGVuZGVuY3lbXX0gZGVwcyAtIFRoZSBkZXBlbmRlbmNpZXMgdG8gYmUgbm9ybWFsaXplZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZURlcGVuZGVuY2llcyhkZXBzOiBJbmplY3RhYmxlRGVwZW5kZW5jeVtdKSB7XG4gIGRlcHNcbiAgICAuZmlsdGVyKChkOiBJbmplY3RhYmxlRGVwZW5kZW5jeSkgPT4gIS9cXCovLnRlc3QoZC5zcmMpKSAvLyBTa2lwIGdsb2JzXG4gICAgLmZvckVhY2goKGQ6IEluamVjdGFibGVEZXBlbmRlbmN5KSA9PiAoZC5zcmMgPSByZXF1aXJlLnJlc29sdmUoZC5zcmMpKSk7XG4gIHJldHVybiBkZXBzO1xufVxuXG4vKipcbiAqIFJldHVybnMgaWYgdGhlIGdpdmVuIGRlcGVuZGVuY3kgaXMgdXNlZCBpbiB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQuXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICAgZW52IC0gVGhlIGVudmlyb25tZW50IHRvIGJlIGZpbHRlcmVkIGZvci5cbiAqIEBwYXJhbSAge0luamVjdGFibGVEZXBlbmRlbmN5fSBkICAgLSBUaGUgZGVwZW5kZW5jeSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICBgdHJ1ZWAgaWYgdGhlIGRlcGVuZGVuY3kgaXMgdXNlZCBpbiB0aGlzIGVudmlyb25tZW50LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyRGVwZW5kZW5jeSh0eXBlOiBzdHJpbmcsIGQ6IEluamVjdGFibGVEZXBlbmRlbmN5KTogYm9vbGVhbiB7XG4gIGNvbnN0IHQgPSBkLmJ1aWxkVHlwZSB8fCBkLmVudjtcbiAgZC5idWlsZFR5cGUgPSB0O1xuICBpZiAoIXQpIHtcbiAgICBkLmJ1aWxkVHlwZSA9IE9iamVjdC5rZXlzKEJVSUxEX1RZUEVTKS5tYXAoayA9PiBCVUlMRF9UWVBFU1trXSk7XG4gIH1cbiAgaWYgKCEoZC5idWlsZFR5cGUgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAoPGFueT5kKS5lbnYgPSBbZC5idWlsZFR5cGVdO1xuICB9XG4gIHJldHVybiBkLmJ1aWxkVHlwZS5pbmRleE9mKHR5cGUpID49IDA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXBwbGljYXRpb25zIHZlcnNpb24gYXMgZGVmaW5lZCBpbiB0aGUgYHBhY2thZ2UuanNvbmAuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhcHBsaWNhdGlvbnMgdmVyc2lvbi5cbiAqL1xuZnVuY3Rpb24gYXBwVmVyc2lvbigpOiBudW1iZXIgfCBzdHJpbmcge1xuICB2YXIgcGtnID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XG4gIHJldHVybiBwa2cudmVyc2lvbjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcHBsaWNhdGlvbiBidWlsZCB0eXBlLlxuICovXG5mdW5jdGlvbiBnZXRCdWlsZFR5cGUoKSB7XG4gIGxldCB0eXBlID0gKGFyZ3ZbJ2J1aWxkLXR5cGUnXSB8fCBhcmd2WydlbnYnXSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgbGV0IGJhc2U6IHN0cmluZ1tdID0gYXJndlsnXyddO1xuICBsZXQgcHJvZEtleXdvcmQgPSAhIWJhc2VcbiAgICAuZmlsdGVyKG8gPT4gby5pbmRleE9mKEJVSUxEX1RZUEVTLlBST0RVQ1RJT04pID49IDApXG4gICAgLnBvcCgpO1xuICBpZiAoKGJhc2UgJiYgcHJvZEtleXdvcmQpIHx8IHR5cGUgPT09IEJVSUxEX1RZUEVTLlBST0RVQ1RJT04pIHtcbiAgICByZXR1cm4gQlVJTERfVFlQRVMuUFJPRFVDVElPTjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQlVJTERfVFlQRVMuREVWRUxPUE1FTlQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U21lT3V0Rm9ybWF0KCkge1xuICBsZXQgZm9ybWF0ID0gKGFyZ3ZbJ3NtZS1vdXQtZm9ybWF0J10gfHwgJycpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiBTTUVfT1VUUFVUX0ZPUk1BVFNbZm9ybWF0XSB8fCBTTUVfT1VUUFVUX0ZPUk1BVFMuSFRNTDtcbn1cbiJdfQ==
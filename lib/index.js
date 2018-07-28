"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var css_1 = require("./css");
var utils_1 = require("./utils");
(function (x) { return x; });
var blankAsString = function (x) {
    x.toString = function () { return ''; };
    return x;
};
var st = function (styleMap) { return (__assign({}, styleMap[''], { defaults: blankAsString(function () {
        var styleTrees = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            styleTrees[_i] = arguments[_i];
        }
        return st(utils_1.mergeMaps.apply(void 0, styleTrees.map(utils_1.treeToMap).concat([styleMap])));
    }), expandFor: blankAsString(function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        return st(__assign({}, styleMap, { '': css_1.default.expandFor.apply(css_1.default, [styleMap['']].concat(props)) }));
    }), filter: blankAsString(function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        return st(__assign({}, styleMap, { '': css_1.default.filter.apply(css_1.default, [styleMap['']].concat(props)) }));
    }), map: blankAsString(function (map) { return st(__assign({}, styleMap, { '': map(styleMap['']) })); }), merge: blankAsString(function () {
        var styleTrees = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            styleTrees[_i] = arguments[_i];
        }
        return st(utils_1.mergeMaps.apply(void 0, [styleMap].concat(styleTrees.map(utils_1.treeToMap))));
    }), mergeKeys: blankAsString(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var keys = utils_1.isObject(args[0])
            ? Object.keys(args[0]).filter(function (k) { return args[0][k]; })
            : args;
        return st(Object.keys(styleMap)
            .map(function (k) { return ({
            split: k ? k.split('.') : [],
            style: styleMap[k],
        }); })
            .sort(function (a, b) { return a.split.length - b.split.length; })
            .map(function (_a) {
            var split = _a.split, style = _a.style;
            return ({
                newKey: split.filter(function (k) { return !keys.includes(k); }).join('.'),
                style: style,
            });
        })
            .reduce(function (res, _a) {
            var newKey = _a.newKey, style = _a.style;
            var _b;
            return (__assign({}, res, (_b = {}, _b[newKey] = css_1.default.merge(res[newKey], style), _b)));
        }, {}));
    }), numeric: blankAsString(function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        var result = css_1.default.expandFor.apply(css_1.default, [styleMap['']].concat(props));
        for (var _a = 0, props_1 = props; _a < props_1.length; _a++) {
            var k = props_1[_a];
            result[k] = parseFloat(result[k] || 0);
        }
        return st(__assign({}, styleMap, { '': result }));
    }), scale: blankAsString(function (scales) {
        if (scales === void 0) { scales = {}; }
        return st(__assign({}, styleMap, { '': css_1.default.scale(styleMap[''], scales) }));
    }) })); };
exports.default = (function (style) {
    return style && style.expandFor ? style : st(utils_1.treeToMap(style));
});

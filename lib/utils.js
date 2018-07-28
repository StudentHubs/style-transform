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
var immutable = require("object-path-immutable");
var css_1 = require("./css");
(function (x) { return x; });
exports.undefOrNull = function (x) { return x === null || x === undefined; };
exports.isObject = function (v) {
    return Object.prototype.toString.call(v) === '[object Object]';
};
exports.flatten = function (array) {
    return array.reduce(function (res, v) { return res.concat(v || []); }, []);
};
var uniqueFromArray = function (array) { return Array.from(new Set(array)); };
exports.unique = function (array) {
    return uniqueFromArray(exports.flatten(array));
};
exports.mapToTree = function (styleMap) {
    var branchStyles = {};
    for (var _i = 0, _a = Object.keys(styleMap); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k !== '') {
            branchStyles = immutable.set(branchStyles, k, styleMap[k]);
        }
    }
    return __assign({}, styleMap[''], branchStyles);
};
exports.treeToMap = function (styleTree) {
    if (!styleTree)
        return { '': {} };
    var result = { '': {} };
    for (var _i = 0, _a = Object.keys(styleTree); _i < _a.length; _i++) {
        var p = _a[_i];
        if (exports.isObject(styleTree[p])) {
            var flat = exports.treeToMap(styleTree[p]);
            for (var _b = 0, _c = Object.keys(flat); _b < _c.length; _b++) {
                var k = _c[_b];
                var key = k === '' ? p : p.split('.').concat([k]).sort().join('.');
                if (result[key] || Object.keys(flat[k]).length > 0) {
                    result[key] = css_1.default.merge(result[key], flat[k]);
                }
            }
        }
        else {
            result[''][p] = styleTree[p];
        }
    }
    return result;
};
exports.mergeMaps = function () {
    var styleMaps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleMaps[_i] = arguments[_i];
    }
    var keys = exports.unique(styleMaps.map(function (m) { return Object.keys(m); }));
    return keys.reduce(function (res, k) {
        var _a;
        return (__assign({}, res, (_a = {}, _a[k] = css_1.default.merge.apply(css_1.default, styleMaps.map(function (m) { return m[k]; })), _a)));
    }, {});
};

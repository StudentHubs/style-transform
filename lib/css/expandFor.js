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
var utils_1 = require("../utils");
var expandProp_1 = require("./expandProp");
var shorthands_1 = require("./shorthands");
var orders = {
    border: 1,
    borderWidth: 2,
    borderStyle: 2,
    borderColor: 2,
    borderTop: 3,
    borderRight: 3,
    borderBottom: 3,
    borderLeft: 3,
};
function expandFor(style) {
    if (style === void 0) { style = {}; }
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    var shorthands = utils_1.unique(props.map(function (p) { return shorthands_1.longToShort[p]; }));
    var expanded = Object.assign.apply(Object, [{}].concat(shorthands
        .sort(function (a, b) { return (orders[a] || 0) - (orders[b] || 0); })
        .map(function (p) { return expandProp_1.default(style, p); })));
    return Array.from(new Set(Object.keys(style).concat(Object.keys(expanded))))
        .map(function (k) { return ({
        key: k,
        value: utils_1.undefOrNull(style[k]) ? expanded[k] : style[k],
    }); })
        .filter(function (_a) {
        var key = _a.key, value = _a.value;
        return !shorthands.includes(key) && !utils_1.undefOrNull(value);
    })
        .reduce(function (res, _a) {
        var key = _a.key, value = _a.value;
        var _b;
        return (__assign({}, res, (_b = {}, _b[key] = value, _b)));
    }, {});
}
exports.default = expandFor;

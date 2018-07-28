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
var expandFor_1 = require("./expandFor");
var shorthands_1 = require("./shorthands");
function filter(style) {
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    if (!style)
        return {};
    var expanded = expandFor_1.default.apply(void 0, [style].concat(props));
    return utils_1.unique(props.map(function (p) { return [p].concat((shorthands_1.shortToLong[p] || [])); }))
        .filter(function (p) { return !utils_1.undefOrNull(expanded[p]); })
        .reduce(function (res, p) {
        var _a;
        return (__assign({}, res, (_a = {}, _a[p] = expanded[p], _a)));
    }, {});
}
exports.default = filter;

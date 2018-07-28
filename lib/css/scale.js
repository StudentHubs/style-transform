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
var dirProps = {
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    borderWidth: [
        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderLeftWidth',
    ],
};
var round = function (value) {
    return value > 0 ? Math.round(value) : -Math.round(-value);
};
function scale(style, scales) {
    var scaleProps = Object.keys(scales);
    var allProps = utils_1.unique(scaleProps.concat(utils_1.flatten(scaleProps
        .filter(function (k) { return utils_1.isObject(scales[k]); })
        .map(function (k) { return Object.keys(scales[k]); }))).map(function (k) { return dirProps[k] || k; }));
    if (allProps.includes('lineHeight'))
        allProps.push('fontSize');
    var expanded = expandFor_1.default.apply(void 0, [style].concat(allProps));
    var result = __assign({}, expanded);
    if (typeof expanded.lineHeight === 'number') {
        expanded.lineHeight = expanded.lineHeight *
            parseFloat(expanded.fontSize) + "px";
    }
    var _loop_1 = function (key) {
        if (!dirProps[key]) {
            if (typeof scales[key] === 'number') {
                result[key] = round(parseFloat(expanded[key] || 0) * scales[key]);
            }
            else {
                result[key] = round(Object.keys(scales[key]).reduce(function (res, k) { return res + parseFloat(expanded[k] || 0) * scales[key][k]; }, 0));
            }
            if (key === 'lineHeight')
                result[key] += 'px';
        }
        else {
            dirProps[key].forEach(function (p, i) {
                if (typeof scales[key] === 'number') {
                    result[p] = round(parseFloat(expanded[p] || 0) * scales[key]);
                }
                else {
                    result[p] = round(Object.keys(scales[key]).reduce(function (res, k) {
                        return res +
                            parseFloat(expanded[dirProps[k] ? dirProps[k][i] : k] || 0) *
                                scales[key][k];
                    }, 0));
                }
            });
        }
    };
    for (var _i = 0, scaleProps_1 = scaleProps; _i < scaleProps_1.length; _i++) {
        var key = scaleProps_1[_i];
        _loop_1(key);
    }
    return result;
}
exports.default = scale;

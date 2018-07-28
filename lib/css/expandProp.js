"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cssExpand = require("css-shorthand-expand");
var utils_1 = require("../utils");
var toString = function (x) {
    if (utils_1.undefOrNull(x))
        return '';
    return typeof x === 'number' ? x + "px" : x;
};
function expandProp(style, property) {
    var value = style[property];
    if (utils_1.undefOrNull(value))
        return {};
    var expanded = {};
    if (property === 'borderRadius') {
        var split = typeof value === 'string' ? value.split(/\s+/) : [value];
        expanded.borderTopLeftRadius = split[0];
        expanded.borderTopRightRadius = split[1] || split[0];
        expanded.borderBottomRightRadius = split[2] || split[0];
        expanded.borderBottomLeftRadius = split[3] || split[1] || split[0];
    }
    else {
        var kebabProp = property.replace(/([a-z][A-Z])/g, function (g) { return g[0] + "-" + g[1].toLowerCase(); });
        var kebabExpanded_1 = cssExpand(kebabProp, toString(value));
        Object.keys(kebabExpanded_1).forEach(function (p) {
            var camelProp = p.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
            expanded[camelProp] =
                typeof value === 'number'
                    ? parseFloat(kebabExpanded_1[p])
                    : kebabExpanded_1[p];
        });
    }
    return expanded;
}
exports.default = expandProp;

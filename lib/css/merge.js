"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var expandFor_1 = require("./expandFor");
function merge() {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    var expandProps = utils_1.unique(styles.map(function (s) { return Object.keys(s || {}); }));
    return Object.assign.apply(Object, [{}].concat(styles.map(function (s) { return expandFor_1.default.apply(void 0, [s].concat(expandProps)); })));
}
exports.default = merge;

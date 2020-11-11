"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xirr = void 0;
var irr_1 = require("../irr");
var root_finder_1 = require("../../root-finder");
var transform_1 = require("../transform");
var utils_1 = require("../../utils");
function xirr(inputs, options) {
    if (options === void 0) { options = root_finder_1.DEFAULT_ROOT_FINDER_OPTIONS; }
    var transformedInputs = transform_1.transform(inputs);
    var days = transformedInputs.map(function (input) { return input.day; });
    var firstDay = Math.min.apply(Math, days);
    var lastDay = Math.max.apply(Math, days);
    var totalDays = lastDay - firstDay + 1;
    var coefficients = utils_1.zeros(totalDays);
    transformedInputs.forEach(function (_a) {
        var amount = _a.amount, day = _a.day;
        return coefficients[day] += amount;
    });
    return {
        days: totalDays,
        rate: irr_1.irr(coefficients, options),
    };
}
exports.xirr = xirr;

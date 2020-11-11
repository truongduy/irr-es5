"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRate = exports.RateInterval = void 0;
var RateInterval;
(function (RateInterval) {
    RateInterval["Day"] = "day";
    RateInterval["Week"] = "week";
    RateInterval["Month"] = "month";
    RateInterval["Year"] = "year";
})(RateInterval = exports.RateInterval || (exports.RateInterval = {}));
function parseInterval(interval) {
    switch (interval) {
        case RateInterval.Day:
            return 1;
        case RateInterval.Week:
            return 7;
        case RateInterval.Month:
            return 30;
        case RateInterval.Year:
            return 365;
    }
    return interval;
}
function convertRate(rate, toInterval, fromInterval) {
    if (fromInterval === void 0) { fromInterval = RateInterval.Day; }
    return Math.pow((1 + rate), (parseInterval(toInterval) / parseInterval(fromInterval))) - 1;
}
exports.convertRate = convertRate;

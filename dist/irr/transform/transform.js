"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
var DATE_PATTERNS = [
    /^(\d{4})[-/]?(\d{2})[-/]?(\d{2})$/,
];
var DAYS_TO_MS = 24 * 60 * 60 * 1000;
function calculateDaysBetweenStrict(_from, _to) {
    var fromDays = Math.floor(_from.valueOf() / DAYS_TO_MS);
    var toDays = Math.floor(_to.valueOf() / DAYS_TO_MS);
    return toDays - fromDays;
}
function parseDate(date) {
    if (date instanceof Date) {
        return date;
    }
    var pattern = DATE_PATTERNS.find(function (pattern) { return pattern.test(date); });
    if (!pattern) {
        throw new Error("Invalid date pattern: " + date);
    }
    var _a = date.match(pattern), year = _a[1], month = _a[2], day = _a[3];
    return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
}
function calculateDaysBetween(from, to) {
    return calculateDaysBetweenStrict(parseDate(from), parseDate(to));
}
function transform(inputs) {
    if (inputs.length === 0) {
        return [];
    }
    var date = inputs[0].date;
    var transformedInputs = inputs.map(function (input) { return ({
        amount: input.amount,
        day: calculateDaysBetween(date, input.date),
    }); });
    var firstDay = Math.min.apply(Math, transformedInputs.map(function (_a) {
        var day = _a.day;
        return day;
    }));
    if (firstDay !== 0) {
        transformedInputs.forEach(function (_, index) { return transformedInputs[index].day -= firstDay; });
    }
    return transformedInputs;
}
exports.transform = transform;

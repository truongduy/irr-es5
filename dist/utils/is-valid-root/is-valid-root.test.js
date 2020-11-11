"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var is_valid_root_1 = require("./is-valid-root");
describe('isValidRoot', function () {
    var cases = [
        [5, true],
        [0.01, true],
        [NaN, false],
        [Infinity, false],
        [-Infinity, false],
        [-0.01, false],
        [-5, false],
    ];
    cases.forEach(function (_a) {
        var input = _a[0], expected = _a[1];
        it(input + " -> " + expected, function () {
            chai_1.expect(is_valid_root_1.isValidRoot(input)).to.equal(expected);
        });
    });
});

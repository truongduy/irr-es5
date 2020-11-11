"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var line_1 = require("./line");
describe('Line', function () {
    describe('#calculate', function () {
        var cases = [
            [1, 1, 5],
            [2, 7, 3],
            [9, -1, -1],
            [9, 2, -2],
            [7, -3, -4],
        ];
        cases.forEach(function (_a) {
            var m = _a[0], k = _a[1], x = _a[2];
            var value = m * x + k;
            it("[" + m + ", " + k + "](" + x + ") -> " + value, function () {
                var line = new line_1.Line(m, k);
                chai_1.expect(line.calculate(x)).to.equal(value);
            });
        });
    });
    describe('#findRoot', function () {
        var cases = [
            [1, 1],
            [2, 7],
            [9, -1],
            [9, 2],
            [7, -3],
        ];
        cases.forEach(function (_a) {
            var m = _a[0], k = _a[1];
            var root = -k / m;
            it("[" + m + ", " + k + "] -> " + root, function () {
                var line = new line_1.Line(m, k);
                chai_1.expect(line.findRoot().value).to.equal(root);
            });
        });
    });
    describe('#getK', function () {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        it('reads k correctly', function () {
            cases.forEach(function (k) {
                var line = new line_1.Line(-1, k);
                chai_1.expect(line.getK()).to.equal(k);
            });
        });
    });
    describe('#getM', function () {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        it('reads m correctly', function () {
            cases.forEach(function (m) {
                var line = new line_1.Line(m, -1);
                chai_1.expect(line.getM()).to.equal(m);
            });
        });
    });
});

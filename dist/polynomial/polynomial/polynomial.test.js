"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var polynomial_1 = require("./polynomial");
describe('Polynomial', function () {
    describe('#calculate', function () {
        describe('[1, 1, 5]', function () {
            var polynomial = new polynomial_1.Polynomial([1, 1, 5]);
            var cases = [
                [1, 7],
                [10, 115],
                [100, 10105],
            ];
            cases.forEach(function (_a) {
                var x = _a[0], y = _a[1];
                it("x = " + x + ", f(x) = " + y, function () {
                    chai_1.expect(polynomial.calculate(x)).to.equal(y);
                });
            });
        });
        describe('[2, 0, 4, 0, 2, 3]', function () {
            var polynomial = new polynomial_1.Polynomial([2, 0, 4, 0, 2, 3]);
            var cases = [
                [1, 11],
                [2, 103],
                [4, 2315],
            ];
            cases.forEach(function (_a) {
                var x = _a[0], y = _a[1];
                it("x = " + x + ", f(x) = " + y, function () {
                    chai_1.expect(polynomial.calculate(x)).to.equal(y);
                });
            });
        });
    });
    describe('#differenciate', function () {
        var cases = [
            [
                [1, 2],
                [1],
            ],
            [
                [3, 4, 5],
                [6, 4],
            ],
            [
                [6, 7, 8, 9],
                [18, 14, 8],
            ],
        ];
        cases.forEach(function (_a) {
            var coefficients = _a[0], derivativeCoefficients = _a[1];
            it("[" + coefficients.join(', ') + "] -> [" + derivativeCoefficients.join(', ') + "]", function () {
                var polynomial = new polynomial_1.Polynomial(coefficients);
                var derivative = polynomial.differentiate();
                chai_1.expect(derivative.getCoefficients()).to.deep.equal(derivativeCoefficients);
            });
        });
    });
    describe('#getCoefficients', function () {
        var cases = [
            [1],
            [2, 3],
            [4, 5, 6],
        ];
        it('returns correct coefficients', function () {
            cases.forEach(function (coefficients) {
                var polynomial = new polynomial_1.Polynomial(coefficients);
                chai_1.expect(polynomial.getCoefficients()).to.deep.equal(coefficients);
            });
        });
    });
    describe('#getTangentAt', function () {
        var cases = [
            [
                [-1, 0, 1],
                0,
                [0, 1],
            ],
            [
                [3, 2, 1],
                1,
                [8, -2],
            ],
            [
                [4, -3, -2, 1, 4, 7],
                -1,
                [28, 27],
            ],
        ];
        cases.forEach(function (_a) {
            var coefficients = _a[0], x = _a[1], _b = _a[2], m = _b[0], k = _b[1];
            it("[" + coefficients.join(', ') + "](" + x + ") -> [" + m + ", " + k + "]", function () {
                var polynomial = new polynomial_1.Polynomial(coefficients);
                var tangent = polynomial.getTangentAt(x);
                chai_1.expect(tangent.getM()).to.equal(m);
                chai_1.expect(tangent.getK()).to.equal(k);
            });
        });
    });
});

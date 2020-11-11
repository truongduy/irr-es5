"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polynomial = void 0;
var root_finder_1 = require("../../root-finder");
var line_1 = require("../line");
var Polynomial = /** @class */ (function () {
    function Polynomial(coefficients) {
        this.coefficients = coefficients;
        this.derivative = null;
    }
    Polynomial.prototype.getDegree = function () {
        return this.coefficients.length - 1;
    };
    Polynomial.prototype.calculate = function (x) {
        var degree = this.getDegree();
        var accumulatedX = 1;
        var result = 0;
        for (var index = degree; index >= 0; index--) {
            accumulatedX = parseFloat(accumulatedX.toString().replace(/e\+308|e\+307/, 'e+306').replace(/e\-308|e\-307/, 'e-306'));
            result += accumulatedX * this.coefficients[index];
            accumulatedX *= x;
        }
        return result;
    };
    Polynomial.prototype.differentiate = function () {
        if (this.derivative) {
            return this.derivative;
        }
        var degree = this.getDegree();
        var coefficients = [];
        this.coefficients.forEach(function (coefficient, index) {
            if (index === degree) {
                return;
            }
            coefficients.push(coefficient * (degree - index));
        });
        return this.derivative = new Polynomial(coefficients);
    };
    Polynomial.prototype.findRoot = function (options) {
        options = Object.assign({}, root_finder_1.DEFAULT_ROOT_FINDER_OPTIONS, options);
        var factory = new root_finder_1.RootFinderFactory(options);
        var finder = factory.make(options.method);
        var root = finder.findRoot(this);
        if (options.fallbackMethod
            && !root.converged
            && options.method !== options.fallbackMethod) {
            var fallbackFinder = factory.make(options.fallbackMethod);
            return fallbackFinder.findRoot(this);
        }
        return root;
    };
    Polynomial.prototype.getCoefficients = function () {
        return this.coefficients;
    };
    Polynomial.prototype.getTangentAt = function (x) {
        var derivative = this.differentiate();
        var m = derivative.calculate(x);
        var k = this.calculate(x) - m * x;
        return new line_1.Line(m, k);
    };
    return Polynomial;
}());
exports.Polynomial = Polynomial;

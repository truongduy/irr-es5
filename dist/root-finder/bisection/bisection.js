"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BisectionRootFinder = void 0;
var utils_1 = require("../../utils");
var BisectionRootFinder = /** @class */ (function () {
    function BisectionRootFinder(options) {
        this.options = options;
    }
    BisectionRootFinder.prototype.findUpperLimit = function (polynomial) {
        var maxIterations = this.options.maxIterations;
        var iteration = 0;
        var result = 1;
        while (iteration++ < maxIterations) {
            var calculated = polynomial.calculate(result);
            if (calculated < 0) {
                return result;
            }
            result *= 2;
        }
        return NaN;
    };
    BisectionRootFinder.prototype.findRoot = function (polynomial) {
        var upperLimit = this.findUpperLimit(polynomial);
        if (!utils_1.isValidRoot(upperLimit)) {
            return {
                converged: false,
                iterations: 0,
                value: NaN,
            };
        }
        var limits = [0, upperLimit];
        var epsilon = this.options.epsilon;
        var maxIterations = this.options.maxIterations;
        var iteration = 0;
        var result = 0;
        while (iteration++ < maxIterations) {
            var delta = Math.abs(limits[0] - limits[1]);
            result = (limits[0] + limits[1]) / 2;
            if (delta < epsilon) {
                return {
                    converged: true,
                    iterations: iteration,
                    value: result,
                };
            }
            var calculated = polynomial.calculate(result);
            if (calculated < 0) {
                limits[1] = result;
            }
            else {
                limits[0] = result;
            }
        }
        return {
            converged: false,
            iterations: iteration - 1,
            value: result,
        };
    };
    return BisectionRootFinder;
}());
exports.BisectionRootFinder = BisectionRootFinder;

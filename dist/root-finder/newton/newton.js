"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewtonRootFinder = void 0;
var utils_1 = require("../../utils");
var NewtonRootFinder = /** @class */ (function () {
    function NewtonRootFinder(options) {
        this.options = options;
    }
    NewtonRootFinder.prototype.autoEstimate = function (polynomial) {
        var coefficients = polynomial.getCoefficients();
        var length = coefficients.length;
        var positive = 0;
        var negative = 0;
        coefficients.forEach(function (coefficient) {
            if (coefficient > 0) {
                positive += coefficient;
            }
            else {
                negative -= coefficient;
            }
        });
        return ((positive / negative) - 1) / length + 1;
    };
    NewtonRootFinder.prototype.findRoot = function (polynomial) {
        var epsilon = this.options.epsilon;
        var estimate = this.options.estimate;
        var maxIterations = this.options.maxIterations;
        var iteration = 0;
        var root = estimate === 'auto'
            ? this.autoEstimate(polynomial)
            : estimate;
        while (iteration++ < maxIterations) {
            var tangent = polynomial.getTangentAt(root);
            var newRoot = tangent.findRoot().value;
            var delta = Math.abs(newRoot - root);
            root = newRoot;
            if (delta < epsilon) {
                return {
                    converged: true,
                    iterations: iteration,
                    value: root,
                };
            }
            if (!utils_1.isValidRoot(root)) {
                return {
                    converged: false,
                    iterations: iteration,
                    value: root,
                };
            }
        }
        return {
            converged: false,
            iterations: iteration - 1,
            value: root,
        };
    };
    return NewtonRootFinder;
}());
exports.NewtonRootFinder = NewtonRootFinder;

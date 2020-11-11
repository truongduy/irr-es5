"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var factory_1 = require("../factory");
var definition_1 = require("../definition");
var polynomial_1 = require("../../polynomial");
var utils_1 = require("../../utils");
var createRootFinder = function (options) {
    var factory = new factory_1.RootFinderFactory(options);
    var instance = factory.make(definition_1.RootFinderMethod.Newton);
    return instance;
};
describe('NewtonRootFinder', function () {
    describe('#findRoot', function () {
        var cases = [
            [
                [-10, -10, 21],
                {
                    epsilon: 1e-8,
                    estimate: 'auto',
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 3,
                    value: 1.0329709716755893,
                },
            ],
            [
                [-10, -10, 15],
                {
                    epsilon: 1e-100,
                    estimate: 'auto',
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 5,
                    value: 0.8228756555322954,
                },
            ],
            [
                [-10, -10, 15],
                {
                    epsilon: 1e-100,
                    estimate: 'auto',
                    maxIterations: 4,
                },
                {
                    converged: false,
                    iterations: 4,
                    value: 0.8228756555322954,
                },
            ],
            [
                [-1, 1, -1, 1, -1, 1, -1, 1, 1],
                {
                    epsilon: 1e-8,
                    estimate: 'auto',
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 6,
                    value: 1.1411796348542165,
                },
            ],
            [
                __spreadArrays([-10], utils_1.zeros(29), [5], utils_1.zeros(28), [0.1]),
                {
                    epsilon: 1e-8,
                    estimate: 'auto',
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 6,
                    value: 0.9783664859233557,
                },
            ],
            [
                __spreadArrays([-10], utils_1.zeros(29), [5], utils_1.zeros(28), [0.1]),
                {
                    epsilon: 1e-8,
                    estimate: 0.5,
                    maxIterations: 1000,
                },
                {
                    converged: false,
                    iterations: 1,
                    value: -185127.41863258032,
                },
            ],
        ];
        cases.forEach(function (_a, index) {
            var coefficients = _a[0], options = _a[1], expected = _a[2];
            it("passes case #" + (index + 1), function () {
                var epsilon = options.epsilon;
                var finder = createRootFinder(options);
                var polynomial = new polynomial_1.Polynomial(coefficients);
                var root = finder.findRoot(polynomial);
                chai_1.expect(root).to.deep.equal(expected);
                if (root.converged) {
                    var calculated = polynomial.calculate(root.value);
                    // tslint:disable-next-line no-unused-expression
                    chai_1.expect(calculated <= epsilon).to.be.true;
                }
            });
        });
    });
});

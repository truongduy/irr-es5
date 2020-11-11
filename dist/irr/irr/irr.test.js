"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var sinon_1 = __importDefault(require("sinon"));
var polynomial_1 = require("../../polynomial");
var irr_1 = require("./irr");
var root_finder_1 = require("../../root-finder");
var UNIQUE_ROOT = {
    converged: true,
    iterations: 0,
    value: Math.PI,
};
var UNIQUE_COEFFICIENTS = [2, 7, 0, 9];
var UNIQUE_OPTIONS = {
    estimate: 'auto',
    epsilon: 1e-8,
    fallbackMethod: root_finder_1.RootFinderMethod.Bisection,
    maxIterations: 100,
    method: root_finder_1.RootFinderMethod.Newton,
};
describe('irr', function () {
    it('uses Polynomial.prototype.findRoot() for the calculation', function () {
        var stub = sinon_1.default
            .stub(polynomial_1.Polynomial.prototype, 'findRoot')
            .returns(UNIQUE_ROOT);
        var result = irr_1.irr(UNIQUE_COEFFICIENTS, UNIQUE_OPTIONS);
        chai_1.expect(result).to.equal(UNIQUE_ROOT.value - 1);
        // tslint:disable-next-line no-unused-expression
        chai_1.expect(stub.calledOnce).to.be.true;
        sinon_1.default.restore();
    });
});

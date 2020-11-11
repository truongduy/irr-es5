"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var sinon_1 = __importDefault(require("sinon"));
var polynomial_1 = require("../../polynomial");
var __1 = require("../..");
var root_finder_1 = require("../../root-finder");
var UNIQUE_ROOT = {
    converged: true,
    iterations: 0,
    value: Math.PI,
};
var UNIQUE_XIRR_RESULT = {
    days: 60,
    rate: Math.PI - 1,
};
var UNIQUE_DATA = [
    { amount: -10, date: '20180101' },
    { amount: 10, date: '20180201' },
    { amount: 0.05, date: '20180301' },
];
var UNIQUE_OPTIONS = {
    estimate: 'auto',
    epsilon: 1e-8,
    fallbackMethod: root_finder_1.RootFinderMethod.Bisection,
    maxIterations: 100,
    method: root_finder_1.RootFinderMethod.Newton,
};
describe('xirr', function () {
    it('uses Polynomial.prototype.findRoot() for the calculation', function () {
        var stub = sinon_1.default
            .stub(polynomial_1.Polynomial.prototype, 'findRoot')
            .returns(UNIQUE_ROOT);
        var result = __1.xirr(UNIQUE_DATA, UNIQUE_OPTIONS);
        chai_1.expect(result).to.deep.equal(UNIQUE_XIRR_RESULT);
        // tslint:disable-next-line no-unused-expression
        chai_1.expect(stub.calledOnce).to.be.true;
        sinon_1.default.restore();
    });
    it('groups amounts from the same date', function () {
        var result = __1.xirr([
            { amount: -10, date: '20180101' },
            { amount: 5, date: '20180201' },
            { amount: 5, date: '20180201' },
            { amount: 0.05, date: '20180301' },
        ], UNIQUE_OPTIONS);
        chai_1.expect(result).to.deep.equal({ days: 60, rate: 0.0001601831164046441 });
    });
});

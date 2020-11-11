"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
var Line = /** @class */ (function () {
    function Line(m, k) {
        this.m = m;
        this.k = k;
    }
    Line.prototype.calculate = function (x) {
        return this.m * x + this.k;
    };
    Line.prototype.findRoot = function () {
        return {
            converged: true,
            iterations: 0,
            value: -this.k / this.m,
        };
    };
    Line.prototype.getK = function () {
        return this.k;
    };
    Line.prototype.getM = function () {
        return this.m;
    };
    return Line;
}());
exports.Line = Line;

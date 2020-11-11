"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.irr = void 0;
var polynomial_1 = require("../../polynomial");
var root_finder_1 = require("../../root-finder");
function irr(values, options) {
    if (options === void 0) { options = root_finder_1.DEFAULT_ROOT_FINDER_OPTIONS; }
    var polynomial = new polynomial_1.Polynomial(values);
    var root = polynomial.findRoot(options);
    if (!root.converged) {
        return NaN;
    }
    return root.value - 1;
}
exports.irr = irr;

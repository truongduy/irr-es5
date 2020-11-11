"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_ROOT_FINDER_OPTIONS = exports.RootFinderMethod = void 0;
var RootFinderMethod;
(function (RootFinderMethod) {
    RootFinderMethod["Bisection"] = "bisection";
    RootFinderMethod["Newton"] = "newton";
})(RootFinderMethod = exports.RootFinderMethod || (exports.RootFinderMethod = {}));
exports.DEFAULT_ROOT_FINDER_OPTIONS = {
    estimate: 'auto',
    epsilon: 1e-8,
    fallbackMethod: RootFinderMethod.Bisection,
    maxIterations: 100,
    method: RootFinderMethod.Newton,
};

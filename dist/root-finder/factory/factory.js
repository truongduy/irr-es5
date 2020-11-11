"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootFinderFactory = void 0;
var definition_1 = require("../definition");
var bisection_1 = require("../bisection");
var newton_1 = require("../newton");
var RootFinderFactory = /** @class */ (function () {
    function RootFinderFactory(options) {
        this.options = options;
    }
    RootFinderFactory.prototype.make = function (method) {
        switch (method) {
            case definition_1.RootFinderMethod.Bisection:
                return new bisection_1.BisectionRootFinder(this.options);
            case definition_1.RootFinderMethod.Newton:
                return new newton_1.NewtonRootFinder(this.options);
            default:
                throw new Error("RootFinderFactory " + method + " not implemented.");
        }
    };
    return RootFinderFactory;
}());
exports.RootFinderFactory = RootFinderFactory;

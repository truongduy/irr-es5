"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var factory_1 = require("./factory");
var definition_1 = require("../definition");
var bisection_1 = require("../bisection");
var newton_1 = require("../newton");
describe('RootFinderFactory', function () {
    var factory = new factory_1.RootFinderFactory({});
    describe('#make', function () {
        var cases = [
            [definition_1.RootFinderMethod.Bisection, bisection_1.BisectionRootFinder],
            [definition_1.RootFinderMethod.Newton, newton_1.NewtonRootFinder],
        ];
        cases.forEach(function (_a) {
            var method = _a[0], Class = _a[1];
            it("RootFinderMethod." + method + " -> " + Class.name, function () {
                var instance = factory.make(method);
                chai_1.expect(instance).to.be.instanceOf(Class);
            });
        });
    });
});

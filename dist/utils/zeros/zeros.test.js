"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var zeros_1 = require("./zeros");
describe('zeros', function () {
    describe('creates arrays with given length', function () {
        var cases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        cases.forEach(function (length) {
            it("length = " + length, function () {
                var expected = new Array(length).fill(0);
                chai_1.expect(zeros_1.zeros(length)).to.deep.equal(expected);
            });
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidRoot = void 0;
function isValidRoot(value) {
    return !isNaN(value) && isFinite(value) && value >= 0;
}
exports.isValidRoot = isValidRoot;

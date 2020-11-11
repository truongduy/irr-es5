import { RootFinderOptions, Root } from '../../root-finder';
import { IPolynomial } from '../definition';
import { Line } from '../line';
export declare class Polynomial implements IPolynomial {
    protected readonly coefficients: number[];
    protected derivative: Polynomial | null;
    constructor(coefficients: number[]);
    protected getDegree(): number;
    calculate(x: number): number;
    differentiate(): Polynomial;
    findRoot(options: RootFinderOptions): Root;
    getCoefficients(): number[];
    getTangentAt(x: number): Line;
}

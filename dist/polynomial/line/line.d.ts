import { IPolynomial } from '../definition';
import { Root } from '../../root-finder';
export declare class Line implements IPolynomial {
    protected readonly m: number;
    protected readonly k: number;
    constructor(m: number, k: number);
    calculate(x: number): number;
    findRoot(): Root;
    getK(): number;
    getM(): number;
}

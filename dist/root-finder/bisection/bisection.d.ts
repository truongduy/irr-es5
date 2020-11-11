import { RootFinderOptions, IRootFinder, Root } from '../definition';
import { Polynomial } from '../../polynomial';
export declare class BisectionRootFinder implements IRootFinder {
    protected readonly options: RootFinderOptions;
    constructor(options: RootFinderOptions);
    protected findUpperLimit(polynomial: Polynomial): number;
    findRoot(polynomial: Polynomial): Root;
}

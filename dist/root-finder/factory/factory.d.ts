import { RootFinderMethod, IRootFinder, RootFinderOptions } from '../definition';
export declare class RootFinderFactory {
    protected readonly options: RootFinderOptions;
    constructor(options: RootFinderOptions);
    make(method: RootFinderMethod): IRootFinder;
}

import { Polynomial } from '../polynomial';
export declare enum RootFinderMethod {
    Bisection = "bisection",
    Newton = "newton"
}
export declare type RootFinderOptions = {
    epsilon?: number;
    estimate?: number | 'auto';
    fallbackMethod?: RootFinderMethod | null;
    maxIterations?: number;
    method?: RootFinderMethod;
};
export declare type Root = {
    converged: boolean;
    iterations: number;
    value: number;
};
export interface IRootFinder {
    findRoot(polynomial: Polynomial): Root;
}
export declare const DEFAULT_ROOT_FINDER_OPTIONS: RootFinderOptions;

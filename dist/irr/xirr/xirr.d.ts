import { RootFinderOptions } from '../../root-finder';
import { XirrInput } from '../definition';
export declare function xirr(inputs: XirrInput[], options?: RootFinderOptions): {
    days: number;
    rate: number;
};

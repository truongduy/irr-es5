export declare enum RateInterval {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year"
}
export declare function convertRate(rate: number, toInterval: RateInterval | number, fromInterval?: RateInterval | number): number;

import { ExMath } from './ExMath';
import { Point } from './Point';

export abstract class ExStat {
    public static median(medianData: number[]): number;
    public static median<T, K extends keyof T>(medianData: T[], properties?: K[]): { [P in K]?: T[P] };
    // tslint:disable-next-line:max-line-length
    public static median<T, K extends keyof T>(medianData: T[] | number[], properties?: K | K[]): number | { [P in K]?: T[P] } {
        let propertiesOrQ: any = properties;
        if (!propertiesOrQ) {
            propertiesOrQ = 50;
        }
        return this.percentile(medianData as any, propertiesOrQ, 50);
    }

    public static quartile1(quartileData: number[]): number;
    public static quartile1<T, K extends keyof T>(quartileData: T[], properties?: K[]): { [P in K]?: T[P] };
    // tslint:disable-next-line:max-line-length
    public static quartile1<T, K extends keyof T>(quartileData: T[] | number[], properties?: K | K[]): number | { [P in K]?: T[P] } {
        let propertiesOrQ: any = properties;
        if (!propertiesOrQ) {
            propertiesOrQ = 25;
        }
        return this.percentile(quartileData as any, propertiesOrQ, 25);
    }

    public static quartile2(quartileData: number[]): number;
    public static quartile2<T, K extends keyof T>(quartileData: T[], properties?: K[]): { [P in K]?: T[P] };
    // tslint:disable-next-line:max-line-length
    public static quartile2<T, K extends keyof T>(quartileData: T[] | number[], properties?: K | K[]): number | { [P in K]?: T[P] } {
        return this.median(quartileData as any, properties as any);
    }

    public static quartile3(quartileData: number[]): number;
    public static quartile3<T, K extends keyof T>(quartileData: T[], properties?: K[]): { [P in K]?: T[P] };
    // tslint:disable-next-line:max-line-length
    public static quartile3<T, K extends keyof T>(quartileData: T[] | number[], properties?: K | K[]): number | { [P in K]?: T[P] } {
        let propertiesOrQ: any = properties;
        if (!propertiesOrQ) {
            propertiesOrQ = 75;
        }
        return this.percentile(quartileData as any, propertiesOrQ, 75);
    }

    public static percentile(percentileData: number[], propertiesOrQ: number): number;
    // tslint:disable-next-line:max-line-length
    public static percentile<T, K extends keyof T>(percentileData: T[], propertiesOrQ?: K[], q?: number): { [P in K]?: T[P] };
    // tslint:disable-next-line:max-line-length
    public static percentile<T, K extends keyof T>(percentileData: T[] | number[], propertiesOrQ?: K[] | number, q?: number): number | { [P in K]?: T[P] } {
        if (typeof propertiesOrQ === 'object') {
            return this.percentileWithProperties(percentileData as T[], propertiesOrQ, q);
        } else {
            return this.percentileWithoutProperty(percentileData as number[], propertiesOrQ);
        }
    }

    public static linreg(data: Point[]): { a: number, b: number } {
        const mean = ExMath.average(data, ['x', 'y']);

        let sumSX = 0;
        let sumSY = 0;

        for (let i = 0; i < data.length; i++) {
            sumSX += Math.pow((data[i].x - mean.x), 2);
            sumSY += Math.pow((data[i].y - mean.y), 2);
        }

        const sX = Math.sqrt(sumSX / 4);
        const sY = Math.sqrt(sumSY / 4);

        let sum = 0;

        for (let i = 0; i < data.length; i++) {
            sum += ((data[i].x - mean.x) / sX) * ((data[i].y - mean.y) / sY);
        }

        sum /= data.length - 1;

        const a = sum * (sY / sX);
        const b = mean.y - a * mean.x;

        return {
            a: a,
            b: b
        };
    }

    private static percentileWithoutProperty(percentileData: number[], q: number): number {
        const n = percentileData.length;
        const index = (n * q / 100) - 1;
        let percentile = 0;

        if (n > 0) {
            if (index % 1 === 0) {
                percentile = (percentileData[index] + percentileData[index + 1]) / 2;
            } else {
                percentile = percentileData[Math.ceil(index)];
            }
        }

        return percentile;
    }

    // tslint:disable-next-line:max-line-length
    private static percentileWithProperties<T, K extends keyof T>(percentileData: T[], properties: K[], percentile: number): { [P in K]?: T[P] } {
        const result = {};
        const dataCount = percentileData.length;
        const index = (dataCount * percentile / 100) - 1;

        for (const property of properties as string[]) {
            result[property] = 0;

            if (dataCount > 0) {
                if (ExMath.isInN0(index)) {
                    result[property] = (percentileData[index][property] + percentileData[index + 1][property]) / 2;
                } else {
                    result[property] = percentileData[Math.ceil(index)][property];
                }
            }
        }

        return result;
    }
}

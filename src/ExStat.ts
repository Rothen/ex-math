import { ExMath } from './ExMath';

export abstract class ExStat {
    public static median(medianData: number[]): number;
    public static median<T, K extends keyof T>(medianData: T[], properties?: K[]): { [R in keyof T]?: T[K]; };
    // tslint:disable-next-line:max-line-length
    public static median<T, K extends keyof T>(medianData: T[] | number[], properties?: K | K[]): number | { [R in keyof T]?: T[K]; } {
        let propertiesOrQ: any = properties;
        if (!propertiesOrQ) {
            propertiesOrQ = 50;
        }
        return this.percentile(medianData as any, propertiesOrQ, 50);
    }

    public static quartile1(quartileData: number[]): number;
    public static quartile1<T, K extends keyof T>(quartileData: T[], properties?: K[]): { [R in keyof T]?: T[K]; };
    // tslint:disable-next-line:max-line-length
    public static quartile1<T, K extends keyof T>(quartileData: T[] | number[], properties?: K | K[]): number | { [R in keyof T]?: T[K]; } {
        let propertiesOrQ: any = properties;
        if (!propertiesOrQ) {
            propertiesOrQ = 25;
        }
        return this.percentile(quartileData as any, propertiesOrQ, 25);
    }

    public static quartile2(quartileData: number[]): number;
    public static quartile2<T, K extends keyof T>(quartileData: T[], properties?: K[]): { [R in keyof T]?: T[K]; };
    // tslint:disable-next-line:max-line-length
    public static quartile2<T, K extends keyof T>(quartileData: T[] | number[], properties?: K | K[]): number | { [R in keyof T]?: T[K]; } {
        return this.median(quartileData as any, properties as any);
    }

    public static quartile3(quartileData: number[]): number;
    public static quartile3<T, K extends keyof T>(quartileData: T[], properties?: K[]): { [R in keyof T]?: T[K]; };
    // tslint:disable-next-line:max-line-length
    public static quartile3<T, K extends keyof T>(quartileData: T[] | number[], properties?: K | K[]): number | { [R in keyof T]?: T[K]; } {
        let propertiesOrQ: any = properties;
        if (!propertiesOrQ) {
            propertiesOrQ = 75;
        }
        return this.percentile(quartileData as any, propertiesOrQ, 75);
    }

    public static percentile(percentileData: number[], propertiesOrQ: number): number;
    // tslint:disable-next-line:max-line-length
    public static percentile<T, K extends keyof T>(percentileData: T[], propertiesOrQ?: K[], q?: number): { [R in keyof T]?: T[K]; };
    // tslint:disable-next-line:max-line-length
    public static percentile<T, K extends keyof T>(percentileData: T[] | number[], propertiesOrQ?: K[] | number, q?: number): number | { [R in keyof T]?: T[K]; } {
        if (typeof propertiesOrQ === 'object') {
            return this.percentileWithProperties(percentileData as T[], propertiesOrQ, q);
        } else {
            return this.percentileWithoutProperty(percentileData as number[], propertiesOrQ);
        }
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
    private static percentileWithProperties<T, K extends keyof T>(percentileData: T[], properties: K[], percentile: number): { [R in keyof T]?: T[K]; } {
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

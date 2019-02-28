import { Point } from './Point';

export abstract class ExMath {
    public static linspaceP(from: number, to: number, n: number = 100): Point[] {
        const increase = (to - from) / (n - 1);
        const result: Point[] = [];

        for (let i = from; i <= to; i += increase) {
            result.push({
                x: i,
                y: null
            });
        }

        return result;
    }

    public static linspace(from: number, to: number, n: number = 100): number[] {
        const increase = (to - from) / (n - 1);
        const result: number[] = [];

        for (let i = from; i <= to; i += increase) {
            result.push(i);
        }

        return result;
    }

    public static spacline(from: number, to: number, h: number = 0.1): number[] {
        const result: number[] = [];

        for (let i = from; i <= to; i += h) {
            result.push(i);
        }

        return result;
    }

    public static round(roundData: number, precision: number): number;
    // tslint:disable-next-line:max-line-length
    public static round<T, K extends keyof T>(roundData: T, precision: number, properties?: K[]): { [R in keyof T]?: T[K]; };
    // tslint:disable-next-line:max-line-length
    public static round<T, K extends keyof T>(roundData: T | number, precision: number = 0, properties?: K[]): number | { [R in keyof T]?: T[K]; } {
        if (typeof properties === 'object') {
            return this.roundWithProperties(roundData as T, precision, properties);
       } else {
            return this.roundWithoutProperties(roundData as number, precision);
        }
    }

    public static sigma(sigmaData: number[]): number;
    public static sigma<T, K extends keyof T>(sigmaData: T[], properties?: keyof T[]): { [R in keyof T]?: T[K]; };
    public static sigma<T, K extends keyof T>(sigmaData: T[] | number[], properties?: keyof T[]): number | { [R in keyof T]?: T[K]; } {
        if (typeof properties === 'object') {
            return this.sigmaWithProperties(sigmaData as T[], properties);
        } else {
            return this.sigmaWithoutProperty(sigmaData as number[]);
        }
    }

    public static average(averageData: number[]): number;
    public static average<T, K extends keyof T>(averageData: T[], propertyOrProperties?: K[]): { [R in keyof T]?: T[K]; };
    // tslint:disable-next-line:max-line-length
    public static average<T, K extends keyof T>(averageData: T[] | number[], propertyOrProperties?: K[]): number | { [R in keyof T]?: T[K]; } {
        if (typeof propertyOrProperties === 'object') {
            return this.averageWithProperties(averageData as T[], propertyOrProperties);
        } else {
            return this.averageWithoutProperty(averageData as number[]);
        }
    }

    private static roundWithoutProperties(roundData: number, precision: number): number {
        return Math.round(roundData * Math.pow(10, precision)) / Math.pow(10, precision);
    }

    // tslint:disable-next-line:max-line-length
    private static roundWithProperties<T, K extends keyof T>(roundData: T, precision: number, properties: K[]): { [R in keyof T]?: T[K]; } {
        let roundObj = {};
        for (const property of properties) {
            roundObj[property as string] = this.roundWithoutProperties(roundData[property as string], precision);
        }

        return roundObj;
    }

    private static sigmaWithoutProperty(sigmaData: number[]): number {
        let sum = 0;

        for (const data of sigmaData) {
            sum += data;
        }

        return sum;
    }

    private static sigmaWithProperties<T, K extends keyof T>(sigmaData: T[], properties: K[]): { [R in keyof T]?: T[K]; } {
        let sumObj = {};
        for (const property of properties) {
            sumObj[property as string] = 0;
        }

        for (const data of sigmaData) {
            for (const property of properties) {
                sumObj[property as string] += data[property];
            }
        }

        return sumObj;
    }

    private static averageWithoutProperty(averageData: number[]): number {
        const n = averageData.length;
        let average = this.sigmaWithoutProperty(averageData);

        if (n > 0) {
            average /= n;
        }

        return average;
    }

    private static averageWithProperties<T, K extends keyof T>(averageData: T[], properties: K[]): object {
        const n = averageData.length;
        const averageObj = this.sigmaWithProperties(averageData, properties);

        if (n > 0) {
            for (const property of properties) {
                averageObj[property as string] /= n;
            }
        }

        return averageObj;
    }

    public static isWholeNumber(value: number) {
        return value % 1 === 0;
    }

    public static isInN(value: number) {
        return value > 0 && this.isWholeNumber(value);
    }

    public static isInN0(value: number) {
        return value >= 0 && this.isWholeNumber(value);
    }
}

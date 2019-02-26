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
    public static round<T, K extends Extract<keyof T, string>>(roundData: T, precision: number): number | object;
    // tslint:disable-next-line:max-line-length
    public static round<T, K extends Extract<keyof T, string>>(roundData: T | number, precision: number = 0, properties?: K[]): number | object {
        if (typeof properties === 'object') {
            return this.roundWithProperties(roundData as T, precision, properties);
       } else {
            return this.roundWithoutProperties(roundData as number, precision);
        }
    }

    public static sigma(sigmaData: number[]): number;
    public static sigma<T, K extends Extract<keyof T, string>>(sigmaData: T[], properties?: K[]): number | object;
    public static sigma<T, K extends Extract<keyof T, string>>(sigmaData: T[] | number[], properties?: K[]): number | object {
        if (typeof properties === 'object') {
            return this.sigmaWithMultyProperty(sigmaData as T[], properties);
        } else {
            return this.sigmaWithoutProperty(sigmaData as number[]);
        }
    }

    public static average(averageData: number[]): number;
    public static average<T, K extends Extract<keyof T, string>>(averageData: T[], properties?: K[]): number | object;
    // tslint:disable-next-line:max-line-length
    public static average<T, K extends Extract<keyof T, string>>(averageData: T[] | number[], properties?: K[]): number | object {
        if (typeof properties === 'object') {
            return this.averageWithMultyProperty(averageData as T[], properties);
        } else {
            return this.averageWithoutProperty(averageData as number[]);
        }
    }

    private static roundWithoutProperties(roundData: number, precision: number): number {
        return Math.round(roundData * Math.pow(10, precision)) / Math.pow(10, precision);
    }

    // tslint:disable-next-line:max-line-length
    private static roundWithProperties<T, K extends Extract<keyof T, string>>(roundData: T, precision: number, properties: K[]): object {
        let roundObj = [];
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

    private static sigmaWithMultyProperty<T, K extends Extract<keyof T, string>>(sigmaData: T[], properties: K[]): object {
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

    private static averageWithMultyProperty<T, K extends Extract<keyof T, string>>(averageData: T[], properties: K[]): object {
        const n = averageData.length;
        const averageObj = this.sigmaWithMultyProperty(averageData, properties);

        if (n > 0) {
            for (const property of properties) {
                averageObj[property as string] /= n;
            }
        }

        return averageObj;
    }
}

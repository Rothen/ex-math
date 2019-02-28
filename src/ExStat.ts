import { ExMath } from './ExMath';

export abstract class ExStat {
    public static median(medianData: number[]): number;
    public static median<T, K extends Extract<keyof T, string>>(medianData: T[], propertyOrProperties?: K): number | object;
    public static median<T, K extends Extract<keyof T, string>>(medianData: T[], propertyOrProperties?: K[]): number | object;
    // tslint:disable-next-line:max-line-length
    public static median<T, K extends Extract<keyof T, string>>(medianData: T[] | number[], propertyOrProperties?: K | K[]): number | object {
        let propertyOrPropertiesOrQ: any = propertyOrProperties;
        if (!propertyOrPropertiesOrQ) {
            propertyOrPropertiesOrQ = 50;
        }
        return this.percentile(medianData as any, propertyOrPropertiesOrQ, 50);
    }

    public static quartile1(quartileData: number[]): number;
    public static quartile1<T, K extends Extract<keyof T, string>>(quartileData: T[], propertyOrProperties?: K): number | object;
    public static quartile1<T, K extends Extract<keyof T, string>>(quartileData: T[], propertyOrProperties?: K[]): number | object;
    // tslint:disable-next-line:max-line-length
    public static quartile1<T, K extends Extract<keyof T, string>>(quartileData: T[] | number[], propertyOrProperties?: K | K[]): number | object {
        let propertyOrPropertiesOrQ: any = propertyOrProperties;
        if (!propertyOrPropertiesOrQ) {
            propertyOrPropertiesOrQ = 25;
        }
        return this.percentile(quartileData as any, propertyOrPropertiesOrQ, 25);
    }

    public static quartile2(quartileData: number[]): number;
    public static quartile2<T, K extends Extract<keyof T, string>>(quartileData: T[], propertyOrProperties?: K): number | object;
    public static quartile2<T, K extends Extract<keyof T, string>>(quartileData: T[], propertyOrProperties?: K[]): number | object;
    // tslint:disable-next-line:max-line-length
    public static quartile2<T, K extends Extract<keyof T, string>>(quartileData: T[] | number[], propertyOrProperties?: K | K[]): number | object {
        return this.median(quartileData as any, propertyOrProperties as any);
    }

    public static quartile3(quartileData: number[]): number;
    public static quartile3<T, K extends Extract<keyof T, string>>(quartileData: T[], propertyOrProperties?: K): number | object;
    public static quartile3<T, K extends Extract<keyof T, string>>(quartileData: T[], propertyOrProperties?: K[]): number | object;
    // tslint:disable-next-line:max-line-length
    public static quartile3<T, K extends Extract<keyof T, string>>(quartileData: T[] | number[], propertyOrProperties?: K | K[]): number | object {
        let propertyOrPropertiesOrQ: any = propertyOrProperties;
        if (!propertyOrPropertiesOrQ) {
            propertyOrPropertiesOrQ = 75;
        }
        return this.percentile(quartileData as any, propertyOrPropertiesOrQ, 75);
    }

    public static percentile(percentileData: number[], propertyOrPropertiesOrQ: number): number;
    // tslint:disable-next-line:max-line-length
    public static percentile<T, K extends Extract<keyof T, string>>(percentileData: T[], propertyOrPropertiesOrQ?: K, q?: number): number | object;
    // tslint:disable-next-line:max-line-length
    public static percentile<T, K extends Extract<keyof T, string>>(percentileData: T[], propertyOrPropertiesOrQ?: K[], q?: number): number | object;
    // tslint:disable-next-line:max-line-length
    public static percentile<T, K extends Extract<keyof T, string>>(percentileData: T[] | number[], propertyOrPropertiesOrQ?: K | K[] | number, q?: number): number | object {
        if (typeof propertyOrPropertiesOrQ === 'string') {
            return this.percentileWithProperty(percentileData as T[], propertyOrPropertiesOrQ, q);
        } else if (typeof propertyOrPropertiesOrQ === 'object') {
            return this.percentileWithMultyProperty(percentileData as T[], propertyOrPropertiesOrQ, q);
        } else {
            return this.percentileWithoutProperty(percentileData as number[], propertyOrPropertiesOrQ);
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

    private static percentileWithProperty<T, K extends Extract<keyof T, string>>(percentileData: T[], property: K, q: number): number {
        const n = percentileData.length;
        const index = (n * q / 100) - 1;
        const propertyName: string = property;
        let percentile = 0;

        if (n > 0) {
            if (index % 1 === 0) {
                percentile = (percentileData[index][propertyName] + percentileData[index + 1][propertyName]) / 2;
            } else {
                percentile = percentileData[Math.ceil(index)][propertyName];
            }
        }

        return percentile;
    }

    // tslint:disable-next-line:max-line-length
    private static percentileWithMultyProperty<T, K extends Extract<keyof T, string>>(percentileData: T[], properties: K[], percentile: number): object {
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

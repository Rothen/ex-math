import { Point } from './Point';
import { ExMath } from './ExMath';

export abstract class ExNume {
    public static D1f(xOrPoints: Point[] | number[], y?: number[]) {
        let result: Point[];

        if (typeof xOrPoints[0] === 'number') {
            result = this.D1fWithNumbers(xOrPoints as number[], y);
        } else {
            result = this.D1fWithPoints(xOrPoints as Point[]);
        }

        return result;
    }

    public static D2f(xOrPoints: Point[] | number[], y?: number[]) {
        let result: Point[];

        if (typeof xOrPoints[0] === 'number') {
            result = this.D2fWithNumbers(xOrPoints as number[], y);
        } else {
            result = this.D2fWithPoints(xOrPoints as Point[]);
        }

        return result;
    }

    public static D3f(xOrPoints: Point[] | number[], y?: number[]): Point[] {
        let result: Point[];

        if (typeof xOrPoints[0] === 'number') {
            result = this.D3fWithNumbers(xOrPoints as number[], y);
        } else {
            result = this.D3fWithPoints(xOrPoints as Point[]);
        }

        return result;
    }

    public static hAlgorithm(x0: number, fn: (x: number) => number, h0: number, n: number): number {
        const Dik = [];

        for (let i = 0; i <= n; i++) {
            const hi = h0 / Math.pow(2, i);
            Dik[i] = [];
            Dik[i][0] = this.D1fLogic(x0, fn(x0), x0 + hi, fn(x0 + hi)).y;
        }

        for (let k = 1; k <= n; k++) {
            for (let j = 0; j <= n - k; j++) {
                Dik[j][k] = ((Math.pow(2, k)) * Dik[j + 1][k - 1] - Dik[j][k - 1]) / (Math.pow(2, k) - 1);
            }
        }

        return Dik[0][n];
    }

    public static h2Algorithm(x0: number, fn: (x: number) => number, h0: number, n: number): number {
        const Dik = [];

        for (let i = 0; i <= n; i++) {
            const hi = h0 / Math.pow(2, i);
            Dik[i] = [];
            Dik[i][0] = this.D2fLogic(x0, x0 + hi, fn(x0 + hi), x0 - hi, fn(x0 - hi)).y;
        }

        for (let k = 1; k <= n; k++) {
            for (let j = 0; j <= n - k; j++) {
                Dik[j][k] = ((Math.pow(4, k)) * Dik[j + 1][k - 1] - Dik[j][k - 1]) / (Math.pow(4, k) - 1);
            }
        }

        return Dik[0][n];
    }

    public static mittelpunkt(fn: (x: number, y: number) => number, a: number, b: number, n: number, y0: number): number[] {
        const h = (b - a) / n;
        const x = ExMath.linspace(a, b, n);
        const y = [y0];

        const h_halbe = h / 2;

        for (let i = 0; i < x.length; i++) {
            const xHHalf =  x[i] + h_halbe;
            const yHHalf =  y[i] + h_halbe * fn(x[i], y[i]);

            y[i + 1] = y[i] + h * fn(xHHalf, yHHalf);
        }

        return y;
    }

    private static D1fLogic(xi: number, yi: number, xiP: number, yiP: number): Point {
        const h = xiP - xi;

        return {
            x: xi,
            y: (yiP - yi) / h
        };
    }

    private static D2fLogic(xi: number, xiP: number, yiP: number, xiM: number, yiM: number): Point {
        const h = xi - xiM;

        return {
            x: xi,
            y: (yiP - yiM) / (2 * h)
        };
    }

    private static D3fLogic(xi: number, yi: number, xiM: number, yiM: number): Point {
        const h = xi - xiM;

        return {
            x: xi,
            y: (yi - yiM) / h
        };
    }

    private static D1fWithPoints(p: Point[]): Point[] {
        const result = [];

        for (let i = 0, ip = 1; i < p.length - 1; i++, ip++) {
            result.push(this.D1fLogic(p[i].x, p[i].y, p[ip].x, p[ip].y));
        }

        return result;
    }

    private static D1fWithNumbers(x: number[], y: number[]): Point[] {
        const result = [];

        for (let i = 0, ip = 1; i < x.length - 1; i++, ip++) {
            result.push(this.D1fLogic(x[i], y[i], x[ip], y[ip]));
        }

        return result;
    }

    private static D2fWithPoints(p: Point[]): Point[] {
        const result = [];

        for (let i = 1, im = 0, ip = 2; i < p.length - 1; i++, im++, ip++) {
            result.push(this.D2fLogic(p[i].x, p[ip].x, p[ip].y, p[im].x, p[im].y));
        }

        return result;
    }

    private static D2fWithNumbers(x: number[], y: number[]): Point[] {
        const result = [];

        for (let i = 1, im = 0, ip = 2; i < x.length - 1; i++, im++, ip++) {
            result.push(this.D2fLogic(x[i], x[ip], y[ip], x[im], y[im]));
        }

        return result;
    }

    private static D3fWithPoints(p: Point[]): Point[] {
        const result = [];

        for (let i = 1, ip = 2; i < p.length; i++, ip++) {
            result.push(this.D3fLogic(p[i].x, p[i].y, p[ip].x, p[ip].y));
        }

        return result;
    }

    private static D3fWithNumbers(x: number[], y: number[]): Point[] {
        const result = [];

        for (let i = 1, ip = 2; i < x.length; i++, ip++) {
            result.push(this.D3fLogic(x[i], y[i], x[ip], y[ip]));
        }

        return result;
    }
}

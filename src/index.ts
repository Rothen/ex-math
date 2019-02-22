import { ExNume } from './ExNume';
import { Point } from './Point';
import { ExMath } from './ExMath';

export * from './Point';
export * from './Set';
export * from './ExMath';
export * from './ExStat';

/*const x: number[] = ExMath.linspace(1, 100);
const y: number[] = [];

for (const xi of x) {
    y.push(Math.log(Math.pow(xi, 2)));
}

console.log(x);
console.log(x.length);
console.log(ExNume.D1f(x, y));*/


/*const x0 = 2;
const fn = (x: number) => Math.log(Math.pow(x, 2));

console.log(ExNume.hAlgorithm(x0, fn, 0.1, 4));
console.log(ExNume.h2Algorithm(x0, fn, 0.1, 4));*/


/*
const fn = (x: number, y: number) => Math.pow(x, 2) / y;
const a = 0;
const b = 10;
const h = 0.1;
const y0 = 2;
const n = 10 / h;

console.log(ExNume.mittelpunkt(fn, a, b, n, y0));
*/

console.log(ExMath.linspace(1, 10, 1).length);
console.log(ExMath.linspace(1, 10, 10).length);
console.log(ExMath.linspace(1, 10, 50).length);
console.log(ExMath.linspace(1, 10, 100).length);
console.log(ExMath.linspace(1, 10, 1)[0]);
console.log(ExMath.linspace(1, 10, 10)[9]);
console.log(ExMath.linspace(1, 10, 50)[48]);
console.log(ExMath.linspace(1, 10, 100)[98]);

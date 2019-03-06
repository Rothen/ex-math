import { ExMath } from './ExMath';
import { ExStat } from './ExStat';

export * from './Point';
export * from './Set';
export * from './ExMath';
export * from './ExStat';
export * from './ExNume';
export * from './Matrix';
export * from './Vector';

/*const result = ExMath.sigma([1, 2, 3, 4]);
const resultObj = ExMath.sigma([{ x: 1 }, { x: 2 }, { x: 3 }], ['x']);
const resultObj2 = ExMath.sigma([{ x: 1, y: 5 }, { x: 2 }, { x: 3 }], ['x']);*/

const result = ExStat.linreg([{
    x: 1,
    y: 1
}, {
    x: 2,
    y: 2
}, {
    x: 3,
    y: 1.3
}, {
    x: 4,
    y: 3.75
}, {
    x: 5,
    y: 2.25
}]);

console.log(result);

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

/*console.log(ExMath.linspace(1, 10, 1).length);
console.log(ExMath.linspace(1, 10, 10).length);
console.log(ExMath.linspace(1, 10, 50).length);
console.log(ExMath.linspace(1, 10, 100).length);
console.log(ExMath.linspace(1, 10, 1)[0]);
console.log(ExMath.linspace(1, 10, 10)[9]);
console.log(ExMath.linspace(1, 10, 50)[48]);
console.log(ExMath.linspace(1, 10, 100)[98]);*/

/*const m = new Matrix([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]]);

console.log(m.data);
m.transpose();
console.log(m.data);

const v = new Vector([9, 8, 7, 6, 5, 4]);

console.log(v.data);
console.log(v.data);*/

/*const m1 = new Matrix([[9, 10]]);
const m2 = new Matrix([[1, 2, 5], [3, 4, 6]]);

console.log(m1.data);
console.log(m2.data);
console.log(multiply(m1, m2).data);*/

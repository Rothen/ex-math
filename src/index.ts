import { ExNume } from './ExNume';
import { Point } from './Point';
import { ExMath } from './ExMath';

export * from './Point';
export * from './Set';
export * from './ExMath';
export * from './ExStat';

const x: number[] = ExMath.linspace(1, 100);
const y: number[] = [];

for (const xi of x) {
    y.push(Math.log(Math.pow(xi, 2)));
}

console.log(x);
console.log(x.length);
console.log(ExNume.D1f(x, y));

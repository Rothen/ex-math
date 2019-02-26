import { expect } from 'chai';
import { ExMath } from '../src';

describe('ExMath', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        expect(ExMath).to.be.ok;
    });

    // Average calculations

    it('should calculate average correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExMath.average(data)).to.equal(5.5);
    });

    it('should calculate average without property correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExMath['averageWithoutProperty'](data)).to.equal(5.5);
    });

    it('should calculate average with properties correctly', () => {
        const data = [
            {x: 1, y: 11},
            {x: 2, y: 12},
            {x: 3, y: 13},
            {x: 4, y: 14},
            {x: 5, y: 15},
            {x: 6, y: 16},
            {x: 7, y: 17},
            {x: 8, y: 18},
            {x: 9, y: 19},
            {x: 10, y: 20}
        ];
        expect(ExMath['averageWithMultyProperty'](data, ['x', 'y'])).to.deep.equal({
            x: 5.5,
            y: 15.5
        });
    });

    // Sigma calculations

    it('should calculate sigma correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExMath.sigma(data)).to.equal(55);
    });

    it('should calculate sigma without property correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExMath['sigmaWithoutProperty'](data)).to.equal(55);
    });

    it('should calculate sigma with properties correctly', () => {
        const data = [
            {x: 1, y: 11},
            {x: 2, y: 12},
            {x: 3, y: 13},
            {x: 4, y: 14},
            {x: 5, y: 15},
            {x: 6, y: 16},
            {x: 7, y: 17},
            {x: 8, y: 18},
            {x: 9, y: 19},
            {x: 10, y: 20}
        ];
        expect(ExMath['sigmaWithMultyProperty'](data, ['x', 'y'])).to.deep.equal({
            x: 55,
            y: 155
        });
    });
});

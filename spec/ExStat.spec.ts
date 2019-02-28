import { expect } from 'chai';
import { ExStat } from '../src';

describe('ExStat', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        expect(ExStat).to.be.ok;
    });

    // Median calculations

    it('should calculate median correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExStat.median(data)).to.equal(5.5);
    });

    it('should calculate median with property correctly', () => {
        const data = [
            {x: 1},
            {x: 2},
            {x: 3},
            {x: 4},
            {x: 5},
            {x: 6},
            {x: 7},
            {x: 8},
            {x: 9},
            {x: 10}
        ];
        expect(ExStat.median(data, ['x'])).to.deep.equal({ x: 5.5 });
    });

    it('should calculate median with properties correctly', () => {
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
        expect(ExStat.median(data, ['x', 'y'])).to.deep.equal({
            x: 5.5,
            y: 15.5
        });
    });

    // 1. Quartile calculations

    it('should calculate the first quartile correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExStat.quartile1(data)).to.equal(3);
    });

    it('should calculate the first quartile with property correctly', () => {
        const data = [
            {x: 1},
            {x: 2},
            {x: 3},
            {x: 4},
            {x: 5},
            {x: 6},
            {x: 7},
            {x: 8},
            {x: 9},
            {x: 10}
        ];
        expect(ExStat.quartile1(data, ['x'])).to.deep.equal({ x: 3 });
    });

    it('should calculate the first quartile with properties correctly', () => {
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
        expect(ExStat.quartile1(data, ['x', 'y'])).to.deep.equal({
            x: 3,
            y: 13
        });
    });

    // 2. Quartile calculations

    it('should calculate the second quartile correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExStat.quartile2(data)).to.equal(5.5);
    });

    it('should calculate the second quartile with property correctly', () => {
        const data = [
            {x: 1},
            {x: 2},
            {x: 3},
            {x: 4},
            {x: 5},
            {x: 6},
            {x: 7},
            {x: 8},
            {x: 9},
            {x: 10}
        ];
        expect(ExStat.quartile2(data, ['x'])).to.deep.equal({ x: 5.5 });
    });

    it('should calculate the second quartile with properties correctly', () => {
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
        expect(ExStat.quartile2(data, ['x', 'y'])).to.deep.equal({
            x: 5.5,
            y: 15.5
        });
    });

    // 3. Quartile calculations

    it('should calculate the third quartile correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExStat.quartile3(data)).to.equal(8);
    });

    it('should calculate the third quartile with property correctly', () => {
        const data = [
            {x: 1},
            {x: 2},
            {x: 3},
            {x: 4},
            {x: 5},
            {x: 6},
            {x: 7},
            {x: 8},
            {x: 9},
            {x: 10}
        ];
        expect(ExStat.quartile3(data, ['x'])).to.deep.equal({ 'x': 8 });
    });

    it('should calculate the third quartile with properties correctly', () => {
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
        expect(ExStat.quartile3(data, ['x', 'y'])).to.deep.equal({
            x: 8,
            y: 18
        });
    });

    // Percentile calculations

    it('should calculate a percentile correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExStat.percentile(data, 60)).to.equal(6.5);
        expect(ExStat.percentile(data, 65)).to.equal(7);
    });

    it('should calculate a percentile without property correctly', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(ExStat['percentileWithoutProperty'](data, 60)).to.equal(6.5);
        expect(ExStat['percentileWithoutProperty'](data, 65)).to.equal(7);
    });

    it('should calculate a percentile with one property correctly', () => {
        const data = [
            {x: 1},
            {x: 2},
            {x: 3},
            {x: 4},
            {x: 5},
            {x: 6},
            {x: 7},
            {x: 8},
            {x: 9},
            {x: 10}
        ];
        expect(ExStat['percentileWithProperties'](data, ['x'], 60)).to.deep.equal({ x: 6.5 });
        expect(ExStat['percentileWithProperties'](data, ['x'], 65)).to.deep.equal({ x: 7 });
    });

    it('should calculate a percentile with properties correctly', () => {
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
        expect(ExStat['percentileWithProperties'](data, ['x', 'y'], 60)).to.deep.equal({
            x: 6.5,
            y: 16.5
        });
        expect(ExStat['percentileWithProperties'](data, ['x', 'y'], 65)).to.deep.equal({
            x: 7,
            y: 17
        });
    });

    it('should calculate percentile without property with an empty dataSet correctly', () => {
        const data = [];
        expect(ExStat['percentileWithoutProperty'](data, 60)).to.equal(0);
        expect(ExStat['percentileWithoutProperty'](data, 65)).to.equal(0);
    });

    it('should calculate percentile with one property with an empty dataSet correctly', () => {
        const data = [];
        expect(ExStat['percentileWithProperties'](data, ['x'], 60)).to.deep.equal({ x: 0 });
        expect(ExStat['percentileWithProperties'](data, ['x'], 65)).to.deep.equal({ x: 0 });
    });

    it('should calculate percentile with properties with an empty dataSet correctly', () => {
        const data = [];
        expect(ExStat['percentileWithProperties'](data, ['x', 'y'], 60)).to.deep.equal({
            x: 0,
            y: 0
        });
        expect(ExStat['percentileWithProperties'](data, ['x', 'y'], 65)).to.deep.equal({
            x: 0,
            y: 0
        });
    });
});

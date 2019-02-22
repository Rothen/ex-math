import { expect } from 'chai';
import { Point } from '../src';

describe('Point', () => {
    let point: Point = {
        x: 0,
        y: 0
    };

    beforeEach(() => {
    });

    it('should be created', () => {
        expect(point).to.be.ok;
    });
});

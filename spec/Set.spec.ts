import { expect } from 'chai';
import { Set } from '../src';

describe('Set', () => {
    let set = new Set();

    beforeEach(() => {
    });

    it('should be created', () => {
        expect(set).to.be.ok;
    });
});

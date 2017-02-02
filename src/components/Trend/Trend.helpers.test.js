import expect from 'expect';

import { getBoundaries, normalizeDataset, buildPath } from './Trend.helpers';

describe('Trend Helpers', () => {
  describe('getBoundaries', () => {
    it('returns the same min and max for a single value', () => {
      const data = [4];

      expect(getBoundaries(data)).toEqual({ min: 4, max: 4 });
    });

    it('handles simple arrays', () => {
      const data = [10, 3, 7];

      expect(getBoundaries(data)).toEqual({ min: 3, max: 10 });
    });

    it('handles negative numbers', () => {
      const data = [-23, 5, 400];

      expect(getBoundaries(data)).toEqual({ min: -23, max: 400 });
    });
  });

  describe('normalizeDataset', () => {
    it('handles two data points', () => {
      const data = [5, 10];
      const minX = 0;
      const maxX = 100;
      const minY = 0;
      const maxY = 10;

      const expectedResult = [
        { x: 0, y: 0 },
        { x: 100, y: 10 },
      ];
      const actualResult = normalizeDataset(data, { minX, maxX, minY, maxY });

      expect(actualResult).toEqual(expectedResult);
    });

    it('handles five data points', () => {
      const data = [5, 2, 0, 9, 10];
      const minX = 0;
      const maxX = 100;
      const minY = 0;
      const maxY = 10;

      const expectedResult = [
        { x: 0, y: 5 },
        { x: 25, y: 2 },
        { x: 50, y: 0 },
        { x: 75, y: 9 },
        { x: 100, y: 10 },
      ];
      const actualResult = normalizeDataset(data, { minX, maxX, minY, maxY });

      expect(actualResult).toEqual(expectedResult);
    });

    it('handles negative and fractional numbers', () => {
      const data = [-10, 5.5, 10, 0, -5];
      const minX = 0;
      const maxX = 100;
      const minY = 0;
      const maxY = 10;

      const expectedResult = [
        { x: 0, y: 0 },
        { x: 25, y: 7.75 },
        { x: 50, y: 10 },
        { x: 75, y: 5 },
        { x: 100, y: 2.5 },
      ];
      const actualResult = normalizeDataset(data, { minX, maxX, minY, maxY });

      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('buildPath', () => {
    it('builds a simple 2-point path', () => {
      const data = [
        { x: 0, y: 0 },
        { x: 10, y: 20 },
      ];

      const expectedResult = `M 0,0\nL 10,20\n`;
      const actualResult = buildPath(data);

      expect(actualResult).toEqual(expectedResult);
    });

    it('builds a 5-point path', () => {
      const data = [
        { x: 0, y: 0 },
        { x: 10, y: 20 },
        { x: 20, y: 40 },
        { x: 10, y: 20 },
        { x: 0, y: 0 },
      ];

      const expectedResult = `M 0,0\nL 10,20\nL 20,40\nL 10,20\nL 0,0\n`;
      const actualResult = buildPath(data);

      expect(actualResult).toEqual(expectedResult);
    });

    it('overrides default instruction', () => {
      const data = [
        { x: 0, y: 0 },
        { x: 10, y: 20 },
        { x: 20, y: 40 },
        { x: 10, y: 20 },
        { x: 0, y: 0 },
      ];
      const instruction = 'C';

      const expectedResult = `M 0,0\nC 10,20 20,40\nC 10,20 0,0\n`;
      const actualResult = buildPath(data, instruction);

      expect(actualResult).toEqual(expectedResult);
    });
  });
});

import expect from 'expect';

import { normalizeDataset } from '../Trend.helpers';

describe('Trend Helpers', () => {
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

    it('handles same-value data', () => {
      const data = [5, 5, 5, 5, 5];
      const minX = 0;
      const maxX = 100;
      const minY = 0;
      const maxY = 10;

      const expectedResult = [
        { x: 0, y: 0.0001 },
        { x: 25, y: 0 },
        { x: 50, y: 0 },
        { x: 75, y: 0 },
        { x: 100, y: 0 },
      ];
      const actualResult = normalizeDataset(data, { minX, maxX, minY, maxY });

      expect(actualResult).toEqual(expectedResult);
    });
  });
});

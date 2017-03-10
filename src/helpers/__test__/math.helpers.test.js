import expect from 'expect';

import { getDistanceBetween, normalize } from '../math.helpers';

describe('Math Helpers', () => {
  describe('getDistanceBetween', () => {
    it('returns the correct distance', () => {
      const p1 = { x: 0, y: 0 };
      const p2 = { x: 4, y: 3 };

      expect(getDistanceBetween(p1, p2)).toEqual(5);
    });
  });

  describe('normalize', () => {
    it('normalizes a value within a range', () => {
      const value = 5;
      const min = 0;
      const max = 10;

      expect(normalize({ value, min, max })).toEqual(0.5);
    });

    it('normalizes a value at the bottom of the range', () => {
      const value = 0;
      const min = 0;
      const max = 10;

      expect(normalize({ value, min, max })).toEqual(0);
    });

    it('normalizes a value at the top of the range', () => {
      const value = 10;
      const min = 0;
      const max = 10;

      expect(normalize({ value, min, max })).toEqual(1);
    });

    it('normalizes a value with a custom scale', () => {
      const value = 5;
      const min = 0;
      const max = 10;
      const scaleMin = 10;
      const scaleMax = 20;

      expect(
        normalize({ value, min, max, scaleMin, scaleMax })
      ).toEqual(15);
    });

    it('normalizes a value outside the range', () => {
      const value = -5;
      const min = 0;
      const max = 10;

      expect(normalize({ value, min, max })).toEqual(-0.5);
    });

    it('normalizes a value when min and max are equal', () => {
      const value = 5;
      const min = 5;
      const max = min;

      expect(normalize({ value, min, max })).toEqual(0);
    });
  });
});

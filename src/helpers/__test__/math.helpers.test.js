import expect from 'expect';

import { getDistanceBetween } from '../math.helpers';

describe('Math Helpers', () => {
  describe('getDistanceBetween', () => {
    it('returns the correct distance', () => {
      const p1 = { x: 0, y: 0 };
      const p2 = { x: 4, y: 3 };

      expect(getDistanceBetween(p1, p2)).toEqual(5);
    });
  });
});

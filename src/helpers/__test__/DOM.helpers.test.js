import expect from 'expect';

import { buildLinearPath, buildRoundedPath } from '../DOM.helpers';

describe('DOM Helpers', () => {
  describe('buildLinearPath', () => {
    it('builds a simple path', () => {
      const data = [
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 2 },
      ];

      const actualResult = buildLinearPath(data);
      const expectedResult = `M 0,0\nL 1,5\nL 2,2\n`;

      expect(actualResult).toEqual(expectedResult);
    });
  });
});

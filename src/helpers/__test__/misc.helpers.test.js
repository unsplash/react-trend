import expect from 'expect';

import { generateId } from '../misc.helpers';

describe('Misc Helpers', () => {
  describe('generateId', () => {
    it('generates a large number', () => {
      const id = generateId();

      expect(typeof id).toEqual('number');
      expect(id).toBeGreaterThan(1000000000000);
    });
  });
});

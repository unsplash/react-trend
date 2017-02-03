import expect from 'expect';

import { buildLinearPath, buildSmoothPath, injectStyleTag } from '../DOM.helpers';

describe('DOM Helpers', () => {
  describe('buildLinearPath', () => {
    it('builds a linear path', () => {
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

  describe('buildSmoothPath', () => {
    it('builds a smooth path, radius of 1', () => {
      const data = [
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 2 },
      ];

      const actualResult = buildSmoothPath(data, { radius: 1 });
      const expectedResult = [
        'M 0,0',
        // Admittedly these are magic numbers.
        // They should only ever change if we've broken something though.
        'L 0.803883864861816,4.01941932430908',
        'S 1,5 1.316227766016838,4.051316701949486',
        'L 2,2',
      ].join('\n');

      expect(actualResult).toEqual(expectedResult);
    });

    it('builds a smooth path, radius of 5', () => {
      const data = [
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 2 },
      ];

      const actualResult = buildSmoothPath(data, { radius: 5 });
      const expectedResult = [
        'M 0,0',
        'L 0.6899131635269788,3.449565817634894',
        'S 1,5 1.5,3.5',
        'L 2,2',
      ].join('\n');

      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('injectStyleTag', () => {
    before(() => {
      const parent = document.querySelector('head');
      const styleTag = document.querySelector('style');

      if (styleTag) {
        parent.removeChild(styleTag);
      }
    });

    context('when no style tag currently exists', () => {
      it('creates and injects a brand new style tag', () => {
        expect(document.querySelector('style')).toEqual(null);

        const css = 'h1 { font-size: 28px; }';
        injectStyleTag(css);

        const expectedResult = `<style type="text/css" data-react-trend="">${css}</style>`;
        const actualResult = document.querySelector('style').outerHTML;

        expect(actualResult).toEqual(expectedResult);
      });
    });

    context('when a style tag already exists', () => {
      it('updates the rendered CSS', () => {
        const css = 'h2 { font-size: 24px; }';
        injectStyleTag(css);

        const mergedCss = `h1 { font-size: 28px; }${css}`;

        const expectedResult = `<style type="text/css" data-react-trend="">${mergedCss}</style>`;
        const actualResult = document.querySelector('style').outerHTML;

        expect(actualResult).toEqual(expectedResult);
      });
    });
  });
});

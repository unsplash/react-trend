export const getBoundaries = data => (
  data.reduce((result, point) => {
    if (point < result.min) {
      // eslint-disable-next-line no-param-reassign
      result.min = point;
    }

    if (point > result.max) {
      // eslint-disable-next-line no-param-reassign
      result.max = point;
    }

    return result;
  }, { min: Infinity, max: -Infinity })
);

export const normalize = ({ point, min, max, scaleMin, scaleMax }) => (
  scaleMin + (point - min) * (scaleMax - scaleMin) / (max - min)
);

export const normalizeDataset = (data, { minX, maxX, minY, maxY }) => {
  // For the X axis, we want to normalize it based on its index in the array.
  // For the Y axis, we want to normalize it based on the element's value.
  //
  // X axis is easy: just evenly-space each item in the array.
  // For the Y axis, we first need to find the min and max of our array,
  // and then normalize those values between 0 and 1.
  const boundariesY = getBoundaries(data);
  const boundariesX = { min: 0, max: data.length - 1 };

  return data.map((point, index) => ({
    x: normalize({
      point: index,
      min: boundariesX.min,
      max: boundariesX.max,
      scaleMin: minX,
      scaleMax: maxX,
    }),
    y: normalize({
      point,
      min: boundariesY.min,
      max: boundariesY.max,
      scaleMin: minY,
      scaleMax: maxY,
    }),
  }));
};

export const buildPath = (data, defaultInstruction = 'L') => (
  data.reduce((path, { x, y }, index) => {
    // The very first instruction needs to be a "move".
    // The rest will be some kind of line/curve to.
    const isFirstInstruction = index === 0;
    const instruction = isFirstInstruction ? 'M' : defaultInstruction;

    return `${path}${instruction} ${x},${y}\n`;
  }, '')
);

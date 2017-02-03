import {
  getDistanceBetween,
  checkForCollinearPoints,
} from '../../helpers/math.helpers';

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

export const normalize = ({ point, min, max, scaleMin = 0, scaleMax = 1 }) => (
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

const moveTo = (to, from, radius) => {
  const vector = { x: to.x - from.x, y: to.y - from.y };
  const length = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
  const unitVector = { x: vector.x / length, y: vector.y / length };

  return {
    x: from.x + unitVector.x * radius,
    y: from.y + unitVector.y * radius,
  };
};

export const buildLinearPath = data => (
  data.reduce((path, { x, y }, index) => {
    // The very first instruction needs to be a "move".
    // The rest will be a "line".
    const isFirstInstruction = index === 0;
    const instruction = isFirstInstruction ? 'M' : 'L';

    return `${path}${instruction} ${x},${y}\n`;
  }, '')
);

export const buildRoundedPath = (data, { radius }) => {
  const [firstPoint, ...otherPoints] = data;

  return otherPoints.reduce((path, point, index) => {
    const next = otherPoints[index + 1];
    const prev = otherPoints[index - 1] || firstPoint;

    const isCollinear = checkForCollinearPoints(prev, point, next);

    if (!next || isCollinear) {
      // The very last line in the sequence can just be a regular line.
      return `${path}\nL ${point.x},${point.y}`;
    }

    const distanceFromPrev = getDistanceBetween(prev, point);
    const distanceFromNext = getDistanceBetween(next, point);
    const threshold = Math.min(distanceFromPrev, distanceFromNext);

    const isTooCloseForRadius = (threshold / 2 < radius);

    if (isTooCloseForRadius) {
      // eslint-disable-next-line no-param-reassign
      radius = threshold / 2;
    }

    const before = moveTo(prev, point, radius);
    const after = moveTo(next, point, radius);

    return [
      path,
      `L ${before.x},${before.y}`,
      `S ${point.x},${point.y} ${after.x},${after.y}`,
    ].join('\n');
  }, `M ${firstPoint.x},${firstPoint.y}`);
};

export const buildPath = (data, { instruction = 'linear', ...metadata } = {}) => {
  switch (instruction) {
    case 'linear': return buildLinearPath(data, metadata);
    case 'rounded': return buildRoundedPath(data, metadata);
    default:
      throw new Error(`Unrecognized instruction ${instruction}.`);
  }
};

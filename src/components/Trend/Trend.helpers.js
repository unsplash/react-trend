import { normalize } from '../../helpers/math.helpers';

export const normalizeDataset = (data, { minX, maxX, minY, maxY }) => {
  // For the X axis, we want to normalize it based on its index in the array.
  // For the Y axis, we want to normalize it based on the element's value.
  //
  // X axis is easy: just evenly-space each item in the array.
  // For the Y axis, we first need to find the min and max of our array,
  // and then normalize those values between 0 and 1.
  const boundariesY = { min: Math.min(...data), max: Math.max(...data) };
  const boundariesX = { min: 0, max: data.length - 1 };

  return data.map((point, index) => ({
    x: normalize({
      value: index,
      min: boundariesX.min,
      max: boundariesX.max,
      scaleMin: minX,
      scaleMax: maxX,
    }),
    y: normalize({
      value: point,
      min: boundariesY.min,
      max: boundariesY.max,
      scaleMin: minY,
      scaleMax: maxY,
    }),
  }));
};

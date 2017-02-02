/* eslint-disable no-restricted-properties */
export const getDistanceBetween = (p1, p2) => (
  Math.sqrt(
    Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
  )
);

export const checkForCollinearPoints = (p1, p2, p3 = {}) => (
  (p1.y - p2.y) * (p1.x - p3.x) ===
  (p1.y - p3.y) * (p1.x - p2.x)
);

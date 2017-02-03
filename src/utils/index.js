export const range = to => [...Array(to).keys()];

export const pick = (obj, keys) => (
  keys.reduce((acc, key) => ({
    ...acc,
    [key]: obj[key],
  }), {})
);

export const omit = (obj, keys) => (
  Object.keys(obj).reduce((acc, key) => {
    if (keys.indexOf(key) !== -1) {
      return acc;
    }

    return {
      ...acc,
      [key]: obj[key],
    };
  }, {})
);

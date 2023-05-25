// eslint-disable-next-line import/prefer-default-export
export const filterByKey = (data, key) => {
  const counterMap = {};

  data.forEach((obj) => {
    const value = obj[key];
    if (value in counterMap) {
      counterMap[value] += 1;
    } else {
      counterMap[value] = 1;
    }
  });

  return Object.keys(counterMap).map((value) => ({
    [key]: value,
    counter: counterMap[value],
  }));
};

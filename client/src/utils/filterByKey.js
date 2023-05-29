export const filterByKey = (data, key, filterData) => {
  const counterMap = {};

  filterData.forEach((obj) => {
    data.forEach((item) => {
      if (obj.type in item && item[key] === obj.name) {
        const value = obj.name;
        if (value in counterMap) {
          counterMap[value] += 1;
        } else {
          counterMap[value] = 1;
        }
      }
    });
  });

  return Object.keys(counterMap).map((value) => ({
    [key]: value,
    counter: counterMap[value],
  }));
};

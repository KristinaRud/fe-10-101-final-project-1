export const checkRow = (item, title, data) => {
  if (item[title] || item.characteristics[title]) {
    if (title in data[0].characteristics) {
      return item.characteristics[title];
    }
    if (Array.isArray(item[title])) {
      return item[title].join("/ ");
    }
    return item[title];
  }
  return "---";
};

export const checkRowDifference = (array) => {
  if (array.length === 0) {
    return false;
  }

  const firstElement = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== firstElement) {
      return false;
    }
  }

  return true;
};

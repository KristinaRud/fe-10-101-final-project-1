export const toCamelCase = (str) => {
  const words = str.split(/[\s-_]+/);
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const camelCaseStr = camelCaseWords.join("");
  return camelCaseStr;
};

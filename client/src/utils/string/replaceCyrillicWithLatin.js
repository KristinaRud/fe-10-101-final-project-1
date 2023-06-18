export const replaceCyrillicWithLatin = (str) => {
  const replacedStr = str.replace(/[їі]/gi, (match) => {
    if (match === "ї") {
      return "i";
    }
    if (match === "і") {
      return "i";
    }
    return match;
  });

  return replacedStr;
};

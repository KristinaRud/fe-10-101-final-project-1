export const rgbParser = (rgbString) => {
  const cleanedString = rgbString.replace(/[^\d,]/g, "");
  const values = cleanedString.split(",");
  const rgbObject = {
    r: parseInt(values[0], 10),
    g: parseInt(values[1], 10),
    b: parseInt(values[2], 10),
  };

  return rgbObject;
};

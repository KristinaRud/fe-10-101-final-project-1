const characteristics = {
  typeOfWorkingSurface: "Graphics tablet",
  size: "200 х 160 х 8.8 mm",
  weight: "230 g",
  activeArea: "152 х 95 mm",
  resolution: "2540 lpi",
  numberOfButtons: "4",
  readingSpeed: "133 pps",
  connectionInterface: "micro USB",
  numberOfButtonsOnThePen: "1",
  material: "ABS plastic",
  typeOfPowerSupply: "accumulator",
  batteryCapacity: "1100 mAh",
  technology: "Electromagnetic resonance",
  powerConsumption: "0.35 W",
  more: "OS support: Windows 7, mac OS 10.1 2 and above",
};

const updateDescriptionProduct = (data) => {
  const values = Object.values(data);
  const listItems = values.map((value) => `<li>${value}</li>`).join("");
  return [...listItems];
};

console.log(updateDescriptionProduct(characteristics));
export default updateDescriptionProduct;

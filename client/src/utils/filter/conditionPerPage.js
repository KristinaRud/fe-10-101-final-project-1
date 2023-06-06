export const condition = (productsView, multiplier = 1) =>
  productsView === "list" ? 4 * multiplier : 8 * multiplier;

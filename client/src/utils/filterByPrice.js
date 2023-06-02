export const filterByPrice = (data) => {
  const minPrice = Math.min(...data.map((obj) => obj.currentPrice)) - 1000;
  const maxPrice = Math.max(...data.map((obj) => obj.currentPrice)) + 1000;
  const priceRange = (maxPrice - minPrice) / 5;
  const result = [];

  for (let i = 0; i < 5; i += 1) {
    const rangeMin = Math.round((minPrice + priceRange * i) / 1000) * 1000;
    const rangeMax =
      Math.round((minPrice + priceRange * (i + 1)) / 1000) * 1000;

    const filteredObjects = data.filter(
      (obj) => obj.currentPrice >= rangeMin && obj.currentPrice <= rangeMax,
    );
    const rangeObj = {
      range: `${rangeMin} - ${rangeMax}`,
      counter: filteredObjects.length,
    };
    result.push(rangeObj);
  }

  return result;
};

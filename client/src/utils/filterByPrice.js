export const filterByPrice = (data) => {
  const minPrice = Math.min(...data.map((obj) => obj.currentPrice));
  const maxPrice = Math.max(...data.map((obj) => obj.currentPrice));
  const priceRange = (maxPrice - minPrice) / 5;
  const result = [];

  for (let i = 0; i < 5; i += 1) {
    const rangeMin = Math.floor((minPrice + priceRange * i) / 500) * 500;
    const rangeMax = Math.ceil((minPrice + priceRange * (i + 1)) / 500) * 500;

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

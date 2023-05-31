export const setFilterQueryParams = (query, searchParams, navigate) => {
  query.forEach((filter) => {
    if (filter.name === "currentPrice") {
      const priceND = [];
      filter.value.forEach((price) => {
        priceND.push(...price.split(" - "));
      });
      const minPrice = Math.min(...priceND).toString();
      const maxPrice = Math.max(...priceND).toString();
      searchParams.set("minPrice", minPrice);
      searchParams.set("maxPrice", maxPrice);
    } else {
      const params = filter.value.join(",");
      searchParams.set(filter.name, params);
    }
  });
  navigate(`?${searchParams}`);
};

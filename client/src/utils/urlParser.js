export const urlParser = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const excludedParams = ["categories", "perPage", "startPage", "sort"];
  const filter = [];
  const price = [];

  searchParams.forEach((value, name) => {
    if (!excludedParams.includes(name)) {
      if (name === "minPrice" || name === "maxPrice") {
        price.push(value);
      } else {
        filter.push({ name, value: [value] });
      }
    }
  });

  if (searchParams.has("minPrice") && searchParams.has("maxPrice")) {
    filter.push({ name: "currentPrice", value: [`${price[0]} - ${price[1]}`] });
  }
  return filter;
};

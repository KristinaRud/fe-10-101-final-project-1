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
        const valueArr = value.split(",");
        filter.push({ name, value: valueArr });
      }
    }
  });

  if (searchParams.has("minPrice") && searchParams.has("maxPrice")) {
    filter.push({ name: "currentPrice", value: [`${price[0]} - ${price[1]}`] });
  }
  return filter;
};

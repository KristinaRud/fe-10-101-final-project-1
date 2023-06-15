export const urlParser = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const excludedParams = ["categories", "perPage", "startPage", "sort"];
  const filter = [];

  searchParams.forEach((value, name) => {
    if (!excludedParams.includes(name)) {
      const valueArr = value.split(",");
      filter.push({ name, value: valueArr });
    }
  });
  return filter;
};

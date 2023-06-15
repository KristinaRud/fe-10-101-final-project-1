export const setFilterQueryParams = (query, searchParams, navigate) => {
  query.forEach((filter) => {
    const params = filter.value.join(",");
    searchParams.set(filter.name, params);
  });
  navigate(`?${searchParams}`);
};

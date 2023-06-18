export const deleteAllQueryParams = (urlParams, navigate) => {
  const excludedParams = ["categories", "perPage", "startPage", "sort"];

  urlParams.forEach((value, name) => {
    if (!excludedParams.includes(name)) {
      urlParams.delete(name);
    }
  });

  navigate(`?${urlParams}`);
};

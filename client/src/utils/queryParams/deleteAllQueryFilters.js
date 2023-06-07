import { deleteAllFilters } from "../../store/slices/filters.slice";

export const deleteAllQueryFilters = (
  query,
  searchParamsCategory,
  navigate,
  dispatch,
) => {
  query.forEach((filter) => {
    if (filter.name === "currentPrice") {
      searchParamsCategory.delete("minPrice");
      searchParamsCategory.delete("maxPrice");
    }
    searchParamsCategory.delete(filter.name);
    const updatedSearch = searchParamsCategory.toString();
    navigate(`?${updatedSearch}`);
  });
  dispatch(deleteAllFilters());
};

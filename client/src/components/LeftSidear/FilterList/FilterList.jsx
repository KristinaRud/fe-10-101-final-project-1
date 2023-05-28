import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FilterButton from "./FilterButton/FilterButton";
import FilterByKey from "./FilterItem/FilterByKey";
import FilterByColor from "./FilterItem/FilterByColor";
import ListWrapper from "../ListWrapper/ListWrapper";
import { selectFilters } from "../../../store/slices/filters.slice";
import { fetchProducts } from "../../../store/actionCreator/products.actionCreator";
import { deleteAllQueryFilters } from "../../../utils/deleteAllQueryFilters";
import { setFilterQueryParams } from "../../../utils/setFilterQueryParams";
import s from "./FilterList.module.scss";

const FilterList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const query = filter.filters;
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handleClearFilter = () => {
    deleteAllQueryFilters(query, searchParams, navigate, dispatch);
  };

  const handleSendFilter = () => {
    setFilterQueryParams(query, searchParams, navigate);
  };

  useEffect(() => {
    dispatch(fetchProducts(location.search));
  }, [dispatch, location.search]);

  return (
    <ListWrapper title="Filters">
      <FilterButton onClick={handleClearFilter}>Clear Filter</FilterButton>
      <FilterByKey keyOption="brand" />
      <FilterByKey keyOption="currentPrice" />
      <FilterByColor />
      <FilterByKey keyOption="manufacturerCountry" />
      <Button variant="contained" className={s.btn} onClick={handleSendFilter}>
        Apply Filters{" "}
        {filter.filters.length > 0 && `(${filter.filters.length})`}
      </Button>
    </ListWrapper>
  );
};

export default FilterList;

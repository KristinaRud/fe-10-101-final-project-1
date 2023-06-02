import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import FilterButton from "./FilterButton/FilterButton";
import FilterByKey from "./FilterItem/FilterByKey";
import FilterByColor from "./FilterItem/FilterByColor";
import ListWrapper from "../ListWrapper/ListWrapper";
import { selectFilters } from "../../../store/slices/filters.slice";
import { fetchProducts } from "../../../store/actionCreator/products.actionCreator";
import { deleteAllQueryFilters } from "../../../utils/deleteAllQueryFilters";
import { setFilterQueryParams } from "../../../utils/setFilterQueryParams";
import { fetchFiltersData } from "../../../store/actionCreator/filters.actionCreator";
import s from "./FilterList.module.scss";

const FilterList = ({ className, closeModal }) => {
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
    closeModal();
    searchParams.set("startPage", "1");
    setFilterQueryParams(query, searchParams, navigate);
  };

  useEffect(() => {
    dispatch(fetchProducts(location.search));
  }, [dispatch, location.search]);

  useEffect(() => {
    dispatch(fetchFiltersData());
  }, [dispatch]);

  return (
    <ListWrapper title="Filters" className={className}>
      <FilterButton onClick={handleClearFilter}>Clear Filter</FilterButton>
      {filter.filtersData.length > 0 &&
        filter.filtersData.map((arr) => (
          <FilterByKey
            key={arr[0].type}
            keyOption={arr[0].type}
            filterData={arr}
          />
        ))}
      <FilterByKey keyOption="currentPrice" />
      <FilterByColor />
      <Button variant="contained" className={s.btn} onClick={handleSendFilter}>
        Apply Filters{" "}
        {filter.filters.length > 0 && `(${filter.filters.length})`}
      </Button>
    </ListWrapper>
  );
};

FilterList.propTypes = {
  className: PropTypes.string,
  closeModal: PropTypes.func,
};

FilterList.defaultProps = {
  className: "",
  closeModal: () => {},
};
export default FilterList;

import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import FilterButton from "./FilterButton/FilterButton";
import FilterByKey from "./FilterItem/FilterByKey";
import FilterByColor from "./FilterItem/FilterByColor";
import ListWrapper from "../ListWrapper/ListWrapper";
import { selectFilters } from "../../../store/selectors/filters.selector";
import { deleteAllQueryFilters } from "../../../utils/queryParams/deleteAllQueryFilters";
import { setFilterQueryParams } from "../../../utils/queryParams/setFilterQueryParams";
import s from "./FilterList.module.scss";
import {
  deleteAllFilters,
  setCategory,
} from "../../../store/slices/filters.slice";
import FilterByPrice from "./FilterItem/FilterByPrice";
import { deleteAllQueryParams } from "../../../utils/queryParams/deleteAllQueryParams";

const FilterList = ({ className, closeModal }) => {
  const dispatch = useDispatch();
  const { filters, category, filtersData } = useSelector(selectFilters);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categories = searchParams.get("categories");

  const renderFilters = (arr) => {
    if (arr[0].type === "price") {
      return (
        <FilterByPrice
          key={arr[0]._id}
          maxPriceData={arr[0].maxPrice}
          minPriceData={arr[0].minPrice}
        />
      );
    }
    return <FilterByKey key={arr[0]._id} filterData={arr} />;
  };

  const handleClearFilter = () => {
    deleteAllQueryFilters(filters, searchParams, navigate, dispatch);
    dispatch(deleteAllFilters());
  };

  const handleSendFilter = () => {
    closeModal();
    searchParams.set("startPage", "1");
    deleteAllQueryParams(searchParams, navigate);
    setFilterQueryParams(filters, searchParams, navigate);
  };

  useEffect(() => {
    if (categories !== category) {
      dispatch(setCategory(categories));
      dispatch(deleteAllFilters());
    }
  }, [dispatch, categories, category]);

  return (
    <ListWrapper title="Filters" className={className}>
      <FilterButton onClick={handleClearFilter}>Clear Filters</FilterButton>
      {filtersData.length > 0 && filtersData.map((arr) => renderFilters(arr))}
      <FilterByColor />
      <Button variant="contained" className={s.btn} onClick={handleSendFilter}>
        Apply Filters {filters.length > 0 && `(${filters.length})`}
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

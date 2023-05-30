/* eslint-disable react-hooks/exhaustive-deps */
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { filterByKey } from "../../../../utils/filterByKey";
import { formatString } from "../../../../utils/formatString";
import { filterByPrice } from "../../../../utils/filterByPrice";
import {
  selectFilters,
  setCategory,
  setFilters,
} from "../../../../store/slices/filters.slice";
import { deleteAllQueryFilters } from "../../../../utils/deleteAllQueryFilters";
import { fetchProductsByCategory } from "../../../../store/actionCreator/filters.actionCreator";
import s from "./FilterItem.module.scss";

const FilterByKey = ({ keyOption, filterData }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categories = searchParams.get("categories");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filters = useSelector(selectFilters);
  const query = filters.filters;

  const handleAddFilers = (event) => {
    dispatch(setFilters({ name: keyOption, value: [event.target.innerText] }));
  };

  const renderOptions = () => {
    let filterArr;
    if (keyOption === "currentPrice") {
      filterArr = filterByPrice(filters.productsOfCategory.products);
    } else {
      filterArr = filterByKey(
        filters.productsOfCategory.products,
        keyOption,
        filterData,
      );
    }
    return filterArr.map((obj) => (
      <div key={obj.range || obj[keyOption]} className={s.filter_item}>
        <Typography
          variant="h6"
          component="span"
          fontSize={13}
          onClick={handleAddFilers}
        >
          {obj.range || obj[keyOption]}
        </Typography>
        <Typography variant="h6" component="span" fontSize={13}>
          {obj.counter}
        </Typography>
      </div>
    ));
  };

  useEffect(() => {
    if (categories !== filters.category) {
      deleteAllQueryFilters(query, searchParams, navigate, dispatch);
    }
    dispatch(setCategory(categories));
    dispatch(fetchProductsByCategory(categories));
  }, [dispatch, categories]);

  return (
    <Accordion className={s.wrapper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" component="h5" fontWeight={600} fontSize={14}>
          {keyOption === "currentPrice" ? "Price" : formatString(keyOption)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={s.content}>
        {Object.keys(filters.productsOfCategory).length > 0 ? (
          renderOptions()
        ) : (
          <CircularProgress />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

FilterByKey.propTypes = {
  keyOption: PropTypes.string.isRequired,
  filterData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      _id: PropTypes.string,
    }),
  ),
};

export default FilterByKey;

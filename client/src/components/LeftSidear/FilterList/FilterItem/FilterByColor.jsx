/* eslint-disable react-hooks/exhaustive-deps */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  selectFilters,
  setCategory,
  setFilters,
} from "../../../../store/slices/filters.slice";
import { deleteAllQueryFilters } from "../../../../utils/deleteAllQueryFilters";
import { fetchProductsByCategory } from "../../../../store/actionCreator/filters.actionCreator";
import { selectColors } from "../../../../store/slices/colors.slice";
import { fetchColors } from "../../../../store/actionCreator/colors.actionCreator";
import s from "./FilterItem.module.scss";

const FilterByColor = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categories = searchParams.get("categories");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filters = useSelector(selectFilters);
  const query = filters.filters;
  const colorOptions = useSelector(selectColors);

  const renderOptions = () => {
    const neededColors = [];
    colorOptions.forEach((color) => {
      filters.productsOfCategory.products.forEach((item) => {
        if (item.color === color.name) {
          neededColors.push(color);
        }
      });
    });

    const colors = [...new Set(neededColors)];
    return colors.map((obj) => (
      <span className={s.roundWrapper} key={obj.name}>
        <Typography
          sx={{ backgroundColor: obj.cssValue }}
          variant="h6"
          component="span"
          className={s.round}
          onClick={() =>
            dispatch(setFilters({ name: "color", value: [obj.name] }))
          }
        />
      </span>
    ));
  };

  useEffect(() => {
    if (categories !== filters.category) {
      deleteAllQueryFilters(query, searchParams, navigate, dispatch);
    }
    dispatch(setCategory(categories));
    dispatch(fetchProductsByCategory(categories));
  }, [dispatch, categories]);

  useEffect(() => {
    dispatch(fetchColors());
  }, []);

  return (
    <Accordion className={s.wrapper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" component="h5" fontWeight={600} fontSize={14}>
          Color
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={s.colors}>
        {Object.keys(filters.productsOfCategory).length > 0 &&
        colorOptions.length > 0 ? (
          renderOptions()
        ) : (
          <CircularProgress />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterByColor;

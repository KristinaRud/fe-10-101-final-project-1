import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import s from "./FilterItem.module.scss";
import { setFilters } from "../../../../store/slices/filters.slice";
import { selectFilters } from "../../../../store/selectors/filters.selector";

const FilterByPrice = ({ maxPriceData, minPriceData }) => {
  const [value, setValue] = useState([minPriceData, maxPriceData]);
  const { filters } = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    const minPrice = { name: "minPrice", value: [newValue[0]] };
    const maxPrice = { name: "maxPrice", value: [newValue[1]] };
    dispatch(setFilters(minPrice));
    dispatch(setFilters(maxPrice));
    setValue(newValue);
  };

  const handleInputChangeMinPrice = (event) => {
    const minPrice = { name: "minPrice", value: [Number(event.target.value)] };
    dispatch(setFilters(minPrice));
    setValue((prevState) => [Number(event.target.value), prevState[1]]);
  };

  const handleInputChangeMaxPrice = (event) => {
    const maxPrice = { name: "maxPrice", value: [Number(event.target.value)] };
    dispatch(setFilters(maxPrice));
    setValue((prevState) => [prevState[0], Number(event.target.value)]);
  };

  const handleBlurMinPrice = (event) => {
    let minPrice = { name: "minPrice", value: [Number(event.target.value)] };
    setValue((prevState) => {
      if (event.target.value === "") {
        minPrice = { name: "minPrice", value: [minPriceData] };
        return [minPriceData, prevState[1]];
      }
      if (event.target.value < minPriceData) {
        minPrice = { name: "minPrice", value: [minPriceData] };
        return [minPriceData, prevState[1]];
      }
      if (event.target.value > prevState[1]) {
        minPrice = { name: "minPrice", value: [prevState[1]] };
        return [prevState[1], prevState[1]];
      }
      dispatch(setFilters(minPrice));
      return [Number(event.target.value), prevState[1]];
    });
  };

  const handleBlurMaxPrice = (event) => {
    let maxPrice = { name: "maxPrice", value: [Number(event.target.value)] };
    setValue((prevState) => {
      if (event.target.value === "") {
        maxPrice = { name: "maxPrice", value: [maxPriceData] };
        return [prevState[0], maxPriceData];
      }
      if (event.target.value > maxPriceData) {
        maxPrice = { name: "maxPrice", value: [maxPriceData] };
        return [prevState[0], maxPriceData];
      }
      if (event.target.value < prevState[0]) {
        maxPrice = { name: "maxPrice", value: [prevState[0]] };
        return [prevState[0], prevState[0]];
      }
      dispatch(setFilters(maxPrice));
      return [prevState[0], Number(event.target.value)];
    });
  };

  useEffect(() => {
    if (filters.length === 0) {
      setValue([minPriceData, maxPriceData]);
    } else {
      let isExistMinPrice = false;
      let isExistMaxPrice = false;
      filters.forEach((filter) => {
        if (filter.name === "minPrice") {
          isExistMinPrice = true;
          setValue((prevState) => [filter.value[0], prevState[1]]);
        }
        if (filter.name === "maxPrice") {
          isExistMaxPrice = true;
          setValue((prevState) => [prevState[0], filter.value[0]]);
        }
      });
      if (!isExistMinPrice) {
        setValue((prevState) => [minPriceData, prevState[1]]);
      }
      if (!isExistMaxPrice) {
        setValue((prevState) => [prevState[0], maxPriceData]);
      }
    }
  }, [filters, minPriceData, maxPriceData]);

  return (
    <Accordion className={s.wrapper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-content"
        id="filter-header"
      >
        <Typography variant="h6" component="h5" fontWeight={600} fontSize={14}>
          Price
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={s.content}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" fontSize="12px" mr={1}>
            From:{" "}
          </Typography>
          <Input
            value={value[0]}
            size="small"
            onChange={handleInputChangeMinPrice}
            onBlur={handleBlurMinPrice}
            sx={{ fontSize: "12px" }}
            inputProps={{
              step: 10,
              min: minPriceData,
              max: maxPriceData,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
          <Typography variant="body2" fontSize="12px" mr={1}>
            To:{" "}
          </Typography>
          <Input
            value={value[1]}
            size="small"
            onChange={handleInputChangeMaxPrice}
            onBlur={handleBlurMaxPrice}
            sx={{ fontSize: "12px" }}
            inputProps={{
              step: 10,
              min: minPriceData,
              max: maxPriceData,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Box>
        <Slider
          getAriaLabel={() => "Price range"}
          valueLabelDisplay="auto"
          value={value}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          sx={{ color: "#0156FF" }}
          min={minPriceData}
          max={maxPriceData}
        />
      </AccordionDetails>
    </Accordion>
  );
};

FilterByPrice.propTypes = {
  maxPriceData: PropTypes.number.isRequired,
  minPriceData: PropTypes.number.isRequired,
};

export default FilterByPrice;

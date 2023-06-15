import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import { useEffect, useState } from "react";
import s from "../FilterItem.module.scss";
import {
  deleteFilter,
  setFilters,
} from "../../../../../store/slices/filters.slice";
import { selectFilters } from "../../../../../store/selectors/filters.selector";

const ColorItem = ({ name, cssValue }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { filters } = useSelector(selectFilters);

  const handleClickColor = () => {
    setChecked(!checked);
    const filterData = { name: "color", value: [name] };
    if (checked === false) {
      dispatch(setFilters(filterData));
    } else {
      dispatch(deleteFilter(filterData));
    }
  };

  useEffect(() => {
    if (filters.length === 0) {
      setChecked(false);
    } else {
      filters.forEach((filter) => {
        const condition =
          filter.name === "color" && filter.value.includes(name);
        setChecked(condition);
      });
    }
  }, [filters, name, cssValue]);

  return (
    <span
      className={cn(s.roundWrapper, checked && s.active)}
      onClick={handleClickColor}
    >
      <Typography
        sx={{ backgroundColor: cssValue }}
        variant="h6"
        component="span"
        className={s.round}
      />
    </span>
  );
};

ColorItem.propTypes = {
  name: PropTypes.string.isRequired,
  cssValue: PropTypes.string.isRequired,
};
export default ColorItem;

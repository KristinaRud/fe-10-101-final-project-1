import { Checkbox, FormControlLabel } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../FilterItem.module.scss";
import {
  deleteFilter,
  setFilters,
} from "../../../../../store/slices/filters.slice";
import { selectFilters } from "../../../../../store/selectors/filters.selector";

const FilterCheckbox = ({ name, count, type }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { filters } = useSelector(selectFilters);

  const handleChange = (event) => {
    const filterData = { name: type, value: [name] };
    if (event.target.checked) {
      dispatch(setFilters(filterData));
    } else {
      dispatch(deleteFilter(filterData));
    }
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (filters.length === 0) {
      setChecked(false);
    } else {
      let isExist = false;
      filters.forEach((filter) => {
        if (filter.name === type && filter.value.includes(name)) {
          isExist = true;
        }
      });
      setChecked(isExist);
    }
  }, [filters, name, type]);

  return (
    <FormControlLabel
      className={s.filter_item}
      onChange={handleChange}
      label={`${name} (${count})`}
      control={
        <Checkbox
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<LibraryAddCheckIcon />}
          checked={checked}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
    />
  );
};

FilterCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default FilterCheckbox;

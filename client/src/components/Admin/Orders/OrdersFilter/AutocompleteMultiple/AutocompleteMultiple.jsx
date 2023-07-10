import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AutocompleteMultiple = ({ options, label, optionLabel, keySearch }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOptionChange = (event, value) => {
    setSelectedOptions(value);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.delete(`products.product.${keySearch}`);
    const selectedOptionsValues = selectedOptions.map(
      (option) => option[optionLabel],
    );
    if (selectedOptionsValues.length > 0) {
      params.set(
        `products.product.${keySearch}`,
        selectedOptionsValues.join(","),
      );
    }
    navigate(`?${params.toString()}`);
  }, [selectedOptions, navigate, location.search, optionLabel, keySearch]);

  useEffect(() => {});
  return (
    <Autocomplete
      multiple
      id="standard"
      options={options}
      sx={{ width: "100%" }}
      getOptionLabel={(option) => option[optionLabel]}
      value={selectedOptions}
      onChange={handleOptionChange}
      renderInput={(params) => (
        <TextField {...params} variant="standard" label={label} />
      )}
    />
  );
};

AutocompleteMultiple.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  optionLabel: PropTypes.string.isRequired,
  keySearch: PropTypes.string.isRequired,
};

export default AutocompleteMultiple;

import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { formatString } from "../../../../../utils/string/formatString";

const CharacteristicsItem = ({
  label,
  products,
  category,
  setCharacteristics,
  value = "",
}) => {
  const [, setValue] = useState(null);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const uniqueValues = (arr, key) => {
    const productsCategory = products.filter(
      (item) => item.categories === category,
    );
    if (productsCategory[0].characteristics[key]) {
      return [
        ...new Set(productsCategory.map((item) => item.characteristics[key])),
      ];
    }
    return [];
  };

  useEffect(() => {
    setCharacteristics((prev) => ({ ...prev, [label]: inputValue }));
  }, [inputValue, label, setCharacteristics]);
  return (
    <Autocomplete
      sx={{ width: "250px" }}
      value={inputValue}
      freeSolo
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={uniqueValues(products, label)}
      renderInput={(params) => (
        <TextField {...params} label={formatString(label)} variant="standard" />
      )}
    />
  );
};
CharacteristicsItem.propTypes = {
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  setCharacteristics: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default CharacteristicsItem;

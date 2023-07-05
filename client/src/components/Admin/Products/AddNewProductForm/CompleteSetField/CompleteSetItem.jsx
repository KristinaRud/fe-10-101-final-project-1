import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Autocomplete, TextField } from "@mui/material";

const CompleteSetItem = ({
  index,
  item,
  products,
  category,
  setCompleteSet,
}) => {
  const [, setValue] = useState(null);
  const [inputValue, setInputValue] = useState(item || "");

  const getCategoryUniqueValues = (objects, category) => {
    const filteredObjects = objects.filter(
      (obj) => obj.categories === category,
    );
    const uniqueValues = [
      ...new Set(filteredObjects.flatMap((obj) => obj.completeSet)),
    ];
    return uniqueValues;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    setCompleteSet((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          return inputValue;
        }
        return item;
      });
    });
  }, [inputValue, setCompleteSet, index]);

  return (
    <Autocomplete
      value={inputValue}
      freeSolo
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={getCategoryUniqueValues(products, category)}
      renderInput={(params) => (
        <TextField {...params} label="Complete set" variant="standard" />
      )}
    />
  );
};

CompleteSetItem.propTypes = {
  index: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  setCompleteSet: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
};

export default CompleteSetItem;

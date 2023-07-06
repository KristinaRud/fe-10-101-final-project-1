import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useField } from "formik";

const AutocompleteField = ({ name, label, options, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (event, value) => {
    helpers.setValue(value);
  };

  const handleBlur = () => {
    helpers.setTouched(true);
  };

  return (
    <Autocomplete
      {...field}
      options={options}
      onChange={handleChange}
      onInputChange={handleChange}
      onBlur={handleBlur}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant={"standard"}
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
      {...rest}
    />
  );
};

AutocompleteField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
};
export default AutocompleteField;

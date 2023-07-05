import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import {
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@mui/material";

const SelectField = ({ name, label, options, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          fullWidth
          error={!!(form.touched[name] && form.errors[name])}
        >
          <FormLabel>{label}</FormLabel>
          <Select
            {...field}
            {...rest}
            value={field.value || ""}
            onChange={(event) => form.setFieldValue(name, event.target.value)}
            onBlur={field.onBlur}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.value || option.name}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            <ErrorMessage name={name} />
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};
SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
};
export default SelectField;

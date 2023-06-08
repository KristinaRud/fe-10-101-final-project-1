import { Field, useField } from "formik";
import TextField from "@mui/material/TextField";
import { Box, FormLabel } from "@mui/material";

const BirthdateField = () => {
  const [field] = useField("birthdate");

  const handleDayChange = (event) => {
    const { value } = event.target;
    const date = field.value ? new Date(field.value) : new Date();
    date.setDate(parseInt(value, 10));
    field.onChange({ target: { value: date, name: "birthdate" } });
  };

  const handleMonthChange = (event) => {
    const { value } = event.target;
    const date = field.value ? new Date(field.value) : new Date();
    date.setMonth(parseInt(value, 10) - 1);
    field.onChange({ target: { value: date, name: "birthdate" } });
  };

  const handleYearChange = (event) => {
    const { value } = event.target;
    const date = field.value ? new Date(field.value) : new Date();
    date.setFullYear(parseInt(value, 10));
    field.onChange({ target: { value: date, name: "birthdate" } });
  };

  return (
    <Box>
      <FormLabel component="legend">Birthday: </FormLabel>
      <Box display="flex" gap={3}>
        <Field name="day">
          {() => (
            <TextField
              type="number"
              label="Day"
              variant="standard"
              onChange={handleDayChange}
              value={field.value ? field.value.getDate() : ""}
            />
          )}
        </Field>
        <Field name="month">
          {() => (
            <TextField
              type="number"
              label="Month"
              variant="standard"
              onChange={handleMonthChange}
              value={field.value ? field.value.getMonth() + 1 : ""}
            />
          )}
        </Field>
        <Field name="year">
          {() => (
            <TextField
              type="number"
              label="Year"
              variant="standard"
              onChange={handleYearChange}
              value={field.value ? field.value.getFullYear() : ""}
            />
          )}
        </Field>
      </Box>
    </Box>
  );
};

export default BirthdateField;

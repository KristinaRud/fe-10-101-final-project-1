import { Field, useField } from "formik";
import TextField from "@mui/material/TextField";
import { Box, FormLabel } from "@mui/material";
import { useState } from "react";

const BirthdateField = () => {
  const [field] = useField("birthdate");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDayChange = (event) => {
    let { value } = event.target;
    value = Math.min(Math.max(parseInt(value, 10), 1), 31);
    if (!value) {
      value = 1;
    }
    const date = `${value}/${month}/${year}`;
    field.onChange({ target: { value: date, name: "birthdate" } });
    setDay(value);
  };

  const handleMonthChange = (event) => {
    let { value } = event.target;
    if (!value) {
      value = 1;
    }
    value = Math.min(Math.max(parseInt(value, 10), 1), 12);
    const date = `${day}/${value}/${year}`;
    field.onChange({ target: { value: date, name: "birthdate" } });
    setMonth(value);
  };

  const handleYearChange = (event) => {
    let { value } = event.target;
    if (!value) {
      value = 1900;
    }
    const date = `${day}/${month}/${value}`;
    field.onChange({ target: { value: date, name: "birthdate" } });
    setYear(value);
  };

  const handeYearBlur = (event) => {
    if (
      event.target.value > new Date().getFullYear() ||
      event.target.value < 1900
    ) {
      const date = `${day}/${month}/${new Date().getFullYear()}`;
      field.onChange({ target: { value: date, name: "birthdate" } });
      setYear(new Date().getFullYear().toString());
    }
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
              value={day}
              inputProps={{
                min: "1",
                max: "31",
              }}
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
              value={month}
              inputProps={{
                min: "1",
                max: "12",
              }}
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
              onBlur={handeYearBlur}
              value={year}
              inputProps={{
                min: "1900",
                max: new Date().getFullYear().toString(),
              }}
            />
          )}
        </Field>
      </Box>
    </Box>
  );
};

export default BirthdateField;

import { Field, Form, Formik } from "formik";
import { TextField, Autocomplete, RadioGroup } from "formik-mui";
import {
  FormControlLabel,
  Radio,
  Typography,
  FormLabel,
  Button,
} from "@mui/material";
import Text from "@mui/material/TextField";
import cn from "classnames";
import s from "./CheckoutForm.module.scss";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};

const allRegions = [
  {
    name: "Kyiv region",
  },
  {
    name: "Kharkiv region",
  },
  {
    name: "Dnipro region",
  },
];
const allCities = [
  { name: "Kyiv" },
  { name: "Kharkiv" },
  { name: "Dnipro" },
  { name: "Odesa" },
];

const allPostOfficeBranch = [{ numberPostOffice: 1 }, { numberPostOffice: 2 }];

const CheckoutForm = () => {
  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        region: null,
        city: null,
        postOffice: "",
        postOfficeBranch: null,
        deliveryDetails: "",
      }}
      validate={validate}
      onSubmit={async (values) => handleSubmit(values)}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={s.form}>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email Address *"
              className={s.input}
            />
            <Typography component="span" className={s.hint}>
              You can create an account after checkout.
            </Typography>
            <Field
              component={TextField}
              name="firstName"
              type="text"
              label="First Name *"
              className={s.input}
            />
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last Name *"
              className={s.input}
            />
            <Field
              component={TextField}
              name="phoneNumber"
              type="text"
              label="Phone Number *"
              className={s.input}
            />
            <Field
              name="region"
              className={s.input}
              component={Autocomplete}
              options={allRegions}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) =>
                option.name === value?.name
              }
              renderInput={(params) => (
                <Text
                  {...params}
                  label="Choose region *"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
            <Field
              name="city"
              className={s.input}
              component={Autocomplete}
              options={allCities}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) =>
                option.name === value?.name
              }
              renderInput={(params) => (
                <Text
                  {...params}
                  label="Choose city *"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
            <Field component={RadioGroup} name="postOffice" className={s.input}>
              <FormLabel component="legend">Post Office *</FormLabel>
              <FormControlLabel
                value="novaPoshta"
                control={<Radio disabled={isSubmitting} />}
                label="Nova Poshta"
                disabled={isSubmitting}
              />
              <FormControlLabel
                value="mistExpress"
                control={<Radio disabled={isSubmitting} />}
                label="Mist Express"
                disabled={isSubmitting}
              />
            </Field>
            <Field
              name="postOfficeBranch"
              className={s.input}
              component={Autocomplete}
              options={allPostOfficeBranch}
              getOptionLabel={(option) => option.numberPostOffice}
              isOptionEqualToValue={(option, value) =>
                option.numberPostOffice === value?.numberPostOffice
              }
              renderInput={(params) => (
                <Text
                  {...params}
                  label="Choose post office branch *"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </div>
          <Field
            component={RadioGroup}
            name="deliveryDetails"
            className={cn(s["delivery-details"], s.input)}
          >
            <FormLabel component="legend">Standard Rate</FormLabel>
            <FormControlLabel
              value="standard"
              control={<Radio disabled={isSubmitting} />}
              label="Price may vary depending on the item/destination. Shop Staff will contact you. $21.00"
              disabled={isSubmitting}
            />
            <FormLabel component="legend" className={s.input}>
              Pickup from store
            </FormLabel>
            <FormControlLabel
              value="pickup"
              control={<Radio disabled={isSubmitting} />}
              label="1234 Street Adress City Address, 1234"
              disabled={isSubmitting}
            />
          </Field>
          <Button variant="contained" type="submit" className={s.btn}>
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;

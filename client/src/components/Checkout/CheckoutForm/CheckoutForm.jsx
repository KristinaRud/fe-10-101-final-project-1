import { Field, Form, Formik } from "formik";
import { TextField, RadioGroup } from "formik-mui";
import {
  FormControlLabel,
  Radio,
  Typography,
  FormLabel,
  Button,
} from "@mui/material";
import cn from "classnames";
import { validationSchema } from "./utils";
import StatesInput from "./StatesInput/StatesInput";
import DistrictsInput from "./DistrictsInput/DistrictsInput";
import CityInput from "./CityInput/CityInput";
import s from "./CheckoutForm.module.scss";
import PostOfficeRadio from "../PostOfficeRadio/PostOfficeRadio";
import PostOfficeBranchInput from "./PostOfficeBranchInput/PostOfficeBranchInput";
import PostOfficeDetails from "./PostOfficeDetails/PostOfficeDetails";

const CheckoutForm = () => {
  const handleSubmit = async () => {};

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        state: null,
        district: null,
        city: null,
        postOffice: "",
        postOfficeBranch: null,
        deliveryDetails: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => handleSubmit(values)}
    >
      {({ isSubmitting, setFieldValue }) => (
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
            <StatesInput setFieldValue={setFieldValue} />
            <DistrictsInput setFieldValue={setFieldValue} />
            <CityInput setFieldValue={setFieldValue} />
            <PostOfficeRadio
              setFieldValue={setFieldValue}
              isSubmitting={isSubmitting}
            />
            <PostOfficeBranchInput setFieldValue={setFieldValue} />
            <PostOfficeDetails />
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

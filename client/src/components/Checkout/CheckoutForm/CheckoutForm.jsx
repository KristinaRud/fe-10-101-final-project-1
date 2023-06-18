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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { validationSchema } from "./utils";
import StatesInput from "./StatesInput/StatesInput";
import DistrictsInput from "./DistrictsInput/DistrictsInput";
import CityInput from "./CityInput/CityInput";
import s from "./CheckoutForm.module.scss";
import PostOfficeRadio from "../PostOfficeRadio/PostOfficeRadio";
import PostOfficeBranchInput from "./PostOfficeBranchInput/PostOfficeBranchInput";
import PostOfficeDetails from "./PostOfficeDetails/PostOfficeDetails";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import { getProductsFromCart } from "../../../store/actionCreator/orders.actionCreator";
import { selectOrdersProducts } from "../../../store/selectors/orders.selector";

const CheckoutForm = () => {
  const { isLogin } = useSelector(selectCustomers);
  const products = useSelector(selectOrdersProducts);
  const dispatch = useDispatch();

  const handleSubmit = async () => {};
  console.log(products);
  useEffect(() => {
    if (!isLogin) {
      dispatch(getProductsFromCart());
    }
  }, [isLogin, dispatch]);
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        paymentMethod: "",
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
            <Field
              component={RadioGroup}
              name="paymentMethod"
              className={s.input}
            >
              <FormLabel component="legend">Payment Method *</FormLabel>
              <FormControlLabel
                value="non-cash"
                control={<Radio disabled={isSubmitting} />}
                label="Non-cash payment"
                disabled={isSubmitting}
              />
              <FormControlLabel
                value="imposed payment"
                control={<Radio disabled={isSubmitting} />}
                label="Imposed payment"
                disabled={isSubmitting}
              />
            </Field>
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
            <FormLabel component="legend">Standard Delivery</FormLabel>
            <FormControlLabel
              value="Standard Delivery"
              control={<Radio disabled={isSubmitting} />}
              label="Delivery - 5-7 business days"
              disabled={isSubmitting}
            />
            <FormLabel component="legend" className={s.input}>
              Urgent Delivery
            </FormLabel>
            <FormControlLabel
              value="Urgent Delivery"
              control={<Radio disabled={isSubmitting} />}
              label="Delivery - 2-3 business days"
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

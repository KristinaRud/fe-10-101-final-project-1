import { ErrorMessage, Field, Form, Formik } from "formik";
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./utils";
import StatesInput from "./StatesInput/StatesInput";
import DistrictsInput from "./DistrictsInput/DistrictsInput";
import CityInput from "./CityInput/CityInput";
import s from "./CheckoutForm.module.scss";
import PostOfficeRadio from "../PostOfficeRadio/PostOfficeRadio";
import PostOfficeBranchInput from "./PostOfficeBranchInput/PostOfficeBranchInput";
import PostOfficeDetails from "./PostOfficeDetails/PostOfficeDetails";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import {
  createOrder,
  getProductsFromCart,
} from "../../../store/actionCreator/orders.actionCreator";
import { selectOrders } from "../../../store/selectors/orders.selector";
import TelephoneField from "../../RegistrationForm/TelephoneField/TelephoneField";
import LoginSnackbar from "../../LoginForm/LoginSnackbar";
import { clearOrders } from "../../../store/slices/orders.slice";
import {
  deleteShoppingCart,
  fetchShoppingCart,
} from "../../../store/actionCreator/shoppingCart.actionCreator";
import { selectShoppingCart } from "../../../store/selectors/shoppingCart.selector";
import { createOrderLetter } from "../../../utils/email/createOrderLetter";
import { deleteCart } from "../../../store/slices/shoppingCart.slice";

const CheckoutForm = () => {
  const { isLogin, data } = useSelector(selectCustomers);
  const { products, orders, error } = useSelector(selectOrders);
  const [letterHtml, setLetterHtml] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [textError, setTextError] = useState("Checkout failed!");
  const [submit, setSubmit] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  const { itemsCart } = useSelector(selectShoppingCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (values) => {
    if (!isLogin) {
      const orderData = {
        ...values,
        products,
        letterSubject: "Thank you for order! You are welcome!",
        letterHtml,
      };
      dispatch(createOrder(orderData));
      setSubmit(true);
    } else {
      const orderData = {
        ...values,
        letterSubject: "Thank you for order! You are welcome!",
        letterHtml,
        customerId: data._id,
      };
      dispatch(createOrder(orderData));
      setSubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(orders).length && submit) {
      setOpen(true);
      setStatus("success");
      setSubmit(false);
      dispatch(clearOrders());
      if (!isLogin) {
        dispatch(deleteCart());
      } else {
        dispatch(deleteShoppingCart());
      }
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    if (error && submit) {
      setTextError(JSON.stringify(error));
      setOpen(true);
      setStatus("error");
      setSubmit(false);
      dispatch(clearOrders());
    }
  }, [orders, error, navigate, submit, dispatch, isLogin]);

  useEffect(() => {
    if (!isLogin) {
      dispatch(getProductsFromCart());
    } else {
      dispatch(fetchShoppingCart());
    }
  }, [isLogin, dispatch]);

  useEffect(() => {
    if (products?.length) {
      setLetterHtml(createOrderLetter(products));
    }
    if (itemsCart?.length) {
      setLetterHtml(createOrderLetter(itemsCart));
    }
  }, [itemsCart, products]);

  useEffect(() => {
    if (isLogin && itemsCart.length === 0) {
      setDisableBtn(true);
    } else if (!isLogin && products.length === 0) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [products, itemsCart, isLogin]);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          mobile: "",
          paymentMethod: "",
          state: null,
          district: null,
          city: null,
          postOffice: "",
          postOfficeBranch: null,
          deliveryDetails: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
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
              {!isLogin && (
                <Typography component="span" className={s.hint}>
                  You can create an account after checkout.
                </Typography>
              )}
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
              <TelephoneField variant="outlined" className={s.input} />
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
              <ErrorMessage
                name="paymentMethod"
                component="div"
                className={s.error}
              />
              <StatesInput setFieldValue={setFieldValue} />
              <ErrorMessage name="state" component="div" className={s.error} />
              <DistrictsInput setFieldValue={setFieldValue} />
              <ErrorMessage
                name="district"
                component="div"
                className={s.error}
              />
              <CityInput setFieldValue={setFieldValue} />
              <ErrorMessage name="city" component="div" className={s.error} />
              <PostOfficeRadio
                setFieldValue={setFieldValue}
                isSubmitting={isSubmitting}
              />
              <ErrorMessage
                name="postOffice"
                component="div"
                className={s.error}
              />
              <PostOfficeBranchInput setFieldValue={setFieldValue} />
              <ErrorMessage
                name="postOfficeBranch"
                component="div"
                className={s.error}
              />
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
            <ErrorMessage
              name="deliveryDetails"
              component="div"
              className={s.error}
            />
            <Button
              variant="contained"
              type="submit"
              className={s.btn}
              disabled={disableBtn}
            >
              Order Confirmation
            </Button>
          </Form>
        )}
      </Formik>
      <LoginSnackbar
        textSuccess="Order is placed"
        textError={textError}
        handleClose={handleClose}
        open={open}
        status={status}
      />
    </>
  );
};

export default CheckoutForm;

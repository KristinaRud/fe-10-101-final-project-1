import { RadioGroup } from "formik-mui";
import { FormControlLabel, FormLabel, Radio } from "@mui/material";
import { Field } from "formik";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import s from "../CheckoutForm/CheckoutForm.module.scss";
import {
  setChosenPostOffice,
  setPostOffice,
} from "../../../store/slices/postOffice.slice";

const PostOfficeRadio = ({ isSubmitting, setFieldValue }) => {
  const dispatch = useDispatch();
  const handeChangePostOffice = (e) => {
    dispatch(setPostOffice(e.target.value));
    dispatch(setChosenPostOffice(null));
    setFieldValue("postOffice", e.target.value, false);
    setFieldValue("postOfficeBranch", null, false);
  };
  return (
    <Field component={RadioGroup} name="postOffice" className={s.input}>
      <FormLabel component="legend">Post Office *</FormLabel>
      <FormControlLabel
        value="novaPoshta"
        control={<Radio disabled={isSubmitting} />}
        label="Nova Poshta"
        disabled={isSubmitting}
        onChange={handeChangePostOffice}
      />
      <FormControlLabel
        value="meestExpress"
        control={<Radio disabled={isSubmitting} />}
        label="Meest Express"
        disabled={isSubmitting}
        onChange={handeChangePostOffice}
      />
    </Field>
  );
};

PostOfficeRadio.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default PostOfficeRadio;

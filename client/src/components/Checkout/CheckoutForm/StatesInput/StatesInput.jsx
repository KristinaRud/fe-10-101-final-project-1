import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Autocomplete } from "formik-mui";
import Text from "@mui/material/TextField";
import { Field } from "formik";
import PropTypes from "prop-types";
import {
  selectStates,
  setChosenState,
} from "../../../../store/slices/city.slice";
import { fetchAllStates } from "../../../../store/actionCreator/city.actionCreator";
import s from "../CheckoutForm.module.scss";

const StatesInput = ({ setFieldValue }) => {
  const dispatch = useDispatch();
  const states = useSelector(selectStates);
  const handleChange = (event) => {
    if (states.length > 0) {
      states.forEach((state) => {
        if (state.name.en === event.target.textContent) {
          dispatch(setChosenState(state.id));
          setFieldValue("state", state);
          setFieldValue("city", null);
          setFieldValue("district", null);
          setFieldValue("postOfficeBranch", null);
        }
      });
    }
  };

  useEffect(() => {
    dispatch(fetchAllStates());
  }, [dispatch]);

  return (
    <Field
      name="state"
      className={s.input}
      component={Autocomplete}
      options={states}
      onChange={handleChange}
      getOptionLabel={(option) => option.name.en}
      isOptionEqualToValue={(option, value) =>
        option.name.en === value?.name.en
      }
      renderInput={(params) => (
        <Text
          {...params}
          label="Choose state *"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

StatesInput.propTypes = {
  setFieldValue: PropTypes.func,
};

export default StatesInput;

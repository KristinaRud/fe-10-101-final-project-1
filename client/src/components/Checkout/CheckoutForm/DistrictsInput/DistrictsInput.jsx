import { useDispatch, useSelector } from "react-redux";
import { Field } from "formik";
import { Autocomplete } from "formik-mui";
import Text from "@mui/material/TextField";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { fetchAllDistrictsInState } from "../../../../store/actionCreator/city.actionCreator";
import {
  selectChosenState,
  selectDistricts,
  setChosenDistrict,
} from "../../../../store/slices/city.slice";
import s from "../CheckoutForm.module.scss";

const DistrictsInput = ({ setFieldValue }) => {
  const dispatch = useDispatch();
  const state = useSelector(selectChosenState);
  const districts = useSelector(selectDistricts);

  useEffect(() => {
    if (state) dispatch(fetchAllDistrictsInState(state));
  }, [dispatch, state]);

  const handleChange = (event) => {
    districts.forEach((district) => {
      if (district.name.en === event.target.textContent) {
        dispatch(setChosenDistrict(district.id));
        setFieldValue("district", district);
        setFieldValue("city", null);
        setFieldValue("postOfficeBranch", null);
      }
    });
  };

  return (
    <Field
      name="district"
      className={s.input}
      component={Autocomplete}
      options={districts}
      onChange={handleChange}
      getOptionLabel={(option) => option.name.en}
      isOptionEqualToValue={(option, value) =>
        option.name.en === value?.name.en
      }
      renderInput={(params) => (
        <Text
          {...params}
          label="Choose district *"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

DistrictsInput.propTypes = {
  setFieldValue: PropTypes.func,
};

export default DistrictsInput;

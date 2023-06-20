import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Autocomplete } from "formik-mui";
import Text from "@mui/material/TextField";
import { Field } from "formik";
import PropTypes from "prop-types";
import s from "../CheckoutForm.module.scss";
import { setChosenCity } from "../../../../store/slices/city.slice";
import {
  selectChosenDistrict,
  selectCities,
} from "../../../../store/selectors/city.selector";
import { fetchAllCitiesInDistrict } from "../../../../store/actionCreator/city.actionCreator";
import { replaceCyrillicWithLatin } from "../../../../utils/string/replaceCyrillicWithLatin";

const CityInput = ({ setFieldValue }) => {
  const dispatch = useDispatch();
  const district = useSelector(selectChosenDistrict);
  const cities = useSelector(selectCities);

  const handleChange = (event) => {
    cities.forEach((city) => {
      if (
        replaceCyrillicWithLatin(city.public_name.en) ===
        event.target.textContent
      ) {
        dispatch(setChosenCity(city));
        setFieldValue("city", city);
        setFieldValue("postOfficeBranch", null);
      }
    });
  };
  useEffect(() => {
    if (district) dispatch(fetchAllCitiesInDistrict(district));
  }, [dispatch, district]);
  return (
    <Field
      name="city"
      className={s.input}
      component={Autocomplete}
      options={cities}
      onChange={handleChange}
      getOptionLabel={(option) =>
        replaceCyrillicWithLatin(option.public_name.en)
      }
      isOptionEqualToValue={(option, value) =>
        replaceCyrillicWithLatin(option.public_name.en) ===
        replaceCyrillicWithLatin(value.public_name.en)
      }
      renderInput={(params) => (
        <Text
          {...params}
          label="Choose city/urban/settlement/village *"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option.uuid}>
          {replaceCyrillicWithLatin(option.public_name.en)}
        </li>
      )}
    />
  );
};

CityInput.propTypes = {
  setFieldValue: PropTypes.func,
};
export default CityInput;

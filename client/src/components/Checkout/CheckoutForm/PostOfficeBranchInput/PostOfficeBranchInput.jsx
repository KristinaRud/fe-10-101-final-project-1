import { Autocomplete } from "formik-mui";
import Text from "@mui/material/TextField";
import { Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { setChosenPostOffice } from "../../../../store/slices/postOffice.slice";
import {
  selectPostOffice,
  selectPostOffices,
} from "../../../../store/selectors/postOffice.selector";
import s from "../CheckoutForm.module.scss";
import {
  fetchPostOfficesME,
  fetchPostOfficesNP,
} from "../../../../store/actionCreator/postOffice.actionCreator";
import { selectChosenCity } from "../../../../store/selectors/city.selector";

const PostOfficeBranchInput = ({ setFieldValue }) => {
  const dispatch = useDispatch();
  const city = useSelector(selectChosenCity);
  const postOffice = useSelector(selectPostOffice);
  const postOffices = useSelector(selectPostOffices);

  const handleChange = (event) => {
    if (postOffices.length > 0) {
      postOffices.forEach((branch) => {
        if (postOffice === "novaPoshta") {
          if (
            `${branch?.CategoryOfWarehouse} No.${branch?.Number}` ===
            event.target.textContent
          ) {
            dispatch(setChosenPostOffice(branch));
            setFieldValue("postOfficeBranch", branch);
          }
        } else if (postOffice === "meestExpress") {
          if (
            `${branch?.type_public?.en} No.${branch?.num_showcase}` ===
            event.target.textContent
          ) {
            dispatch(setChosenPostOffice(branch));
            setFieldValue("postOfficeBranch", branch);
          }
        }
      });
    }
  };

  useEffect(() => {
    if (postOffice === "novaPoshta" && city.name.uk) {
      dispatch(fetchPostOfficesNP(city.name.uk));
    }
    if (postOffice === "meestExpress" && city.name.uk) {
      dispatch(fetchPostOfficesME(city.name.uk));
    }
  }, [postOffice, city, dispatch]);

  return (
    <Field
      name="postOfficeBranch"
      className={s.input}
      component={Autocomplete}
      options={postOffices}
      onChange={handleChange}
      getOptionLabel={(option) =>
        postOffice === "novaPoshta" && postOffices.length > 0
          ? `${option?.CategoryOfWarehouse} No.${option?.Number}`
          : `${option?.type_public?.en} No.${option?.num_showcase}`
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
  );
};

PostOfficeBranchInput.propTypes = {
  setFieldValue: PropTypes.func,
};
export default PostOfficeBranchInput;

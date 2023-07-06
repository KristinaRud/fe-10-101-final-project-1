import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { toCamelCase } from "../../../../../utils/string/toCamelCase";

const AddNewKeyCharacteristic = ({
  open,
  setOpen,
  setCharacteristics,
  characteristics,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    setCharacteristics((prev) => ({
      ...prev,
      [toCamelCase(values.newCharacteristicsItem)]: "",
    }));
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add new name of characteristics:</DialogTitle>
      <Formik
        initialValues={{ newCharacteristicsItem: "" }}
        validationSchema={Yup.object().shape({
          newCharacteristicsItem: Yup.string()
            .required("Required")
            .test(
              "unique-name-characteristic",
              "Name characteristic should be unique.",
              function (value) {
                if (Object.keys(characteristics).length > 0) {
                  return !Object.keys(characteristics).some(
                    (item) => item === value,
                  );
                }
                return true;
              },
            ),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <DialogContent>
            <Field
              variant="standard"
              component={TextField}
              name={"newCharacteristicsItem"}
              type={"text"}
              label={"New name of characteristics"}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} type={"button"}>
              Cancel
            </Button>
            <Button type={"submit"}>Ok</Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};

AddNewKeyCharacteristic.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setCharacteristics: PropTypes.func.isRequired,
  characteristics: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default AddNewKeyCharacteristic;

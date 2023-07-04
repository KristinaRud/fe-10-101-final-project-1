import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";
import SelectField from "../../Products/AddNewProductForm/SelectField";
import ColorPickerApp from "./ColorPicker/ColorPickerApp";
import { selectProducts } from "../../../../store/selectors/products.selector";
import { selectFilters } from "../../../../store/selectors/filters.selector";
import LoginSnackbar from "../../../LoginForm/LoginSnackbar";
import {
  addColor,
  updateColor,
} from "../../../../store/actionCreator/colors.actionCreator";
import {
  addFilterData,
  updateFilterData,
} from "../../../../store/actionCreator/filters.actionCreator";
import EditOptions from "./EditOptions";

const breadcrumbs = (edit) => {
  const editBreadcrumbs = edit ? "Edit filter" : "Add new filter";
  return [
    {
      url: "/admin",
      label: "Dashboard",
    },
    {
      url: "/admin/filters",
      label: "Filters",
    },
    {
      url: "/admin/filters/new",
      label: editBreadcrumbs,
    },
  ];
};

const filterTypes = [
  { id: "categories", name: "Categories", value: "categories" },
  { id: "color", name: "Color", value: "color" },
  { id: "brand", name: "Brand", value: "brand" },
  { id: "manufacturer", name: "Manufacturer", value: "manufacturer" },
  {
    id: "manufacturerCountry",
    name: "Manufacturer country",
    value: "manufacturerCountry",
  },
];

const AddNewFiltersForm = () => {
  const params = useParams();
  const products = useSelector(selectProducts);
  const filters = useSelector(selectFilters);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const nameOptions = (type) => {
    if (products.products) {
      const options = products.products.map((product) => {
        return product[type];
      });
      const uniqueOptions = [...new Set(options)];
      if (!params?.filter) {
        filters.filtersData.forEach((filter) => {
          if (filter[0].type === type) {
            filter.forEach((obj) => {
              if (uniqueOptions.includes(obj.name)) {
                uniqueOptions.splice(uniqueOptions.indexOf(obj.name), 1);
              }
            });
          }
        });
      }

      return uniqueOptions.map((option) => {
        return { id: option, name: option };
      });
    }
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string().required("Type is required"),
    name: Yup.string().required("Name is required"),
    ccsValue: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (values.type === "color") {
      if (params?.filter) {
        dispatch(updateColor({ id: params?.filter, color: values }));
        setTimeout(() => {
          navigate("/admin/filters");
        }, 1000);
      } else {
        dispatch(addColor(values));
      }
    } else {
      const newFilter = {
        type: values.type,
        name: values.name,
      };
      if (params?.filter) {
        dispatch(updateFilterData({ id: params?.filter, filter: newFilter }));
        setTimeout(() => {
          navigate("/admin/filters");
        }, 1000);
      } else {
        dispatch(addFilterData(newFilter));
      }
    }
    resetForm();
    setOpenSnackbar(true);
  };

  return (
    <Container>
      <BreadcrumbsApp
        breadcrumbsCustomData={breadcrumbs(params?.filter)}
        sx={{ padding: "0px 20px 20px" }}
      />
      <Formik
        initialValues={{
          type: "",
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Box display={"flex"} gap={2} flexWrap={"wrap"}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <SelectField
                  name={"type"}
                  label={"Type of filter"}
                  options={filterTypes}
                  variant="standard"
                  disabled={!!params?.filter}
                />
                <EditOptions setFieldValue={setFieldValue} />
                {!!values.type && !!products.products && (
                  <>
                    {values.type === "color" ? (
                      <ColorPickerApp setFieldValue={setFieldValue} />
                    ) : (
                      <SelectField
                        name={"name"}
                        label={"Name of filter"}
                        options={nameOptions(values.type)}
                        variant="standard"
                      />
                    )}
                  </>
                )}
              </Box>
            </Box>
            <Box
              display={"flex"}
              gap={1}
              alignItems={"center"}
              flexWrap={"wrap"}
              mt={3}
            >
              <Button
                type={"submit"}
                variant={"outlined"}
                sx={{
                  border: "2px solid #0156FF",
                  borderRadius: "50px",
                  color: "#0156FF",
                  width: "fit-content",
                  "&:hover": {
                    border: "2px solid #0156FF",
                    backgroundColor: "#0156FF",
                    color: "white",
                  },
                }}
              >
                Save filter
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <LoginSnackbar
        open={openSnackbar}
        status={"success"}
        handleClose={handleClose}
        textSuccess={
          params?.filter
            ? "The filter was successfully updated."
            : "The filter was successfully added to the database."
        }
        textError={"The filter was not added to the database."}
      />
    </Container>
  );
};

export default AddNewFiltersForm;

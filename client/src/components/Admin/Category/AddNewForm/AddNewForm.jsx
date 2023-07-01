import { Field, Form, Formik } from "formik";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
} from "@mui/material";
import { TextField } from "formik-mui";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryImage from "./CategoryImage/CategoryImage";
import {
  addCategory,
  updateCategory,
} from "../../../../store/actionCreator/catalog.actionCreator";
import LoginSnackbar from "../../../LoginForm/LoginSnackbar";
import { clearCategory } from "../../../../store/slices/catalog.slice";
import { allCategoriesSelector } from "../../../../store/selectors/catalog.selector";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";

const breadcrumbs = (edit) => {
  const editBreadcrumbs = edit ? "Edit category" : "Add new category";
  return [
    {
      url: "/admin",
      label: "Dashboard",
    },
    {
      url: "/admin/categories",
      label: "Categories",
    },
    {
      url: "/admin/categories/new",
      label: editBreadcrumbs,
    },
  ];
};

const AddNewForm = () => {
  const params = useParams();
  const data = useSelector(allCategoriesSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarStatus, setSnackbarStatus] = useState("");
  const [imgUrl, setImgUrl] = useState(null);

  const { isLoading, error, isSuccessAddCategory } = useSelector(
    (state) => state.catalog,
  );
  const names = data?.map((item) => item.name);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name is too short - should be 2 chars minimum.")
      .max(50, "Name is too long - should be 50 chars maximum.")
      .test("unique-name", "Name must be unique", function (value) {
        if (!params?.category) {
          return !names.includes(value);
        }
        return true;
      }),
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleSubmit = async (values, { resetForm }) => {
    let newCategory;
    setSubmit(true);
    if (params?.category) {
      newCategory = {
        ...values,
        parentId: "null",
        id: params.category,
      };
      dispatch(updateCategory(newCategory));
      setTimeout(() => {
        navigate("/admin/categories");
      }, 1000);
    } else {
      newCategory = {
        ...values,
        parentId: "null",
        id: values.name.replace(/\s+/g, "-"),
      };
      dispatch(addCategory(newCategory));
    }
    resetForm();
    setImgUrl(null);
  };

  useEffect(() => {
    if (isLoading) {
      setOpenBackdrop(true);
    } else {
      setOpenBackdrop(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (submit) {
      if (isSuccessAddCategory) {
        setSnackbarStatus("success");
        setOpenSnackbar(true);
        setSubmit(false);
        dispatch(clearCategory());
      }
      if (error) {
        setSnackbarStatus("error");
        setSnackbarMessage(error);
        setOpenSnackbar(true);
        setSubmit(false);
        dispatch(clearCategory());
      }
    }
  }, [submit, isSuccessAddCategory, error, dispatch]);
  return (
    <Container>
      <BreadcrumbsApp
        breadcrumbsCustomData={breadcrumbs(params?.category)}
        sx={{ padding: "0px 20px 20px" }}
      />
      <Formik
        initialValues={{
          name: "",
          imgUrl: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
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
                <Field
                  variant="standard"
                  component={TextField}
                  name={"name"}
                  type="text"
                  label={"Name"}
                />
              </Box>
              <Box>
                <CategoryImage
                  setFieldValue={setFieldValue}
                  imgUrl={imgUrl}
                  setImgUrl={setImgUrl}
                />
              </Box>
            </Box>
            <Box
              display={"flex"}
              gap={1}
              alignItems={"center"}
              flexWrap={"wrap"}
              mt={2}
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
                Save Category
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <LoginSnackbar
        open={openSnackbar}
        status={snackbarStatus}
        handleClose={handleClose}
        textSuccess={
          params?.category
            ? "Category update successfully"
            : "Category added successfully"
        }
        textError={snackbarMessage}
      />
    </Container>
  );
};

export default AddNewForm;

import { Field, Form, Formik } from "formik";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { TextField } from "formik-mui";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";
import { basicInfo } from "./utils";
import { allCategoriesSelector } from "../../../../store/selectors/catalog.selector";
import SelectField from "./SelectField";
import { validationSchema } from "./validationSchema";
import AutocompleteField from "./AutocompleteField";
import ImageUrlsField from "./ImageUrlsField/ImageUrlsField";
import ProductSliderField from "./ProductSlider/ProductSliderField";
import IconAdd from "./IconAdd/IconAdd";
import CompleteSetField from "./CompleteSetField/CompleteSetField";
import CharacteristicsField from "./CharacteristicsField/CharacteristicsField";
import LoginSnackbar from "../../../LoginForm/LoginSnackbar";
import {
  addProduct,
  updateProduct,
} from "../../../../store/actionCreator/products.actionCreator";
import EditOptions from "./EditOptions";

const breadcrumbs = (edit) => {
  const editBreadcrumbs = edit ? "Edit product" : "Add new product";
  return [
    {
      url: "/admin",
      label: "Dashboard",
    },
    {
      url: "/admin/products?perPage=10&startPage=1&sort=-itemNo&enabled=true",
      label: "Products",
    },
    {
      url: "/admin/products/new",
      label: editBreadcrumbs,
    },
  ];
};

const AddNewProductForm = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);
  const [imageUrls, setImageUrls] = useState([{ url: "", imageNumber: 1 }]);
  const [description, setDescription] = useState([
    { title: "", image: "", slideNumber: 1 },
  ]);
  const [completeSet, setCompleteSet] = useState([""]);
  const [characteristics, setCharacteristics] = useState({});
  const allCategories = useSelector(allCategoriesSelector);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarStatus, setSnackbarStatus] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleSubmit = (values, { resetForm }) => {
    setSubmit(true);
    if (params?.product) {
      const id = products.products.find(
        (item) => item.itemNo === params?.product,
      )._id;
      dispatch(updateProduct({ id, data: values }));
      setTimeout(() => {
        navigate("/admin/products?perPage=10&startPage=1&sort=-itemNo");
      }, 1000);
    } else {
      dispatch(addProduct(values));
    }
    resetForm();
  };

  const renderMainInfo = (products, category) => {
    const productsCategory = products.products.filter(
      (item) => item.categories === category,
    );
    const uniqueValues = (arr, key) => {
      return [...new Set(arr.map((item) => item[key]))];
    };
    return basicInfo.map((item) => {
      if (item.autocomplete) {
        return (
          <AutocompleteField
            key={item.name}
            name={item.name}
            label={item.title}
            options={uniqueValues(productsCategory, item.name)}
            freeSolo
          />
        );
      }
      return (
        <Field
          key={item.name}
          variant="standard"
          component={TextField}
          name={item.name}
          type={item.type}
          label={item.title}
        />
      );
    });
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
      if (!isLoading && error) {
        setSnackbarStatus("error");
        setSnackbarMessage(error);
        setOpenSnackbar(true);
        setSubmit(false);
      }
      if (!isLoading && !error) {
        setSnackbarStatus("success");
        setOpenSnackbar(true);
        setSubmit(false);
      }
    }
  }, [submit, error, dispatch, isLoading]);
  return (
    <Container>
      <BreadcrumbsApp
        breadcrumbsCustomData={breadcrumbs(params?.product)}
        sx={{ padding: "0px 20px 20px" }}
      />
      <Formik
        initialValues={{
          name: "",
          currentPrice: "",
          previousPrice: "",
          itemNo: "",
          categories: "",
          quantity: "",
          color: null,
          brand: null,
          manufacturer: null,
          manufacturerCountry: null,
          rating: "",
          shortDescription: "",
          imageUrls: [],
          description: [],
          completeSet: [],
          characteristics: {},
        }}
        validationSchema={validationSchema(allCategories, products, params)}
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
                  name={"categories"}
                  label={"Category"}
                  options={allCategories}
                  variant="standard"
                />
                {Object.keys(products).length > 0 && params?.product && (
                  <EditOptions
                    setFieldValue={setFieldValue}
                    products={products.products}
                    values={values}
                    setImageUrls={setImageUrls}
                    setDescription={setDescription}
                    setCompleteSet={setCompleteSet}
                  />
                )}
                {!!values.categories && (
                  <>
                    {renderMainInfo(products, values.categories)}
                    <Box>
                      <Typography variant={"body2"}>
                        Products Image: *
                      </Typography>
                      <Box display={"flex"} alignItems={"center"} gap={2}>
                        {imageUrls.map((item) => (
                          <ImageUrlsField
                            key={item.imageNumber}
                            setFieldValue={setFieldValue}
                            imageUrls={imageUrls}
                            imageNumber={item.imageNumber}
                            setImageUrls={setImageUrls}
                          />
                        ))}
                        <IconAdd
                          onClick={() =>
                            setImageUrls([
                              ...imageUrls,
                              { url: "", imageNumber: imageUrls.length + 1 },
                            ])
                          }
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant={"body2"}>
                        Products Slider: *
                      </Typography>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={2}
                        flexDirection={"column"}
                      >
                        {description.map((item) => (
                          <ProductSliderField
                            key={item.slideNumber}
                            setFieldValue={setFieldValue}
                            description={description}
                            setDescription={setDescription}
                            productSlide={item}
                          />
                        ))}
                        <IconAdd
                          onClick={() =>
                            setDescription([
                              ...description,
                              {
                                title: "",
                                image: "",
                                slideNumber: description.length + 1,
                              },
                            ])
                          }
                        />
                      </Box>
                    </Box>
                    <CompleteSetField
                      setFieldValue={setFieldValue}
                      products={products.products}
                      category={values.categories}
                      completeSet={completeSet}
                      setCompleteSet={setCompleteSet}
                    />
                    <CharacteristicsField
                      products={products.products}
                      category={values.categories}
                      setFieldValue={setFieldValue}
                      characteristics={characteristics}
                      setCharacteristics={setCharacteristics}
                    />
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
                Save Product
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
          params?.product
            ? "The product was successfully updated."
            : "The product was successfully added to the database."
        }
        textError={snackbarMessage}
      />
    </Container>
  );
};

export default AddNewProductForm;

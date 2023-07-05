import { Field, Form, Formik } from "formik";
import { Box, Button, Container } from "@mui/material";
import { TextField } from "formik-mui";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useState } from "react";
import CategoryImage from "../../Category/AddNewForm/CategoryImage/CategoryImage";
import LoginSnackbar from "../../../LoginForm/LoginSnackbar";
import { selectNews } from "../../../../store/selectors/news.selector";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";
import {
  addNews,
  updateNews,
} from "../../../../store/actionCreator/news.actionCreator";

const breadcrumbs = (edit) => {
  const editBreadcrumbs = edit ? "Edit news" : "Add new news";
  return [
    {
      url: "/admin",
      label: "Dashboard",
    },
    {
      url: "/admin/news",
      label: "News",
    },
    {
      url: "/admin/news/new",
      label: editBreadcrumbs,
    },
  ];
};

const AddNewsForm = () => {
  const news = useSelector(selectNews);
  const params = useParams();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState(null);
  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const validationSchema = Yup.object().shape({
    customId: Yup.string()
      .required("Custom id is required")
      .min(2, "Name is too short - should be 2 chars minimum.")
      .max(50, "Name is too long - should be 50 chars maximum.")
      .test("unique-name", "Name must be unique", function (value) {
        if (!params?.news) {
          const customId = news?.map((item) => item.customId);
          return !customId?.includes(value);
        }
        return true;
      }),
    imgUrl: Yup.string().required("Image is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newNews = {
      imageUrl: values.imgUrl,
      customId: values.customId,
    };
    if (params?.news) {
      dispatch(updateNews({ id: values.customId, data: newNews }));
      setTimeout(() => {
        navigate("/admin/news");
      }, 1000);
    } else {
      dispatch(addNews(newNews));
    }
    setOpenSnackbar(true);
    resetForm();
    setImgUrl(null);
  };

  return (
    <Container>
      <BreadcrumbsApp
        breadcrumbsCustomData={breadcrumbs(params?.news)}
        sx={{ padding: "0px 20px 20px" }}
      />
      <Formik
        initialValues={{
          customId: "",
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
                  name={"customId"}
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
                Save news
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
          params?.news ? "News update successfully" : "News added successfully"
        }
        textError={"Something went wrong, please try again"}
      />
    </Container>
  );
};

export default AddNewsForm;

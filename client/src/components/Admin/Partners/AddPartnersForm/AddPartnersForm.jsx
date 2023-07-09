import { Field, Form, Formik } from "formik";
import { Box, Button, Container } from "@mui/material";
import { TextField } from "formik-mui";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useState } from "react";
import CategoryImage from "../../Category/AddNewForm/CategoryImage/CategoryImage";
import LoginSnackbar from "../../../LoginForm/LoginSnackbar";
import { selectPartners } from "../../../../store/selectors/partners.selector";
import BreadcrumbsApp from "../../../BreadcrumbsApp/BreadcrumbsApp";
import {
  addPartners,
  updatePartners,
} from "../../../../store/actionCreator/partners.actionCreator";

const breadcrumbs = (edit) => {
  const editBreadcrumbs = edit ? "Edit partners" : "Add new partner";
  return [
    {
      url: "/admin",
      label: "Dashboard",
    },
    {
      url: "/admin/partners",
      label: "Partners",
    },
    {
      url: "/admin/partners/new",
      label: editBreadcrumbs,
    },
  ];
};

const AddPartnersForm = () => {
  const partners = useSelector(selectPartners);
  const params = useParams();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState(null);
  const [url, setUrl] = useState("");
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
        if (!params?.partners) {
          const customId = partners?.map((item) => item.customId);
          return !customId?.includes(value);
        }
        return true;
      }),
    imgUrl: Yup.string().required("Image is required"),
    url: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!",
      )
      .required("Url is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newPartners = {
      imageUrl: values.imgUrl,
      customId: values.customId,
      url: values.url,
      name: values.customId,
    };
    if (params?.partners) {
      dispatch(updatePartners({ id: values.customId, data: newPartners }));
      setTimeout(() => {
        navigate("/admin/partners");
      }, 1000);
    } else {
      dispatch(addPartners(newPartners));
    }
    setOpenSnackbar(true);
    resetForm();
    setImgUrl(null);
    setUrl("");
  };

  return (
    <Container>
      <BreadcrumbsApp
        breadcrumbsCustomData={breadcrumbs(params?.partners)}
        sx={{ padding: "0px 20px 20px" }}
      />
      <Formik
        initialValues={{
          customId: params.partners || "",
          imgUrl: imgUrl || null,
          url: url || "",
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
                  name={"url"}
                  type="text"
                  label={"Url"}
                  url={url}
                />
              </Box>
              <Box sx={{ backgroundSize: "contain" }}>
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
                Save partner
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
          params?.partners
            ? "Partner update successfully"
            : "Partner added successfully"
        }
        textError={"Something went wrong, please try again"}
      />
    </Container>
  );
};

export default AddPartnersForm;

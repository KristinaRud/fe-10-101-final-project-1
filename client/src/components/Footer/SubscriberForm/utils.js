import * as Yup from "yup";
import { makeStyles } from "@mui/styles";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const useStyles = makeStyles((theme) => ({
  form: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  input: {
    width: "100%",
    border: "1px solid #FFFFFF",
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      borderRadius: "0",
    },
    "& input": {
      color: "#FFFFFF",
    },
  },
  submitButton: {
    width: "20%",
    height: "67%",
    position: "absolute",
    right: "0.8px",
    top: "1px",
    padding: theme.spacing(2),
    backgroundColor: "none",
    borderRadius: "0",

    color: "#fff",
    "&:hover": {
      backgroundColor: "#222",
    },
  },
}));

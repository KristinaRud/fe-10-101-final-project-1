import * as Yup from "yup";
import { makeStyles } from "@mui/styles";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    height: "100vh",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  button: {
    width: "200px",
    marginTop: theme.spacing(4),
  },
}));

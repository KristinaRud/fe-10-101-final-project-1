import { Alert, Snackbar } from "@mui/material";
import PropTypes from "prop-types";

const LoginSnackbar = ({
  open,
  handleClose,
  status,
  textSuccess,
  textError,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      {status === "success" ? (
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {textSuccess}
        </Alert>
      ) : (
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {textError}
        </Alert>
      )}
    </Snackbar>
  );
};

LoginSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  textSuccess: PropTypes.string.isRequired,
  textError: PropTypes.string.isRequired,
};

export default LoginSnackbar;

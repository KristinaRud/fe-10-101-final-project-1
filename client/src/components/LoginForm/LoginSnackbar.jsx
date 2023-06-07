import { Alert, Snackbar } from "@mui/material";
import PropTypes from "prop-types";

const LoginSnackbar = ({ open, handleClose, status }) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      {status === "success" ? (
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Login success!
        </Alert>
      ) : (
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Login failed!
        </Alert>
      )}
    </Snackbar>
  );
};

LoginSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default LoginSnackbar;

import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./AlertDialog.module.scss";

const AlertDialog = ({ open, handleClose, handleAction }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to log out?
        </DialogTitle>
        <DialogActions>
          <Button className={styles.modal__btn} onClick={handleClose} autoFocus>
            No
          </Button>
          <Button className={styles.modal__btn} onClick={handleAction}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
};
export default AlertDialog;

import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { loginGoogle } from "../../../store/actionCreator/customers.actionCreator";

const GoogleBtn = ({ setTextError, setOpen, setStatus }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      setOpen(true);
      setStatus("success");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (error) => {
      setTextError(error.error);
      setOpen(true);
      setStatus("error");
    },
  });
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      dispatch(loginGoogle({ token: user.access_token }));
    }
  }, [dispatch, user]);
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Google />}
      onClick={() => login()}
      sx={{
        backgroundColor: "#db4437",
        color: "#fff",
        borderRadius: "50px",
        margin: "10px 0",
        "&:hover": {
          backgroundColor: "#c5372c",
        },
      }}
    >
      Google
    </Button>
  );
};

GoogleBtn.propTypes = {
  setOpen: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  setTextError: PropTypes.func.isRequired,
};

export default GoogleBtn;

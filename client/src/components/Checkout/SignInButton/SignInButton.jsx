import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";
import s from "./SignInButton.module.scss";

const SignInButton = ({ className, to = "/login" }) => {
  return (
    <Link to={to}>
      <Button variant="outlined" className={cn(s.btn, className)}>
        Sign In
      </Button>
    </Link>
  );
};

SignInButton.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
};

export default SignInButton;

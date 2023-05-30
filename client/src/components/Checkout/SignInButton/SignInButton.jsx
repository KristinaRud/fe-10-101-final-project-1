import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import s from "./SignInButton.module.scss";

const SignInButton = () => {
  return (
    <Button variant="outlined" className={s.btn}>
      <Link to="/">Sign In</Link>
    </Button>
  );
};

export default SignInButton;

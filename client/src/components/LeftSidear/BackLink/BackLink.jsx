import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import s from "./BackLink.module.scss";

const BackLink = () => {
  const navigate = useNavigate();
  return (
    <Typography variant="h6" component="div" className={s.link}>
      <Link to={navigate(-1)}>‹ Back</Link>
    </Typography>
  );
};

export default BackLink;
